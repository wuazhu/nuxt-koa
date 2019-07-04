const router = require('koa-router')()

router.prefix('/api')

// 登录接口
router.post('/login', (ctx) => {
  const { username } = ctx.request.body
  if (username) {
    ctx.status = 200
    const session = {
      username,
      admin: username === 'admin'
    }
    ctx.session.authUser = session
    console.log('ctx.session', ctx.session)
    return (ctx.body = JSON.stringify({
      status: 200,
      message: '666',
      data: session
    }))
  }
})
// 登出
router.post('/logout', async (ctx) => {
  ctx.session.authUser = null
  console.log(ctx.req)
})
// 查询用户
router.get('/users', async (ctx) => {
  console.log(ctx.req)
})

module.exports = router
