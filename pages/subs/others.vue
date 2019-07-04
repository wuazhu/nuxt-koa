<template>
  <div class="sub">
    <h1>SUB OTHERS PAGE</h1>
    <p>现在是 subs others 页面 </p>
    <p>
      <Button to="/subs/others/a">
        Go to subs/a
      </Button>
      <Button to="/subs/others/b">
        Go to others/b
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
  border: 1px solid seagreen;
}
</style>
