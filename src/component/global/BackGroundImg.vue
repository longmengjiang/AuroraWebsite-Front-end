<script setup></script>
<!-- 1999 -->
<template>
  <!-- 首页背景图 -->
  <div class="background">
    <slot></slot>
  </div>
</template>

<style scoped>
.background {
  display: inline-block;
  width: 100%;
  height: 684px;
  margin: 0 auto;
  box-shadow: 4px 4px 4px 4px #c6c6c6;
  /* background-image: url(@/assets/img/首页背景图.jpg); */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
