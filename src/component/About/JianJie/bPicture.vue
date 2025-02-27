<script setup>
// export default {
//   name: 'myPicture',
// }
</script>
<!-- 1999 -->
<template>
  <div class="all_picture">
    <img src="@/assets/img/Home/首页背景图.jpg" class="picture1" alt="" />
    <img src="@/assets/img/Home/首页背景图.jpg" class="picture2" alt="" />
    <img src="@/assets/img/Home/首页背景图.jpg" class="picture3" alt="" />
  </div>
</template>

<style scoped>
.all_picture {
  display: flex;
  /* justify-content: space-around; */
  /* align-items: center; */
  /* height: 100%; */
  /* width: 1920px; */
  width: 100%;
  background-color: pink;
}
.picture1 {
  display: inline-block;
  height: 33.3%;
  width: 33.3%;
}
.picture2 {
  display: inline-block;
  height: 33.3%;
  width: 33.3%;
}
.picture3 {
  display: inline-block;
  height: 33.3%;
  width: 33.3%;
}
</style>
