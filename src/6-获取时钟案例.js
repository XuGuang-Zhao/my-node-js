const path = require('path')
const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.listen(80, () => {
    console.log('Server Running at: localhost:80')
})

server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    const url = req.url
    console.log(url)
    const fPath = path.join(__dirname, '/assets', url)
    fs.readFile(fPath, 'utf-8', (err, data) => {
        if (err) return res.end('404 Not fount')
        res.end(data)
    })
})