// src/main.js
import {
  createApp
} from 'vue'
import App from './App.vue'
import router from "./router";
import Avatar from "vue3-avatar";
import './index.css'

router.beforeEach((to, from, next) => {
  if (to.matched.length == 0) {
    router.push(to.path);
  }
  next()
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if (to.path === '/login') {
//     next()
//   } else {
//     let user = sessionStorage.getItem('user')
//     if (user) {
//       let userJson=JSON.parse(user);
//       //有，正常跳转
//       next()
//     } else {
//       //无，先登录
//       next('/login')
//     }
//   }
//   next()
// })

const switchDark = () => {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    document.getElementById('theme-toggle-dark-icon').classList.add('hidden');
    document.getElementById('theme-toggle-light-icon').classList.remove('hidden');
    localStorage.setItem('color-theme', 'light');
  } else {
    document.documentElement.classList.add('dark');
    document.getElementById('theme-toggle-dark-icon').classList.remove('hidden');
    document.getElementById('theme-toggle-light-icon').classList.add('hidden');
    localStorage.setItem('color-theme', 'dark');
  }
}

switchDark

const mode =
  import.meta.env.MODE
console.log(mode)
console.log(
  import.meta.env.BASE_URL)
console.log(
  import.meta.env.PROD)
console.log(
  import.meta.env.DEV)


const app = createApp(App).component("avatar", Avatar);
app.use(router).mount('#app')
