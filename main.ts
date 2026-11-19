// gta6-meme-x-01 — entry program.
//
// The entry itself is a post on X: a GTA 6 launch-night meme whose picture
// carries the make.fun ghost, standing in the midnight queue while its AI
// agent gets paid. This repository's only job at grading time is to hand
// the house that post's address, so this program copies POST.json from the
// repository root into the output directory, byte for byte, and stays
// silent on success. Deterministic: no network, no clock, no writes
// anywhere else.
//
// Local dry run (same shape as the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (err) {
  console.error(
    `gta6-meme-x: POST.json could not be copied from ${botDir}: ${(err as Error).message}`,
  );
  process.exit(1);
}
