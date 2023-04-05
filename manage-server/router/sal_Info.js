const express = require('express')
const router = express.Router()

// 挂载路由

// 导入路由处理函数模块
const controller = require('../controller/sal_Info')

router.get('/January', controller.getSaL_January_Info)
router.get('/February', controller.getSaL_February_Info)

module.exports = router