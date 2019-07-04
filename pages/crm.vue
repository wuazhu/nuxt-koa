<template>
  <div class="crmhome">
    <h1>I AM CRM HOME PAGE</h1>
    <h2>PORTAL页面的默认页</h2>
    <H2>不需要任何权限, 不需要登录也能看到</H2>
  </div>
</template>
<script>
export default {
  layout: 'default'
}
</script>
<style scoped>
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: 100px;
  height: 30px;
  line-height: 30px;
  background: #fff;
  border-radius: 3px;
  text-align: center;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
