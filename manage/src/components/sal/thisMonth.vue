<template>
  <div class="cont">
  <el-select v-model="value" class="m-2" placeholder="Select" style="padding-left:350px ;">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      @click="ch"
    />
  </el-select>
  </div>
</template>

<script>
export default {
name:'thisMonth',
emits:['mchange'],
data(){
    return{
        value:"January",
        options:[
  {
    value: 'January',
    label: 'January',
  },
  {
    value: 'February',
    label: 'February',
  },
  /*
  {
    value: '三月',
    label: '三月',
  },
  {
    value: '四月',
    label: '四月',
  },
  {
    value: '五月',
    label: '五月',
  },
  {
    value: '六月',
    label: '六月',
  },
  {
    value: '七月',
    label: '七月',
  },
  {
    value: '八月',
    label: '八月',
  },
  {
    value: '九月',
    label: '九月',
  },
  {
    value: '十月',
    label: '十月',
  },
  {
    value: '十一月',
    label: '十一月',
  },
  {
    value: '十二月',
    label: '十二月',
  },*/
]
    }
},


methods: {
  ch(){
    this.$emit('mchange',this.value)
  }
},
}
</script>

<style>
.cont{
    height: 100px;
    background-color: aquamarine;
    border-radius: 0% 100% 0% 100%;
    margin-top:20px ;
    padding-top: 20px;
}
</style>