/**
 * 使用fs 文件系统模块，将素材目录下成绩.txt文件中的考试数据，整理到成绩-ok.txt文件中。
 * 
 */

const fs = require('fs')

fs.readFile(__dirname + '/assets/成绩.txt', 'utf-8', function(err, data) {
    if (err) console.log(err.message)
    const newData = data.split(' ')
    const newData2 = newData.map(item => item.replace('=', ': ')).join('\r\n')
    fs.writeFile('./assets/成绩-ok.txt', newData2, function(errMsg) {
        if (errMsg) console.log(errMsg)
    })
})

