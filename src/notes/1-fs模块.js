const fs = require('fs')

fs.readFile(__dirname + '/assets/test.txt', 'utf-8', function(err, dataStr) {
    // 判断文件是否读取成功
    if (err) {
        return console.log('文件读取失败! ' + err.message)
    }
    console.log(dataStr)
})

fs.writeFile(__dirname + '/assets/test.txt', 'Hello Node.js', function(err) {
    if (err) {
        return console.log('文件写入失败! ' + err.message)
    }
    console.log(err)
})