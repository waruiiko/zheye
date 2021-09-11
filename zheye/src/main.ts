import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'
import store from './store'

axios.defaults.baseURL='https://api.coingecko.com/api/v3/coins/'
axios.get('/bitcoin').then(resp=>{
    // console.log(resp)
    console.log(resp.data.market_data.current_price.usd)
})

const app = createApp(App)
app.use(router)
app.use(store)
app.mount('#app')
