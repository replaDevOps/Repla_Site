import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import pngToIco from "png-to-ico";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const source = join(root, "public", "favicon-source.png");
const transparent = { r: 0, g: 0, b: 0, alpha: 0 };

const prepare = () =>
  sharp(source).ensureAlpha().resize(512, 512, { fit: "contain", background: transparent });

const pngBuffer = async (size) =>
  prepare()
    .resize(size, size, { fit: "contain", background: transparent })
    .png({ compressionLevel: 9, effort: 10 })
    .toBuffer();

async function writePng(size, target) {
  mkdirSync(dirname(target), { recursive: true });
  await sharp(await pngBuffer(size)).toFile(target);
}

async function main() {
  const appDir = join(root, "src", "app");
  const publicDir = join(root, "public");

  await writePng(48, join(appDir, "icon.png"));
  await writePng(180, join(appDir, "apple-icon.png"));

  const [png16, png32, png48] = await Promise.all([
    pngBuffer(16),
    pngBuffer(32),
    pngBuffer(48),
  ]);

  const ico = await pngToIco([png16, png32, png48]);
  writeFileSync(join(appDir, "favicon.ico"), ico);
  writeFileSync(join(publicDir, "favicon.ico"), ico);

  await writePng(16, join(publicDir, "favicon-16x16.png"));
  await writePng(32, join(publicDir, "favicon-32x32.png"));
  await writePng(192, join(publicDir, "android-chrome-192x192.png"));
  await prepare()
    .resize(512, 512, { fit: "contain", background: transparent })
    .png({ compressionLevel: 9, effort: 10 })
    .toFile(join(publicDir, "android-chrome-512x512.png"));

  const svgSource = await prepare()
    .resize(128, 128, { fit: "contain", background: transparent })
    .png({ compressionLevel: 9, effort: 10 })
    .toBuffer();

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128" role="img" aria-label="Repla Technologies">
  <title>Repla Technologies</title>
  <image width="128" height="128" xlink:href="data:image/png;base64,${svgSource.toString("base64")}"/>
</svg>`;

  writeFileSync(join(appDir, "icon.svg"), svg);
  writeFileSync(join(publicDir, "icon.svg"), svg);

  const manifest = {
    name: "Repla Technologies",
    short_name: "Repla",
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    theme_color: "#ffffff",
    background_color: "#ffffff",
    display: "standalone",
  };

  writeFileSync(
    join(publicDir, "site.webmanifest"),
    `${JSON.stringify(manifest, null, 2)}\n`,
  );

  console.log("Favicon assets generated from public/favicon-source.png");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
