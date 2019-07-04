import Vue from 'vue'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale
// 可以在 nuxt.config.js 文件里的 css 配置, 也可以在此配置
// import 'iview/dist/styles/iview.css'
Vue.use(iView, { locale })
