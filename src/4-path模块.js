const path = require('path')

const fPath = '/assets/test.txt'
const pathStr1 = path.join(__dirname, fPath)
console.log(pathStr1)

const fullName = path.basename(fPath)
const nameWithoutType = path.basename(fPath, '.txt')
console.log(fullName, nameWithoutType)

const fext = path.extname(fPath)
console.log(fext)