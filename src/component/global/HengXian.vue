<script setup></script>
<!-- 1999 -->

<template>
  <div>
    <div class="title">
      <!-- 分类 -->
      <slot name="title">slot：小标题？</slot>
    </div>
    <div class="hengxian"></div>
  </div>
</template>

<style scoped>
.title {
  /* left: 90px;
  top: 1084px; */
  /* width: 198px; */
  width: 1516px;
  margin: 0 auto;
  height: 73.53px;
  opacity: 1;
  /** 文本1 */
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 0.5);
  text-align: left;
  vertical-align: top;
  margin-bottom: -10px;
}
.hengxian {
  /* left: -14px;
  top: 1156.43px; */
  /* width: 1516px; */
  width: 100%;
  height: 0px;
  opacity: 0.3;
  border: 1px solid rgba(0, 0, 0, 1);
  margin-bottom: 46px;
}
</style>
