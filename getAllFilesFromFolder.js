module.exports = function getAllFilesFromFolder(dir) {

    var filesystem = require("fs");
    var results = []
    var files = []
    filesystem.readdirSync(dir).forEach(function(file) {

        filePath = dir+'/'+file;
        files.push(file)
        var stat = filesystem.statSync(filePath);
        if (stat && stat.isDirectory()) {
            results = results.concat(getAllFilesFromFolder(filePath))
        } else results.push(filePath);

    });

    return files;
};