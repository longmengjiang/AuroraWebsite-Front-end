<script setup>
// import AchievementDetail from '@/components/About/Achievement/bcAchievementDetail'
// export default {
//   components: {
//     AchievementDetail,
//   },
// }
</script>
<!-- 1999 -->
<template>
  <div>
    <!-- 中文标题 -->
    <h1>我们的成就</h1>

    <div class="background">
      <!-- 最近获得 3个成就 -->
      <div class="achievement">
        <h6>最近获得</h6>
        <div class="achievement-list">
          <bcAchievementDetail></bcAchievementDetail>
          <bcAchievementDetail class="second"></bcAchievementDetail>
          <bcAchievementDetail></bcAchievementDetail>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  text-align: center;
  color: black;
  margin: 40px 0;
  font-size: 30px;
}

.background {
  /* width: 1516px; */
  width: 100%;
  margin: 0 auto;
  background: linear-gradient(360deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%);
}

.achievement {
  width: 1320px;
  /* margin: 40px 0; */
  margin: 20px auto 0;
  position: relative;
}
h6 {
  /* left: 112px;
  top: 1283px; */
  /* width: 198px; */
  /* height: 67px; */
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  /* line-height: 52.13px; */
  color: rgba(0, 0, 0, 0.5);
  text-align: left;
  vertical-align: top;
  margin: 0 0 50px -50px;
}

.achievement-list {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 20px;
}
.second {
  margin-top: -50px;
}
</style>
