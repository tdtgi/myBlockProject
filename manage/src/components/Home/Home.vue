<template>
  <div class="container">
    <!-- 头部组件 -->
    <Header></Header>

    <!-- 主体区域 -->
    <div class="main-box">
      <div class="mainLeft">
      <!-- 左侧边栏区域 -->
      <Left></Left>
      </div>
   
      <!-- 右侧内容主体区域 -->
      <div class="main-body">
        <!-- 路由的占位符 -->
        <router-view></router-view>
      </div>

    </div>
  </div>
</template>

<script>

import Left from '../Left/Left.vue'


export default {
  name: 'Home',

  components: {
    Left,
   

  },
}
</script>
<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  //flex-wrap: wrap;
  //.mainLeft{
  //  flex-direction: row;
  //}

  .main-box {
    height: 100%;
    display: flex;
     flex-direction: column;
    .main-body {
      padding: 15px;
      flex: 1;
    }
  }
}
</style>