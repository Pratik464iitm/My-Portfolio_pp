// Only used for the single-file PREVIEW build (dist-preview). Vite copies
// public/ assets verbatim rather than inlining them, so the single-file
// plugin can't reach resume.pdf on its own. This turns the "/resume.pdf"
// reference into a data: URI so the preview HTML is truly self-contained.
import { readFileSync, writeFileSync, existsSync } from "node:fs";

const htmlPath = "dist-preview/index.html";
const pdfPath = "public/resume.pdf";

if (!existsSync(htmlPath) || !existsSync(pdfPath)) {
  console.log("Skipping resume embed (file missing).");
  process.exit(0);
}

const pdfBase64 = readFileSync(pdfPath).toString("base64");
const dataUri = `data:application/pdf;base64,${pdfBase64}`;

let html = readFileSync(htmlPath, "utf8");
const before = html.length;
html = html.split('"/resume.pdf"').join(`"${dataUri}"`);
writeFileSync(htmlPath, html);
console.log(`Embedded resume.pdf as data URI (${before} -> ${html.length} bytes).`);
