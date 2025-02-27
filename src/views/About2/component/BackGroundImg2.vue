<script setup></script>

<template>
  <!-- 首页背景图 -->
  <div class="main">
    <div class="backgroundBox">
      <div class="backgroundImg"></div>
    </div>
  </div>
</template>

<style scoped>
.main {
  /* max-width: 1533px;
  min-width: 1440px; */
  /* width: 100%;
  height: 100%; */
  height: 700px;

  background: rgba(0, 0, 0, 0.2);
  box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.25);
}
.backgroundBox {
  min-width: 1533px;
  height: 700px;
  background: rgba(0, 0, 0, 1);
  position: relative;
}
.backgroundImg {
  width: 1200px;
  height: 600px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(https://img.js.design/assets/img/6696632443191e617f4e4aa3.jpg#790ec6036edbaa63c3c5145ced7d438e);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
