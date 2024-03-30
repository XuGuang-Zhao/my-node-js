const express = require('express')
const cors = require('cors')
const userRouter = require('./router/index')

const app = express()

// 配置解析表单中间件
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// 配置跨域中间件
app.use(cors())

// 配置捕获异常中间键
app.use((err, req, res, next) => {
    console.log(err, req, res, next)
})

// 如何创建静态资源服务器
app.use(express.static('../assets'))

// 静态资源加前缀
app.use('/assets', express.static('../assets'))

// 如何注册路由模块
app.use(userRouter)


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})