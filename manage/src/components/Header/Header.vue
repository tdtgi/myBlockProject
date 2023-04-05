<template>
  <div class="common-layout">
    <el-container>
      <el-header>
      <div class="h-left"><i class="bi bi-bank"></i><span>人力资源管理系统</span></div>
      <button class="btn btn-dark" @click="onLogout">退出登录</button>
      </el-header>
      
    </el-container>
    
  </div>
</template>

<script>
export default {
name: 'Header',
methods: {
  onLogout() {
    localStorage.removeItem('token')
      this.$router.push('/login')
  }
},
}

</script>

<style lang="less" scoped>
.common-layout{
  .el-header{
    padding: 0;
  }
  padding: 0;
  position: relative;
  line-height: 55px;
  color: #070707;
  background-color: rgb(232, 236, 29);
  border-radius:20px 20px 20px 20px;
  .h-left{
    background-color: #149aed;
    height: 100%;
    width: 50%;
    border-radius:20px 20px 20px 20px;
  span{
    margin-left: 10px;
  }
  i{
    margin-left: 10px;
  }
}
}
.btn{
  position: absolute;
  right: 10px;
  top: 2px;
  display: inline;
  margin-top: 10px;
  
}
</style>