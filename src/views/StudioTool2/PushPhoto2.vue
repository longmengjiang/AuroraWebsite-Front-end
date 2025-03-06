<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

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

const goEdit = () => {
  router.push('/tool/pushPhoto/editPushPhoto')
}
</script>

<template>
  <div class="main">
    <!-- 导航栏 -->
    <NavBar2></NavBar2>

    <!-- 欢迎横幅 -->
    <WelCome2></WelCome2>

    <div class="aurora">
      <span class="aurora_desc">AURORA</span>
      <div class="aurora_line"></div>
    </div>

    <div class="contentBox">
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

      <!-- 编辑盒子 -->
      <div class="editBox">
        <!-- 编辑内容 -->
        <div class="edit-item">
          <div class="avatar">
            <img class="avatar-img" src="" />
          </div>
          <div class="edit" @click="goEdit">
            <img class="edit-img" src="@/assets/img/上传照片.jpg" />
          </div>
          <div class="info">
            <div class="year">2025</div>
            <div class="name">Peter</div>
            <div class="direction">Web成员之一</div>
          </div>
        </div>
        <!-- 编辑内容 -->
        <div class="edit-item">
          <div class="avatar">
            <img class="avatar-img" src="" />
          </div>
          <div class="edit" @click="goEdit">
            <img class="edit-img" src="@/assets/img/上传照片.jpg" />
          </div>
          <div class="info">
            <div class="year">2025</div>
            <div class="name">Peter</div>
            <div class="direction">Web成员之一</div>
          </div>
        </div>
        <!-- 编辑内容 -->
        <div class="edit-item">
          <div class="avatar">
            <img class="avatar-img" src="" />
          </div>
          <div class="edit" @click="goEdit">
            <img class="edit-img" src="@/assets/img/上传照片.jpg" />
          </div>
          <div class="info">
            <div class="year">2025</div>
            <div class="name">Peter</div>
            <div class="direction">Web成员之一</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  min-width: 1440px;
  height: 1198px;
  background: rgba(255, 255, 255, 1);
}

/* aurora描述 */
.aurora {
  height: 54.46px;
  margin-top: 38px;
}
.aurora .aurora_desc {
  width: 146.64px;
  height: 54.46px;
  margin-left: 169px;

  /** 文本1 */
  font-size: 16px;
  font-weight: 400;
  line-height: 23.17px;
  color: rgba(0, 0, 0, 0.5);
}
.aurora .aurora_line {
  margin-top: 10px;
  width: 100%;
  height: 1px;
  opacity: 0.3;

  border: 1px solid rgba(0, 0, 0, 1);
}

/* 主体内容 */
.contentBox {
  margin: 0 279px 0 219px;
}

/* 筛选盒子 */
.contentBox .choose {
  width: 1158px;
  height: 79px;
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

/* 三个编辑盒子 */
.editBox {
  margin-top: 86px;
  width: 948px;
  height: 460px;
  display: flex;
  flex-direction: start;
  gap: 63px;
}
.editBox .edit-item {
  width: 274px;
  height: 460px;
  position: relative;
}
.editBox .edit-item .avatar {
  width: 159.97px;
  height: 159.94px;
  border-radius: 50%;
  background: rgba(204, 204, 204, 1);
  text-align: center;
  line-height: 159.94px;
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  z-index: 2;
}
.editBox .edit-item .avatar .avatar-img {
  width: 143.53px;
  height: 143.51px;

  border-radius: 50%;
  background: url(https://img.js.design/assets/img/663c72201dace2bd9b3588a6.jpg);
  background-position: center;
  background-size: cover;
}
.editBox .edit-item .edit {
  z-index: 2;
  width: 42px;
  height: 42px;
  position: absolute;
  top: 26%;
  left: 75.2%;
  cursor: pointer;
}
.editBox .edit-item .edit .edit-img {
  width: 42px;
  height: 42px;
}
.editBox .edit-item .info {
  width: 273.72px;
  height: 263.46px;
  opacity: 1;
  border-radius: 26px;
  background: rgba(232, 232, 232, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: absolute;
  top: 80px;
}
.editBox .edit-item .info .year {
  width: 50.66px;
  height: 29px;
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
  margin-top: 100px;
}
.editBox .edit-item .info .name {
  width: 63px;
  height: 29px;
  opacity: 1;
  text-align: center;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
}
.editBox .edit-item .info .direction {
  width: 172.41px;
  height: 59.09px;
  opacity: 1;
  text-align: center;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 47, 36, 1);
}
</style>
