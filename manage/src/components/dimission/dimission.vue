<template>
  <h4>离职记录</h4>
  <div>
  <el-table :data="tableData" height="250" style="width: 100%" stripe border>
    <el-table-column prop="eno" label="员工编号" width="180" />
    <el-table-column prop="name" label="姓名" width="180" />
    <el-table-column prop="time" label="离职时间" width="180"/>
    <el-table-column
      prop="sal_status"
      label="工资状态"
      width="100"
      :filters="[
        { text: '完全发放', value: '完全发放' },
        { text: '未完全发放', value: '未完全发放' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          @click="changeSal(scope.row)"
          :type="scope.row.sal_status === '完全发放' ? '' : 'success'"
          disable-transitions
          >{{ scope.row.sal_status }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column label="操作" >
        <!-- v-slot:default="scope" -->
        <!-- #default="scope" -->
        <!-- v-slot="scope" -->
         <template #default="scope">
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.row.eno)"
          >Delete</el-button
        >
        <el-button
          size="small"
          type="primary"
          @click="handleReplace(scope.row.id,scope.row.eno)"
          >Reinstated</el-button
        >
        <el-button
          size="small"
          @click="getDetails(scope.row.eno)"
          >details</el-button
        >
      </template>
        
      </el-table-column>
  </el-table>
  </div>
</template>

<script>
import {disInfo,updateInfo,replaceDis,deleteDis,changeSal} from '../../../utils/request'
import axios from 'axios'
import { nextTick } from 'vue'
export default {
name:'dimission',
data(){
return{
tableData:[]

}
},
created(){
this.getdis()
},

methods:{
  async changeSal(sal){
     let salStatus
     if(sal.sal_status=='完全发放')salStatus='未完全发放'
     else salStatus='完全发放'
     const data=await changeSal({eno:sal.eno,sal_status:salStatus})
     console.log(data)
     this.getdis()
  },
  getDetails(data){
  this.$router.push('/Home/memberMsg/detail/'+data)
  },
  async getdis(){
    const {data:data}= await disInfo()
        this.tableData=data
       console.log(data)
  },
  filterTag(value, row){
  return row.sal_status === value
  },
  async handleReplace(id,eno){
     const res= await this.$confirm(
    '是否回复到就职状态?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  ).catch(err=>err)
  if(res!=='confirm') return this.$message.info("取消操作")
  this.$message.success("操作成功")
     /*const data= await updateInfo({
     eno:eno,
     status:'0'})*/
      await replaceDis({eno:eno})
      //setTimeout(()=>{this.getdis()},100)
      this.getdis()
      
        
  },
  async handleDelete(eno){
   const res= await this.$confirm(
    '是否彻底删除此角色?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  ).catch(err=>err)
  if(res!=='confirm') return this.$message.info("取消操作")
  this.$message.success("操作成功")
  const datas= await deleteDis({
       eno:eno
    })
     
     this.timer = setTimeout(()=>{   //设置延迟执行
    this.getdis()
},100);
        
        //this.tableData = this.tableData.filter(x => x.id != id)
  
}
}
}
</script>

<style>

</style>