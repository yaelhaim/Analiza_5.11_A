// Exercise 11: Sum File Sizes in Folder
// Goal: list the entries in data-folder and sum the size of the files (ignore folders).
// Required:
//   fs.readdir(directoryPath, callback)  - get the entries
//   fs.lstat(filePath, callback)         - is it a file? (stats.isFile()) and its size (stats.size)
//   path.join(directoryPath, entryName)  - build the full path
// Print the total ONCE - only after all the lstat callbacks have finished.
//
// Expected output:
//   Total size: 2345 bytes
//
// Run: node ex11.js

const fs = require("fs");
const path = require("path");

const directoryPath = path.join(__dirname, "data-folder");

// write your code here
// Exercise 11: Sum File Sizes in Folder


fs.readdir(directoryPath, (err, entries) => {
    if (err) {
        console.log(err);
        return;
    }

    let totalSize = 0;
    let completed = 0;

    if (entries.length === 0) {
        console.log(`Total size: ${totalSize} bytes`);
        return;
    }

    entries.forEach((entryName) => {
        const filePath = path.join(directoryPath, entryName);

        fs.lstat(filePath, (err, stats) => {
            if (err) {
                console.log(err);
                completed++;

                if (completed === entries.length) {
                    console.log(`Total size: ${totalSize} bytes`);
                }

                return;
            }

            if (stats.isFile()) {
                totalSize += stats.size;
            }

            completed++;

            if (completed === entries.length) {
                console.log(`Total size: ${totalSize} bytes`);
            }
        });
    });
});