<template>
  <div class="sub">
    路由传参默认页面 INDEX PAGE
    <ul>
      <li
        v-for="user in users"
        :key="user.id"
        @click="$router.push(`/routes/${user.id}`)"
      >
        {{ user.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(data)
    return { users: data }
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
