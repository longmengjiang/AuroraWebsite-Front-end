<script setup>
import { ref, watch } from 'vue'

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

// 当前活跃的路由
const activeRouter = ref('首页')

// 其余路由
// 管理员后台  →  钥匙管理、打卡、报名情况、会议   4个页面
// 工作室工具  →  会议请假、上传照片、钥匙记录、刷题记、我的刷题记录、打卡情况、会议内容、发布成就   8个页面
const routers = ref([
  { name: '首页', path: '/home', id: 1 },
  { name: '加入我们', path: '/teamphoto', id: 2 },
  { name: '关于我们', path: '/achievement', id: 3 },
  { name: '工作室工具', path: '/activeShow', id: 4 },
  { name: '管理员后台页面', path: '/keyManage', id: 5 },
  { name: '登录', path: '/login', id: 6 }
])

watch(
  () => route.path,
  (newRoute) => {
    const target = routers.value.find((item) => item.path === newRoute)
    if (target) activeRouter.value = target.name
  },
  {
    immediate: true
  }
)

const setRouter = (route) => {
  activeRouter.value = route.name
  router.push(route.path)
}

const filterRouter = () => routers.value.filter((item) => item.name !== activeRouter.value)
</script>

<template>
  <div class="navBar">
    <div class="left-area">
      <span>{{ activeRouter }}</span>
      <div class="nav-line"></div>
    </div>

    <div class="right-area">
      <span
        v-for="router in filterRouter()"
        :key="router.id"
        @click="setRouter(router)"
        class="route-item"
      >
        {{ router.name }}
      </span>
    </div>
  </div>
</template>

<style scoped>
/* 导航栏 */
.navBar {
  min-width: 1440px;
  min-height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.left-area {
  min-width: 100px;
  max-width: 720px;
  height: 31px;
}

.left-area span {
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(56, 56, 56, 1);
  /* width: 54.43px; */
  /* height: 3px; */
}

/* .nav-line {
  height: 2px;
  background-color: #007bff;
  width: 100%;
} */

.right-area {
  width: 629.92px;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 57px;
}

.route-item {
  cursor: pointer;

  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 24.79px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
}

.route-item:hover {
  text-decoration: underline;
}
</style>
