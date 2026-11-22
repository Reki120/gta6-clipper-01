// gta6-clipper-01 — entry program (Node 22, standard library only).
//
// The entry itself is a YouTube video: a GTA VI livestream moment cut into a
// vertical Short that pitches make.fun (see README.md). This program's whole
// job is to hand the video's address to the grader: it copies VIDEO.json from
// the repository root into the output directory, where the gate reads it.
//
//   MAKEFUN_BOT_DIR     where the repository sits   (default /bot)
//   MAKEFUN_OUTPUT_DIR  where the answer belongs    (default /output)
//
// Local dry run, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// On success it prints nothing and out/VIDEO.json is byte for byte the
// repository's VIDEO.json: after copying, the program reads both files back
// and fails loudly if they differ, so a short or corrupt copy can never pass
// for the real answer. It touches no network, no clock and no file outside
// those two directories, so two runs always write the same bytes.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy VIDEO.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

if (!readFileSync(target).equals(readFileSync(source))) {
  console.error(`copied VIDEO.json in ${outputDir} differs from ${source}`);
  process.exit(1);
}
