<template>
  <div class="sub">
    <h1>ROUTES PAGE</h1>
    <H2>页面展示路由传参</H2>
    <p>
      <Button to="/routes">
        Go to routes
      </Button>
      <Button to="/routes/2">
        Go to /routes/2
      </Button>
      <Button to="/routes/3">
        Go to /routes/3
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
