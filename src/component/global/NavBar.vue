<script setup>
import { ref, onMounted } from 'vue'

// 1. 获取当前路由模块
// onMounted(() => {
//   active.value = $route.name // 设置当前活跃的链接
//   // this.active = this.$route.name // 设置当前活跃的链接  这是vue2的写法
// })

// 2. 设置初始数据模块
const active = ref('home')
const isDisplay1 = ref(false)
const isDisplay2 = ref(false)

// 3. 设置事件模块
const mouseenter1 = () => {
  isDisplay1.value = true
}
const mouseleave1 = () => {
  isDisplay1.value = false
}
const mouseenter2 = () => {
  isDisplay2.value = true
}
const mouseleave2 = () => {
  isDisplay2.value = false
}
const setActive = (link) => {
  active.value = link // 设置当前活跃的链接
}
</script>

<template>
  <!-- 导航栏 -->
  <!-- 残留问题：选定的导航栏的下划线的高亮显示 -->
  <!-- 残留问题已经完成 -->
  <div class="navBar">
    <ul class="navBar_title" id="myList">
      <!-- 首页 -->
      <div @click="setActive('home')">
        <router-link to="home" id="1" class="navBar_title_li">
          首页
          <div v-if="active === 'home'" class="navBar_title_li_bottom"></div>
        </router-link>
      </div>

      <!-- 关于我们 -->
      <div
        class="li_about_us_box"
        @click="(mouseleave1, setActive('jianjie'))"
        @mouseleave="mouseleave1"
        @mouseenter="mouseenter1"
      >
        <router-link to="jianjie" id="2" class="navBar_title_li li_about_us">
          关于我们
          <div v-if="active === 'jianjie'" class="navBar_title_li_bottom"></div>
        </router-link>
        <ul v-if="isDisplay1" @mouseleave="mouseleave1" @click="mouseleave1">
          <router-link to="/jianjie" class="left">
            <span>简介</span>
            <span>></span>
          </router-link>
          <hr color="" />

          <router-link to="/teamphoto" class="left">
            <span>团队照片</span>
            <span>></span>
          </router-link>
          <hr color="" />

          <router-link to="/achievement" class="left">
            <span>成就</span>
            <span>></span>
          </router-link>
          <hr color="" />

          <router-link to="/activeshow" class="left">
            <span>团建活动展示</span>
            <span>></span>
          </router-link>
        </ul>
      </div>

      <!-- 加入我们 -->
      <div @click="setActive('join')">
        <router-link to="join" id="3" class="navBar_title_li" @click="this.$router.push('/join')">
          加入我们
          <div v-if="active === 'join'" class="navBar_title_li_bottom"></div>
        </router-link>
      </div>

      <!-- 设置 -->
      <div
        class="li_setting_box"
        @mouseenter="mouseenter2"
        @click="(mouseleave2, setActive('denglu'))"
        @mouseleave="mouseleave2"
      >
        <router-link to="denglu" id="4" class="navBar_title_li">
          设置
          <div v-if="active === 'denglu'" class="navBar_title_li_bottom"></div>
        </router-link>
        <ul v-if="isDisplay2" @click="mouseleave2" @mouseleave="mouseleave2">
          <router-link to="/denglu" class="left">
            <span>登录</span>
            <span>></span>
          </router-link>
          <hr color="" />

          <router-link to="/pushphoto" class="left">
            <span>上传照片</span>
            <span>></span>
          </router-link>
          <hr color="" />

          <router-link to="/postachievement" class="left">
            <span>发布成就</span>
            <span>></span>
          </router-link>
          <hr color="" />

          <router-link to="/activeshow" class="left">
            <span>展现团建风采</span>
            <span>></span>
          </router-link>
          <hr color="" />

          <router-link to="/baoming" class="left">
            <span>报名情况</span>
            <span>></span>
          </router-link>
        </ul>
      </div>
    </ul>
  </div>
</template>

<style scoped>
/* 导航栏 */
.navBar {
  width: 100%;
  /* opacity: 0.9; */
}

.navBar .navBar_title {
  width: 100%;
  height: 80px;
  line-height: 80px;
  display: flex;
  justify-content: center;
  background-color: black;
}
/* 导航栏 字体36改26px 2024 09 02 */
.navBar .navBar_title .navBar_title_li {
  padding: 0 120px; /* 调整导航栏问题 */
  /* width: 60px; */ /* 原宽度 300px */
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  line-height: 72px;
  color: rgba(255, 255, 255, 1); /* 等会不用取消注释 */
  position: relative;
}
.navBar .navBar_title .navBar_title_li .navBar_title_li_bottom {
  position: absolute;
  top: 96%;
  left: 40%;
  width: 60px;
  height: 4.67px;
  background: #fff;
  /* display: none; */
}
.navBar .navBar_title .navBar_title_li:hover {
  color: #fff;
}

/* 首页 */
.navBar .navBar_title .li_home_box {
  position: relative;
}
.navBar .navBar_title .li_home_box ul {
  z-index: 999;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0px;
  left: 50px;
}

/* 关于我们 */
.navBar .navBar_title .li_about_us_box {
  position: relative;
}
.navBar .navBar_title .li_about_us_box ul {
  z-index: 999;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0px;
  left: 50px;
  top: 80px;
  width: 283px;
  /* height: 408.27px; */
  opacity: 0.8;
  border-radius: 11px;
  background: #000000;
  /* background-color: pink; */
}
.navBar .navBar_title .li_about_us_box ul a {
  display: inline-block;
  display: flex;
  justify-content: space-between;
}
/* 关于我们里ul高亮的显示 */
.navBar .navBar_title .li_about_us_box ul a:hover {
  background-color: #554c4c;
}
.navBar .navBar_title .li_about_us_box ul a span {
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 0px;
  /* * line-height: 99.13px; * 这里是被注释的 */
  color: rgba(255, 255, 255, 1);
  margin: 0 20px;
}

/* 设置 */
.navBar .navBar_title .li_setting_box {
  position: relative;
}
.navBar .navBar_title .li_setting_box ul {
  z-index: 999;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0px;
  left: 50px;
  top: 80px;
  width: 283px;
  /* height: 510.27px; */
  /* height: 400px; */
  opacity: 0.8;
  border-radius: 11px;
  background: #000000;
  /* background-color: pink; */
}
.navBar .navBar_title .li_setting_box ul a {
  display: inline-block;
  display: flex;
  justify-content: space-between;
}
/* 设置里ul高亮的显示 */
.navBar .navBar_title .li_setting_box ul a:hover {
  background-color: #554c4c;
}
.navBar .navBar_title .li_setting_box ul a span {
  font-size: 26px;
  font-weight: 400;
  letter-spacing: 0px;
  /* * line-height: 99.13px; * 这里是被注释的 */
  color: rgba(255, 255, 255, 1);
  margin: 0 20px;
}
.navBar .background {
  display: block;
  margin: 0 auto;
  width: 100%;
  height: 1400px;
  box-shadow: 4px 12px 12px 12px #000;
}
</style>
