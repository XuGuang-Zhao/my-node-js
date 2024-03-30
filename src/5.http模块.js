const http = require('http')
const server = http.createServer()
server.on('request', (req, res) => {
    res.setHeader('Content-Type', 'text/html;charset=utf-8')
    res.end(`你请求的URL: ${req.method}`)
})

server.listen(80, () => {
    console.log('http server running')
})