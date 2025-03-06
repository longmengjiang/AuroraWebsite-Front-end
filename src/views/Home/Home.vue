<script setup>
defineOptions({
  name: 'myHome'
})

import { useUserStore } from '@/stores'
const userStore = useUserStore()
import {
  PutJoinUsState,
  PostRecord,
  PutKey,
  PostKeyNum,
  GetKeyRent,
  PutMeetingLeave,
  PutClockLeave
} from '@/api'

const ceshi = async () => {
  // const res = await PutJoinUsState('1') // 1.4 更改报名页面开放状态  →  √

  // const res = await PostRecord('23125041015', 'https://www.luogu.com.cn/record/181855120') // 3.1 提交刷题记录  401  userToken  →  √

  // const res = await PutKey(1, '何沅铮', '23125041015') // 4.2 租赁归还钥匙  401  userToken  400

  // const res = await PostKeyNum(5) // 4.3 上传钥匙数量 401 adminToken  400   00000

  // const res = await GetKeyRent('何沅铮', '23125041015') // 4.5 查询持有钥匙  401  userToken  400

  // const res = await PutMeetingLeave('23125041015', 1) // 5.2 会议请假判定  400

  const res = await PutClockLeave('23125041015', 0) // 6.2 打卡请假判定  没问题

  ElMessage.success(res.msg)
}
</script>

<template>
  <!-- <el-button class="ceshi" type="success" @click="ceshi">
    测试使用，我是{{ userStore.userInfo.name || userStore.adminInfo.userName }}
  </el-button> -->
  <div class="main">
    <!-- 导航栏 -->
    <NavBar2></NavBar2>

    <!-- 首页背景图 -->
    <div class="bgcMain">
      <div class="backgroundBox">
        <div class="backgroundImg"></div>
      </div>
    </div>

    <!-- 横栏 （welcome to join us） -->
    <WelCome2></WelCome2>

    <!-- 照片展示 -->
    <div class="photoShow">
      <div class="photoShow_title">
        <span class="ch_title">照片展示</span>
        <span class="en_title">Photo show</span>
      </div>
      <div class="photoShow_show">
        <div class="showBox1">
          <img src="" class="show_1" />
        </div>
        <div class="showBox2">
          <div class="showBoxTop">
            <img src="" class="show_2" />
            <img src="" class="show_3" />
          </div>
          <div class="showBoxBottom">
            <img src="" class="show_4" />
          </div>
        </div>

        <!-- @/assets/img/首页背景图.jpg -->
      </div>

      <!-- 装饰点1 -->
      <DecoratePoint class="DecoratePoint1"></DecoratePoint>
    </div>

    <!-- 分界线 -->
    <div class="gap" style="width: 100%; height: 1px; background-color: #d2d0d0"></div>

    <!-- 工作室介绍 -->
    <div class="studioIntroduce">
      <div class="studioIntroduce_title">
        <span class="ch_title">工作室介绍</span>
        <span class="en_title">Studio Introduction</span>
      </div>
      <div class="studioIntroduce_introduce_box">
        <div class="studioIntroduce_introduce"></div>
      </div>

      <div class="studioIntroduceBottom"></div>

      <!-- END -->
      <div class="END">END</div>

      <!-- 装饰点2 -->
      <DecoratePoint class="DecoratePoint2"></DecoratePoint>
    </div>
  </div>
</template>

<!-- 自适应问题？ -->

<style scoped>
.ceshi {
  display: inline-block;
  margin: auto;
  height: 100px;
  width: 1000px;
}
.main {
  min-width: 1440px;
  max-width: 1920px;
  max-height: 2875px;
  background-color: #fff;
}

/* 背景图片 */
.bgcMain {
  min-width: 1533px;
  height: 700px;
  box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.25);
}
.backgroundBox {
  min-width: 1440px;
  height: 700px;
  background: rgba(0, 0, 0, 1);
  position: relative;
}
.backgroundBox::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(https://img.js.design/assets/img/66967630e4dda85f6959d123.jpg#9af22541069032953c22bd2b394474cc);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.3;
}
.backgroundImg {
  width: 1200px;
  height: 559.25px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(https://img.js.design/assets/img/66967630e4dda85f6959d123.jpg#9af22541069032953c22bd2b394474cc);
  box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.25);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

/* 照片展示 */
.photoShow {
  width: 1200px;
  height: 730px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  margin: 0 auto;
  margin-top: 33px;
  position: relative;
}
.DecoratePoint1 {
  position: absolute;
  top: 100%;
  left: 0%;
  transform: translate(-24%, -45%);
  z-index: 2;
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
  width: 1200px;
  height: 500px;
  /* position: relative; */
  display: flex;
  gap: 42px;
  margin-top: 127px;
}
.showBox1 {
  width: 400px;
  height: 500px;
}
.photoShow .photoShow_show .show_1 {
  width: 400px;
  height: 500px;
  border-radius: 25px;
  background: #cccccc;
}
.showBox2 {
  width: 750px;
  display: flex;
  flex-direction: column;
  gap: 70px;
}
.showBox2 .showBoxTop {
  width: 750px;
  display: flex;
  gap: 58px;
}
.photoShow .photoShow_show .show_2 {
  width: 350px;
  height: 200px;
  border-radius: 25px;
  background: #cccccc;
}
.photoShow .photoShow_show .show_3 {
  width: 350px;
  height: 200px;
  border-radius: 25px;
  background: #cccccc;
}
.showBottom {
  width: 750px;
  height: 230px;
}
.photoShow .photoShow_show .show_4 {
  width: 750px;
  height: 230px;
  border-radius: 25px;
  background: #cccccc;
}

/* 分割线 */
.gap {
  width: 1920px;
  height: 0px;
  opacity: 0.3;
  margin-top: 124px;
  border: 1px solid rgba(0, 0, 0, 1);
}

/* 工作室介绍 */
.studioIntroduce {
  min-width: 1440px;
  height: 959px;
  margin: 0 auto;
  margin-top: 94px;
  position: relative;
}
.DecoratePoint2 {
  position: absolute;
  top: 0%;
  right: 100%;
  z-index: 2;
  transform: translate(495%, 46%);
}
.studioIntroduce .studioIntroduce_title {
  width: 100%;
  /* height: 489px; */
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

.studioIntroduce .studioIntroduce_introduce_box {
  width: 1198px;
  height: 265.11px;
  margin: 0 auto;
  margin-top: 99px;
  position: relative;
}

.studioIntroduce .studioIntroduce_introduce {
  margin: 0 auto;
  width: 1198.22px;
  height: 531.11px;
  opacity: 1;
  border-radius: 25px;
  background: rgba(204, 204, 204, 1);
  position: absolute;
}
.studioIntroduce .studioIntroduceBottom {
  /* position: absolute; */
  min-width: 1440px;
  height: 490px;
  background: #000000;
  /* position: relative; */
}

/* END */
.END {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, 0%);
  width: 44px;
  /* height: 57px; */
  /* margin: 162px auto 0px; */

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 27.54px;
  color: rgba(255, 255, 255, 0.7);
}
</style>
