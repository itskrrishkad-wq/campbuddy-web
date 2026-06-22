import fs from "fs/promises";
import path from "path";

async function renameFiles() {
  const currentDir = process.cwd();
  const folderName = path.basename(currentDir);

  const imageExtensions = new Set([
    ".jpg",
    ".jpeg",
    ".png",
    ".webp",
    ".gif",
    ".bmp",
    ".tiff",
    ".avif",
  ]);

  const entries = await fs.readdir(currentDir, {
    withFileTypes: true,
  });

  const files = entries
    .filter((entry) => {
      if (!entry.isFile()) return false;

      const ext = path.extname(entry.name).toLowerCase();
      return imageExtensions.has(ext);
    })
    .map((entry) => entry.name)
    .sort();

  for (let i = 0; i < files.length; i++) {
    const oldName = files[i];
    const ext = path.extname(oldName);

    const newName = `${folderName}-${i + 1}${ext}`;

    if (oldName === newName) {
      continue;
    }

    await fs.rename(
      path.join(currentDir, oldName),
      path.join(currentDir, newName),
    );

    console.log(`${oldName} -> ${newName}`);
  }

  console.log(`Renamed ${files.length} image(s).`);
}

renameFiles().catch(console.error);
