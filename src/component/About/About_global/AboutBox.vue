<script setup></script>
<!-- 1999 -->
<template>
  <div class="box_vue">
    <div class="title">
      <div class="ch_title">让每一个热爱技术的人都有一个归属地</div>
      <div class="en_title">Let everyone who loves technology have a place to belong</div>
    </div>
    <button @click="$router.push('/join')">Explore Now</button>
  </div>
</template>

<style scoped>
.box_vue {
  width: 711px;
  height: 80.79px;
  opacity: 1;
  border-radius: 22px;
  /* background: #e01a1a; */
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 553px;
  height: 20.2px;
}
.ch_title {
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.en_title {
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
button {
  width: 127px;
  height: 46.86px;
  opacity: 1;
  border-radius: 18px;
  background: #000000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /** 文本1 */
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 19.92px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;
}
</style>
