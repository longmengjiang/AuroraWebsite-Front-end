<script setup></script>
<!-- 1999 -->
<template>
  <div class="big">
    <div class="background">
      <div class="main">
        <span><slot>Wonderful Sea</slot></span>
      </div>
    </div>

    <!-- 绿色箭头 -->
    <div class="arrow">
      <div class="vector"></div>
    </div>
  </div>
</template>

<style scoped>
.big {
  width: 434.51px;
  height: 673.45px;
  opacity: 1;
  position: relative;
}
.background {
  width: 434.51px;
  height: 607.33px;
  opacity: 1;
  background: rgba(196, 196, 196, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
}
.main {
  width: 434.51px;
  height: 248.8px;
  opacity: 0.7;
  background: rgba(40, 50, 47, 1);
  display: flex;
  justify-content: center;
  align-items: center;
}
.main span {
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.5px;
  line-height: 36px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;
}

/* 箭头 */
.arrow {
  width: 117.44px;
  height: 127.59px;
  opacity: 1;
  background: rgba(6, 150, 117, 0.9);
  border-radius: 50%;
  position: relative;
  margin-left: 150px;
  margin-top: -70px;
}
.vector {
  position: absolute;
  left: 30%;
  top: 42%;
  width: 30px;
  height: 30px;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(45deg);
}
</style>
