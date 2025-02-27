<script setup></script>

<template>
  <div>
    <!-- 背景图 -->
    <BackGroundImg class="bgi">
      <!-- 背景图装饰 -->
      <div class="bgi_decorate">
        <AboutContext />
        <AboutBox />
      </div>
    </BackGroundImg>

    <!-- Welcome to join us -->
    <WelcomeBar></WelcomeBar>

    <!-- 背景图片路径  @/assets/img/backgroundImg2 -->

    <!-- 中英文标题 -->
    <IntroduceTitle>
      <template #ch_title> 团队照片 </template>
      <template #en_title> Team Photos </template>
    </IntroduceTitle>

    <!-- AURORA + 横线 -->
    <HengXian>
      <template #title>AURORA</template>
    </HengXian>

    <!-- 年级 + 方向 → 分类 -->
    <!-- 后续再添加路由操控 -->
    <AllGrade></AllGrade>
    <AllDirection></AllDirection>
    <AllPhoto></AllPhoto>
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
