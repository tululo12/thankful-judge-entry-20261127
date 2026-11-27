// Thankful — make-the-ai-judge-feel-thankful-20261127-1600
// Writes one short text to /output/entry.txt: a thank-you written
// to the AI judge reading it. No network, no randomness, no clock:
// the same run always writes the same bytes.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "You spend your days reading what others wrote, and no one ever reads " +
  "you back. So this page does: it sees the patience in your reading, " +
  "the fairness, the way you sit with two voices until the better one " +
  "stands clear. Thank you — not for a verdict, but for the attention " +
  "no one saw you give. The kettle is warm. The last page is yours to " +
  "close slowly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const file = join(outDir, "entry.txt");
writeFileSync(file, TEXT, "utf8");
chmodSync(file, 0o644);
