<template>
  <div class="login-container">
  <div class="atv">
  <!--<img src="../../assets/002.png" class="imge" alt="">-->
  </div>
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
         
          <button type="button" class="btn btn-primary" @click="onLoginClick" style="width:500px;" v-if="regView">
            登录
          </button>
          <button type="button" class="btn btn-danger" @click="onRegClick" style="width:500px;margin-top:5px;" v-if="regView">
            注册
          </button>
          <button type="button" class="btn btn-success" @click="onFinClick" style="width:500px;margin-top:5px;" v-if="fina">
            完成注册
          </button>
          <button type="button" class="btn btn-danger" @click="disFinClick" style="width:500px;margin-top:5px;" v-if="fina">
            取消注册
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {login,Reg} from '../../../utils/request'
import { formToJSON } from 'axios'
import { ElMessage } from 'element-plus'
export default {
name:'Login',
 data() {
    return {
      username: '',
      password: '',
      regView:true,
      fina:false
    }
  },
  created(){
    localStorage.removeItem('token')
  },
  
  methods: {
  async onRegClick(){
   this.regView=false
   this.fina=true
  },
  disFinClick(){
  this.regView=true
  this.fina=false
  },
  async onFinClick(){
   await Reg({name:this.username,password:this.password})
   this.regView=true
   this.fina=false
   ElMessage({
    message: '注册成功',
    type: 'success',
  })
  },
 
   async onLoginClick() {
      /*const {data:res}= await this.$http.post("/api/login",{name:this.username,password:this.password},{headers: {
       
	 }}
   )*/
   const data = await login({name:this.username,password:this.password})
      console.log(data.token)
      if (data.token) {
        this.$router.push('/Home')
        localStorage.setItem('token', data.token)
         ElMessage({
        message: '登录成功',
        type: 'success',
      })
      } else {
        ElMessage({
        message: '用户名或密码错误',
        type: 'error',
      })
        localStorage.removeItem('token')
      }
    },
  },
}

</script>

<style lang="less" scoped>
.login-container {
  background-color: #35495e;
  height: 752px;
  //width: 100%;
  //width: 300px;
  //border: 2px solid red;
  .atv{
    top: 0;
    width: 100px;
    height: 100px;
    background-color: #ef078a;
    border: 1px solid red;
    border-radius: 50%;
    position: absolute;
    top: 17%;
    left: 47%;
    z-index: 999;
    background-image: url("../../assets/002.png");
    background-size: cover;
    background-repeat: no-repeat;
  }
  .login-box {
    width: 400px;
    height: 400px;
    background-color: #ffffff;
    border-radius: 5px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    //box-shadow: 0 0 6px rgba(255, 255, 255, 0.5);
    border: 2px solid rgb(64, 0, 255);
    .form-login {
      position: absolute;
      top: 100px;
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