<template>
  <div class="login-container">
    <div class="login-box">
      <!-- 表单区域 -->
      <div class="form-login p-4">
        <!-- 登录名称 -->
        <div class="form-group form-inline">
          <label for="username">登录名称</label>
          <input
            type="text"
            class="form-control ml-2"
            id="username"
            placeholder="请输入登录名称"
            autocomplete="off"
            v-model.trim="username"
          />
        </div>
        <!-- 登录密码 -->
        <div class="form-group form-inline">
          <label for="password">登录密码</label>
          <input
            type="password"
            class="form-control ml-2"
            id="password"
            placeholder="请输入登录密码"
            v-model.trim="password"
          />
        </div>
        <!-- 登录和重置按钮 -->
        <div class="form-group form-inline d-flex justify-content-end">
         
          <button type="button" class="btn btn-primary" @click="onLoginClick" style="width:500px;">
            登录
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {login} from '../../../utils/request'
import { formToJSON } from 'axios'
export default {
name:'Login',
 data() {
    return {
      username: '',
      password: '',
    }
  },
  created(){
    localStorage.removeItem('token')
  },
  
  methods: {
 
   async onLoginClick() {
      /*const {data:res}= await this.$http.post("/api/login",{name:this.username,password:this.password},{headers: {
       
	 }}
   )*/
   const data = await login({name:this.username,password:this.password})
      console.log(data.token)
      if (data.token) {
        this.$router.push('/Home')
        localStorage.setItem('token', data.token)
      } else {
        localStorage.removeItem('token')
      }
    },
  },
}

</script>

<style lang="less" scoped>
.login-container {
  background-color: #35495e;
  height: 100%;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    .form-login {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
    }
  }
}

.form-control {
  flex: 1;
}

.avatar-box {
  position: absolute;
  width: 100%;
  top: -65px;
  left: 0;
  .avatar {
    width: 120px;
    height: 120px;
    border-radius: 50% !important;
    box-shadow: 0 0 6px #efefef;
  }
}
</style>