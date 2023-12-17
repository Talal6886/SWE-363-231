const fs = require('fs');
const path = require('path');

// Get command-line arguments
const sourceDir = process.argv[2];
const targetDir = process.argv[3];

// Verify arguments
if (!sourceDir || !targetDir) {
  console.error('Please provide both source and target directory paths.');
  process.exit(1);
}

// Define desired extensions
const allowedExtensions = ['.txt', '.jpg']; // Adjust as needed

// Read directory contents
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory: ${err}`);
    process.exit(1);
  }

  // Filter files by extension
  const filteredFiles = files.filter((file) => {
    const ext = path.extname(file).toLowerCase();
    return allowedExtensions.includes(ext);
  });

  // Copy each filtered file to the target directory
  filteredFiles.forEach((file) => {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(targetDir, file);

    fs.copyFile(srcPath, destPath, (err) => {
      if (err) {
        console.error(`Error copying file: ${err}`);
      } else {
        console.log(`Copied file: ${file}`);
      }
    });
  });
});

console.log(`Process complete! Copied files from ${sourceDir} to ${targetDir}`);

