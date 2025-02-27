<script setup></script>
<!-- 1999 -->
<template>
  <div class="big">
    <div class="img">
      <slot name="img">slot：请放完整的img标签</slot>
      <!-- <img src='@/assets/img/首页背景图.jpg' alt='' /> -->
    </div>
    <div class="introduce">
      <div class="left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elementum eu praesent a sit
        mi nisl tincidunt consequat. At turpis facilisis semper neque
        <!-- <slot name='introduce1'>slot：请放置文字介绍1</slot> -->
      </div>
      <div class="right">
        or sit amet, consectetur adipiscing elit. Nibh hendrerit id mattis lacus. Nam dictum orci
        iaculis a. Justo.
        <!-- <slot name='introduce2'>slot：请放置文字介绍2</slot> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
.big {
  margin: 0 auto;
  /* width: 1516px;
  height: 703px; */
  width: 1190px;
  height: 403px;
  opacity: 1;
  border-radius: 39px;
  background: rgba(204, 204, 204, 0.3);
  display: flex;
  align-items: center;
  z-index: 999;
}
.img {
  /* width: 522.03px;
  height: 542.06px; */
  width: 359.5px;
  /* height: 333.87px; */
  height: 329.5px;
  opacity: 1;
  border-radius: 27px;
  background: rgba(204, 204, 204, 1);
  margin: 30px 0 30px 30px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 27px;
}
.introduce {
  width: 846.03px;
  /* height: 542.06px; */
  opacity: 1;
  /* border-radius: 27px; */
  /* background: rgba(204, 204, 204, 1); */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}
.left {
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
.right {
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
</style>
