<script setup>
defineOptions({
  name: 'myAchievement'
})
</script>

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

    <!-- 我们的成就 -->
    <bcOurAchievement></bcOurAchievement>

    <!-- 各端成就 -->
    <bcDirectionAchievement></bcDirectionAchievement>
  </div>
</template>

<!-- <script>
import OurAchievement from '@/components/About/Achievement/bcOurAchievement'
import DirectionAchievement from '@/components/About/Achievement/bcDirectionAchievement'
</script> -->

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
