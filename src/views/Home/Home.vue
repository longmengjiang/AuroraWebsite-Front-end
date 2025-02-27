<script setup>
defineOptions({
  name: 'myHome'
})
</script>

<template>
  <div>
    <!-- 导航栏 -->
    <NavBar2></NavBar2>

    <!-- 首页背景图 -->
    <!-- <div class="background"></div> -->
    <BackGroundImg>
      <img src="@/assets/img/Home/Home_Bgi_More.jpg" alt="" />
    </BackGroundImg>

    <!-- 横栏 （welcome to join us） -->
    <WelcomeBar></WelcomeBar>

    <div class="decorate_picture">
      <!-- 装饰点1 -->
      <DecoratePoint class="DecoratePoint1"></DecoratePoint>

      <!-- 装饰点2 -->
      <DecoratePoint class="DecoratePoint2"></DecoratePoint>

      <!-- 照片展示 -->
      <a-picture-show></a-picture-show>
    </div>

    <!-- 分界线 -->
    <div style="width: 100%; height: 1px; background-color: #d2d0d0"></div>

    <!-- 工作室介绍 -->
    <aStudioIntroduce></aStudioIntroduce>
  </div>
</template>

<!-- 自适应问题？ -->

<style scoped>
.background {
  position: relative;
  background-image: url('@/assets/img/Home/首页背景图.jpg');
}
.background img {
  position: absolute;
  left: 75%;
  top: 88.8%;
  cursor: pointer;
}
.decorate_picture {
  width: 1200px;
  margin: 0 auto;
  position: relative;
}
.DecoratePoint1 {
  position: absolute;
  top: 760px;
  left: 1040px;
}
.DecoratePoint2 {
  position: absolute;
  top: 74%;
  right: 80%;
}
</style>
