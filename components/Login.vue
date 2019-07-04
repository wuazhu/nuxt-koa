<template>
  <div :class="prefix">
    <Form :model="loginForm" label-position="top">
      <FormItem label="用户名">
        <Input v-model="loginForm.username" />
      </FormItem>
      <FormItem label="密码">
        <Input
          v-model="loginForm.password"
          type="password"
        />
      </FormItem>
      <FormItem label="验证码">
        <Input v-model="loginForm.qrcode" />
      </FormItem>
      <Button
        type="primary"
        long
        @click="signIn"
      >
        Sign In~
      </Button>
      <Alert style="margin-top: 30px">
        友情提示:
        <template slot="desc">
          <p>管理员用户名: admin</p>
        </template>
      </Alert>
    </Form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import axios from 'axios'

export default {
  data() {
    return {
      prefix: 'login',
      loginForm: {
        username: '1',
        password: '2',
        qrcode: '3'
      }
    }
  },
  methods: {
    ...mapActions(['doLogin']),
    async signIn() {
      if (!this.loginForm.username || !this.loginForm.password || !this.loginForm.qrcode) {
        this.$Message.warning('用户名/密码/验证码不能为空')
        return
      }
      const res = await this.doLogin(this.loginForm)
      if (res.status === 200) {
        this.$router.push('/crm')
      } else {
        this.$Message.danger(res.message)
      }
    }
  }
}
</script>
