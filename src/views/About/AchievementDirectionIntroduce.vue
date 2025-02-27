<script setup></script>

<template>
  <div class="All">
    <div class="background">
      <WelcomeBar></WelcomeBar>
    </div>

    <img src="" alt="" />
    <div class="DepartmentIntroduces">
      <baDepartmentIntroduce>
        <template #img>
          <img src="" alt="" />
        </template>
        <template #introduce1></template>
        <template #introduce2></template>
      </baDepartmentIntroduce>
      <baDepartmentIntroduce>
        <template #img>
          <img src="" alt="" />
        </template>
        <template #introduce1></template>
        <template #introduce2></template>
      </baDepartmentIntroduce>
      <baDepartmentIntroduce>
        <template #img>
          <img src="" alt="" />
        </template>
        <template #introduce1></template>
        <template #introduce2></template>
      </baDepartmentIntroduce>
      <baDepartmentIntroduce>
        <template #img>
          <img src="" alt="" />
        </template>
        <template #introduce1></template>
        <template #introduce2></template>
      </baDepartmentIntroduce>
    </div>

    <!-- 底部空白 -->
    <div class="div"></div>
  </div>
</template>

<!-- <script>
import WelcomeBar from '@/components/About/JianJie/bWelcomeBar'
import DepartmentIntroduce from '@/components/About/JianJie/baDepartmentIntroduce'
</script> -->

<style scoped>
.All {
  height: 1500px;
}
.background {
  background: url('@/assets/img/Home/首页背景图.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 420px;
  margin-bottom: 40px;
  /* 降低背景图片亮度 */
  filter: brightness(0.7);
}
.heng_bar {
  background-color: rgba(234, 234, 234, 0.9);
  /* background-color: #5f7076; */
  filter: brightness(0.8);
}

.DepartmentIntroduces {
  margin-top: -160px;
  display: flex;
  flex-direction: column;
  gap: 50px;
}

.div {
  /* background-color: #fff; */
  height: 100px;
}
</style>
