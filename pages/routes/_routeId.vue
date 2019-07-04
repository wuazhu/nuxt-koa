<template>
  <div class="sub">
    _routeId 页面 入参为: {{ routeId }}
    <!-- <pre>{{ $route }}</pre> -->
    <h1>username: {{ username }}</h1>
    <div>phone: {{ phone }}</div>
    <div>website: {{ website }}</div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  validate({ params }) {
    return !isNaN(+params.routeId)
  },
  data() {
    return {
      test: 'test'
    }
  },
  async asyncData({ params, error }) {
    try {
      const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${params.routeId}`)
      return {
        ...data,
        routeId: params.routeId
      }
    } catch (e) {
      error({ message: '网络错误', statusCode: 500 })
    }
  }
}
</script>
<style scoped>
.sub {
  border: 1px solid salmon;
  padding: 10px;
  margin: 10px 0;
}
</style>
