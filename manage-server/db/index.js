const mysql = require('mysql2')
//import mysql from 'mysql2'

const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'managedb',
  multipleStatements:true
})

module.exports = db
//export default db.promise()