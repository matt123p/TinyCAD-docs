// Screenshots of the real Electron app, with a disposable profile and library copies.
import fs from 'node:fs/promises';
import path from 'node:path';
import {tmpdir} from 'node:os';
import {createServer} from 'node:http';
import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import {execFileSync} from 'node:child_process';
const root=fileURLToPath(new URL('../',import.meta.url));
const appRoot=path.resolve(process.argv[2]||path.join(root,'../TinyCADv4'));
const renderer=path.resolve(process.argv[3]||path.join(appRoot,'dist'));
const require=createRequire(path.join(appRoot,'package.json'));
const {_electron,expect}=require('@playwright/test');
const temporary=await fs.mkdtemp(path.join(tmpdir(),'tinycad-manual-folders-'));
const profile=path.join(temporary,'profile');
const output=path.join(root,'docs/v4/Images/library-folders');
await fs.mkdir(profile,{recursive:true});await fs.mkdir(output,{recursive:true});
const libraries=[];
for(const [source,name,folderId] of [
 ['spice/spice.tclib','Analogue components','circuits'],
 ['digital/digital.tclib','Digital logic','circuits'],
 ['sensors-interfaces/sensors-interfaces.tclib','Sensor interfaces',null],
]){
 const target=path.join(temporary,name+'.tclib');
 await fs.copyFile(path.join(appRoot,'bundled-libraries',source),target);
 libraries.push({id:target,name,folderId});
}
await fs.writeFile(path.join(profile,'config.json'),JSON.stringify({libraries,libraryFolders:[{id:'circuits',name:'Circuit components'},{id:'sensors',name:'Sensors and modules'}]}));
const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.wasm':'application/wasm'};
const server=createServer(async(req,res)=>{
 try{const url=new URL(req.url,'http://localhost');const file=path.resolve(renderer,'.'+(url.pathname==='/'?'/index-electron.html':decodeURIComponent(url.pathname)));
 if(!file.startsWith(renderer+path.sep))throw Error('Invalid path');
 const bytes=await fs.readFile(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(bytes);
 }catch{res.writeHead(404);res.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const bootstrap=path.join(temporary,'desktop.cjs');
await fs.writeFile(bootstrap,`const {app,BrowserWindow}=require('electron');
app.setPath('userData',process.env.MANUAL_FOLDER_PROFILE);app.disableHardwareAcceleration();
const load=BrowserWindow.prototype.loadURL;
BrowserWindow.prototype.loadURL=function(url,...rest){if(url.startsWith('http://localhost:1234'))url=url.replace('http://localhost:1234',process.env.MANUAL_FOLDER_URL);return load.call(this,url,...rest);};
app.on('browser-window-created',(_,window)=>{window.setBounds({x:0,y:0,width:1200,height:900});window.webContents.openDevTools=()=>{};});
import(${JSON.stringify(new URL('electron/electron.js','file://'+appRoot+'/').href)}).catch(error=>{console.error(error);app.exit(1);});
`);
const env={...process.env,ELECTRON_IS_DEV:'1',MANUAL_FOLDER_PROFILE:profile,MANUAL_FOLDER_URL:`http://127.0.0.1:${server.address().port}`};delete env.ELECTRON_RUN_AS_NODE;
let desktop;
const captures=[];
try{
 desktop=await _electron.launch({cwd:appRoot,env,args:['--no-sandbox',bootstrap],timeout:30000});
 const page=await desktop.firstWindow();page.setDefaultTimeout(20000);
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.getByRole('tab',{name:'My Libraries',exact:true}).click();
 await expect(page.getByText('Circuit components',{exact:true})).toBeVisible();
 await page.evaluate(()=>document.fonts.ready);
 // Widen the picker through its actual resize control.
 const side=page.locator('.side-panel-container');const bounds=await side.boundingBox();
 await page.mouse.move(bounds.x+bounds.width-2,bounds.y+200);await page.mouse.down();await page.mouse.move(455,bounds.y+200,{steps:20});await page.mouse.up();
 const header=name=>page.getByText(name,{exact:true}).locator('..');
 async function panelImage(name){const b=await side.boundingBox();await page.screenshot({path:path.join(output,name+'.png'),clip:{x:b.x,y:b.y,width:b.width,height:Math.min(570,b.height)},animations:'disabled'});captures.push(name+'.png');}
 await expect(page.getByText('Sensor interfaces',{exact:true})).toBeVisible();
 await header('Circuit components').click();
 await expect(page.getByText('Analogue components',{exact:true})).toBeVisible();
 await page.getByTitle('Create folder',{exact:true}).hover();
 await panelImage('folders-overview');
 await page.getByTitle('Create folder',{exact:true}).click();
 await page.getByLabel('Enter a folder name',{exact:true}).fill('Project libraries');
 await page.getByRole('dialog').screenshot({path:path.join(output,'folder-create.png'),animations:'disabled'});captures.push('folder-create.png');
 await page.getByRole('dialog').getByRole('button',{name:'Add',exact:true}).click();
 await header('Project libraries').click();
 await expect(header('Project libraries').locator('..').getByText('Drop libraries here to group them',{exact:true})).toBeVisible();
 await page.getByTitle('Add an existing library',{exact:true}).hover();
 await panelImage('folder-selected');
 const sensor=page.locator('li[role="button"][draggable="true"]').filter({has:page.getByText('Sensor interfaces',{exact:true})});
 await sensor.dragTo(header('Sensors and modules'));
 await expect.poll(async()=>JSON.parse(await fs.readFile(path.join(profile,'config.json'),'utf8')).libraries.find(l=>l.id===libraries[2].id)?.folderId).toBe('sensors');
 await header('Sensors and modules').click();
 const group=header('Sensors and modules').locator('..');
 // Keep the folder expanded and its action buttons visible.
 if(!(await sensor.isVisible()))await header('Sensors and modules').click();
 await header('Sensors and modules').hover();await panelImage('folder-organise');
 await group.getByTitle('Rename folder',{exact:true}).click();
 await page.getByLabel('Enter a folder name',{exact:true}).fill('Sensors and displays');
 await page.getByRole('dialog').screenshot({path:path.join(output,'folder-rename.png'),animations:'disabled'});captures.push('folder-rename.png');
 await page.getByRole('button',{name:'Rename',exact:true}).click();
 await expect(page.getByText('Sensors and displays',{exact:true})).toBeVisible();
 expect(errors).toEqual([]);
 await fs.writeFile(path.join(output,'capture-manifest.json'),JSON.stringify({applicationCommit:execFileSync('git',['rev-parse','HEAD'],{cwd:appRoot,encoding:'utf8'}).trim(),application:'TinyCAD Desktop (Electron)',scope:'Actual UI with a temporary profile and copies of public bundled libraries. Created and renamed folders and verified a drag/drop assignment persisted. No personal configuration changed.',captures,checks:{created:'Project libraries',movedLibrary:'Sensor interfaces',renamed:'Sensors and displays',pageErrors:errors}},null,2)+'\n');
 console.log('Captured',captures.length,'desktop folder screenshots.');
}catch(error){if(desktop){const p=await desktop.firstWindow().catch(()=>null);if(p){console.error((await p.locator('body').innerText()).slice(-5000));await p.screenshot({path:'/tmp/tinycad-folder-capture-failure.png'}).catch(()=>{});}}throw error;
}finally{
 if(desktop){await desktop.evaluate(({app})=>app.exit(0)).catch(()=>{});await desktop.close().catch(()=>{});}
 server.closeAllConnections();await new Promise(resolve=>server.close(resolve));await fs.rm(temporary,{recursive:true,force:true});
}
