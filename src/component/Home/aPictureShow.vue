<script setup></script>

<template>
  <!-- 照片展示 -->
  <div class="photoShow">
    <div class="photoShow_title">
      <span class="ch_title">照片展示</span>
      <span class="en_title">Photo show</span>
    </div>
    <div class="photoShow_show">
      <img src="" class="show_1" />
      <img src="" class="show_2" />
      <img src="" class="show_3" />
      <img src="" class="show_4" />
      <!-- @/assets/img/首页背景图.jpg -->
    </div>
  </div>
</template>

<style scoped>
.photoShow {
  width: 1200px;
  height: 667.55px;
  display: flex;
  flex-direction: column;
  /* background-color: skyblue; */
  background-color: #fff;
  margin: 0 auto;
}

.photoShow .photoShow_title {
  margin: 0 370px;
  display: flex;
  flex-direction: column;
}
.photoShow .photoShow_title .ch_title {
  display: inline-block;
  text-align: center;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}
.photoShow .photoShow_title .en_title {
  display: inline-block;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 0.38);
}

.photoShow .photoShow_show {
  width: 100%;
  position: relative;
}
.photoShow .photoShow_show .show_1 {
  position: absolute;
  left: 16px;
  top: 51.57px;
  width: 330.76px;
  height: 436.98px;
  border-radius: 25px;
  background: #cccccc;
}
.photoShow .photoShow_show .show_2 {
  left: 360.77px;
  top: 51.57px;
  width: 388.1px;
  height: 202.96px;
  border-radius: 25px;
  /* background: #a84c4c; */
  background: #cccccc;
  position: absolute;
}
.photoShow .photoShow_show .show_3 {
  left: 765px;
  top: 51.57px;
  width: 386.77px;
  height: 202.96px;
  border-radius: 25px;
  /* background: pink; */
  background: #cccccc;
  position: absolute;
}
.photoShow .photoShow_show .show_4 {
  left: 360.77px;
  top: 266.26px;
  width: 794.23px;
  height: 218.29px;
  border-radius: 25px;
  /* background: black; */
  background: #cccccc;
  position: absolute;
}

/* 照片展示完毕 */
</style>
