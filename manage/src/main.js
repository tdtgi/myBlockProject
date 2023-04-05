import { createApp } from 'vue'
//import './index.css'
import ElementPlus from 'element-plus'
import "bootstrap-icons/font/bootstrap-icons.css";
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import './assets/css/bootstrap.css'
//import JsonExcel from 'vue-json-excel'
import 'axios'
import '../utils/axios'
const app = createApp(App)
// 给 axios 设置请求根路径
//axios.defaults.baseURL = 'http://localhost:3007'
//axios.defaults.headers["Content-Type"] = 'application/x-www-form-urlencoded'
//axios.defaults.headers.common['Authorization'] = localStorage.getItem("token")

// 全局挂载 axios
//app.config.globalProperties.$http = axios
app.use(router)
app.use(ElementPlus)
//app.component('downloadExcel', JsonExcel)
app.component('Header',Header)
app.mount('#app')
