<script setup>
import { ref } from 'vue'
defineOptions({
  name: 'SetTing'
})

const account_list = ref({
  name: 'root',
  placeholder: '请输入账号'
})
// 账号 root 密码 jiguang666
const password_list = ref({
  name: 'jiguang666',
  placeholder: '请输入密码'
})

const Login = async () => {
  const A = await this.$http('http://192.168.3.157:8080/imadministrator/settings/roster')
  console.log(A)
}
</script>

<template>
  <div class="background">
    <!-- Welcome to join us -->
    <WelcomeBar class="welcomeBar"></WelcomeBar>

    <div class="backgroundImg"></div>

    <!-- 表格 -->
    <form action="">
      <InPut v-model="account_list">
        <template #ch>账号</template>
        <template #en>ID</template>
      </InPut>
      <InPut v-model="password_list">
        <template #ch>密码</template>
        <template #en>Password</template>
      </InPut>

      <ArrowGo @login="Login"></ArrowGo>

      <DecoratePoint class="DecoratePoint1"></DecoratePoint>
      <DecoratePoint class="DecoratePoint2"></DecoratePoint>
    </form>
  </div>
</template>

<!-- <script>
// import { PostLogin } from '@/api/index'
export default {
  methods: {
    // async Login() {
    //   await PostLogin(this.account, this.password)
    // }

    async Login() {
      const A = await this.$http('http://192.168.3.157:8080/imadministrator/settings/roster')
      console.log(A)
    }

    // async Login() {
    //   //  测试成功可以登录
    //   await this.$http({
    //     url: 'http://192.168.3.157:8080/settings/login',
    //     method: 'post',
    //     params: {
    //       account: this.account,
    //       password: this.password
    //     }
    //   }).then(res => {
    //     console.log(res)
    //     // 假设后端返回了一个 token   是session
    //     // const session = res.data.session

    //     // // 将 session 存储在 localStorage 中
    //     // localStorage.setItem('session', session)
    //     // console.log(session)

    //     // 跳转到首页
    //     // this.$router.push({ path: '/baoming' })
    //   })
    // }
  }
}
</script> -->

<style scoped>
.background {
  height: 100%;
}
.backgroundImg {
  position: absolute;
  width: 100%;
  height: 108%;
  background-image: url(@/assets/img/Setting/SettingBgi.jpg);
  filter: brightness(0.3);
  background-position: 30% 70%;
}
.welcomeBar {
  /*  为什么这里设置不生效  */
  background-color: #58595b;
  color: red;
}
form {
  width: 1320px;
  height: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  position: relative;
  margin-top: 100px;
  padding: 20px;
}
.DecoratePoint1 {
  left: 0;
  top: 70%;
}
.DecoratePoint2 {
  right: 2%;
  top: -10%;
}
</style>
