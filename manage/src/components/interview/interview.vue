<template>
<h4>面试管理</h4>
<el-button type="primary" @click="dialogVisible = true">添加面试人</el-button>
  <el-table
    ref="multipleTableRef"
    :data="tableData"
    style="width: 100%"
    @selection-change="handleSelectionChange"
    
  >
    <el-table-column type="selection" width="55" />
   <el-table-column property="eno" label="编号" width="120" />
    <el-table-column property="name" label="姓名" width="120" />
    <el-table-column property="time" label="面试时间" width="200" />
    <el-table-column property="position" label="面试职位" width="120" />
    <el-table-column label="操作" >
        <!-- v-slot:default="scope" -->
        <!-- #default="scope" -->
        <!-- v-slot="scope" -->
         <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.row.eno)"
          >detail</el-button
        >
        
      </template>
        
      </el-table-column>

  </el-table>
  <div style="margin-top: 20px">
    <el-button @click="toggleSelection" type="primary"
      >submit</el-button
    >
    <el-button @click="dele" type="danger" style="margin-left:100px"
      >delete</el-button
    >
    
  </div>
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
        <el-form-item label="用户面试时间" prop="time">
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
  <el-radio-group v-model="msg.position">
         <el-radio label="研发">研发</el-radio>
         <el-radio label="销售">销售</el-radio>
         <el-radio label="测试">测试</el-radio>
         <el-radio label="后勤">后勤</el-radio>
  </el-radio-group>
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
        <el-button type="primary" @click="onAddNewInt">确 定</el-button>
      </span>
      </template>
    </el-dialog>
</template>

<script>
import {getInt,delInt,addInfoMt,addInt} from '../../../utils/request'
import { ElMessage } from 'element-plus'
import axios from 'axios'
import qs from 'Qs'
export default {
name:'interview',
data(){
return{
  rules:{
      eno:[{required:true,message:"编号不能为空",trigger:"blur"}],
      name:[{required:true,message:"姓名不能为空",trigger:"blur"}],
      sex:[{required:true,message:"性别不能为空",trigger:"blur"}],
      age:[{required:true,message:"年龄不能为空",trigger:"blur"}],
      time:[{required:true,message:"面试时间不能为空",trigger:"blur"}],
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
tableData:[],
per:[],
dialogVisible:false,
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

}
},
created(){
this.getview()

},
methods:{
  handleEdit(data){  

  this.$router.push('/Home/memberMsg/detail/'+data)

 },
    async getview(){
    const {data:data}= await getInt()
        this.tableData=data
       console.log(data)
  },
   handleSelectionChange(select){
    this.per=select
    console.log(qs.stringify(this.per))
    //console.log(JSON.parse(JSON.stringify(this.per)))
    //console.log(this.per.map(v => {return v.eno}))

    //console.log(row)
  },
  async toggleSelection(){
     const data= await addInfoMt(
        qs.stringify(JSON.parse(JSON.stringify(this.per)))
       
     
     )
    /* 
     const datas= await delInt(
        qs.stringify(JSON.parse(JSON.stringify(this.per)))
       
     
     )*/
    setTimeout(()=>{this.getview()},500)
  },
  async dele(){
    await delInt(
        qs.stringify(this.per)
       
     
     )
     setTimeout(()=>{this.getview()},500)
     
  },
  async onAddNewInt() {
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

      const data= await addInt({
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
    //console.log(this.rules)
        /*
        {headers: {
          'Authorization':localStorage.getItem("token"),'Content-Type':'application/x-www-form-urlencoded'
        }}*/
     this.getview()
       //console.log(res.data)
     this.dialogVisible = false
     
    },
}
}
</script>

<style>

</style>