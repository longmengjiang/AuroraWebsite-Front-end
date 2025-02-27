<script setup>
defineOptions({
  name: 'myRecord2'
})
import { ref } from 'vue'
// const routers = ref([
//   { name: 'A', subRoute: 'a' },
//   { name: 'B', subRoute: 'b' },
//   { name: 'C', subRoute: 'c' },
//   { name: 'D', subRoute: 'd' },
//   { name: 'E', subRoute: 'e' }
// ])
// const activeRouter = ref({ name: 'A', subRoute: 'a' })

// const setRouter = (router) => {
//   activeRouter.value = router
// }
// const filterRouter = (router) =>
//   routers.value.filter((item) => item.name !== activeRouter.value.name)

import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

// 当前活跃的路由
const activeRouter = ref('首页')

// 其余路由
const routers = ref([
  { name: '首页', path: '/home', id: 1 },
  { name: '加入我们', path: '/join', id: 2 },
  { name: '关于我们', path: 'jianjie', id: 3 },
  { name: '工作室工具', path: 'record', id: 4 },
  { name: '登录', path: 'login', id: 5 }
])

const setRouter = (route) => {
  activeRouter.value = route
  router.push(route.path)
}

const filterRouter = () => routers.value.filter((item) => item.name !== activeRouter.value)
</script>

<template>
  <div class="main">
    <!-- 导航栏 -->
    <!-- 逻辑后面再写 -->
    <!-- <div class="navBar">
      <div class="left-area">
        <span>{{ activeRouter }}</span>
        <span class="sub-route">{{ activeRouter }}</span>
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
    </div> -->

    <NavBar2></NavBar2>

    <!-- 欢迎横幅 -->
    <div class="welcome">
      <span>welcome to join us</span>
    </div>

    <!-- 侧栏 + 主体内容 -->
    <div class="main-content">
      <!-- 侧栏 -->
      <div class="sideBar"></div>

      <!-- 主体内容 -->
      <div class="content">
        <!-- 刷题记录 -->
        <div class="record">
          <!-- 左侧描述 -->
          <div class="describe">
            <div class="ch_des">刷题记录</div>
            <div class="en_des">My brushing questions</div>
          </div>

          <!-- 右侧未通过 -->
          <div class="history">未通过 ></div>
        </div>

        <!-- 记录内容 -->
        <div class="record-content">
          <div class="record-item">
            <span class="avatar"></span>
            <span class="name">Peter</span>
            <span class="date">2025年2月2日</span>
            <span class="more">
              <span class="more-item"></span>
              <span class="more-item"></span>
              <span class="more-item"></span>
            </span>
          </div>
          <div class="record-item">
            <span class="avatar"></span>
            <span class="name">Peter</span>
            <span class="date">2025年2月2日</span>
            <span class="more">
              <span class="more-item"></span>
              <span class="more-item"></span>
              <span class="more-item"></span>
            </span>
          </div>
          <div class="record-item">
            <span class="avatar"></span>
            <span class="name">Peter</span>
            <span class="date">2025年2月2日</span>
            <span class="more">
              <span class="more-item"></span>
              <span class="more-item"></span>
              <span class="more-item"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  min-width: 1440px;
  height: 931px;
  background-color: #fff;
}

/* 导航栏 */
/* .navBar {
  min-width: 1440px;
  min-height: 60px;
  background-color: #fff;
}

.left-area {
  text-align: left;
}

.sub-route {
  display: block;
  font-size: 0.75em;
  color: #6c757d;
}

.nav-line {
  height: 2px;
  background-color: #007bff;
  width: 100%;
}

.right-area {
  display: flex;
  gap: 15px;
} */

.route-item {
  cursor: pointer;
  color: #007bff;
  text-decoration: none;
}

.route-item:hover {
  text-decoration: underline;
}

/* 欢迎横幅 */
.welcome {
  min-width: 1440px;
  height: 87px;
  background: rgba(204, 204, 204, 0.42);

  display: flex;
  justify-content: center;
  align-items: center;
}
.welcome span {
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(166, 166, 166, 1);
}

/* 侧栏 + 主体内容 */
.main-content {
  display: flex;
}
.sideBar {
  width: 70px;
  height: 779px;
  background: rgba(0, 47, 36, 1);
}

/* 刷题记录 */
.record {
  width: 1100px;
  margin: 26px 345px 20px 69px;
  display: flex;
  justify-content: space-around;
  background-color: skyblue;
}

.describe {
  width: 100%;
  display: flex;
}
.ch_des {
  margin-right: 10px;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 37.65px;
  color: rgba(0, 0, 0, 1);
}
.en_des {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 37.65px;
  color: rgba(0, 0, 0, 0.5);
}

.record .history {
  min-width: 130px;
  height: 45px;
  background-color: pink;
  border-radius: 23px;
  background: rgba(43, 41, 41, 0);
  border: 1px solid rgba(0, 0, 0, 0.28);
  text-align: center;
  line-height: 45px;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.35);
}

/* 记录内容 */
.record-content {
  width: 942px;
  height: 300px;
  margin: 0 139px 0 69px;

  display: flex;
  flex-direction: column;
  gap: 7px;
  background-color: skyblue;
}

.record-content .record-item {
  width: 942px;
  height: 94px;
  background-color: pink;
  border-radius: 45px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.record-item .avatar {
  margin-left: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(204, 204, 204, 1);
}
.record-item .name {
  margin-left: 31px;
  width: 133px;
  height: 30px;
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.record-item .date {
  margin-left: 9px;
  width: 166px;
  height: 30px;
  opacity: 1;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.record-item .more {
  margin-left: 307px;
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.record-item .more .more-item {
  /* 三个点 */
  width: 6.75px;
  height: 6.75px;
  border-radius: 50%;
  background: rgba(51, 51, 51, 1);
}
</style>
