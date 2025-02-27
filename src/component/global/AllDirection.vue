<script setup></script>
<!-- 1999 -->
<template>
  <div class="All">
    <!-- 考虑做路由 -->
    <!-- <router-link></router-link> -->
    <span>全部</span>
    <span>设计</span>
    <span>网络安全</span>
    <span>Web前端</span>
    <span>Web后端</span>
    <span>嵌入式</span>
    <span>人工智能</span>
    <span>算法</span>
    <span>数据分析</span>
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
  justify-content: space-around;
  align-items: center;
}
span {
  /* width: 110px; */
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
