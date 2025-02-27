<script setup>
defineOptions({
  name: 'TeamPhoto2'
})
import BackGroundImg2 from './component/BackGroundImg2.vue'

import { ref } from 'vue'

const chooseYear = ref([2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025])
const chooseDirection = ref([
  '全部',
  '设计',
  '网络安全',
  'Web前端',
  'Web后端',
  '嵌入式',
  '人工智能',
  '算法',
  '人工智能',
  '数据分析'
])
</script>

<template>
  <div class="main">
    <!-- 导航栏 -->
    <NavBar2></NavBar2>

    <!-- 背景图片 -->
    <BackGroundImg2></BackGroundImg2>

    <!-- 欢迎横幅 -->
    <WelCome2></WelCome2>

    <div class="content">
      <div class="aurora">
        <span class="aurora_desc">AURORA</span>
      </div>
      <div class="aurora_line"></div>
      <!-- 筛选 -->
      <div class="choose">
        <!-- 年份选择 -->
        <div class="choose-year">
          <div class="year-item" v-for="year in chooseYear" :key="year">{{ year }}</div>
        </div>

        <!-- 方向选择 -->
        <div class="choose-direction">
          <div class="direction-item" v-for="direction in chooseDirection" :key="direction">
            {{ direction }}
          </div>
        </div>
      </div>

      <!-- 照片合集 -->
      <div class="imgBox">
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
        <div class="img-item"></div>
      </div>
    </div>

    <!-- END -->
    <div class="END">END</div>
  </div>
</template>

<style scoped>
.main {
  position: relative;
  min-width: 1440px;
}

.content {
  min-width: 1200px;
  /* margin: 0 120px 0 120px; */
  /* background-color: pink; */
  margin: 0 auto;
}

/* aurora描述 */
.aurora {
  margin: 0 auto;
  width: 1200px;
  height: 54.46px;
  margin-top: 38px;
}
.aurora .aurora_desc {
  width: 146.64px;
  height: 54.46px;

  /** 文本1 */
  font-size: 16px;
  font-weight: 400;
  line-height: 23.17px;
  color: rgba(0, 0, 0, 0.5);
}
.aurora_line {
  position: absolute;
  margin-top: -20px;
  min-width: 100%;
  height: 1px;
  opacity: 0.3;

  border: 1px solid rgba(0, 0, 0, 1);
}

/* 筛选盒子 */
.choose {
  width: 1200px;
  height: 79px;
  /* background-color: skyblue; */
  /* margin-left: 169px; */
  margin: 0 auto;
}
.choose .choose-year {
  width: 1043.49px;
  height: 27px;
  opacity: 1;
  display: flex;
  align-items: center;
}
.choose .choose-year .year-item {
  margin-right: 5px;

  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  width: 54px;
  height: 25px;
  padding: 0 6px;
}
.choose .choose-year .year-item:hover {
  border-radius: 10.43px;
  background: rgba(0, 47, 36, 0.53);

  margin-right: 5px;

  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  width: 54px;
  height: 25px;
  padding: 0 6px;
}
.choose .choose-direction {
  width: 1158px;
  height: 27px;
  opacity: 1;
  margin-top: 13px;
  display: flex;
  align-items: center;
}
.choose .choose-direction .direction-item {
  margin-right: 10px;
  padding: 0 6px;
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
}
.choose .choose-direction .direction-item:hover {
  border-radius: 10.43px;
  background: rgba(0, 47, 36, 0.53);

  margin-right: 10px;
  padding: 0 6px;
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
}

/* 照片盒子 */
.imgBox {
  margin: 0 auto;
  width: 1200px;
  height: 1389.6px;
  display: flex;
  flex-wrap: wrap;
  gap: 143px 42px;
  margin-top: 33px;
}
.imgBox .img-item {
  width: 372px;
  height: 240px;
  background: rgba(204, 204, 204, 1);
}

/* END */
.END {
  width: 44px;
  height: 57px;
  margin: 162px auto 0px;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 27.54px;
  color: rgba(0, 0, 0, 0.7);
}
</style>
