<script setup></script>
<!-- 1999 -->
<template>
  <!-- 工作室介绍 -->
  <div class="studioIntroduce">
    <div class="studioIntroduce_title">
      <span class="ch_title">工作室介绍</span>
      <span class="en_title">Studio Introduction</span>
    </div>
    <div class="studioIntroduce_introduce">
      <div class="studioIntroduce_introduce1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elementum eu praesent a sit
        mi nisl tincidunt consequat. At turpis facilisis semper neque
      </div>
      <div class="studioIntroduce_introduce2">
        or sit amet, consectetur adipiscing elit. Nibh hendrerit id mattis lacus. Nam dictum orci
        iaculis a. Justo.
      </div>
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
  height: 489px;
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
.studioIntroduce .studioIntroduce_introduce {
  margin: 0 auto;
  padding-left: 40px;
  display: flex;
  gap: 40px;
  position: absolute;
  left: 23.5%;
  top: 230px;
  margin-bottom: 40px;
  width: 55%;
  height: 230px;
  border-radius: 25px;
  /* background: #9d3838; */
}
.studioIntroduce .studioIntroduce_introduce .studioIntroduce_introduce1 {
  /* left: 641px;
  top: 1136.82px; */
  width: 305.44px;
  /* height: 56.65px; */
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 32px;
  color: rgba(116, 116, 116, 1);
  text-align: left;
  vertical-align: top;
}
.studioIntroduce .studioIntroduce_introduce .studioIntroduce_introduce2 {
  /* left: 969.42px;
  top: 1138.11px; */
  width: 359.5px;
  /* height: 110.72px; */
  opacity: 1;
  /** 文本1 */
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 43.2px;
  color: rgba(51, 51, 51, 1);
  text-align: left;
  vertical-align: top;
}

/* 工作室介绍完成 */
</style>
