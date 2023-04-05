const express = require('express')
const router = express.Router()

// 挂载路由

// 导入路由处理函数模块
const controller = require('../controller/dis_Info')

router.get('/disInfo', controller.getDisInfo)
router.post('/replaceDis', controller.replaceDis)
router.post('/deleteDis', controller.deleteDis)
router.post('/changeSal', controller.salChange)

module.exports = router