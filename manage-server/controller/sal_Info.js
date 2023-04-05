const db = require('../db/index')
// 导入处理密码的模块
const bcrypt = require('bcryptjs')

exports.getSaL_January_Info = (req, res) => {
    // 定义查询用户信息的 SQL 语句
    const sql = `select * from sal_January`
    // 调用 db.query() 执行 SQL 语句
    db.query(sql, (err, results) => {
      // 执行 SQL 语句失败
      if (err) return res.cc(err)
      // 执行 SQL 语句成功，但是查询的结果可能为空
      if (results.length === 0) {return res.cc('获取用户信息失败！')}
      console.log(results)
      // 用户信息获取成功
      res.send({
        status: 0,
        message: '获取用户信息成功！',
        data: results,
      })
      console.log(results)
    })
  }
  exports.getSaL_February_Info = (req, res) => {
    // 定义查询用户信息的 SQL 语句
    const sql = `select * from sal_February`
    // 调用 db.query() 执行 SQL 语句
    db.query(sql, (err, results) => {
      // 执行 SQL 语句失败
      if (err) return res.cc(err)
      // 执行 SQL 语句成功，但是查询的结果可能为空
      if (results.length === 0) {return res.cc('获取用户信息失败！')}
      console.log(results)
      // 用户信息获取成功
      res.send({
        status: 0,
        message: '获取用户信息成功！',
        data: results,
      })
      console.log(results)
    })
  }