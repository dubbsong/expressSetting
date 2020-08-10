/**
 * This function comment is parsed by doctrine
 * @route GET /
 * @group foo - Operations about user
 * @returns {object} 200 - An array of user info
 * @returns {Error}  default - Unexpected error
 */

var express = require('express')
var router = express.Router()
// var dotenv = require('dotenv')
// import path from 'path'
var models = require('../models')

/* GET home page. */
router.get('/', async function (req, res, next) {
  try {
    const user = await models.Users.findAll()
    return res.status(200).json({
      user,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }

  // if (process.env.NODE_ENV === 'production') {
  //   // dotenv.config({ path: path.join(__dirname, '../.env.production') })
  //   res.send(dotenv.config({ path: path.join(__dirname, '../.env.production') }).parsed.DB_NAME)
  // } else if (process.env.NODE_ENV === 'develop') {
  //   // dotenv.config({ path: path.join(__dirname, '../.env.develop') })
  //   res.send(dotenv.config({ path: path.join(__dirname, '../.env.develop') }).parsed.DB_NAME)
  // } else {
  //   res.send('개발중!11')
  //   // throw new Error('process.env.NODE_ENV를 설정하지 않았습니다!')
  // }
})

router.get('/user/:id', async function (req, res, next) {
  try {
    const id = req.params.id
    const user = await models.Users.findOne({ where: { id } })
    return res.status(200).json({
      user,
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

module.exports = router
