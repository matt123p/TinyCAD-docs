import {recordingPage} from './manual-recording-controls.mjs';
import {tutorialLessons} from './manual-tutorial-lessons.mjs';
// Capture real application workflows with fresh Playwright profiles. The only
// substituted browser service is a file chooser for explicitly supplied fixtures.
import { createServer } from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import { tmpdir } from 'node:os';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root=fileURLToPath(new URL('../',import.meta.url));
const app=path.resolve(process.argv[2]||path.join(root,'../TinyCADv4'));
const require=createRequire(path.join(app,'package.json'));
const {chromium,expect}=require('@playwright/test');
const output=path.join(root,'docs/v4/images/simulation');
const videos=path.join(root,'docs/v4/videos/simulation');
const temporary=await fs.mkdtemp(path.join(tmpdir(),'tinycad-manual-spice-'));
await fs.mkdir(output,{recursive:true});await fs.mkdir(videos,{recursive:true});
const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.wasm':'application/wasm','.mp4':'video/mp4','.woff2':'font/woff2','.ttf':'font/ttf'};
const server=createServer(async(req,res)=>{
 try{const url=new URL(req.url,'http://localhost');const file=path.resolve(app,'dist','.'+(url.pathname==='/'?'/index.html':decodeURIComponent(url.pathname)));
 if(!file.startsWith(path.join(app,'dist')+path.sep))throw Error('Invalid path');
 res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream'});res.end(await fs.readFile(file));
 }catch{res.writeHead(404);res.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const base=`http://127.0.0.1:${server.address().port}/`;
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const evidence=[];
const only=process.argv.includes('--only')?process.argv[process.argv.indexOf('--only')+1].split(','):null;
const pause=ms=>new Promise(resolve=>setTimeout(resolve,ms));
async function openExample(page,group,name,{preview}={}){
 await page.getByRole('button',{name:'Open Example',exact:true}).click();
 const dlg=page.getByRole('dialog');
 await page.getByRole('navigation',{name:'Example groups',exact:true}).getByRole('button',{name:group,exact:true}).click();
 await dlg.getByRole('button',{name,exact:true}).click();
 if(preview)await screenshot(page,preview);
 await dlg.getByRole('button',{name:'Open drawing',exact:true}).click();
 await expect(dlg).toBeHidden();
}
async function screenshot(page,name){
 await page.evaluate(()=>{const n=document.getElementById('manual-caption');if(n)n.style.visibility='hidden';});
 await page.screenshot({path:path.join(output,name+'.png'),animations:'disabled'});
 await page.evaluate(()=>{const n=document.getElementById('manual-caption');if(n)n.style.visibility='visible';});
 console.log('Screenshot',name);
}
async function capture(id,record,body,directory=videos){
 const probe=process.argv.includes('--probe');if(probe)record=false;
 if(only&&!only.includes(id))return;
 const context=await browser.newContext({viewport:{width:1600,height:1000},deviceScaleFactor:1,locale:'en-US',colorScheme:'light',...(record?{recordVideo:{dir:temporary,size:{width:1600,height:1000}}}:{})});
 const rawPage=await context.newPage();const actions=[];const page=record?await recordingPage(rawPage,actions):rawPage;page.setDefaultTimeout(20000);const errors=[];page.on('pageerror',e=>errors.push(e.message));
 const frames=[];const started=Date.now();
 const step=async(text,action,hold=4200)=>{
  const stepStarted=Date.now();
  frames.push({atSeconds:(Date.now()-started)/1000,text});
  await page.evaluate(text=>{let n=document.getElementById('manual-caption');if(!n){n=document.createElement('div');n.id='manual-caption';n.style.cssText='position:fixed;bottom:0;left:0;right:0;z-index:2147483647;background:#172536f5;color:white;font:18px Arial;padding:12px 20px;pointer-events:none;';document.body.append(n);}n.textContent=text;},text);
  if(!probe)await pause(1000);await action();if(!probe)await pause(Math.max(0,Math.max(4200,hold)-(Date.now()-stepStarted)));
 };
 try{
  await page.goto(base);await page.getByRole('button',{name:'Open Example',exact:true}).waitFor();await page.evaluate(()=>document.fonts.ready);
  const trimAt=(Date.now()-started)/1000;
  const checks=await body({page,step,evidence:async name=>{await screenshot(page,id+'-'+name);}});
  if(record)expect(actions.length).toBeGreaterThan(3);
  for(let i=1;i<actions.length;i++)expect(actions[i].startedMs-actions[i-1].finishedMs).toBeGreaterThanOrEqual(4000);
  expect(errors).toEqual([]);
  const video=page.video();await context.close();
  if(record){const source=await video.path();const dest=path.join(directory,id+'.mp4');
   execFileSync('ffmpeg',['-loglevel','error','-y','-ss',String(Math.max(0,trimAt-.3)),'-i',source,'-an','-c:v','libx264','-preset','fast','-crf','24','-pix_fmt','yuv420p','-movflags','+faststart',dest]);
   execFileSync('ffmpeg',['-loglevel','error','-y','-ss','1','-i',dest,'-frames:v','1','-update','1',path.join(directory,id+'.jpg')]);
  }
  evidence.push({id,recorded:record,engine:checks?.engine||null,checks,minimumActionGapSeconds:4,clickMarker:'red/gold ring for 3 seconds; persistent blue pointer',actions:actions.map(a=>({...a,startedMs:a.startedMs-started,finishedMs:a.finishedMs-started})),steps:frames.map(f=>({...f,atSeconds:Math.max(0,f.atSeconds-trimAt)})),pageErrors:errors});
  if(!probe)await fs.writeFile(path.join(directory,id+'.json'),JSON.stringify(evidence.at(-1),null,2)+'\n');
  else console.log('Verified UI probe:',JSON.stringify(checks));
  console.log('Completed',id);
 }catch(error){await page.screenshot({path:path.join(temporary,id+'-failure.png')}).catch(()=>{});console.error('Failure capture:',temporary);console.error((await page.locator('body').innerText()).slice(-9000));await context.close();throw error;}
}
const simSheet=page=>page.getByRole('region',{name:'Simulation sheet',exact:true});
async function selectSetup(page,name){await page.getByText('◷ '+name,{exact:true}).click();await simSheet(page).getByRole('tab',{name:'Setup',exact:true}).waitFor();}
async function run(page){
 const area=simSheet(page);let before=0;const history=area.getByRole('tab',{name:'History',exact:true});
 if(await history.count()){await history.click();before=await area.getByRole('tabpanel',{name:'history',exact:true}).locator('tbody tr').count();}
 await area.getByRole('tab',{name:'Setup',exact:true}).click();await page.getByRole('button',{name:'Run',exact:true}).first().click();
 await expect(page.getByRole('button',{name:'Run',exact:true}).first()).toBeEnabled({timeout:60000});
 await area.getByRole('tab',{name:'History',exact:true}).click();
 await expect(area.getByRole('tabpanel',{name:'history',exact:true}).locator('tbody tr')).toHaveCount(before+1,{timeout:60000});
 await expect(area.getByRole('tabpanel',{name:'history',exact:true}).locator('tbody tr').first()).toContainText('complete');
 await expect(area.getByRole('tabpanel',{name:'history',exact:true}).locator('tbody tr').first()).toContainText('available');
}
async function openFile(page,relative){
 const bytes=[...await fs.readFile(path.join(app,relative))];const name=path.basename(relative);
 await page.evaluate(({bytes,name})=>{window.showOpenFilePicker=async()=>[{name,kind:'file',getFile:async()=>new File([new Uint8Array(bytes)],name)}];},{bytes,name});
 await page.getByRole('button',{name:'File',exact:true}).click();await page.getByRole('menuitem',{name:'Open',exact:true}).click();await pause(1500);
}
try{
 await capture('libraries',true,async({page,step})=>{
  await step('Choose Standard, then Network layout. Bundled libraries need no account or separate download.',async()=>{await page.getByRole('tab',{name:'Standard',exact:true}).click();await page.getByRole('combobox',{name:'Choose a standard library',exact:true}).selectOption('network-layout');});
  await screenshot(page,'standard-libraries');
  await step('Search the selected library. Each result includes a draggable artwork preview.',async()=>{await page.getByPlaceholder('Search libraries...').fill('8 RJ45');});
  const row=page.locator('li[role="button"]').filter({has:page.locator('span').filter({hasText:/^Switch - desktop - 8 RJ45$/})});
  await step('Select a component to inspect it, then drag its preview onto the drawing.',async()=>{await row.click();await row.locator('div.symbol-svg[draggable]').dragTo(page.locator('#svg-drawing'),{targetPosition:{x:350,y:240}});await page.keyboard.press('Escape');});
  await screenshot(page,'library-placement');return {library:'network-layout',component:'Switch - desktop - 8 RJ45'};
 });
 await capture('examples',true,async({page,step})=>{
  await step('Open Example is at the right of the browser title bar. Select Examples, then Small office network.',async()=>openExample(page,'Examples','Small office network',{preview:'example-picker'}),2400);
  await step('The example is an editable copy with its device artwork embedded.',async()=>{await page.getByRole('button',{name:'Zoom Out (-)',exact:true}).click();await page.getByRole('button',{name:'Zoom Out (-)',exact:true}).click();});
  await screenshot(page,'network-example');
  await step('Explanation opens the wiring guide beside the drawing; it is independent of simulation charts.',async()=>{await page.getByRole('button',{name:'Show example explanation',exact:true}).click();});
  await screenshot(page,'example-explanation');
  await step('Hide and reopen the explanation without losing its instructions. Save As keeps your own drawing.',async()=>{await page.getByRole('button',{name:'Hide example explanation',exact:true}).first().click();await page.getByRole('button',{name:'Show example explanation',exact:true}).click();});
  return {example:'network-layout',explanationVisible:true};
 });
 await capture('first-simulation',true,async({page,step})=>{
  await step('Open Example → SPICE tutorial → divider → Open drawing.',async()=>openExample(page,'SPICE tutorial','divider'),2200);
  await screenshot(page,'divider-circuit');
  await step('The pulse-shaped Simulation menu contains setup, sources, probes and virtual instruments.',async()=>{await page.getByRole('button',{name:'Simulation',exact:true}).click();});
  await screenshot(page,'simulation-menu');await page.keyboard.press('Escape');
  await step('Select the Simulation sheet. Operating Point calculates the DC bias.',async()=>selectSetup(page,'divider'));
  await screenshot(page,'simulation-setup');
  await step('Run creates a new acquisition using the browser’s bundled ngspice engine.',async()=>run(page),2000);
  await screenshot(page,'simulation-history');
  await step('Data confirms OUT = 2.5 V and source current = −2.5 mA for the two 1 kΩ resistors.',async()=>{await simSheet(page).getByRole('tab',{name:'Data',exact:true}).click();await expect(simSheet(page)).toContainText('2.5000000');await expect(simSheet(page)).toContainText('-0.0025000000');},2400);
  await screenshot(page,'simulation-data');
  return {engine:'bundled browser WebAssembly ngspice',newRun:'complete / available',outVolts:2.5,sourceCurrentAmps:-.0025};
 });
 await capture('netlist-editor',false,async({page})=>{
  const directory=path.join(root,'docs/v4/images/netlist-editor');await fs.mkdir(directory,{recursive:true});
  const shots=[];async function shot(name,element){if(element)await element.screenshot({path:path.join(directory,name+'.png'),animations:'disabled'});else await page.screenshot({path:path.join(directory,name+'.png'),animations:'disabled'});shots.push(name+'.png');}
  await page.setViewportSize({width:1280,height:800});
  await openExample(page,'SPICE tutorial','divider');
  await page.getByRole('button',{name:'Hide chart panel',exact:true}).click();
  await page.getByTitle('Hide side panel',{exact:true}).click();
  await page.getByRole('button',{name:'Symbols',exact:true}).click();await page.getByRole('menuitem',{name:'Netlist',exact:true}).click();
  const out=page.getByRole('row').filter({has:page.getByRole('gridcell',{name:'OUT',exact:true})});
  await expect(out).toHaveCount(1);await expect(out).toContainText('R1.');await expect(out).toContainText('R2.');
  await out.hover();await shot('netlist-overview');
  await page.getByRole('button',{name:'Netlist Types',exact:true}).click();
  const types=page.locator('[role=dialog]').filter({has:page.getByText('Netlist Types',{exact:true})});
  await types.getByRole('button',{name:'Add',exact:true}).click();
  await types.locator('tbody tr').last().getByRole('textbox').fill('control');
  await types.getByRole('button',{name:'Add',exact:true}).click();
  await types.locator('tbody tr').last().getByRole('textbox').fill('power');
  const control=types.locator('tbody tr').nth(1);
  await expect(control.getByRole('textbox')).toHaveValue('control');
  await control.getByRole('spinbutton').fill('2');await control.getByRole('spinbutton').press('Tab');
  await shot('netlist-types',types);
  await types.getByRole('button',{name:'OK',exact:true}).click();
  await page.getByPlaceholder('Search...',{exact:true}).fill('OUT');
  await out.getByRole('combobox').click();await out.getByRole('combobox').press('ArrowDown');await page.getByRole('option',{name:'control',exact:true}).click();
  await expect(out.getByRole('combobox')).toHaveValue('control');await shot('netlist-type-assignment',page.locator('.bottom-panel-wrapper'));
  await page.getByPlaceholder('Search...',{exact:true}).fill('');
  const net=await out.innerText();
  // Save the types before opening secondary editors, keeping each illustration independent.
  await page.getByRole('button',{name:'Netlist Types',exact:true}).click();
  const savedControl=types.locator('tbody tr').filter({has:page.locator('input[value="control"]')});
  await expect(savedControl).toHaveCount(1);
  await savedControl.locator('td').nth(5).getByRole('button').click();
  const attributes=page.getByRole('dialog',{name:'Edit Attributes',exact:true});
  await attributes.getByRole('button',{name:'Add Attribute',exact:true}).click();
  let attr=attributes.locator('tbody tr').last();await attr.getByRole('textbox').nth(0).fill('purpose');await attr.getByRole('textbox').nth(1).fill('Divider output signal');
  await attributes.getByRole('button',{name:'Add Attribute',exact:true}).click();
  attr=attributes.locator('tbody tr').last();await attr.getByRole('textbox').nth(0).fill('notes');await attr.getByRole('textbox').nth(1).fill('Between R1 and R2');
  await shot('netlist-attributes',attributes);
  await attributes.getByRole('button',{name:'OK',exact:true}).click();
  await expect(types).toBeVisible();
  await savedControl.locator('td').nth(1).locator('button').click();
  const colour=page.getByRole('dialog',{name:'Edit Wire colour',exact:true});
  await colour.getByRole('checkbox',{name:'Override colour',exact:true}).check();
  await colour.locator('input').filter({visible:true}).nth(1).fill('007f5f');
  await colour.locator('input').filter({visible:true}).nth(1).press('Tab');
  await shot('netlist-colour-preview',colour);
  const checks={example:'divider',net,type:'control',wireThickness:2,colourPreview:'#007f5f',attributePreview:{purpose:'Divider output signal',notes:'Between R1 and R2'}};
  await fs.writeFile(path.join(directory,'capture-manifest.json'),JSON.stringify({applicationCommit:execFileSync('git',['rev-parse','HEAD'],{cwd:app,encoding:'utf8'}).trim(),scope:'Real browser UI; bundled divider, live netlist, saved type assignment, colour preview and attributes editor. No circuit or UI data mocked.',captures:shots,checks},null,2)+'\n');
  return checks;
 });
 await capture('multiple-sheets',true,async({page,step})=>{
  await page.context().grantPermissions(['clipboard-read','clipboard-write']);
  const tab=name=>page.locator('.sheet-heading').filter({hasText:new RegExp('^'+name+'$')});
  const tabs=()=>page.locator('.sheet-heading').allTextContents();
  const sheetMenu=()=>page.locator('.sheet-heading-on > span').last().click();
  await step('Start from Open Example → SPICE tutorial → divider. We will split its two resistors across sheets.',()=>openExample(page,'SPICE tutorial','divider'));
  await step('Hide the chart panel to give the drawing more space.',()=>page.getByRole('button',{name:'Hide chart panel',exact:true}).click());
  await step('Open the selected sheet’s arrow menu and choose Rename.',async()=>{await sheetMenu();await page.getByRole('menuitem',{name:'Rename',exact:true}).click();});
  await step('Name this sheet Power. Renaming the page does not rename its nets.',async()=>{await page.getByLabel('Sheet Name',{exact:true}).fill('Power');await page.getByRole('button',{name:'Rename',exact:true}).click();});
  await step('The + button beside the sheet tabs adds a sheet to the same drawing.',()=>page.getByTitle('Add new sheet',{exact:true}).click());
  await step('Enter Control and choose Add. The new schematic sheet is now selected.',async()=>{await page.getByLabel('Sheet Name',{exact:true}).fill('Control');await page.getByRole('button',{name:'Add',exact:true}).click();});
  await step('Move left in the tab menu changes page order without changing any electrical connections.',async()=>{await sheetMenu();await page.getByRole('menuitem',{name:'Move left',exact:true}).click();await expect.poll(tabs).toEqual(['Power','Control','◷ divider']);});
  await step('You can also drag tabs: move Control before Power.',async()=>{await tab('Control').dragTo(tab('Power'));await expect.poll(tabs).toEqual(['Control','Power','◷ divider']);});
  await step('Drag Power back to the first position to keep the supply page before its load.',async()=>{await tab('Power').dragTo(tab('Control'));await expect.poll(tabs).toEqual(['Power','Control','◷ divider']);});
  await step('Select Power, select R2 and cut it. Its original wires and OUT label stay on Power.',async()=>{await tab('Power').click();const b=await page.locator('#sheet-content-Power rect[width="10"][height="26"]').boundingBox();await page.mouse.click(b.x+b.width/2,b.y+b.height/2);await page.keyboard.press('ControlOrMeta+x');});
  await step('Select Control, paste R2, then click the drawing to finish placement.',async()=>{await tab('Control').click();await page.keyboard.press('ControlOrMeta+v');await page.locator('#svg-drawing').click({position:{x:320,y:200}});await page.keyboard.press('Escape');});
  const body=await page.locator('#sheet-content-Control rect[width="10"][height="26"]').boundingBox();
  const scale=body.height/26;const top={x:body.x+body.width/2,y:body.y-7*scale};const bottom={x:top.x,y:body.y+body.height+7*scale};
  async function labelAt(point,name){
   await page.getByRole('button',{name:'Label',exact:true}).click();
   await page.mouse.click(point.x,point.y);await page.keyboard.press('Escape');
   const label=page.locator('#sheet-content-Control text').filter({hasText:/^Label$/}).first();const b=await label.boundingBox();
   await page.mouse.dblclick(b.x+b.width/2,b.y+b.height/2);await page.keyboard.press('ControlOrMeta+a');await page.keyboard.type(name,{delay:180});await page.keyboard.press('Escape');
  }
  await step('Place a Label on R2’s top pin and name it OUT. It joins the OUT-labelled wire on Power.',()=>labelAt(top,'OUT'));
  await step('Connect the lower pin to ground 0. Matching power-net names also connect across sheets.',async()=>{await page.getByRole('button',{name:'Simulation',exact:true}).click();await page.getByRole('menuitem',{name:'SPICE',exact:true}).hover();await page.getByRole('menuitem',{name:'Insert Ground',exact:true}).click();await page.mouse.click(bottom.x,bottom.y);await page.keyboard.press('Escape');});
  await step('Switch the lower list from Symbols to Netlist to inspect the actual connections.',async()=>{await page.getByRole('button',{name:'Symbols',exact:true}).click();await page.getByRole('menuitem',{name:'Netlist',exact:true}).click();});
  const out=page.getByRole('row').filter({has:page.getByRole('gridcell',{name:'OUT',exact:true})});
  await expect(out).toHaveCount(1);await expect(out).toContainText('R1.');await expect(out).toContainText('R2.');
  const ground=page.getByRole('row').filter({has:page.getByRole('gridcell',{name:'0',exact:true})});await expect(ground).toHaveCount(1);await expect(ground).toContainText('V1.');await expect(ground).toContainText('R2.');
  await step('OUT has both R1 and R2 in one net, even though they are on different schematic sheets.',async()=>{});
  await step('On Power, the wire carries OUT; sheet names and tab order do not form the connection.',()=>tab('Power').click());
  await step('On Control, the exact same label OUT connects R2. All schematic sheets belong to one circuit.',()=>tab('Control').click());
  return {example:'divider',sheets:await tabs(),movedComponent:'R2',labels:['OUT','0'],verifiedNet:await out.innerText(),verifiedGround:await ground.innerText()};
 });
 await capture('layout-tidy-up',true,async({page,step})=>{
  await step('Open the Transistor amplifier example to work on an editable copy.',()=>openExample(page,'Examples','Transistor amplifier'));
  const svg=page.locator('#svg-drawing');
  const before=await svg.innerHTML();
  await step('Auto-layout is beside Simulation on the toolbar.',()=>page.getByRole('button',{name:'Auto-layout',exact:true}).click());
  const dialog=page.getByRole('dialog');
  await step('Whole sheet tidies the current schematic. Selected Items limits the operation to a selection.',async()=>{await expect(dialog.getByRole('radio',{name:'Whole sheet',exact:true})).toBeChecked();});
  await step('Start with Low to keep large components fixed while allowing smaller parts, wires and labels to improve.',()=>dialog.getByRole('radio',{name:'Low',exact:true}).check());
  await step('Choose Go to apply the tidy-up. The dialog closes when changes have been accepted.',async()=>{await dialog.getByRole('button',{name:'Go',exact:true}).click();await expect(dialog).toBeHidden({timeout:60000});});
  const after=await svg.innerHTML();expect(after).not.toBe(before);
  await step('Review the new arrangement, then use Undo to revert the entire tidy-up in one step.',()=>page.getByRole('button',{name:'Undo (Ctrl-Z)',exact:true}).click());
  await expect(svg).toBeVisible();
  return {example:'Transistor amplifier',scope:'whole sheet',strength:'low',result:'accepted changes',undo:'one toolbar Undo'};
 });
 const courseVideos=path.join(root,'docs/v4/videos/simulation-tutorials/spice');
 await fs.mkdir(courseVideos,{recursive:true});
 for(const lesson of tutorialLessons({expect})){
  await capture(lesson.id,true,async context=>{
   if(lesson.file)await context.step('Open the '+lesson.file+' example from the SPICE tutorial group.',()=>openExample(context.page,'SPICE tutorial',lesson.file));
   await lesson.record(context);
   return {engine:'bundled browser WebAssembly ngspice',lesson:lesson.title,newRun:'complete / available'};
  },courseVideos);
 }
 await capture('circuit-explorer',false,async({page})=>{
  await openFile(page,'examples/simulation/rc-low-pass.dzn');
  await page.locator('.sheet-heading').filter({hasText:'◷'}).first().click();
  await simSheet(page).getByRole('tab',{name:'Setup',exact:true}).click();
  await run(page);await simSheet(page).getByRole('tab',{name:'Setup',exact:true}).click();
  const explorer=page.getByRole('region',{name:'Circuit Explorer',exact:true});
  await explorer.getByRole('tab',{name:'Tune / sweep',exact:true}).click();await explorer.evaluate(node=>node.scrollIntoView({block:'start'}));await screenshot(page,'explorer-tuning');
  await explorer.getByRole('tab',{name:'Measurements',exact:true}).click();await explorer.evaluate(node=>node.scrollIntoView({block:'start'}));await screenshot(page,'explorer-measurements');
  await explorer.getByRole('tab',{name:'Requirements',exact:true}).click();await explorer.evaluate(node=>node.scrollIntoView({block:'start'}));await screenshot(page,'explorer-requirements');
  await explorer.getByRole('tab',{name:'Add tools',exact:true}).click();await explorer.getByRole('button',{name:'Add Analysis lab',exact:true}).click();await explorer.evaluate(node=>node.scrollIntoView({block:'start'}));await screenshot(page,'analysis-lab');return {file:'rc-low-pass.dzn',engine:'bundled browser WebAssembly ngspice',newRun:'complete / available'};
 });
 const captures=[];for(const directory of [videos,path.join(root,'docs/v4/videos/simulation-tutorials/spice')]){for(const name of await fs.readdir(directory)){if(name.endsWith('.json')&&name!=='capture-manifest.json'){const entry=JSON.parse(await fs.readFile(path.join(directory,name),'utf8'));if(entry.recorded&&entry.actions?.length)captures.push(entry);}}}
 await fs.writeFile(path.join(videos,'capture-manifest.json'),JSON.stringify({applicationCommit:execFileSync('git',['rev-parse','HEAD'],{cwd:app,encoding:'utf8'}).trim(),tool:'Playwright Chromium; MP4 encoded by ffmpeg',viewport:{width:1600,height:1000},minimumActionGapSeconds:4,clickMarker:'red/gold ring; blue pointer',scope:'Real UI and bundled solver. Fresh profiles; file picker substitutes only the explicit fixture file. Captions are narration overlays; screenshots hide the overlay. No drawing or solver result is fabricated.',captures:captures.filter(Boolean)},null,2)+'\n');
}finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));await fs.rm(temporary,{recursive:true,force:true});}
