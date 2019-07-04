<template>
  <div class="crmhome">
    <h1>YOU ARE NOT ADMINISTRATORS.</h1>
    <H2>不允许访问该页面! 需要管理员权限!</H2>
    <h3>
      <Button type="success" long to="/">
        重新登录
      </Button>
    </h3>
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
