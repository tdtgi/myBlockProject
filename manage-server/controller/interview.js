const db = require('../db/index')
// 导入处理密码的模块
const bcrypt = require('bcryptjs')
const toArr=require('../toArr')
const {mycontract,account} = require('../webFunction')
const {changeKeys,addKeys} = require('../Regularity')
exports.getInterviewInfo = (req, res) => {
   
    async function getIntv (){
      let results=[]
      let tmp=[]
      let keys = await mycontract.methods.getKeys().call()
      for(let i=0;i<keys.length;i++){
        tmp=await await mycontract.methods.queryEmp(keys[i]).call()
        tmp=addKeys(tmp)
      if(tmp.status==2)results.push(await mycontract.methods.Emp(keys[i]).call())
    }       
    res.send({
      status: 0,
      message: '获取用户信息成功！',
      data: changeKeys(results),
    })
    
      }
      getIntv()
  }
  exports.delInterviewInfo = (req, res) => {
    const intInfo=toArr.toArr(req.body)
    const dele=intInfo.map(v => {return v[0]})
    console.log(dele)
  
    try{
      //console.log(empInfo.eno)
      for(let i=0;i<dele.length;i++){
      mycontract.methods.delEmp(dele[i]).send({from:account,gas:1000000})
      }
    }catch(e){
        res.cc(e)
      }
      res.cc("成功",0)
  }
  exports.addInterview = (req, res) => {
    
      const empInfo=req.body
      //console.log(empInfo.eno)
      mycontract.methods.addEmp(empInfo.eno,empInfo.name,empInfo.sex,empInfo.age,empInfo.time,empInfo.position,empInfo.country,empInfo.code,empInfo.major,empInfo.phone,['2',empInfo.edu,empInfo.beginTime,empInfo.endTime,empInfo.school]).send({from:account,gas:1000000})
      .then(()=>{res.cc("添加成功",0)})
      .catch((err)=>{res.cc(err,1)})
      
  }
  exports.oneIntInfo = (req, res) => {
  
    async function showOne (){
      let results=[]
      results = await mycontract.methods.queryInt(req.param("eno")).call()
      console.log(results)
       
    res.send({
      status: 0,
      message: '获取用户信息成功！',
      data: addKeys(results),
    })
    
      }
      showOne()
  }
  exports.updateInt = (req, res) => {
    const empInfo=req.body
  
  async function update (){
    let status
    if(empInfo.status)status='2'
    else status='0'
       
    mycontract.methods.changeInt(empInfo.eno,empInfo.name,empInfo.sex,empInfo.age,empInfo.time,empInfo.position,empInfo.country,empInfo.code,empInfo.major,empInfo.phone,[status,empInfo.edu,empInfo.beginTime,empInfo.endTime,empInfo.school]).send({from:account,gas:1000000})
    .then(()=>{res.cc("修改成功",0)})
    .catch((err)=>{res.cc(err,1)})
    
  
    }
    update()
}