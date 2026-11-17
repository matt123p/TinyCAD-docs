// Usage: node edit-ai-demo.mjs <ffmpeg> <original.mp4> <output.mp4> [font.ttf]
// Only AI processing intervals are accelerated. Trim the edited demo at 1:50.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
const [ffmpeg, source, output, font = 'C:/Windows/Fonts/arial.ttf'] = process.argv.slice(2);
if (!ffmpeg || !source || !output) throw Error('Provide ffmpeg, original recording and output paths.');
const segments = [
  [0, 18, 1], [18, 97, 12], [97, 130, 1], [130, 237, 12],
  [237, 245, 1], [245, 294, 12], [294, 303, 1],
  [303, 337, 12], [337, 359.666667, 1],
];
const temporary = fs.mkdtempSync(path.join(os.tmpdir(), 'tinycad-ai-video-edit-'));
const escapeFilter = value => value.replaceAll('\\', '/').replaceAll(':', '\\:').replaceAll("'", "'\\''");
const label = path.join(temporary, 'speed-label.txt');
fs.writeFileSync(label, 'AI processing  |  12× speed');
fs.mkdirSync(path.dirname(path.resolve(output)), { recursive: true });
const pieces = [];
try {
  for (const [index, [start, end, speed]] of segments.entries()) {
    const piece = path.join(temporary, `part-${index}.mp4`);
    let filter = `setpts=(PTS-STARTPTS)/${speed},fps=30`;
    if (speed !== 1) filter += `,drawtext=fontfile='${escapeFilter(font)}':textfile='${escapeFilter(label)}':x=(w-tw)/2:y=h-72:fontsize=28:fontcolor=white:box=1:boxcolor=0x173f56@0.94:boxborderw=14`;
    execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', '-ss', String(start), '-i', source, '-t', String((end-start)/speed), '-vf', filter, '-an', '-c:v', 'libx264', '-preset', 'fast', '-crf', '20', '-pix_fmt', 'yuv420p', '-threads', '2', piece], { stdio: 'inherit' });
    pieces.push(piece);
    console.log(`Rendered ${index+1}/${segments.length}: source ${start}-${end}s at ${speed}x`);
  }
  const list = path.join(temporary, 'concat.txt');
  fs.writeFileSync(list, pieces.map(file => `file '${file.replaceAll('\\', '/')}'`).join('\n'));
  execFileSync(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-y', '-f', 'concat', '-safe', '0', '-i', list, '-t', '110', '-an', '-c:v', 'libx264', '-preset', 'fast', '-crf', '20', '-pix_fmt', 'yuv420p', '-threads', '2', '-movflags', '+faststart', output], { stdio: 'inherit' });
  fs.writeFileSync(output.replace(/\.mp4$/i, '.edit.json'), JSON.stringify({
    source: path.basename(source), sourceSha256: createHash('sha256').update(fs.readFileSync(source)).digest('hex'),
    sourceDurationSeconds: 359.666667, outputDurationSeconds: 110,
    description: 'Edited video ends at 1:50; the unnecessary tail is omitted. AI processing waits accelerated 12x with a burned-in label throughout each accelerated interval. Interaction, replies, placement, layout and final result remain at normal speed. Silent source audio removed.',
    segments: segments.map(([startSeconds, endSeconds, speed]) => ({startSeconds, endSeconds, speed})),
  }, null, 2) + '\n');
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
