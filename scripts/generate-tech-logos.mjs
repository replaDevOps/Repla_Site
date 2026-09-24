import fs from "node:fs";
import path from "node:path";
import * as si from "simple-icons";

const outDir = path.join("public", "technologies");
fs.mkdirSync(outDir, { recursive: true });

function writeSvg(fileName, viewBox, body) {
  fs.writeFileSync(
    path.join(outDir, fileName),
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-hidden="true">${body}</svg>`,
  );
}

function fromSimpleIcon(key, fileName) {
  const icon = si[key];
  if (!icon) throw new Error(`Missing simple icon: ${key}`);
  writeSvg(fileName, "0 0 24 24", `<path fill="#${icon.hex}" d="${icon.path}"/>`);
}

fromSimpleIcon("siNextdotjs", "nextdotjs.svg");
fromSimpleIcon("siReact", "react.svg");
fromSimpleIcon("siTypescript", "typescript.svg");
fromSimpleIcon("siNodedotjs", "nodedotjs.svg");
fromSimpleIcon("siDocker", "docker.svg");
fromSimpleIcon("siKubernetes", "kubernetes.svg");
fromSimpleIcon("siFlutter", "flutter.svg");
fromSimpleIcon("siSanity", "sanity.svg");

writeSvg(
  "python.svg",
  "0 0 24 24",
  `<path fill="#3776AB" d="M12.1 3c-4.4 0-4.1 1.9-4.1 1.9v2h5.3v.6H7.2S3 7.2 3 12.1c0 4.9 2.6 4.7 2.6 4.7h1.5v-2.3s0-2.7 3.2-2.7h5.5s3.1 0 3.1-2.5V6.4S16.8 3 12.1 3Zm-2.3 1.3a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z"/><path fill="#FFD43B" d="M11.9 21c4.4 0 4.1-1.9 4.1-1.9v-2h-5.3v-.6h6.1S21 16.8 21 11.9c0-4.9-2.6-4.7-2.6-4.7h-1.5v2.3s0 2.7-3.2 2.7H8.2s-3.1 0-3.1 2.5v3.2S7.2 21 11.9 21Zm2.3-1.3a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>`,
);

writeSvg(
  "gcp.svg",
  "0 0 128 128",
  `<path fill="#ea4535" d="M80.6 40.3h.4l-.2-.2 14-14v-.3c-11.8-10.4-28.1-14-43.2-9.5C36.5 20.8 24.9 32.8 20.7 48c.2-.1.5-.2.8-.2 5.2-3.4 11.4-5.4 17.9-5.4 2.2 0 4.3.2 6.4.6.1-.1.2-.1.3-.1 9-9.9 24.2-11.1 34.6-2.6h-.1z"/><path fill="#557ebf" d="M108.1 47.8c-2.3-8.5-7.1-16.2-13.8-22.1L80 39.9c6 4.9 9.5 12.3 9.3 20v2.5c16.9 0 16.9 25.2 0 25.2H63.9v20h-.1l.1.2h25.4c14.6.1 27.5-9.3 31.8-23.1 4.3-13.8-1-28.8-13-36.9z"/><path fill="#36a852" d="M39 107.9h26.3V87.7H39c-1.9 0-3.7-.4-5.4-1.1l-15.2 14.6v.2c6 4.3 13.2 6.6 20.7 6.6z"/><path fill="#f9bc15" d="M40.2 41.9c-14.9.1-28.1 9.3-32.9 22.8-4.8 13.6 0 28.5 11.8 37.3l15.6-14.9c-8.6-3.7-10.6-14.5-4-20.8 6.6-6.4 17.8-4.4 21.7 3.8L68 55.2C61.4 46.9 51.1 42 40.2 42.1z"/>`,
);

async function fetchRemoteSvg(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Failed to fetch ${url}: ${response.status}`);
  return response.text();
}

const azureSvg = await fetchRemoteSvg(
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/azure/azure-original.svg",
);
const azureInner = azureSvg.replace(/^[\s\S]*?>/, "").replace(/<\/svg>\s*$/, "");
writeSvg("azure.svg", "0 0 128 128", azureInner);

const awsSvg = await fetchRemoteSvg(
  "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
);
const awsInner = awsSvg.replace(/^[\s\S]*?>/, "").replace(/<\/svg>\s*$/, "");
writeSvg("aws.svg", "0 0 128 128", awsInner);

console.log("Generated technology logos in", outDir);
