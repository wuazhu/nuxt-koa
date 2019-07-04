<template>
  <div class="errors">
    <h1>应用错误码 {{ error.statusCode }}</h1>
    <h1 v-if="error.statusCode === 404">
      页面不存在
    </h1>
    <h1 v-else>
      应用发生错误异常
    </h1>
    <pre>
      {{ error }}
    </pre>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  props: ['error']
}
</script>
