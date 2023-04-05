import { createRouter, createWebHashHistory } from 'vue-router'
import Login from './components/Login/Login.vue'
import Top from './components/Top/Top.vue'
import Home from './components/Home/Home.vue'
import Left from './components/Left/Left.vue'
import sal from './components/sal/sal.vue'
import memberMsg from './components/memberMsg/memberMsg.vue'
import dimission from './components/dimission/dimission.vue'
import detail from './components/memberMsg/detail.vue'
import interview from './components/interview/interview.vue'
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      { path: '/', redirect: '/Login' },
      { path: '/Login', component: Login },
      { path: '/Home',
      redirect: '/Home/Top',
      component: Home,
      children:[
      { path: 'Top', component: Top },
      { path: 'sal', component: sal },
      { path: 'memberMsg', component: memberMsg },
      { path: 'dimission', component: dimission },
      { path: 'memberMsg/detail/:eid', component: detail ,props:true},
      { path: 'interview', component: interview}
      
    ],
},
    ]
  })
  router.beforeEach((to, from, next) => {
    // 如果用户访问的是登录页面，直接放行
    if (to.path === '/login') return next()
    // 获取 Token 值
    const token = localStorage.getItem('token')
    if (!token) {
    // Token 值不存在，强制跳转到登录页面
    return next('/login')
    }
    // 存在 Token 值，直接放行
    next()
   })
  export default router