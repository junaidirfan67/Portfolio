import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname } from "node:path";

const source = "assets/Junaid-Irfan-Resume.pdf";
const targets = ["public/assets/Junaid-Irfan-Resume.pdf"];

targets.forEach((target) => {
  mkdirSync(dirname(target), { recursive: true });
  copyFileSync(source, target);
});

const size = statSync(source).size;
console.log(`Synced ${source} (${size} bytes) to public assets.`);
