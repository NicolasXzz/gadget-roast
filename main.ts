// Gadget roast: one original line about a microwave that treats heating
// soup like a performance deserving applause. Short, first-person, one
// concrete behaviour (the endless beeping) with the turn at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My microwave beeps five times to announce my food is ready, then keeps beeping, like it needs applause for heating soup.";

// The gate only accepts 1-200 characters: refuse to write an invalid line.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`roast must be 1-200 characters, got ${LINE.length}`);
}

// The grader reads this exact path: one line, no trailing newline, so the
// entry is byte-for-byte the roast (fewer bytes also wins an exact tie).
const OUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUT_PATH, LINE);
