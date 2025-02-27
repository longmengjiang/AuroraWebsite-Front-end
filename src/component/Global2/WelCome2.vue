<script setup>
defineOptions({
  name: 'WelCome2'
})
</script>

<template>
  <!-- 欢迎横幅 -->
  <div class="welcome">
    <span>welcome to join us</span>
  </div>
</template>

<style scoped>
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
</style>
