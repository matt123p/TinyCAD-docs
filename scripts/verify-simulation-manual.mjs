// Verify the built English manual with Chromium. Run npm run build first.
import {createServer} from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import {createRequire} from 'node:module';
import {createHash} from 'node:crypto';
const root=fileURLToPath(new URL('../',import.meta.url));
const app=path.resolve(process.argv[2]||path.join(root,'../TinyCADv4'));
const require=createRequire(path.join(app,'package.json'));
const {chromium,expect}=require('@playwright/test');
const site=path.join(root,'_site');
const artifacts=path.resolve(process.argv[3]||'/tmp/tinycad-manual-review');
await fs.mkdir(artifacts,{recursive:true});
const mime={'.html':'text/html','.js':'application/javascript','.css':'text/css','.json':'application/json','.svg':'image/svg+xml','.png':'image/png','.jpg':'image/jpeg','.mp4':'video/mp4','.woff2':'font/woff2'};
const server=createServer(async(req,res)=>{
 try{
  let name=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(name.endsWith('/'))name+='index.html';
  const file=path.resolve(site,'.'+name);
  if(!file.startsWith(site+path.sep))throw Error('Invalid path');
  const bytes=await fs.readFile(file);
  res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','Content-Length':bytes.length});res.end(bytes);
 }catch{res.writeHead(404);res.end();}
});
await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
const base=`http://127.0.0.1:${server.address().port}`;
const browser=await chromium.launch({headless:true,args:['--no-sandbox']});
const report={pages:[],videos:[],checks:[]};
try{
 const context=await browser.newContext({viewport:{width:1500,height:1000}});
 const page=await context.newPage();const errors=[];
 page.on('pageerror',e=>errors.push(e.message));
 const names=(await fs.readdir(path.join(root,'docs/v4'))).filter(n=>/^(?:AI-Assistant|Bundled-|Labels|Library-Folders|Layout-Tidy-Up|Multiple-Sheet-Drawings|Netlist-Editor|Simulation|SPICE-|XSPICE|Tutorial-).*\.md$/.test(n)).sort();
 const links=new Set();
 for(const name of names){
  const url=`${base}/v4/${name.slice(0,-3)}/`;
  const response=await page.goto(url);assert.equal(response.status(),200,url);
  await expect(page.locator('main h1')).toHaveCount(1);
  await expect.poll(()=>page.locator('main img').evaluateAll(nodes=>nodes.every(n=>n.complete&&n.naturalWidth>0))).toBe(true);
  for(const href of await page.locator('main a[href], main video source[src], main video[poster]').evaluateAll(nodes=>nodes.map(n=>n.href||n.src||n.poster))){if(href.startsWith(base))links.add(href);}
  report.pages.push({page:name,images:await page.locator('main img').count()});
  if(['Bundled-Libraries.md','Bundled-Examples.md','Simulation.md'].includes(name))await expect(page.locator('main img')).toHaveCount(0);
  if(await page.locator('main video').count())await expect(page.locator('main img[src*="tinycad-"]')).toHaveCount(0);
 }
 // Resolve local page/resource links and fragment IDs in rendered HTML.
 const cache=new Map();
 for(const href of links){
  const url=new URL(href);const key=url.origin+url.pathname;
  if(!cache.has(key)){const response=await context.request.get(key);assert.equal(response.status(),200,href);cache.set(key,{html:(response.headers()['content-type']||'').includes('text/html')?await response.text():null});}
  if(url.hash&&cache.get(key).html){
   const fragment=decodeURIComponent(url.hash.slice(1));
   assert.ok(cache.get(key).html.includes(`id="${fragment}"`),`Missing anchor: ${href}`);
  }
 }
 report.checks.push(`${links.size} rendered internal links, resources and anchors`);
 await page.goto(`${base}/v4/Feature-Differences/`);
 const row=title=>page.getByRole('row').filter({has:page.getByRole('rowheader',{name:title,exact:true})});
 await expect(row('Event-driven XSPICE simulation').getByRole('cell').first().locator('.feature-pill--no')).toContainText('No');
 await expect(row('Load/Save compressed TinyCAD .dzn files').getByRole('cell').nth(2)).toContainText('No');
 await expect(row('Markdown formatting in text boxes').getByRole('cell').first()).toContainText('Yes');
 await expect(row('Markdown formatting in text boxes').getByRole('cell').nth(2)).toContainText('No');
 report.checks.push('XSPICE, DZN and Markdown support cells show Yes/No statuses');
 // Desktop-only folder illustrations must remain inside the desktop tab.
 await page.goto(`${base}/v4/Library-Folders/`);
 await page.getByRole('tab',{name:'Desktop App',exact:true}).click();
 await expect(page.getByRole('tabpanel').locator('img')).toHaveCount(5);
 await expect.poll(()=>page.getByRole('tabpanel').locator('img').evaluateAll(ns=>ns.every(n=>n.complete&&n.naturalWidth>0))).toBe(true);
 await page.getByRole('tab',{name:'Browser',exact:true}).click();
 await expect(page.getByRole('tabpanel')).toContainText('not supported');
 report.checks.push('Five real desktop folder screenshots load in the Desktop App tab');
 // Product-specific example access must stay readable in both tabs.
 await page.goto(`${base}/v4/Bundled-Examples/`);
 await page.getByRole('tab',{name:'Desktop App',exact:true}).click();
 await expect(page.getByRole('tab',{name:'Desktop App',exact:true})).toHaveAttribute('aria-selected','true');
 await expect(page.getByRole('tabpanel')).toContainText('File → Open Example');
 await expect(page.getByRole('tabpanel')).toContainText('View → View Explanation');
 await page.getByRole('tab',{name:'Browser',exact:true}).click();
 await expect(page.getByRole('tabpanel')).toContainText('dark title bar');
 report.checks.push('Browser/Desktop instructions switch correctly');
 // Exercise an English search using the actual browser search assets.
 await page.getByRole('searchbox',{name:'Search this manual',exact:true}).fill('bundled libraries');
 await page.getByRole('searchbox',{name:'Search this manual',exact:true}).press('Enter');
 await expect(page.locator('#manual-search-results')).toContainText('Bundled libraries');
 report.checks.push('English search finds the new bundled library guide');
 // Check that all embedded recordings decode and really play.
 const videoPages=['Multiple-Sheet-Drawings','Layout-Tidy-Up','Bundled-Libraries','Bundled-Examples','Simulation','SPICE-Tutorial-01','SPICE-Tutorial-03','SPICE-Tutorial-04','SPICE-Tutorial-05','SPICE-Tutorial-06'];
 for(const name of videoPages){
  await page.goto(`${base}/v4/${name}/`);
  const video=page.locator('main video').first();await video.scrollIntoViewIfNeeded();
  await expect.poll(()=>video.evaluate(v=>v.readyState>=1&&Number.isFinite(v.duration)&&v.duration>0)).toBe(true);
  await page.locator('main .manual-video-button-toggle').first().click();
  await expect.poll(()=>video.evaluate(v=>v.currentTime)).toBeGreaterThan(0);
  const recording=await video.evaluate(v=>({src:new URL(v.currentSrc).pathname,duration:v.duration,width:v.videoWidth,height:v.videoHeight}));
  const metadata=JSON.parse(await fs.readFile(path.join(site,recording.src.replace(/^\//,'').replace(/\.mp4$/,'.json')),'utf8'));
  assert.equal(metadata.minimumActionGapSeconds,4,recording.src);
  assert.ok(metadata.actions.length>3,recording.src+' must record individual actions');
  const gaps=metadata.actions.slice(1).map((a,i)=>(a.startedMs-metadata.actions[i].finishedMs)/1000);
  assert.ok(gaps.every(g=>g>=4),recording.src+' contains actions less than four seconds apart');
  assert.ok(recording.duration>=4*metadata.actions.length,recording.src+' is too short for its action holds');
  assert.match(metadata.clickMarker,/ring/);
  report.videos.push({...recording,actions:metadata.actions.length,minimumMeasuredGapSeconds:Math.min(...gaps),clickMarker:metadata.clickMarker});
  await video.evaluate(v=>v.pause());
 }
 await page.goto(`${base}/v4/Simulation/`);await page.locator('main h1').scrollIntoViewIfNeeded();await page.screenshot({path:path.join(artifacts,'simulation-desktop.png'),animations:'disabled'});
 await page.setViewportSize({width:390,height:844});
 await page.goto(`${base}/v4/Bundled-Examples/`);
 await expect(page.locator('main h1')).toBeVisible();
 await page.getByRole('tab',{name:'Desktop App',exact:true}).click();
 await expect(page.getByRole('tab',{name:'Desktop App',exact:true})).toHaveAttribute('aria-selected','true');
 await expect(page.getByRole('tabpanel')).toContainText('File → Open Example');
 await page.screenshot({path:path.join(artifacts,'examples-mobile.png'),animations:'disabled'});
 report.checks.push('Mobile example tabs and heading render');
 assert.deepEqual(errors,[]);report.pageErrors=errors;
 const provenance=JSON.parse(await fs.readFile(path.join(root,'docs/v4/examples/simulation-tutorials/provenance.json'),'utf8'));
 let count=0;
 for(const file of provenance.files){
  if(file.destination.endsWith('.md'))continue;
  const bytes=await fs.readFile(path.join(root,file.destination));
  assert.equal(createHash('sha256').update(bytes).digest('hex'),file.sourceSha256,file.destination);count++;
 }
 report.checks.push(`${count} tutorial companion files match their recorded source hashes`);
 await context.close();
 await fs.writeFile(path.join(artifacts,'verification.json'),JSON.stringify(report,null,2)+'\n');
 console.log(`Verified ${report.pages.length} English pages, ${links.size} rendered links/anchors, ${report.videos.length} playable recordings, search, product tabs, mobile rendering and ${count} source hashes.`);
 console.log(`Review artifacts: ${artifacts}`);
}finally{await browser.close();server.closeAllConnections();await new Promise(resolve=>server.close(resolve));}
