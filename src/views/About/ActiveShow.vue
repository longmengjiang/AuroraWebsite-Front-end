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

    <!-- 中英文标题 -->
    <IntroduceTitle>
      <template #ch_title> 团建活动展示 </template>
      <template #en_title> Team building activities showcased </template>
    </IntroduceTitle>

    <!-- AURORA + 横线 -->
    <HengXian>
      <template #title>AURORA</template>
    </HengXian>

    <!-- 年级 + 图片 -->
    <!-- 后续再添加路由操控 -->
    <AllGrade></AllGrade>
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
