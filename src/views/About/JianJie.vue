<script setup></script>

<template>
  <div>
    <!-- 导航栏 -->
    <NavBar2></NavBar2>

    <!-- 背景图 -->
    <BackGroundImg class="bgi">
      <!-- 背景图装饰 -->
      <div class="bgi_decorate">
        <AboutContext />
        <AboutBox />
      </div>
    </BackGroundImg>

    <!-- 横栏 （welcome to join us） -->
    <WelcomeBar></WelcomeBar>

    <!-- 工作室介绍 -->
    <bStudioIntroduce></bStudioIntroduce>
    <!-- <Swiper></Swiper> -->

    <!-- 轮播图片 -->
    <bPicture></bPicture>

    <!-- 部门介绍 -->
    <bDepartmentIntroduce></bDepartmentIntroduce>

    <!-- 测试用：部门介绍详情 ba -->
    <!-- <baDepartmentIntroduce></baDepartmentIntroduce> -->

    <!-- 尝试 接收显示 点击部门介绍后的页面 -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.bgi {
  position: relative;
  background-image: url('@/assets/img/About/JianJieBgi.jpg');
}
.bgi_decorate {
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: flex-start;
  left: 55%;
  top: 200px;
  margin: 0 auto;
}
</style>
