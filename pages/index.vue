<template>
  <section class="container">
    <Login />
  </section>
</template>
<script>
import Login from '~/components/Login'
export default {
  layout: 'login',
  components: {
    Login
  }
}
</script>
<style lang="less">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  // align-items: center;
  background: url('https://file.iviewui.com/dist/dc1e877946dd4568404a432623fca8fc.jpg') no-repeat;
  background-size: 100% auto;
  .login {
    padding-left: 10%;
    padding-top: 10%;
    width: 400px;
  }
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}

@media screen and (min-width: 800px){
  .container .login {
    padding-top: 15%;
  }
}
</style>
