<!-- 1999 -->
<script setup>
defineOptions({
  name: 'AllIntroduce'
})
</script>

<template>
  <!-- *** 介绍 组件 -->
  <div class="studioIntroduce">
    <div class="studioIntroduce_title">
      <span class="ch_title"><slot name="ch_title">中文</slot></span>
      <span class="en_title"><slot name="en_title">English</slot></span>
    </div>
  </div>
</template>

<style scoped>
.studioIntroduce {
  width: 1369px;
  margin: 0 auto;
  position: relative;
}
.studioIntroduce .studioIntroduce_title {
  width: 100%;
  height: 250px;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
}
.studioIntroduce .studioIntroduce_title .ch_title {
  display: inline-block;
  height: 61px;
  text-align: center;
  font-size: 36px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}
.studioIntroduce .studioIntroduce_title .en_title {
  display: inline-block;
  text-align: center;
  height: 42.09px;
  font-size: 20px;
  font-weight: 400;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 0.38);
}
</style>
