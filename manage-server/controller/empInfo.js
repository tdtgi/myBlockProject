// 导入数据库操作模块
//const db = require('../db/index')
const qs = require('Qs')
const toArr=require('../toArr')
// 导入处理密码的模块
const bcrypt = require('bcryptjs')

const {mycontract,account} = require('../webFunction')
const {changeKeys,addKeys} = require('../Regularity')

// 获取用户基本信息的处理函数
exports.getempInfo = (req, res) => {
  
  async function re (){
    let results=[]
    let tmp=[]
    let keys = await mycontract.methods.getKeys().call()
    for(let i=0;i<keys.length;i++){
      tmp=await mycontract.methods.queryEmp(keys[i]).call()
      tmp=addKeys(tmp)
      if(tmp.status==0)results.push(await mycontract.methods.Emp(keys[i]).call())
  }       
  res.send({
    status: 0,
    message: '获取用户信息成功！',
    data: changeKeys(results),
  })
  
    }
    re()

}
exports.addemp = (req, res) => {
  
    
    //const empInfo = req.body{}
    //try{
    const empInfo=req.body
    //console.log(empInfo.eno)
    
    mycontract.methods.addEmp(empInfo.eno,empInfo.name,empInfo.sex,empInfo.age,empInfo.time,empInfo.position,empInfo.country,empInfo.code,empInfo.major,empInfo.phone,['0',empInfo.edu,empInfo.beginTime,empInfo.endTime,empInfo.school]).send({from:account,gas:1000000})
    .then(()=>{res.cc("添加成功",0)})
    .catch((err)=>{res.cc(err,1)})
    
      
  }
  exports.addempMt = (req, res) => {
   //async function addMt(){
    const empInfo=toArr.toArr(req.body)
    
    //console.log(empInfo)
    //console.log("-----------------")
    
      //console.log(empInfo.length)
      //const empInfo=req.body
      //console.log(empInfo.eno)
      let today=new Date()
      today=today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
      for(let i=0;i<empInfo.length;i++){
      //mycontract.methods.addEmp(empInfo[i][0],empInfo[i][1],empInfo[i][2],empInfo[i][3],empInfo[i][4],empInfo[i][5],empInfo[i][6],empInfo[i][7],empInfo[i][8],empInfo[i][9],['0',empInfo[i][10],empInfo[i][11],empInfo[i][12],empInfo[i][13]]).send({from:'0x35e4a42A1b54751675f91bfACE7bf09c492E6683',gas:1000000})
       mycontract.methods.queryEmp(empInfo[i][0]).send({from:account,gas:1000000})
       mycontract.methods.changeEmp(empInfo[i][0],empInfo[i][1],empInfo[i][2],empInfo[i][3],today,empInfo[i][5],empInfo[i][6],empInfo[i][7],empInfo[i][8],empInfo[i][9],['0',empInfo[i][10],empInfo[i][11],empInfo[i][12],empInfo[i][13]]).send({from:account,gas:1000000})
      
    }
    res.cc("添加成功",0)
 
      
  }
    exports.updateEmp = (req, res) => {
      const empInfo=req.body
   
    async function update (){
      let status
      if(empInfo.status)status=empInfo.status
      else status='0'
      await mycontract.methods.queryEmp(empInfo.eno).send({from:account,gas:1000000})  
      mycontract.methods.changeEmp(empInfo.eno,empInfo.name,empInfo.sex,empInfo.age,empInfo.time,empInfo.position,empInfo.country,empInfo.code,empInfo.major,empInfo.phone,[status,empInfo.edu,empInfo.beginTime,empInfo.endTime,empInfo.school]).send({from:account,gas:1000000})
      .then(()=>{res.cc("修改成功",0)})
      .catch((err)=>{res.cc(err,1)})
    
      }
      update()
  }

  exports.oneEmpInfo = (req, res) => {
    
    async function showOne (){
      let results=[]
      await mycontract.methods.queryEmp(req.param("eno")).send({from:account,gas:1000000})
      results = await mycontract.methods.queryEmp(req.param("eno")).call()
      //console.log(results)
       
    res.send({
      status: 0,
      message: '获取用户信息成功！',
      data: addKeys(results),
    })
    
      }
      showOne()
  }
  exports.toDis = (req, res) => {
    // 定义待执行的 SQL 语句
    const disEmp=req.body
   
          mycontract.methods.addis(disEmp.eno,disEmp.name,disEmp.time,disEmp.sal_status).send({from:account,gas:1000000})
          .then(()=>{res.cc("添加成功",0)})
          .catch((err)=>{res.cc(err,1)})
          
  }