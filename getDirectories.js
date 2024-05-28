const { readdirSync } = require('fs')
module.exports = function getDirectories(source) {
    const data = []
    readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => data.push(dirent.name))
    return data
}
  