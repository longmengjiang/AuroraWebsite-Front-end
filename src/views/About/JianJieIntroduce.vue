<script setup></script>

<template>
  <div class="All">
    <div class="background">
      <WelcomeBar></WelcomeBar>
    </div>

    <img src="" alt="" />
    <baDepartmentIntroduce>
      <template #img>
        <img src="" alt="" />
      </template>
      <template #introduce1></template>
      <template #introduce2></template>
    </baDepartmentIntroduce>
  </div>
</template>

<!-- <script>
import WelcomeBar from '@/components/About/JianJie/bWelcomeBar'
import DepartmentIntroduce from '@/components/About/JianJie/baDepartmentIntroduce'

export default {
  components: {
    DepartmentIntroduce,
    WelcomeBar,
  },
}
</script> -->

<style scoped>
.All {
  height: 1500px;
}
.background {
  background: url('@/assets/img/Home/首页背景图.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 320px;
  margin-bottom: 40px;
}
.heng_bar {
  background-color: rgba(234, 234, 234, 0.7);
}
</style>
