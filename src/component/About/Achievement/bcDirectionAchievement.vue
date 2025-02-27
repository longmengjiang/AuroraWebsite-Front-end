<script setup>
// import DirectionAchievementGo from './bcDirectionAchievementGo'
// export default {
//   components: {
//     DirectionAchievementGo,
//   },
// }
</script>
<!-- 1999 -->
<template>
  <div class="All">
    <!-- 横线 -->
    <HengXian><template #title>分类</template></HengXian>

    <!-- 中文标题 -->
    <h1>各端成就</h1>

    <!-- 各端细分成就 -->
    <div class="allGo">
      <bcDirectionAchievementGo></bcDirectionAchievementGo>
      <bcDirectionAchievementGo></bcDirectionAchievementGo>
      <bcDirectionAchievementGo></bcDirectionAchievementGo>
      <bcDirectionAchievementGo></bcDirectionAchievementGo>
      <bcDirectionAchievementGo></bcDirectionAchievementGo>
      <bcDirectionAchievementGo></bcDirectionAchievementGo>
    </div>
  </div>
</template>

<style scoped>
.All {
  width: 1520px;
  margin: 50px auto;
}
h1 {
  text-align: center;
  color: black;
  margin: 40px 0;
  font-size: 30px;
}
.allGo {
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  margin: 0 100px;
  flex-wrap: wrap;
}
</style>
