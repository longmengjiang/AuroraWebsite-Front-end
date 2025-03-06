<script setup>
defineOptions({
  name: 'ClockLeaveApprove2'
  // 管理员 打卡请假判定 页面
})
import { PutClockLeave } from '@/api'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const Info = ref({})

onMounted(() => {
  Info.value = route.query
})

const approve = async () => {
  const res = await PutClockLeave(Info.value.id, Info.value.timerAbsenceStatus)
  console.log(res)
}
const disApprove = async () => {
  const res = await PutClockLeave(Info.value.id, Info.value.timerAbsenceStatus)
  console.log(res)
}
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
          <div class="allDescribe">
            <div class="describe">
              <div class="ch_des">姓名:</div>
              <div class="en_des">{{ Info.name }}</div>
            </div>
            <div class="describe">
              <div class="ch_des">学号:</div>
              <div class="en_des">暂无</div>
            </div>
          </div>
        </div>
      </div>

      <!-- 主体内容 -->
      <div class="content">
        <!-- 会议内容 -->
        <textarea
          name="reason"
          v-model="Info.reason"
          placeholder="打卡请假原因........"
          id=""
          class="textarea"
        ></textarea>

        <!-- 会议请假 -->
        <div class="meetingLeave">
          <div class="describe">
            <div class="ch_des">打卡请假</div>
            <div class="en_des">Leave of absence</div>
          </div>
          <div class="reason">
            <textarea class="reasonTextarea" maxlength="500" placeholder="回复........"></textarea>
          </div>

          <!-- 批准与否 -->
          <div class="approveBtn">
            <!-- 上传按钮 -->
            <el-button class="Approve" @click="approve">批准</el-button>
            <!-- 上传按钮 -->
            <el-button class="disApprove" @click="disApprove">不批准</el-button>
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
  width: 356px;
  min-height: 1042px;
  background: #011f18;
}
.sideBar .prevMeeting {
  margin-top: 41px;
  width: 356px;
  /* height: 87px; */
  height: 174px;
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  gap: 27px;
  /* cursor: pointer; */
}
.sideBar .prevMeeting .arrow {
  width: 21px;
  height: 21px;
  border: 1.4px solid rgba(255, 255, 255, 1);
  border-radius: 50%;
  margin-left: 86px;
  /* background-color: #fff; */
  margin-top: 5px;
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
.sideBar .prevMeeting .allDescribe {
  width: 208px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 20px;
  /* background-color: pink; */
}
.sideBar .prevMeeting .describe {
  width: 208px;
  height: 30px;
  display: flex;
  /* justify-content: center; */
  gap: 4px;
  cursor: pointer;
}
.sideBar .prevMeeting .describe .ch_des {
  margin-right: 3px;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(255, 255, 255, 1);
}
.sideBar .prevMeeting .describe .en_des {
  /** 文本1 */
  font-size: 20px;
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
  /* height: 100%; */
  height: 410px;
  resize: none;
  border: none;
  margin-bottom: 20px;
  /** 文本1 */
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 23.17px;
  /* color: rgba(0, 0, 0, 0.35); */
  /* color: black; */
  /* background-color: pink; */

  /* overflow: hidden; */
}
.content .meetingLeave {
  width: 863px;
  height: 520px;
  display: flex;
  flex-direction: column;
  /* background-color: pink; */
}
.content .meetingLeave .describe {
  width: 256px;
  height: 51px;
  opacity: 1;
  display: flex;
  gap: 5px;
}
.content .meetingLeave .describe .ch_des {
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
}
.content .meetingLeave .describe .en_des {
  /** 文本2 */
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 34.96px;
  color: rgba(0, 0, 0, 0.5);
}
.content .meetingLeave .reason {
  margin-top: -16px;
  width: 863px;
  height: 349px;
  opacity: 1;
}
.content .meetingLeave .reason .reasonTextarea {
  resize: none;
  border: none;
  width: 863px;
  height: 349px;
  padding: 45px 51px 260px 51px;
  background: rgba(0, 47, 36, 0.2);
  /* background-color: skyblue; */
  overflow: hidden;

  /* 文本1 */
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 23.17px;
  color: rgba(0, 0, 0, 0.35);
}

/* 批准与否按钮 */
.content .meetingLeave .approveBtn {
  display: flex;
  gap: 110px;
}
.content .meetingLeave .Approve {
  width: 256px;
  height: 57px;
  margin: 49px auto 0;
  background-color: #002f24;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(255, 255, 255, 1);
}
.content .meetingLeave .disApprove {
  width: 256px;
  height: 57px;
  margin: 49px auto 0;
  background-color: #ffcb12;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(255, 255, 255, 1);
}
</style>
