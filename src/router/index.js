const express = require('express')

const router = express.Router()

// 定义局部中间件
const mw = function(req, res, next) {
    console.log('执行中间件')
    next()
}

app.get('/user', mw, function(req, res) {
    // 如何发送对象内容
    res.send({name: 'zs', age: 20, gender: '男'})
    // 如何获取请求的信息
    console.log('req query', req.query)
    console.log('req param', req.params)
})


router.get('/user/list', function(req, res) {
    res.send('Get User List')
})

router.get('/user/add', function(req, res) {
    res.send('Add a user')
})

module.exports = router