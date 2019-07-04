<template>
  <div class="sub">
    <h1>SUB DEFAULT PAGE</h1>
    <H2>页面展示路由嵌套关系</H2>
    <p> 现在是 subs 默认主页面, 带有一个路由出口</p>
    <p>
      <Button to="/subs">
        Go to subs
      </Button>
      <Button to="/subs/others">
        Go to others
      </Button>
    </p>
    <nuxt />
  </div>
</template>
<script>
export default {
  layout: 'default'
}
</script>
<style scoped>
.sub {
  border: 1px solid salmon;
  padding: 10px;
  margin: 10px 0;
}
</style>
