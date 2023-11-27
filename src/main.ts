import { createApp } from 'vue'
import type { App } from 'vue'
import rootApp from './App.vue'

import router from './router'
import store from './store'
import { globalRegister } from '@/global/index'

const app: App = createApp(rootApp)
// registerApp(app)

// //app.use支持传入一个函数
// app.use(function (app: App) {})
// //app.use支持传入一个对象，并在执行时默认调用install函数
// app.use({
//   install: function (app: App) {}
// })

/* 注册element-plus和其它 */
app.use(globalRegister) //app. use 内部执行时，会执行传入的函数并给这个函数传递 app 对象
app.use(router)
app.use(store)
app.mount('#app')
