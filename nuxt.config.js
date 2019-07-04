module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  // server: {
  //   port: 3000,
  //   host: '39.107.251.169'
  // },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#ff9900' },
  /*
   ** Global CSS
   */
  css: ['iview/dist/styles/iview.css', './assets/main.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {
      src: '@/plugins/iview',
      ssr: true
    },
    '@/plugins/filters',
    '@/plugins/axios'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    less: './assets/common.less'
  },
  router: {
    // 中间件
    middleware: 'auth',
    // 配置二级目录
    base: '',
    mode: 'history',
    scrollBehavior: (to, from, savedPosition) => {
      return { x: 0, y: 0 }
    }
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    // proxy: true
  },
  proxy: {
    // '/api': {
    //   target: 'http://aaa.com',
    //   pathRewrite: {
    //     '^/api': ''
    //   }
    // }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
