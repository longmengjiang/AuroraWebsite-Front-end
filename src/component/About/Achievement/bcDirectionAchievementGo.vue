<script setup></script>
<!-- 1999 -->
<template>
  <div class="All2">
    <div class="img">
      <img src="@/assets/img/Home/首页背景图.jpg" alt="" />
    </div>
    <div class="title">
      <div class="ch_title">网络安全</div>
      <div class="en_title">bxkjasbxaskubxax</div>
    </div>
    <router-link to="/achievementDirectionIntroduce" class="arrow">→</router-link>
  </div>
</template>

<style scoped>
.All2 {
  width: 617.95px;
  height: 157.97px;
  opacity: 1;
  /* background-color: pink; */
  background-color: #fff;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  margin: 20px;
  position: relative;
  padding-bottom: 20px;
  border-bottom: 1px solid #b2b2b2;
  /* border: 1px solid rgba(0, 0, 0, 1); */
}
.img {
  width: 159.45px;
  height: 157.97px;
  opacity: 1;
  border-radius: 8px;
  background: rgba(204, 204, 204, 1);
  padding: 8px;
}
.img img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
}
.ch_title {
  width: 230.32px;
  height: 53.45px;
  opacity: 1;
  /** 文本1 */
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
  margin-left: 20px;
}
.en_title {
  width: 200.52px;
  height: 39.89px;
  opacity: 1;
  /** 文本1 */
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 34.75px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.arrow {
  position: absolute;
  left: 92%;
  font-size: 24px;
  width: 50px;
  height: 50px;
  font-family: Source Han Sans CN;
  font-weight: 400;
}
</style>
