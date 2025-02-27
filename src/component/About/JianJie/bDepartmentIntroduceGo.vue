<script setup></script>
<!-- 1999 -->
<template>
  <div class="Go">
    <div class="top">
      <slot name="img">slot：请只放入整个img标签</slot>
      <!-- <img src='@/assets/img/首页背景图.jpg' alt=''> -->
    </div>
    <div class="bottom">
      <div class="title">
        <div class="en_title"><slot name="en_title">English</slot></div>
        <div ref="zh_title" class="zh_title">
          <slot name="zh_title">中文</slot>
        </div>
        <router-link class="jiantou" to="/introduce">
          <!-- 点击传送 往 部门详情介绍页面，待处理 -->
          <div class="heng"></div>
          <div class="you"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Go {
  margin-left: 100px;
}
.top {
  width: 385px;
  height: 214px;
  opacity: 1;
  /* background: url(https://img.js.design/assets/img/669786b4a4202cb4cce857d3.png); */
  box-shadow: 5px 7px 10px rgba(0, 0, 0, 0.25);
}
.top img {
  width: 100%;
  height: 100%;
}
.bottom {
  width: 385px;
  height: 214px;
  opacity: 1;
  background: rgba(0, 0, 0, 1);
  box-shadow: 5px 7px 10px rgba(0, 0, 0, 0.25);
}
.title {
  width: 100%;
  /* margin: 0 auto; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
}
.en_title {
  /* width: 64px; */
  height: 39px;
  opacity: 1;
  /** 文本1 */
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 34.75px;
  color: rgba(255, 255, 255, 1);
  /* text-align: left; */
  text-align: center;
  vertical-align: top;
}
.zh_title {
  /* width: 50px; */
  height: 36px;
  opacity: 1;
  /** 文本1 */
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 34.75px;
  color: rgba(255, 255, 255, 1);
  /* text-align: left; */
  text-align: center;
  vertical-align: top;
}
.jiantou {
  position: relative;
  margin-top: 20px;
  width: 54.17px;
  height: 54.17px;
  opacity: 1;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 1);
}
.heng {
  position: absolute;
  left: 30%;
  top: 51%;
  width: 24.38px;
  height: 0px;
  opacity: 1;
  border: 1.9px solid rgba(255, 255, 255, 1);
}
.you {
  position: absolute;
  left: 42%;
  top: 36%;
  width: 17px;
  height: 17px;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(45deg);
}
</style>
