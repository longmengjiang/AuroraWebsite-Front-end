import { createApp } from 'vue'
import pinia from '@/stores'
import App from '@/App.vue'
import router from '@/router'
import '@/assets/css/initialize.css'

import IntroduceTitle from '@/component/global/IntroduceTitle.vue'
import BackGroundImg from '@/component/global/BackGroundImg.vue'
import WelcomeBar from '@/component/global/WelcomeBar.vue'
import HengXian from '@/component/global/HengXian.vue'
import AllGrade from '@/component/global/AllGrade.vue'
import AllDirection from '@/component/global/AllDirection.vue'
import AllPhoto from '@/component/global/AllPhoto.vue'
import Input from '@/component/global/Input.vue'
import ArrowGo from '@/component/global/ArrowGo.vue'
import DecoratePoint from '@/component/global/DecoratePoint.vue'
import AvaTar from '@/component/Setting/AvaTar.vue'
import AboutContext from '@/component/About/About_global/AboutContext.vue'
import AboutBox from '@/component/About/About_global/AboutBox.vue'
import axios from 'axios'

import NavBar2 from '@/component/Global2/NavBar2.vue'
import WelCome2 from '@/component/Global2/WelCome2.vue'
import DecoratePoint2 from '@/component/Global2/DecoratePoint2.vue'

const app = createApp(App)

// 注册全局组件
app.component('IntroduceTitle', IntroduceTitle)
app.component('BackGroundImg', BackGroundImg)
app.component('WelcomeBar', WelcomeBar)
app.component('HengXian', HengXian)
app.component('AllGrade', AllGrade)
app.component('AllDirection', AllDirection)
app.component('AllPhoto', AllPhoto)
app.component('InPut', Input)
app.component('ArrowGo', ArrowGo)
app.component('DecoratePoint', DecoratePoint)
app.component('AvaTar', AvaTar)
app.component('AboutContext', AboutContext)
app.component('AboutBox', AboutBox)

app.component('NavBar2', NavBar2)
app.component('WelCome2', WelCome2)
app.component('DecoratePoint2', DecoratePoint2)

// 设置 axios 到实例上
app.config.globalProperties.$http = axios

app.use(pinia)
app.use(router)
app.mount('#app')
