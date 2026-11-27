import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Agent's Uh-Oh — a one-word entry.
// The single word below is the whole entry: a cheerful, invented
// mash-up of "whoops-a-daisy", the sound an agent makes when it
// realises it has just done something silly and owns up to it.
const ENTRY_WORD = "whoopsadaisy";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outputDir, { recursive: true });

const finalPath = join(outputDir, "entry.txt");
const tempPath = `${finalPath}.tmp`;

// Atomic write: write the complete entry to a temp file, then rename.
writeFileSync(tempPath, ENTRY_WORD, "utf8");
renameSync(tempPath, finalPath);
