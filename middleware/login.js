export default function ({ store, redirect }) {
  if (!store.state.userinfo.logined) {
    return redirect('/')
  }
  // console.log(context)
  // context.userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
}
