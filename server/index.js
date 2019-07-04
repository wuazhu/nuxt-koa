const Koa = require('koa')
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

// koa 请求数据
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser')
const session = require('koa-session')
// const cors = require('koa-cors')
// const convert = require('koa-convert')
// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
const api = require('./routes/api')
const app = new Koa()

app.keys = ['some secret hurr']
const CONFIG = {
  key: 'cnpost', // cookie key (default is koa:sess)
  maxAge: 600000, // cookie的过期时间 maxAge in ms (default is 1 days)
  overwrite: true, // 是否可以overwrite    (默认default true)
  httpOnly: true, // cookie是否只有服务器端可以访问 httpOnly or not (default true)
  signed: true, // 签名默认true
  rolling: false, // 在每次请求时强行设置cookie，这将重置cookie过期时间（默认：false）
  renew: false // (boolean) renew session when session is nearly expired,
}
app.use(session(CONFIG, app))

// 使用路由中间件
app.use(router.routes())
// 解析 post
app.use(bodyParser())
// 跨域
// app.use(convert(cors()))
// 使用 api 中请求
app.use(api.routes(), api.allowedMethods())

config.dev = !(app.env === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  const {
    host = process.env.HOST || '127.0.0.1',
    port = process.env.PORT || 3000
  } = nuxt.options.server

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  app.use((ctx) => {
    ctx.status = 200
    ctx.respond = false // Bypass Koa's built-in response handling
    ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
    // let n = ctx.session.views || 0
    // ctx.session.views = ++n
    ctx.body = ctx.request.body
    ctx.req.session = ctx.session
    nuxt.render(ctx.req, ctx.res)
  })

  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
