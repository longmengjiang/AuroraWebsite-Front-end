<script setup>
defineOptions({
  name: 'KeyRecord2'
  // 钥匙记录 页面
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
        <!-- 钥匙记录 -->
        <div class="record">
          <!-- 左侧描述 -->
          <div class="describe">
            <div class="ch_des">钥匙记录</div>
            <div class="en_des">Key Log</div>
          </div>

          <!-- 右侧未归还 -->
          <div class="history">未归还 ></div>
        </div>

        <!-- 记录内容 -->
        <div class="record-content">
          <div class="record-item">
            <span class="avatar"></span>
            <span class="name">Peter</span>
            <span class="date">2025年2月2日</span>
            <span class="state">未归还</span>
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
            <span class="state">未归还</span>
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
            <span class="state">未归还</span>
            <span class="more">
              <span class="more-item"></span>
              <span class="more-item"></span>
              <span class="more-item"></span>
            </span>
          </div>
        </div>

        <!-- 拿取归还钥匙 -->
        <div class="submit">
          <!-- 左侧描述 -->
          <div class="describe">
            <div class="ch_des">拿取归还钥匙</div>
            <div class="en_des">Take and return the keys</div>
          </div>
        </div>

        <!-- 拿取归还状态 -->
        <div class="stateBox">
          <div class="left-state">
            <div class="avatar"></div>
            <div class="name">Peter</div>
            <div class="state">状态：未拿取钥匙</div>
            <div class="more">···</div>
          </div>
          <div class="right-state">
            <button class="returnKey">归还钥匙</button>
            <button class="takeKey">拿取钥匙</button>
            <div class="keyNum">
              <span class="ch_des">工作室现存钥匙个数：</span>
              <span class="nowKeyNum">5</span>
            </div>
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
  height: 1042px;
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

/* 拿取归还钥匙 */
.stateBox {
  width: 519px;
  height: 357px;
  display: flex;
  /* justify-content: space-between; */
  gap: 46px;
  margin: 21px 0 0 79px;
}
.stateBox .left-state {
  width: 250px;
  height: 357px;
  opacity: 1;
  border-radius: 32px;
  background: rgba(219, 226, 224, 1);
}
.stateBox .left-state .avatar {
  width: 91px;
  height: 91px;
  border-radius: 50%;
  background: rgba(204, 204, 204, 1);
  margin: 29px auto 0;
}
.stateBox .left-state .name {
  width: 133px;
  height: 30px;
  margin: 29px auto 0;
  text-align: center;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
}
.stateBox .left-state .state {
  width: 168px;
  height: 30px;
  margin: 36px auto 0;
  text-align: center;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
}
.stateBox .left-state .more {
  width: 31px;
  height: 31px;
  line-height: 31px;
  text-align: center;
  margin: 66px auto 0;

  font-size: 40px;
}
.stateBox .right-state {
  width: 223px;
  height: 357px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}
.stateBox .right-state .returnKey {
  width: 193px;
  height: 60px;
  opacity: 1;
  border-radius: 21px;
  background: rgba(204, 204, 204, 1);
  border: none;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
}
.stateBox .right-state .takeKey {
  width: 193px;
  height: 60px;
  opacity: 1;
  border-radius: 21px;
  background: rgba(204, 204, 204, 1);
  border: none;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
}
.stateBox .right-state .keyNum {

  width: 214px;
  height: 30px;
  margin-left: 21px;
  margin-top: -10px;
}
.stateBox .right-state .keyNum .ch_des {
  /** 文本1 */
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.29);
}
.stateBox .right-state .keyNum .nowKeyNum {
  margin-left: -14px;
  
  /** 文本1 */
  font-size: 14px;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.29);
}
</style>
