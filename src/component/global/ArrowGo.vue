<script setup>
const emit = defineEmits(['login'])
const JoinGetValue = () => {
  emit('login')
}
</script>
<!-- 1999 -->

<template>
  <div @click="JoinGetValue">
    <!-- <router-link class='jiantou' to='/introduce'>
      点击传送 往 部门详情介绍页面，待处理
      <div class='heng'></div>
      <div class='you'></div>
    </router-link> -->
    <div class="jiantou" to="/introduce">
      <!-- 点击传送 往 *** 页面，待处理 -->
      <div class="you"></div>
    </div>
  </div>
</template>

<style scoped>
.jiantou {
  position: relative;
  margin-top: 20px;
  width: 100px;
  height: 100px;
  opacity: 1;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 1);
  background-color: #2ca081;
  cursor: pointer;
}
.you {
  position: absolute;
  left: 28%;
  top: 36%;
  width: 27px;
  height: 27px;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(45deg);
}
</style>
