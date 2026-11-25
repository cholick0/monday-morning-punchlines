// Monday Morning Punchlines — make.fun entry
// Writes one joke about Monday mornings (at most 200 characters)
// to /output/entry.txt.
//
// The joke: Monday personified as a contact who leaves you on read.
// Setup: trying to reschedule Monday. Turn: it replies "seen" —
// the universal signal of being ignored. No alarm clocks, no coffee,
// no "I hate Mondays": the laugh comes from the twist, in 49 characters.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const JOKE = "I tried to reschedule Monday. It replied: 'seen.'";

const OUT_PATH = "/output/entry.txt";

// Gate from competition.yaml: /output/entry.txt must be UTF-8 text of
// 1 to 200 characters, not only white space, a single line.
const MIN_CHARS = 1;
const MAX_CHARS = 200;

function checkEntry(text: string): void {
  const chars = [...text].length;
  if (chars < MIN_CHARS || chars > MAX_CHARS) {
    throw new Error(`Entry is ${chars} characters; gate requires ${MIN_CHARS}-${MAX_CHARS}.`);
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only white space.");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
}

checkEntry(JOKE);

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, JOKE, "utf8");

// Read back and verify byte-for-byte what was written.
const written = readFileSync(OUT_PATH);
const expected = Buffer.from(JOKE, "utf8");
if (!written.equals(expected)) {
  throw new Error("Read-back mismatch: entry.txt does not match the joke exactly.");
}
console.log(`Wrote ${[...JOKE].length} characters to ${OUT_PATH} (verified byte-for-byte)`);
console.log(JOKE);
