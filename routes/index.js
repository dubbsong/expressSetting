var express = require('express')
var router = express.Router()
var dotenv = require('dotenv')
import path from 'path'

/* GET home page. */
router.get('/', function (req, res, next) {
  if (process.env.NODE_ENV === 'production') {
    // dotenv.config({ path: path.join(__dirname, '../.env.production') })
    res.send(dotenv.config({ path: path.join(__dirname, '../.env.production') }).parsed.DB_NAME)
  } else if (process.env.NODE_ENV === 'develop') {
    // dotenv.config({ path: path.join(__dirname, '../.env.develop') })
    res.send(dotenv.config({ path: path.join(__dirname, '../.env.develop') }).parsed.DB_NAME)
  } else {
    res.send('개발중!11')
    // throw new Error('process.env.NODE_ENV를 설정하지 않았습니다!')
  }
})

module.exports = router
