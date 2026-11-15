// Capture the actual editor UI. Provider model discovery uses an illustrative catalog;
// no real API keys, account sign-in, inference requests or drawing changes are made.
import fs from 'node:fs/promises';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {createRequire} from 'node:module';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createServer} from 'node:http';
import {execFileSync} from 'node:child_process';
const root=fileURLToPath(new URL('../',import.meta.url));
const app=path.resolve(process.argv[2]||path.join(root,'../TinyCADv4'));
const require=createRequire(path.join(app,'package.json'));
const {Parcel}=require('@parcel/core'),{FSCache}=require('@parcel/cache'),parcelFS=require('@parcel/fs');
const {chromium,_electron,expect}=require('@playwright/test');
const temporary=await fs.mkdtemp(path.join(tmpdir(),'tinycad-ai-manual-'));
const output=path.join(root,'docs/v4/images/ai-assistant');await fs.mkdir(output,{recursive:true});
const captures=[];const errors=[];let browser,desktop;
async function build(system,entry){
 const directory=path.join(temporary,system),cache=path.join(temporary,'cache-'+system);
 const bundler=new Parcel({entries:path.join(app,entry),defaultConfig:'@parcel/config-default',mode:'production',env:{TARGET_SYSTEM:system},shouldDisableCache:true,cacheDir:cache,cache:new FSCache(new parcelFS.NodeFS(),cache),shouldAutoInstall:false,logLevel:'error',targets:{manual:{context:'browser',outputFormat:'esmodule',distDir:directory,publicUrl:'./',sourceMap:false,optimize:true}}});
 await bundler.run();console.log('Built',system);return directory;
}
const web=await build('filesystem','index-fs.html');
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2','.ttf':'font/ttf','.wasm':'application/wasm'};
const server=createServer(async(req,res)=>{try{
 const url=new URL(req.url,'http://localhost');let relative=decodeURIComponent(url.pathname),directory=web;
 if(relative.startsWith('/desktop/')){directory=path.join(temporary,'electron');relative=relative.slice('/desktop'.length);}
 if(relative==='/')relative=directory===web?'/index-fs.html':'/index-electron.html';
 let file=path.resolve(directory,'.'+relative);if(!file.startsWith(directory+path.sep))throw Error('Invalid path');
 let bytes;try{bytes=await fs.readFile(file);}catch{file=path.resolve(app,'dist','.'+relative);if(!file.startsWith(path.join(app,'dist')+path.sep))throw Error('Invalid path');bytes=await fs.readFile(file);}
 res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(bytes);
}catch{res.writeHead(404);res.end();}});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));const origin=`http://127.0.0.1:${server.address().port}`;
async function shot(page,name,locator){await page.evaluate(()=>document.fonts.ready);if(locator)await locator.screenshot({path:path.join(output,name+'.png'),animations:'disabled'});else await page.screenshot({path:path.join(output,name+'.png'),animations:'disabled'});captures.push(name+'.png');console.log('Captured',name);}
async function openChat(page){await page.getByRole('button',{name:'Chat',exact:true}).click();await expect(page.getByRole('complementary',{name:'TinyCAD AI assistant'})).toBeVisible();}
const settings=page=>page.getByRole('dialog',{name:'AI settings',exact:true});
try{
 browser=await chromium.launch({headless:true,args:['--no-sandbox']});
 const context=await browser.newContext({viewport:{width:1280,height:860},locale:'en-GB',colorScheme:'light'});const page=await context.newPage();page.setDefaultTimeout(30000);page.on('pageerror',e=>errors.push(e.message));
 await page.route('https://api.openai.com/v1/models',route=>route.fulfill({json:{data:['gpt-6.1-sol','gpt-6.1-luna','gpt-6.1-astra'].map(id=>({id}))}}));
 await page.route('https://api.openai.com/v1/chat/completions',()=>{throw Error('Screenshots must never request inference.');});
 await page.goto(origin);await openChat(page);await shot(page,'chat-open');
 await page.getByRole('button',{name:'AI settings',exact:true}).click();let dialog=settings(page);
 await dialog.getByLabel('Provider',{exact:true}).selectOption('openai');await shot(page,'setup-provider',dialog);
 await dialog.getByRole('button',{name:'Next',exact:true}).click();await dialog.getByRole('radio',{name:'Use API Key',exact:true}).check();await shot(page,'setup-api-key',dialog);
 await dialog.getByLabel('API key',{exact:true}).fill('manual-example-not-a-real-key');await dialog.getByRole('button',{name:'Next',exact:true}).click();await expect(dialog).toContainText('Pick Model');await shot(page,'setup-model',dialog);
 await dialog.getByRole('button',{name:'Finish',exact:true}).click();await expect(dialog).toBeHidden();
 await page.getByRole('textbox',{name:'Message',exact:true}).fill('Add a 100 nF decoupling capacitor between U1’s supply and ground. Keep the rest of the circuit unchanged.');
 await shot(page,'chat-ready',page.locator('.chat-panel'));
 const stored=await page.evaluate(()=>Object.values(localStorage).some(value=>value.includes('manual-example-not-a-real-key')));expect(stored).toBe(false);
 await page.getByRole('button',{name:'AI settings',exact:true}).click();dialog=settings(page);await shot(page,'connection-settings',dialog);
 await dialog.getByRole('button',{name:'Clear API key',exact:true}).click();
 await page.getByRole('button',{name:'AI settings',exact:true}).click();dialog=settings(page);await dialog.getByLabel('Provider',{exact:true}).selectOption('gemini');await dialog.getByRole('button',{name:'Next',exact:true}).click();await shot(page,'setup-gemini',dialog);await dialog.getByRole('button',{name:'Cancel',exact:true}).click();
 await page.getByRole('button',{name:'AI settings',exact:true}).click();dialog=settings(page);await dialog.getByLabel('Provider',{exact:true}).selectOption('ollama');await dialog.getByRole('button',{name:'Next',exact:true}).click();await shot(page,'setup-ollama',dialog);
 await context.close();await browser.close();browser=undefined;
 await build('electron','index-electron.html');
 await fs.cp(path.join(temporary,'electron'),path.join(temporary,'dist'),{recursive:true});
 const profile=path.join(temporary,'profile');await fs.mkdir(profile,{recursive:true});const bootstrap=path.join(temporary,'desktop.cjs');
 await fs.writeFile(bootstrap,`const {app,BrowserWindow}=require('electron');app.setPath('userData',process.env.MANUAL_AI_PROFILE);app.setAppPath(process.env.MANUAL_AI_APP);app.disableHardwareAcceleration();const load=BrowserWindow.prototype.loadURL;BrowserWindow.prototype.loadURL=function(url,...rest){if(url.startsWith('http://localhost:1234'))url=url.replace('http://localhost:1234',process.env.MANUAL_AI_URL);return load.call(this,url,...rest);};app.on('browser-window-created',(_,window)=>{window.setBounds({x:0,y:0,width:1280,height:900});window.webContents.openDevTools=()=>{};});import(${JSON.stringify(new URL('electron/electron.js','file://'+app+'/').href)}).catch(error=>{console.error(error);app.exit(1);});`);
 const env={...process.env,ELECTRON_IS_DEV:'1',MANUAL_AI_PROFILE:profile,MANUAL_AI_APP:temporary,MANUAL_AI_URL:pathToFileURL(path.join(temporary,'dist/index-electron.html')).href};delete env.ELECTRON_RUN_AS_NODE;
 desktop=await _electron.launch({cwd:app,env,args:['--no-sandbox',bootstrap],timeout:30000});const desktopPage=await desktop.firstWindow();desktopPage.setDefaultTimeout(30000);desktopPage.on('pageerror',e=>errors.push(e.message));
 await openChat(desktopPage);await desktopPage.getByRole('button',{name:'AI settings',exact:true}).click();dialog=settings(desktopPage);await dialog.getByLabel('Provider',{exact:true}).selectOption('openai');await dialog.getByRole('button',{name:'Next',exact:true}).click();
 await expect(dialog.getByRole('button',{name:'Sign in with ChatGPT',exact:true})).toBeEnabled();await shot(desktopPage,'setup-chatgpt-desktop',dialog);
 expect(errors).toEqual([]);
 await fs.writeFile(path.join(output,'capture-manifest.json'),JSON.stringify({applicationCommit:execFileSync('git',['rev-parse','HEAD'],{cwd:app,encoding:'utf8'}).trim(),captures,scope:'Real current browser and Electron UI, temporary profiles. Model discovery only uses an illustrative intercepted catalog and a dummy key; no sign-in, billed requests, inference, or editor changes. ChatGPT sign-in availability uses the actual desktop runtime. No settings or circuit UI is mocked.',checks:{keyPersisted:stored,pageErrors:errors}},null,2)+'\n');
} catch(error){console.error(error);for(const p of [...(browser?.contexts().flatMap(c=>c.pages())||[]),...(desktop?desktop.windows():[])]){console.error((await p.locator('body').innerText().catch(()=>'' )).slice(-6000));await p.screenshot({path:'/tmp/tinycad-ai-manual-failure.png'}).catch(()=>{});}throw error;}
finally{if(desktop){await desktop.evaluate(({app})=>app.exit(0)).catch(()=>{});await desktop.close().catch(()=>{});}if(browser)await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));await fs.rm(temporary,{recursive:true,force:true});}
