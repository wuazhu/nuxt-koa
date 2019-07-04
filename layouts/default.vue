<template>
  <div class="layout-portal">
    <Header>
      <div class="layout-logo  aaa">
        CRM
      </div>
      <div class="opearator float-right text-white">
        <Icon
          size="24"
          type="logo-apple"
          @click="showMsg('apple')"
        />
        <Icon
          size="24"
          type="ios-brush"
          @click="showMsg('pen')"
        />
        <Icon
          size="24"
          type="md-aperture"
          @click="showMsg('apple-pen')"
        />
        <span class="username">
          <!-- {{ username | empty }} -->
          啦啦啦
        </span>
        <Icon
          size="24"
          type="md-log-out"
          @click="logout"
        />
      </div>
    </Header>
    <Layout class="min-screen-height">
      <Sider hide-trigger :style="{background: '#fff'}">
        <Menu
          theme="light"
          width="auto"
          @on-select="menuClick"
        >
          <MenuItem name="/crm">
            <Icon type="ios-home" />
            HOME
          </MenuItem>
          <Submenu name="2">
            <template slot="title">
              <Icon type="ios-stats" />
              展开菜单带二级
            </template>
            <MenuGroup title="权限">
              <MenuItem name="/logined">
                需要登录
              </MenuItem>
              <MenuItem name="/admin">
                管理员权限
              </MenuItem>
            </MenuGroup>
            <MenuGroup title="错误">
              <MenuItem name="3-4">
                404页面找不到
              </MenuItem>
              <MenuItem name="3-5">
                其他错误
              </MenuItem>
            </MenuGroup>
          </Submenu>
          <Submenu name="3">
            <template slot="title">
              <Icon type="ios-analytics" />
              路由相关
            </template>
            <MenuItem name="/subs">
              嵌套路由
            </MenuItem>
            <MenuItem name="/routes">
              路由传参
            </MenuItem>
          </Submenu>
        </Menu>
      </Sider>
      <Layout :style="{padding: '0 24px 24px'}" class="over-yauto">
        <Breadcrumb :style="{margin: '24px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}" class="over-yauto">
          <nuxt />
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({
      username: state => state.userinfo.username
    })
  },
  destroyed() {
    this.logoutimer = null
  },
  methods: {
    ...mapMutations([
      'loginHandler'
    ]),
    menuClick(path) {
      this.$router.push({
        path
      })
    },
    async logout() {
      this.loginHandler({})
      await this.$Message.warning('地球即将毁灭', 2)
      this.logoutimer = setTimeout(() => {
        this.$router.push('/')
      }, 2000)
    },
    showMsg(name) {
      switch (name) {
        case 'apple':
          const msg = this.$Message.loading({
            content: 'I have an apple',
            duration: 0
          })
          setTimeout(msg, 3000)
          break
        case 'pen':
          this.$Message.warning('I have a pen')
          break
        case 'apple-pen':
          this.$Notice.error({
            title: 'APPLE-PEN',
            desc: ''
          })
          break
        default:
          this.$Message.warning('HAHA')
          break
      }
    }
  }
}
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.layout{
  /* border: 1px solid #d7dde4; */
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
.layout-portal {
  height: 100vh;
}
</style>
