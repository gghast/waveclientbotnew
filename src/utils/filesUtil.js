const fs = require('fs');
const path = require('path');

module.exports = {
    getRecursivelyDirectoryFiles
}

function getRecursivelyDirectoryFiles(dir, filter = "") {
    let files = [];

    fs.readdirSync(dir)
    .forEach(file => {
        const absolutePath = path.join(dir, file);
        const isDirectory = fs.statSync(absolutePath).isDirectory();

        if(!isDirectory && !file.endsWith(filter)) return;

        files.push(usDirectory ? getRecursivelyDirectoryFiles(absolutePath) : absolutePath);
    })


    return files;
}