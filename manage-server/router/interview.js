const express = require('express')
const router = express.Router()

// 挂载路由

// 导入路由处理函数模块
const controller = require('../controller/interview')

router.get('/getInt', controller.getInterviewInfo)
router.post('/delInt', controller.delInterviewInfo)
router.post('/addInt', controller.addInterview)
router.get('/oneIntInfo', controller.oneIntInfo)
router.post('/updateInt', controller.updateInt)
module.exports = router