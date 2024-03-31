const express = require('express')

const app = express()

const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'my_db'
})

db.query('select * from user', (err, result) => {
    if (err) return console.log('err', err.message)
    console.log('result', result)
})


app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})