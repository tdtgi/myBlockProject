<template>

  <div>
  <el-button type="primary" @click="dialogVisible = true">添加新用户</el-button>
  
    <!-- 用户的表格 -->
    <el-table :data="memberList" height="300" stripe border>
      <!-- 这是id列 -->
      <el-table-column label="员工编号" prop="eno"></el-table-column>
      <!-- 渲染用户名这一列 -->
      <el-table-column label="姓名" prop="name"></el-table-column>
      <el-table-column label="年龄" prop="age"></el-table-column>
      <el-table-column label="入职时间" prop="time"></el-table-column>
      <el-table-column label="职位" prop="position"></el-table-column>
      <el-table-column label="操作" >
        <!-- v-slot:default="scope" -->
        <!-- #default="scope" -->
        <!-- v-slot="scope" -->
         <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.row.eno)"
          >detail</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.row.eno,
          scope.row.name,scope.row.time,
          scope.row.sex,scope.row.age,
          scope.row.position,
          scope.row.country,
          scope.row.code,
          scope.row.major,
          scope.row.phone,
          scope.row.edu,
          scope.row.beginTime,
          scope.row.endTime,
          scope.row.school)"
          >dimission</el-button
        >
      </template>
        
      </el-table-column>
      <el-table-column label="hidden" prop="country" v-if="false"></el-table-column>
      <el-table-column label="hidden" prop="code" v-if="false"></el-table-column>
      <el-table-column label="hidden" prop="major" v-if="false"></el-table-column>
      <el-table-column label="hidden" prop="phone" v-if="false"></el-table-column>
      <el-table-column label="hidden" prop="edu" v-if="false"></el-table-column>
      <el-table-column label="hidden" prop="beginTime" v-if="false"></el-table-column>
      <el-table-column label="hidden" prop="endTime" v-if="false"></el-table-column>
      <el-table-column label="hidden" prop="school" v-if="false"></el-table-column>
    </el-table>
              
    <!-- 添加用户的对话框 -->
    <el-dialog title="添加新用户" v-model="dialogVisible" width="50%" @close="onDialogClosed">
      <!-- 添加用户的表单 -->
      <el-form label-width="80px" :model="msg" ref="myaddForm" :rules="rules">
        <!-- 采集用户的姓名 -->
        <el-form-item label="员工编号" prop="eno">
          <el-input v-model="msg.eno"></el-input>
        </el-form-item>
        <el-form-item label="用户姓名" prop="name">
          <el-input v-model="msg.name"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-input v-model="msg.sex"></el-input>
        </el-form-item>
        <el-form-item label="用户年龄" prop="age">
          <el-input v-model.number="msg.age"></el-input>
        </el-form-item>
        <el-form-item label="用户入职时间" prop="time">
      <div class="block">
      <el-date-picker
        v-model="msg.time"
        type="datetime"
        placeholder="Pick a Date"
        format="YYYY/MM/DD hh:mm:ss"
        value-format="YYYY-MM-DD h:m:s a"
      />
    </div>
        </el-form-item>
        <el-form-item label="职位" prop="position">
          <el-input v-model="msg.position"></el-input>
        </el-form-item>
        <el-form-item label="国籍" prop="country">
          <el-input v-model="msg.country"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" prop="code">
          <el-input v-model="msg.code"></el-input>
        </el-form-item>
        <el-form-item label="所学专业" prop="major">
          <el-input v-model="msg.major"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" prop="phone">
          <el-input v-model="msg.phone"></el-input>
        </el-form-item>
        <el-form-item label="学历" prop="edu">
          <el-input v-model="msg.edu"></el-input>
        </el-form-item>
        <el-form-item label="开始时间" prop="beginTime">
          <el-input v-model="msg.beginTime"></el-input>
        </el-form-item>
        <el-form-item label="结束时间" prop="endTime">
          <el-input v-model="msg.endTime"></el-input>
        </el-form-item>
        <el-form-item label="学校" prop="school">
          <el-input v-model="msg.school"></el-input>
        </el-form-item>
      </el-form>
      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onAddNewUser">确 定</el-button>
      </span>
      </template>
    </el-dialog>
  </div>
  
</template>

