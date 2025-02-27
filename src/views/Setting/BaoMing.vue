<script setup>
import { ref } from 'vue'

const list = ref()
</script>

<template>
  <div class="background">
    <div class="newBackgroundImg">
      <img src="@/assets/img/Setting/BaoMing_Welcome.jpg" alt="" />
    </div>

    <ConditionTable class="table" :list="list"></ConditionTable>
    <div class="gap" style="height: 200px"></div>
  </div>
</template>

<!-- <script>
// import axios from 'axios'
import ConditionTable from '@/components/Setting/ConditionTable'
export default {
  components: { ConditionTable },

  // 1.2 created (发送初始化渲染请求)
/*   async created() {
    this.$http.get('http://120.24.88.212:8080/imadministrator/settings/roster').then(res => {
      this.list = res.data.data
    })

    // 获取报名数据函数
    //  ai查的，明天再看
    // async () => {
    //   const session = localStorage.getItem('session')
    //   if (!session) {
    //     console.error('未登录，无法获取数据')
    //     return null
    //   }
    //   try {
    //     const response = await this.$http.get(
    //       'http://192.168.3.157:8081/settings/roster',
    //       {
    //         headers: {
    //           Authorization: `Bearer ${session}` // 将 token 加入请求头
    //         }
    //       }
    //     )
    //     return response.data // 返回获取到的报名数据
    //   } catch (error) {
    //     console.error('获取报名数据失败', error)
    //     return null // 获取数据失败
    //   }
    // },
    // await GetSignUp()
  } */
}
</script> -->

<style scoped>
.table {
  width: 1120px;
  background-color: pink;
  margin: 0 auto;
  border-radius: 4px;
  margin-top: 100px;
}

.newBackgroundImg {
  width: 100%;
}
img {
  width: 100%;
}
</style>
