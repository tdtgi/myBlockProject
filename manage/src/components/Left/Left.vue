<template>
  <div class="layout-aside-container">
    <!-- 左侧边栏列表 -->
    <ul class="user-select-none menu">
      <li class="menu-item">
        <router-link to="/Home/Top">首页</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Home/sal">工资信息</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Home/memberMsg">人员信息</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Home/dimission">离职记录</router-link>
      </li>
      <li class="menu-item">
        <router-link to="/Home/interview">面试管理</router-link>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
name:'Left',
}
</script>

<style lang="less" scoped>
.menu {
  list-style-type: none;
  padding: 0;
  .menu-item {
    line-height: 50px;
    font-weight: bold;
    font-size: 14px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    &:hover {
      background-color: #efefef;
      cursor: pointer;
    }
    a {
      display: block;
      color: black;
      padding-left: 10px;
      padding-right: 10px; 
      text-decoration: none;

    }
  }
}

// 设置路由高亮效果
.router-link-active {
  background-color: #efefef;
  box-sizing: border-box;
  position: relative;
  // 伪元素实现路由高亮效果
  &::before {
    content: ' ';
    display: block;
    width: 100%;
    height: 4px;
    position: absolute;
    left: 0;
    top: 0;
    background-color: #ec0b0b;
  }
}
</style>