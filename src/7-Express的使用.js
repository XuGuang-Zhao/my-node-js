const express = require('express')
const userRouter = require('./router/index')
const app = express()

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})

// 7.定义中间件
const mw = function(req, res, next) {
    console.log('执行中间件')
    next()
}

app.get('/user', mw, function(req, res) {
    // 1. 如何发送文本内容
    // res.send('文本内容')
    // 2. 如何发送对象内容
    res.send({name: 'zs', age: 20, gender: '男'})
    // 3.如何获取请求的信息
    console.log('req query', req.query)
    console.log('req param', req.params)
})

// 4.如何创建静态资源服务器
app.use(express.static('../assets'))

// 5.加前缀
app.use('/assets', express.static('../assets'))

// 6. 如何注册路由模块
app.use(userRouter)

