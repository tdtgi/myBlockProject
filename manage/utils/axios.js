import axios from 'axios'
//import '../node_modules/element-plus/es/'
import { ElLoading } from 'element-plus'
//axios.defaults.headers["Content-Type"] = 'application/x-www-form-urlencoded'
const api = axios.create({
baseURL:'http://localhost:3007',
timeout:5000,
headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
}

})
let loadingInstance = null
api.interceptors.request.use(config=>{
    //config.headers["Content-Type"] = 'application/x-www-form-urlencoded'
    loadingInstance=ElLoading.service({ text: 'Loading',background: 'rgba(0, 0, 0, 0.7)',fullscreen:true})
    config.headers.Authorization = localStorage.getItem('token')
    return config
})

api.interceptors.response.use(res=>{
    loadingInstance.close()
    return res.data
},err=>{
    Promise.reject(err)
})

export default api