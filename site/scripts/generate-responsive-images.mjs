import { mkdir, rm } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = join(projectRoot, "public/generated-images");
const source = (filename) => join(projectRoot, "src/assets", filename);
const output = (filename) => join(outputDir, filename);

const webpImages = [
  {
    source: source("philipp-schroer-portrait.png"),
    output: output("profile-picture.webp"),
    width: 640,
    quality: 84,
  },
  ...[
    "caesar-slicing-fragment",
    "paper-highly-incremental-preview",
    "paper-infrastructure-preview",
    "paper-latticed-k-induction-preview",
    "paper-pric3-preview",
    "paper-qif-preview",
    "paper-slicing-preview",
  ].map((name) => ({
    source: source(`${name}.png`),
    output: output(`${name}.webp`),
    width: 320,
    quality: 76,
  })),
];

await rm(outputDir, { force: true, recursive: true });
await mkdir(outputDir, { recursive: true });

await Promise.all([
  ...webpImages.map((image) =>
    sharp(image.source)
      .resize({ width: image.width, withoutEnlargement: true })
      .webp({ effort: 4, quality: image.quality })
      .toFile(image.output),
  ),
  sharp(source("philipp-schroer-portrait.png"))
    .resize({ width: 900, withoutEnlargement: true })
    .jpeg({ mozjpeg: true, quality: 82 })
    .toFile(output("profile-picture-social.jpg")),
]);
