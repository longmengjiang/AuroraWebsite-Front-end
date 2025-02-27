<script setup>
defineOptions({
  name: 'KeyManage2'
  // 钥匙管理 页面
})
</script>

<template>
  <div class="main">
    <!-- 导航栏 -->
    <NavBar2></NavBar2>

    <!-- 欢迎横幅 -->
    <div class="welcome">
      <span>welcome to join us</span>
    </div>

    <!-- 侧栏 + 主体内容 -->
    <div class="main-content">
      <!-- 侧栏 -->
      <div class="sideBar"></div>

      <!-- 主体内容 -->
      <div class="content">
        <!-- 全员刷题情况 -->
        <div class="record">
          <!-- 左侧描述 -->
          <div class="describe">
            <div class="ch_des">全员刷题情况</div>
            <div class="en_des">All staff brushed the questions</div>
          </div>
        </div>

        <!-- 记录内容 -->
        <div class="record-content">
          <div class="record-item">
            <span class="avatar"></span>
            <span class="name">Peter</span>
            <span class="date">2025年2月2日</span>
            <span class="state">857894528*****</span>
            <span class="more">
              <span class="more-item"></span>
              <span class="more-item"></span>
              <span class="more-item"></span>
            </span>
          </div>
          <div class="record-item">
            <span class="avatar"></span>
            <span class="name">Peter</span>
            <span class="date">2025年2月2日</span>
            <span class="state">857894528*****</span>
            <span class="more">
              <span class="more-item"></span>
              <span class="more-item"></span>
              <span class="more-item"></span>
            </span>
          </div>
          <div class="record-item">
            <span class="avatar"></span>
            <span class="name">Peter</span>
            <span class="date">2025年2月2日</span>
            <span class="state">857894528*****</span>
            <span class="more">
              <span class="more-item"></span>
              <span class="more-item"></span>
              <span class="more-item"></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  min-width: 1440px;
  height: 931px;
  background-color: #fff;
}

/* 导航栏 */
.navBar {
  min-width: 1440px;
  min-height: 60px;
  background-color: #fff;
}

/* 欢迎横幅 */
.welcome {
  min-width: 1440px;
  height: 87px;
  background: rgba(204, 204, 204, 0.42);

  display: flex;
  justify-content: center;
  align-items: center;
}
.welcome span {
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(166, 166, 166, 1);
}

/* 侧栏 + 主体内容 */
.main-content {
  display: flex;
}
.sideBar {
  width: 70px;
  height: 779px;
  background: rgba(0, 47, 36, 1);
}

/* 刷题记录 */
.record {
  width: 1100px;
  margin: 26px 345px 20px 69px;
  display: flex;
  justify-content: space-around;
  background-color: skyblue;
}

.describe {
  width: 100%;
  display: flex;
}
.ch_des {
  margin-right: 10px;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 37.65px;
  color: rgba(0, 0, 0, 1);
}
.en_des {
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 37.65px;
  color: rgba(0, 0, 0, 0.5);
}

.record .history {
  min-width: 130px;
  height: 45px;
  background-color: pink;
  border-radius: 23px;
  background: rgba(43, 41, 41, 0);
  border: 1px solid rgba(0, 0, 0, 0.28);
  text-align: center;
  line-height: 45px;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.35);
}

/* 记录内容 */
.record-content {
  width: 942px;
  height: 300px;
  margin: 0 139px 0 69px;

  display: flex;
  flex-direction: column;
  gap: 7px;
  background-color: skyblue;
}

.record-content .record-item {
  width: 942px;
  height: 94px;
  background-color: pink;
  border-radius: 45px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
}
.record-item .avatar {
  margin-left: 20px;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: rgba(204, 204, 204, 1);
}
.record-item .name {
  margin-left: 31px;
  width: 133px;
  height: 30px;
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.record-item .date {
  margin-left: 9px;
  width: 166px;
  height: 30px;
  opacity: 1;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.record-item .state {
  width: 100px;
  height: 40px;
  border-radius: 24px;
  background: rgba(0, 47, 36, 0.53);

  display: flex;
  justify-content: center;
  align-items: center;
  /** 文本1 */
  font-size: 24px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.record-item .more {
  margin-left: 307px;
  width: 54px;
  height: 54px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
}
.record-item .more .more-item {
  /* 三个点 */
  width: 6.75px;
  height: 6.75px;
  border-radius: 50%;
  background: rgba(51, 51, 51, 1);
}

/* 提交题目 */
.submit {
  width: 1100px;
  margin: 26px 345px 20px 69px;
}

/* 题目链接 */
.link {
  width: 1100px;
  margin: 26px 345px 20px 69px;
}
.link .ch_des {
  margin-top: -25px;
  width: 474px;
  height: 45px;
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}

.link .input {
  width: 497px;
  height: 54px;
  padding-left: 10px;
  border: none;
  border-radius: 20px;
  background: rgba(204, 204, 204, 0.39);

  font-size: 16px;
}

/* 上传按钮 */
.submitBtn {
  margin: 42px 0 0 189px;
  width: 256px;
  height: 57px;
  background: rgba(0, 47, 36, 1);

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(255, 255, 255, 1);
}
</style>
