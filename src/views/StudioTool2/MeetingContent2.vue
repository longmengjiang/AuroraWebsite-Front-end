<script setup>
defineOptions({
  name: 'MeetingContent2'
  // 会议内容 页面
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
      <div class="sideBar">
        <div class="prevMeeting">
          <div class="arrow">
            <div class="heng"></div>
            <div class="go"></div>
          </div>
          <div class="describe">
            <div class="ch_des">往届会议</div>
            <div class="en_des">Previous sessions</div>
          </div>
        </div>
      </div>

      <!-- 主体内容 -->
      <div class="content">
        <textarea
          name=""
          placeholder="会议时间/记录人员/会议内容........"
          id=""
          class="textarea"
        ></textarea>
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
  width: 356px;
  height: 1042px;
  background: #011f18;
}
.sideBar .prevMeeting {
  margin-top: 41px;
  width: 356px;
  height: 87px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 27px;
  cursor: pointer;
}
.sideBar .prevMeeting .arrow {
  width: 21px;
  height: 21px;
  border: 1.4px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  margin-left: 86px;
}
.sideBar .prevMeeting .arrow .heng {
  width: 7.87px;
  height: 0px;
  margin: 9px 5px 9.9px;
  border-top: 1.4px solid rgba(255, 255, 255, 1);
}
.sideBar .prevMeeting .arrow .go {
  margin: -14.9px 5px 0;
  width: 7.88px;
  height: 7.88px;
  border-top: 1.4px solid transparent;
  border-right: 1.4px solid transparent;
  border-bottom: 1.4px solid rgba(255, 255, 255, 1);
  border-left: 1.4px solid rgba(255, 255, 255, 1);
  rotate: -135deg;
}
.sideBar .prevMeeting .describe {
  width: 208px;
  height: 30px;
  display: flex;
  justify-content: center;
  gap: 4px;
}
.sideBar .prevMeeting .describe .ch_des {
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(255, 255, 255, 1);
}
.sideBar .prevMeeting .describe .en_des {
  /** 文本1 */
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(255, 255, 255, 1);
}

/* 主体内容 */
.content {
  margin: 75px 30px 30px 129px;
  width: 1084px;
}
.content .textarea {
  width: 100%;
  height: 100%;
  resize: none;
  border: none;

  /** 文本1 */
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 23.17px;
  color: rgba(0, 0, 0, 0.35);
  /* color: black; */
}
</style>
