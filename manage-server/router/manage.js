const express = require('express')
const router = express.Router()

// 导入用户路由处理函数对应的模块
const manage_controller = require('../controller/manage.js')
const expressJoi = require('@escook/express-joi')
const { reg_login_schema } = require('../schema/manage')

// 注册新用户
router.post('/reguser',expressJoi(reg_login_schema), manage_controller.regUser)
// 登录
router.post('/login',expressJoi(reg_login_schema), manage_controller.login)

module.exports = router