<script>
import { ElMessage } from 'element-plus'
import {ref} from 'vue'
import {empInfo,addInfo,updateInfo,toDis,oneIntInfo} from '../../../utils/request'
import axios from 'axios'
import qs from 'Qs'
import bus from '../../eventBus.js'
export default {
name:'memberMsg',
data(){
  return{
    rules:{
      eno:[{required:true,message:"编号不能为空",trigger:"blur"}],
      name:[{required:true,message:"姓名不能为空",trigger:"blur"}],
      sex:[{required:true,message:"性别不能为空",trigger:"blur"}],
      age:[{required:true,message:"年龄不能为空",trigger:"blur"}],
      time:[{required:true,message:"入职时间不能为空",trigger:"blur"}],
      position:[{required:true,message:"职位不能为空",trigger:"blur"}],
      country:[{required:true,message:"国籍不能为空",trigger:"blur"}],
      code:[{required:true,message:"身份证号不能为空",trigger:"blur"}],
      major:[{required:true,message:"专业不能为空",trigger:"blur"}],
      phone:[{required:true,message:"电话不能为空",trigger:"blur"}],
      edu:[{required:true,message:"学历不能为空",trigger:"blur"}],
      beginTime:[{required:true,message:"开始时间不能为空",trigger:"blur"}],
      endTime:[{required:true,message:"结束时间不能为空",trigger:"blur"}],
      school:[{required:true,message:"学校不能为空",trigger:"blur"}]
    },
    test:'test',
    msg:{
    eno:'',
    id:'',
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
    },
    dialogVisible: false,
    fm:{
    id:'',
    name:'',
    age:'',
    position:'',
    time:''
    },
   memberList:[],
   add:[],
   keys:[
    'eno',
    'name',
    'sex',
    'age',
    'time',
    'position',
    'country',
    'code',
    'major',
    'phone',
    'edu',
    'beginTime',
    'endTime',
    'school',
   ],
   
  }
},

created(){
  
   this.getemp()
  },
methods: {
   createKeys(arr){
			const obj = {};
			arr.forEach((value,index)=>{
				obj[this.keys[index]] = value;
			})
			return obj;
		},
    changeKeys(arr){
      console.log(arr)
			
      let re=arr.map(item=>{
        let obj = {}
        let D1=Object.entries(item).slice(0,11)
        let D2=Object.fromEntries(D1) 
        let D3=Object.values(D2)
        let D4=D3.flat()
        D4.forEach((value,index)=>{
				obj[this.keys[index]] = value;
			})
      return obj
      })
			
			return re;
		},
   async getemp(){
       const {data:data}= await empInfo()
       /*
       ,{headers: {
          'Authorization':localStorage.getItem("token")
        }}*/
        /*
        this.add.push(this.createKeys(data.flat()))
        this.memberList=this.add
       console.log(this.createKeys(data.flat()))*/
       /*
       var data1=Object.entries(data[0]).slice(0,11)
       var data2=Object.fromEntries(data1)
       var data3=Object.values(data2)*/
       /*
       this.memberList=this.changeKeys(data)
       console.log(this.changeKeys(data))*/
       this.memberList=data

  },
 async onAddNewUser() {
  //const myaddForm = ref()
       //console.log(this.rules)
    let flag = this.$refs['myaddForm'].validate(valid => {
       		//表单验证失败
            if (!valid) {
            	//提示语
            	this.$message.error("请输入正确的信息");
                return false;
            }
            //这里可以写表单验证通过之后执行的代码
            //.......
        })
        flag=await flag
        console.log(flag)
        //flag.then((result)=>{console.log(result)})
        if(!flag) return

      const data= await addInfo({
        //qs.stringify(this.testlist)
        
        
        eno:this.msg.eno,
     name:this.msg.name,
     age:this.msg.age,
     sex:this.msg.sex,
     position:this.msg.position,
     time:this.msg.time,
     country:this.msg.country,
     code:this.msg.code,
     major:this.msg.major,
     phone:this.msg.phone,
     edu:this.msg.edu,
     beginTime:this.msg.beginTime,
     endTime:this.msg.endTime,
     school:this.msg.school
     
     }
     )
     //console.log(data.status)
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
     
     /*
        {headers: {
          'Authorization':localStorage.getItem("token"),'Content-Type':'application/x-www-form-urlencoded'
        }}*/
     this.getemp()
       //console.log(res.data)
     this.dialogVisible = false
     this.add.push({
     id:this.id,
     eno:this.eno,
     name:this.name,
     age:this.age,
     sex:this.sex,
     position:this.position,
     time:this.time,
     country:this.country,
     code:this.code,
     major:this.major,
     phone:this.phone})
     
    },
 handleEdit(data){  

  this.$router.push('/Home/memberMsg/detail/'+data)

 },
  
  async handleDelete(deno,dname,dtime,dsex,dage,dposition,dcountry,dcode,dmajor,dphone,dedu,dbeginTime,dendTime,dschool){
    console.log(dposition)
  const res= await this.$confirm(
    '是否将此员工设为离职状态?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  ).catch(err=>err)
  if(res!=='confirm') return this.$message.info("取消操作")
  this.getemp()
  this.$message.success("操作成功")
  const data= await updateInfo({
     eno:deno,
     name:dname,
     time:dtime,
     sex:dsex,
     age:dage,
     position:dposition,
     country:dcountry,
     code:dcode,
     major:dmajor,
     phone:dphone,
     edu:dedu,
     beginTime:dbeginTime,
     endTime:dendTime,
     school:dschool,
     status:'1'})
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
  const datat = await toDis({
     eno:deno,
     name:dname,
     time:dtime,
     sal_status:'未完全发放'
   })
   await this.$nextTick(()=>{
     if(datat.status==1){
     
     let reg=/(?<=(VM Exception while processing transaction: )).*/g
     let mes=data.message.match(reg)
     
      ElMessage({
    message: mes[0],
    type: 'error',
  })
     }
     })
  
  this.getemp()

  //this.memberList = this.memberList.filter(x => x.id != id)
  
}
  }

  }



</script>

<style>

</style>