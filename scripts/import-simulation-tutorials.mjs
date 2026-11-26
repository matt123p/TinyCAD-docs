import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../', import.meta.url));
const app = path.resolve(process.argv[2] || path.join(root, '../TinyCADv4'));
const input = path.join(app, 'tutorials');
const pages = new Map([
  ['README.md', 'Simulation-Tutorials.md'],
  ['00-how-to-use.md', 'Tutorial-Start-Here.md'],
]);
for (const [course, prefix] of [['spice', 'SPICE'], ['xspice', 'XSPICE']]) {
  for (const name of (await fs.readdir(path.join(input, course))).filter(n => /^\d.*\.md$/.test(n)).sort()) {
    pages.set(course + '/' + name, prefix + '-Tutorial-' + name.slice(0, 2) + '.md');
  }
}
const companions = {
  spice: {
    '01':['divider'], '02':['divider'],
    '03':['source-dc','source-current','source-sine','source-pulse','source-triangle','source-pwl','source-exponential','source-fm','controlled-source'],
    '04':['rc-step'], '05':['rc-ac'], '06':['rectifier'], '07':['amp-bias'],
    '08':['amp-ac'], '09':['amp-small-signal','amp-clipping'],
    '10':['rc-ac','dc-sweep','rc-noise','rc-tf','rc-pz'], '11':['divider','xspice/logic-buffer'],
  },
  xspice: {'01':['logic-buffer'],'02':['logic-nand'],'03':['logic-hazard'],'04':['logic-dff'],'05':['logic-counter'],'06':['logic-filter','logic-unknown']},
};
function downloads(files, course) {
  return files.map(name=>{
    const qualified=name.includes('/')?name:course+'/'+name;
    const [folder,base]=qualified.split('/');
    const url='/v4/examples/simulation-tutorials/'+folder+'/'+base;
    return `| ${base} | [TinyCAD drawing](${url}.dzn) | [SPICE text](${url}.cir) |`;
  }).join('\n');
}
const sha = b => createHash('sha256').update(b).digest('hex');
const records = [];
function destination(file) {
  if (pages.has(file)) return 'v4/' + pages.get(file).replace(/\.md$/, '/') ;
  const parts = file.split('/');
  if (parts[1] === 'images') return 'v4/Images/simulation-tutorials/' + parts[0] + '/' + parts.slice(2).join('/');
  if (parts[1] === 'videos') return 'v4/videos/simulation-tutorials/' + parts[0] + '/' + parts.slice(2).join('/');
  if (parts[1] === 'circuits') return 'v4/examples/simulation-tutorials/' + parts[0] + '/' + parts.slice(2).join('/');
  return null;
}
function link(value, from) {
  if (/^(?:https?:|mailto:|#|\/)/.test(value)) return value;
  const [file, fragment] = value.split('#');
  const resolved = path.posix.normalize(path.posix.join(path.posix.dirname(from), file));
  const target = destination(resolved);
  return target ? '/' + target + (fragment ? '#' + fragment : '') : value;
}
for (const [source, target] of pages) {
  const bytes = await fs.readFile(path.join(input, source));
  let text = bytes.toString('utf8').replace(/^\uFEFF/, '');
  text = text.replace(/\]\(([^)]+)\)/g, (_all, url) => '](' + link(url, source) + ')')
    .replace(/\b(src|poster)="([^"]+)"/g, (_all, attr, url) => attr + '="' + link(url, source) + '"');
  text = text.replace(/\*\*Open Example\*\* on the drawing toolbar/g,
    '**Open Example** on the right of the browser title bar, or **File → Open Example** in Desktop')
    .replace(/\*\*Open Example\*\* on the toolbar/g,
      '**Open Example** in the browser title bar, or **File → Open Example** in Desktop')
    .replace(/Choose \*\*Open Example\*\* on the toolbar/g,
      'Choose **Open Example** in the browser title bar, or **File → Open Example** in Desktop')
    .replace(/choose \*\*Explanation\*\* on the toolbar/gi,
      'choose **Explanation** in the browser title bar, or **View → View Explanation** in Desktop')
    .replace(/\*\*Simulation → Components\*\*/g, '**Simulation → SPICE components**');
  text = text.replace('**Explanation** again, or use the collapsed strip on the right, to reopen it.', '**Explanation** again in the browser title bar, or **View → View Explanation** in Desktop, to reopen it.');
  if (source === 'README.md') text = text.replace('Each course keeps\nits Markdown pages, runnable drawings and images together so that it can be\ncopied into a manual.', 'The complete courses, runnable drawings, images and recordings are included in this manual.');
  if (source === '00-how-to-use.md') text += '\n## Current Circuit Explorer controls\n\nChoose the Simulation sheet, open **Setup** and scroll to **Circuit Explorer**. Use **Add tools** to add Measurements, Tune / sweep, Requirements, DC overlay or Analysis lab. Configured tools appear on the left; the chart panel remains a separate view. **Run** and **Stop** are in the main toolbar when a Simulation sheet is selected. See [Charts, measurements and Circuit Explorer](/v4/Simulation-Charts-and-Measurements/) for the current reference.\n';
  text = text.replace(/<video controls[^>]*src="([^"]+)"[^>]*aria-label="([^"]+)"[^>]*><\/video>/g,
    (all, src, title) => `{% include video-player.html src="${src}"${all.match(/\bposter="([^"]+)"/) ? ' poster="'+all.match(/\bposter="([^"]+)"/)[1]+'"' : ''} caption="${title}." %}`);
  text=text.replace(/ This short recording uses TinyCAD Desktop and the native solver\./g,'')
    .replace(/Instructions are captioned on screen; there is no audio\.\n/g,'')
    .replace('## Desktop video walkthroughs','## Video walkthroughs')
    .replace('Each uses the real Electron desktop app and native solver, with on-screen\ncaptions and click highlights.', 'The videos use TinyCAD in the browser with bundled ngspice.')
    .replace(/ There is no audio\./g,'')
    .replace('Native menus and window\nappearance may differ on Windows or macOS.', 'Desktop menus differ from the browser; use File → Open Example there.');
  text=text.replace(/^!\[Actual TinyCAD desktop screenshot[^\n]+\n\n/gm,'')
    .replace(/This application screenshot shows the Circuit and Simulation tabs below the\ndrawing and the Run\/acquisition controls in the right-hand panel\. Operating-point\ncharts contain a single point; use the numeric data for precise readings\./,'Operating-point charts contain a single point; use the numeric data for precise readings.')
    .replace(/The screenshot shows the saved setup and the measured 159\.152 Hz cutoff\. The\nexpanded figures below present gain and phase separately for easier reading\.\n\n/,'');
  // A walkthrough appears once. Keep scientific circuit/result figures below it,
  // rather than placing screenshots or plots immediately before the same video.
  const videoAt=text.indexOf('{% include video-player.html');
  if(videoAt>=0){
    const figures=[];
    const before=text.slice(0,videoAt).replace(/^!\[[^\n]+\n/gm,line=>{figures.push(line.trim());return '';});
    text=before+text.slice(videoAt);
    const watch=/\[Watch or download the video\]\([^\n]+\)\.\n/;
    if(figures.length)text=text.replace(watch,match=>match+'\n### Circuit and reference results\n\n'+figures.join('\n\n')+'\n');
  }
  const title = text.match(/^# (.+)$/m)?.[1] || target.replace('.md', '');
  if (source === 'README.md') {
    text = text.replace('# Simulation tutorials for TinyCAD', '# Simulation tutorials');
    text = text.replace(/\nSee \[verification and reproduction\]\(VERIFICATION.md\)[\s\S]*$/, '\n');
    text += '\n## Manual reference\n\nFor current controls, models, analysis settings, charts and troubleshooting, see [Simulation](/v4/Simulation/) and [Bundled examples](/v4/Bundled-Examples/). Desktop access is **File → Open Example** and **View → View Explanation**.\n';
  }
  const lesson=source.match(/^(spice|xspice)\/(\d{2})-/);
  if(lesson){
    const files=companions[lesson[1]][lesson[2]];
    text += '\n## Download the lesson circuits\n\nThe same examples are already available in **Open Example**. For an independent copy, download a `.dzn` drawing and use **File → Open** in TinyCAD. The `.cir` companion is SPICE text for inspection or a compatible external simulator, not a TinyCAD drawing. XSPICE circuits require Desktop for fresh runs.\n\n| Example | Drawing | Netlist |\n| --- | --- | --- |\n'+downloads(files,lesson[1])+'\n';
  }
  if(source==='README.md'){
    for(const course of ['spice','xspice']){
      const files=(await fs.readdir(path.join(input,course,'circuits'))).filter(n=>n.endsWith('.dzn')).map(n=>n.slice(0,-4)).sort();
      text+='\n## '+(course==='spice'?'Analogue':'XSPICE')+' drawing downloads\n\nUse the bundled example browser, or download a drawing here and open it in TinyCAD. Netlists are provided separately as text.\n\n| Example | Drawing | Netlist |\n| --- | --- | --- |\n'+downloads(files,course)+'\n';
    }
  }
  text = '---\nlayout: default\ntitle: ' + JSON.stringify(title) + '\n---\n\n' + text;
  await fs.writeFile(path.join(root, 'docs/v4', target), text);
  records.push({source:'tutorials/' + source, destination:'docs/v4/' + target, sourceSha256:sha(bytes)});
}
for (const course of ['spice', 'xspice']) {
  for (const folder of ['circuits', 'images']) {
    const dir = path.join(input, course, folder);
    const names = await fs.readdir(dir).catch(() => []);
    for (const name of names) {
      if (!/\.(dzn|cir|png|svg|mp4|jpg|json)$/.test(name)) continue;
      const file = course + '/' + folder + '/' + name;
      const target = path.join(root, 'docs', destination(file));
      await fs.mkdir(path.dirname(target), {recursive:true});
      const bytes = await fs.readFile(path.join(input, file));
      await fs.writeFile(target, bytes);
      records.push({source:'tutorials/' + file,destination:path.relative(root,target),sourceSha256:sha(bytes)});
    }
  }
}
await fs.mkdir(path.join(root, 'docs/v4/examples/simulation-tutorials'), {recursive:true});
await fs.writeFile(path.join(root,'docs/v4/examples/simulation-tutorials/provenance.json'), JSON.stringify({
  source:'https://github.com/matt123p/TinyCADv4',
  commit:execFileSync('git',['rev-parse','HEAD'],{cwd:app,encoding:'utf8'}).trim(),
  scope:'English tutorial import. Page links, companion download tables and current navigation wording adapted for this manual; circuit/plot bytes preserved. Videos are re-recorded by capture-spice-manual.mjs with per-action pacing and click markers. No translations generated.',
  pages:pages.size, files:records,
}, null, 2) + '\n');
console.log(`Imported ${pages.size} English tutorial pages and ${records.length-pages.size} companion files; translations unchanged.`);
