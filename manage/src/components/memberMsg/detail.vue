<template>
  <h4>基本信息<h4 v-if="status=='1'" style="display:inline">（已离职）</h4>
  <h4 v-else-if="status=='2'" style="display:inline">（面试中）</h4>
  </h4>
  <div class="containTop">
  <img src="../../assets/001.png" alt="" style="width:200px;height:200px;margin-left: 20px;">
  <ul class="msg">
  <li>姓名：<input type="text" v-model="name" :disabled = "setdis" ></li>
  <li>性别：<input type="text" v-model="sex" :disabled = "setdis"></li>
  <li>年龄：<input type="text" v-model="age" :disabled = "setdis"></li>
  <li>国籍：<input type="text" v-model="country" :disabled = "setdis"></li>
  <li>职位：<input type="text" v-model="position" :disabled = "setdis"></li>
  <li>身份证号：<input type="text" v-model="code" :disabled = "setdis" ></li>
  <li>所学专业：<input type="text" v-model="major" :disabled = "setdis"></li>
  <li>入职时间：<input type="text" v-model="time" :disabled = "setdis"></li>
  <li>员工编号：<input type="text" v-model="eno" :disabled = "setdis"></li>
  <li>电话号码：<input type="text" v-model="phone" :disabled = "setdis"></li>
  </ul>
  <ul class="bt1">
  <li v-if="btc"><button type="button" class="bt btn btn-danger" @click="edit" :disabled="status=='1'">编辑</button></li>
  <li v-else ><button type="button" class="bt btn btn-primary"   @click="fin" >完成</button></li>
  </ul>
  </div>
  <h4>教育经历</h4>
  
  <div>
  <el-table :data="tableData" height="250" style="width: 100%">
    <el-table-column prop="edu" label="学历" width="180"><input type="text" v-model="edu" :disabled = "setdis"> </el-table-column>
    <el-table-column prop="beginTime" label="入学时间" width="180" ><input type="text" v-model="beginTime" :disabled = "setdis"> </el-table-column>
    <el-table-column prop="endTime" label="毕业时间" width="180"><input type="text" v-model="endTime" :disabled = "setdis"> </el-table-column>
    <el-table-column prop="school" label="就读院校" width="180"><input type="text" v-model="school" :disabled = "setdis"> </el-table-column>
  </el-table>
  </div>

</template>

<script>
import {oneEmpInfo,updateInfo,oneIntInfo,updateInt} from '../../../utils/request'
import bus from '../../eventBus.js'
import axios from 'axios'
import { ElMessage } from 'element-plus'
export default {
name:'detail',
props:['eid'],
data(){
    return{
    id:'',
    eno:'',
    name:'',
    age:'',
    position:'',
    time:'',
    sex:'',
    code:'',
    phone:'',
    major:'',
    country:'',
    edu:'', 
    beginTime:'',
    endTime:'',
    school:'',
    status:'',
    prEno:'',
    prName:'',  
        tableData:[{edu:'22',beginTime:'ww',endTime:'67',school:'333'}],
        setdis:true,
        btc:true
    }
},

created(){
this.getOneEmp()
},
methods: {
    async getOneEmp(){
  
       const {data:data} = await oneEmpInfo({eno:this.eid})   
       console.log(data)
       this.eno=data.eno
       this.name=data.name
       this.age=data.age
       this.position=data.position
       this.time=data.time
       this.sex=data.sex
       this.code=data.code
       this.phone=data.phone
       this.major=data.major
       this.country=data.country
       this.edu=data.edu, 
        this.beginTime=data.beginTime,
        this.endTime=data.endTime,
        this.school=data.school
        this.status=data.status
        console.log(this.status)
       this.tableData[{
        edu:data.edu, 
        beginTime:data.beginTime,
        endTime:data.endTime,
        school:data.school}]
  },
    edit(){
        this.setdis=false
        this.btc=false
    },
    async fin(){
    //this.prEno=this.eno
    //this.prName=this.name
    let data=await updateInfo({
     //id:this.id,
     eno:this.eno,
     name:this.name,
     age:this.age,
     sex:this.sex,
     position:this.position,
     time:this.time,
     country:this.country,
     code:this.code,
     major:this.major,
     phone:this.phone,
     status:this.status,
     edu:this.edu, 
     beginTime:this.beginTime,
     endTime:this.endTime,
     school:this.school})
        this.setdis=true
        this.btc=true
        console.log(data)
         await this.$nextTick(()=>{
     if(data.status==1){
     
     let reg=/(?<=(VM Exception while processing transaction: )).*/g
     let mes=data.message.match(reg)
     
      ElMessage({
    message: mes[0],
    type: 'error',
  })
     }
     })
     this.getOneEmp()
        
    },
    fin1(){
        this.setdis=true
        this.btc=true
    },
    los(){
   this.setdis=true
   
    }
    
},
}
</script>

<style lang="less" scoped>
.containTop{
position: relative;
height: 270px;
 border-bottom: 2px solid grey ;
}
.msg{
    position: absolute;
    list-style-type: none;
    padding-top:7px ;
    top: 0;
    width: 650px;
    left:300px ;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    /*float: left;*/
}
.msg li{
    float: left;
    /*margin-right:20px ;*/
    margin-left:10px ;
    margin-top: 10px;
}
.bt1{
    list-style-type: none;
    top:12px ;
    left: 900px;
    position: absolute;
    /*top: 0;*/
    /*margin-right:20px ;*/
   
}
/*.bt{
    margin-left: 20px;
    width: 70px;
    height: 30px;
    
}*/
</style>