<script setup></script>
<!-- 1999 -->
<template>
  <div class="decorate">
    <div><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div><span></span><span></span><span></span><span></span><span></span><span></span></div>
    <div><span></span><span></span><span></span><span></span><span></span><span></span></div>
  </div>
</template>

<style scoped>
/* body {
  position: relative;
} */

/* 装饰点1 */
.decorate {
  position: absolute;
  /* left: 34.5%;
  top: 2060px; */
  width: 330px;
  height: 319px;
  opacity: 0.5;
  display: flex;
  gap: 55.6px;
  flex-direction: column;
}
.decorate div {
  display: flex;
  gap: 57px;
}

.decorate span {
  display: inline-block;
  width: 7.18px;
  height: 6.94px;
  opacity: 1;
  background: #ccc;
  border-radius: 50%;
}
</style>
