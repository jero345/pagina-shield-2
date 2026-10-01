// Copies the single-file build into entregables/ as the portable "source" HTML deliverable.
import fs from "node:fs/promises";

const NAME = "Keystone - Shield Website Mock-up source v2 - 30 September 2026.html";
await fs.copyFile("dist-single/index.html", `entregables/${NAME}`);
console.log(`Wrote entregables/${NAME}`);
