<script setup></script>
<!-- 1999 -->

<template>
  <div class="All">
    <!-- 考虑做路由 -->
    <!-- <router-link></router-link> -->
    <span>2014</span>
    <span>2015</span>
    <span>2016</span>
    <span>2017</span>
    <span>2018</span>
    <span>2019</span>
    <span>2020</span>
    <span>2021</span>
    <span>2022</span>
    <span>2023</span>
    <span>……</span>
  </div>
</template>

<style scoped>
.All {
  left: 213px;
  top: 1242.2px;
  width: 1320px;
  margin: 0 auto;
  height: 75.59px;
  opacity: 1;
  display: flex;
  gap: 30px;
  justify-content: center;
  align-items: center;
}
span {
  width: 110px;
  /* width: 11%; */
  /** 文本3 */
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}

/*  停留/点击 效果  */
span:hover {
  /* width: 106px; */
  /* height: 61.46px; */
  opacity: 1;
  border-radius: 19px;
  background: rgba(0, 47, 36, 1);
  padding: 2px;
  color: #fff;
}
</style>
