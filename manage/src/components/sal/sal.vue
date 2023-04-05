<template>
<thisMonth @mchange="mc"></thisMonth>
  <el-table
    :data="tableData"
    border
    height="200"
    sum-text="合计"
    :summary-method="getSummaries"
    show-summary
    style="width: 75%; margin-top: 40px;margin-left: auto;margin-right: auto"
  >
    <el-table-column prop="id" label="ID" width="180" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="attendance" label="attendance" />
    <el-table-column prop="sal" label="sal" />
    <el-table-column
      prop="status_sal"
      label="Tag"
      width="100"
      :filters="[
        { text: '已领取', value: '已领取' },
        { text: '未领取', value: '未领取' },
      ]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template #default="scope">
        <el-tag
          :type="scope.row.status_sal === '已领取' ? '' : 'success'"
          disable-transitions
          >{{ scope.row.status_sal }}</el-tag
        >
      </template>
    </el-table-column>
    
  </el-table>
  
        <!-- v-slot:default="scope" -->
        <!-- #default="scope" -->
        <!-- v-slot="scope" -->

      
</template>

<script>
import {sal} from '../../../utils/request'
import axios from 'axios'
import thisMonth from './thisMonth.vue'
export default {
name:'sal',
data(){
  return{
  sum:'',
  month:'January',
  tableData:[{id:'123',name:'zs',attendance:'30',sal:'9000',tag:'已领取'},
  {id:'124',name:'zs',attendance:'30',sal:'8000',tag:'已领取'},
  {id:'124',name:'zs',attendance:'30',sal:'8000',tag:'未领取'},
  {id:'124',name:'zs',attendance:'30',sal:'8000',tag:'未领取'},
 ]
  }
},
components:{
 thisMonth
},
created(){
this.getsal(this.month)
},

methods: {
  mc(value){
  this.getsal(value)
  },
  async getsal(month){
   const {data:data}= await sal(month)
        this.tableData=data
       console.log(data)
  },
  filterTag(value, row){
  return row.status_sal === value
  },
  getdata(data){
    console.log(data)
  },
  getSummaries (param) {
  const { columns, data } = param
  const sums= []
  columns.forEach((column, index) => {
    if (index === 0) {
      sums[index] = 'Total Cost'
      return
    }
    const values = data.map((item) => Number(item[column.property]))
    if (!values.every((value) => Number.isNaN(value))) {
      sums[index] = ` ${values.reduce((prev, curr) => {
        const value = Number(curr)
        if (!Number.isNaN(value)) {
          return prev + curr
        } else {
          return prev
        }
      }, 0)}`
    } else {
      sums[index] = 'N/A'
    }
  })
  this.sum=sums[3]
  return sums
},

 getdata(data){
 
   console.log(data)
          
 }
  
},
}
</script>

<style>

</style>