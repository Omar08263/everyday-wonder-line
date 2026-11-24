// Everyday Wonder, Two Days to Find the Line — make.fun entry.
// Writes one sentence (1-200 characters) about a small moment of wonder
// in everyday life to /output/entry.txt. No network, no randomness,
// no reads outside this file: the same sentence every run.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const SENTENCE =
  "The toothpaste tube flattens from the middle first, because my thumb never learns where the tube begins.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, SENTENCE, "utf8");
chmodSync(OUT_FILE, 0o644);
