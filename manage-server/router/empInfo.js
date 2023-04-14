const express = require('express')
const router = express.Router()

// 挂载路由

// 导入路由处理函数模块
const controller = require('../controller/empInfo')


// 获取用户基本信息的路由
router.get('/empInfo', controller.getempInfo)
router.get('/oneEmpInfo', controller.oneEmpInfo)
router.get('/getNum', controller.getNum)
router.post('/addInfo', controller.addemp)
router.post('/updateInfo', controller.updateEmp)
router.post('/toDis', controller.toDis)
router.post('/addInfoMt', controller.addempMt)
module.exports = router