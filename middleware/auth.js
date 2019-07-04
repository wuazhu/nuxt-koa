export default function ({ store, redirect, error }) {
  console.log('auth middleware', store.state)
  if (!store.state.authUser) {
    redirect('/')
    // error({
    //   message: 'You are not connected',
    //   statusCode: 401
    // })
  }
  // if (!store.state.userinfo.logined) {
  //   return redirect('/')
  // } else if (!store.state.userinfo.admin && store.state.userinfo.logined) {
  //   return redirect('/auth')
  // }
}
