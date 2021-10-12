import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

//设置基础url，来源：https://www.coingecko.com/zh/api/documentation，原api:http://api.vikingship.xyz/public/swagger/index.html#/column 禁止了跨域请求
axios.defaults.baseURL = 'https://api.coingecko.com/api/v3/coins/'
//设置code，则axios.get('/columns?icode=123abc').then(...)这一句中'?icode=123abc'部分可以省略，由于此处没有icode，这段代码注释掉
// axios.interceptors.request.use(config=>{
//     config.params= {
//         ...config.params,icode:'123abc'
//     }
//     return config
// })

//测试
// axios.get('/bitcoin').then(resp => {
//     // console.log(resp)
//     console.log(resp.data.market_data)
// })

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
