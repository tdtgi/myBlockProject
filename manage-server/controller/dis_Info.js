//const db = require('../db/index')
// 导入处理密码的模块
const bcrypt = require('bcryptjs')
const {mycontract,account} = require('../webFunction')
const {changeKeys,addKeys,changeDisKeys} = require('../Regularity')
exports.salChange = (req, res) => {
  const disInfo=req.body
  mycontract.methods.changeSalStatus(disInfo.eno,disInfo.sal_status).send({from:account,gas:1000000})
  res.cc("修改成功",0)
}
  exports.replaceDis = (req, res) => {
    const disInfo=req.body
  
   
    //console.log(empInfo.eno)
    mycontract.methods.deldis(disInfo.eno).send({from:account,gas:1000000})
    .then(()=>{mycontract.methods.changeStatus(disInfo.eno,'0').send({from:account,gas:1000000}).then(()=>{res.cc("添加成功",0)})
    .catch((err)=>{res.cc(err,1)})})
    .catch((err)=>{res.cc(err,1)})
    //mycontract.methods.changeStatus(disInfo.eno,'0').send({from:account,gas:1000000})
    //console.log(disInfo.eno)
  
  }
  exports.getDisInfo = (req, res) => {
   
    async function getdi (){
      let results=[]
      let keys = await mycontract.methods.getDisKeys().call()
      for(let i=0;i<keys.length;i++){
       
        results.push(await mycontract.methods.dis(keys[i]).call())
    }       
    res.send({
      status: 0,
      message: '获取用户信息成功！',
      data: changeDisKeys(results),
    })
    
      }
      getdi()
  }
  exports.deleteDis = (req, res) => {
    const empInfoDel=req.body
   
   try{
    //console.log(empInfo.eno)
    mycontract.methods.deldis(empInfoDel.eno).send({from:account,gas:1000000})
    mycontract.methods.delEmp(empInfoDel.eno).send({from:account,gas:1000000})
  }catch(e){
      res.cc(e)
    }
    res.cc("成功",0)
  
  }