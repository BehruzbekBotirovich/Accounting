import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './assets/tailwind.css';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd);

app.mount('#app')
AOS.init({
    once: true
});