//File system to copy files from source to target
//BE2-Exercise 2


const fs = require('fs');
const path = require('path');

let sourceDir = process.argv[2];

const targetDir = process.argv[3];
const extensions = ['.txt'];

const filterFiles = (files) => {
  const filteredFiles = [];
  for (const file of files) {
    const extension = path.extname(file);
    if (extensions.includes(extension)) {
      filteredFiles.push(file);
    }
  }
  return filteredFiles;
};

const copyFiles = (files, sourceDir, targetDir) => {
  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const targetPath = path.join(targetDir, file);
    fs.copyFileSync(sourcePath, targetPath);
  }
};

fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Error reading source directory:', err);
    return;
  }

  const filteredFiles = filterFiles(files);
  copyFiles(filteredFiles, sourceDir, targetDir);
  console.log('Successfully copied filtered files to target directory.');
});
