<script setup>
defineOptions({
  name: 'ClockState2'
  // 打卡请假 页面
})

import WelCome2 from '@/component/Global2/WelCome2.vue'
import { ref, computed } from 'vue'
import { debounce } from '@/utils/DebounceThrottle'
import { useRouter } from 'vue-router'
import { GetClockLeave, PostClockLeave } from '@/api'
import { useUserStore } from '@/stores/modules/user'
import { ElMessage } from 'element-plus'
const userStore = useUserStore()

const router = useRouter()

// 一、分页查询打卡请假记录
const leaveHistory = ref([])
const total = ref(0)
const params = ref({ ye: 1, tiao: 10 })

const getClockLeave = async () => {
  const res = await GetClockLeave(params.value.ye, params.value.tiao, userStore.userInfo.name)
  leaveHistory.value = res.data.records
  total.value = res.data.total

  leaveHistory.value.map((item) => {
    item.timerAbsenceStatus = item.timerAbsenceStatus === 1 ? '已批准' : '未批准'
  })
  // console.log(res);

  ElMessage.success(res.msg || '打卡请假记录查询成功')
}
getClockLeave()

// 二、打卡请假按钮 上传

// 定义表单数据
const leaveWeek = ref('小A')
const leaveReason = ref('直播')
const errors = ref({
  leaveWeek: '',
  leaveReason: ''
})

// 点击提交按钮处理
const handleSubmit = debounce(async () => {
  // 清空之前的错误
  errors.value.leaveWeek = ''
  errors.value.leaveReason = ''

  // 验证
  if (!leaveWeek.value) {
    errors.value.leaveWeek = '请假周次不能为空'
    alert('请假周次不能为空')
    return
  }
  if (!leaveReason.value) {
    errors.value.leaveReason = '请假原因不能为空'
    alert('请假原因不能为空')
    return
  }

  const res = await PostClockLeave(
    userStore.userInfo.userId,
    userStore.userInfo.name,
    leaveWeek.value,
    leaveReason.value
  )
  console.log(res)
  ElMessage.success(res.msg || '打卡请假申请成功')
  // 如果上传失败
  // if (!uploadSuccess) {
  //   alert('上传失败')
  //   return
  // }

  // 上传成功
  // alert('上传成功')
}, 500)

// 点击历史记录盒子
const goToHistory = () => {
  router.push('/manage/meeting/meetingLeaveManage')
}

// 点击 三个点 前往 管理员 批准打卡请假
// 传递两个参数  第一个：请假的 id， 第二个：请假状态, 第三个：请假人姓名， 第四个：请假原因
const goApprove = (id, status, name, reason) => {
  status = status === '已批准' ? 1 : 0

  router.push({
    path: '/manage/clock/clockLeaveApprove',
    query: {
      id,
      timerAbsenceStatus: status,
      name,
      reason
    }
  })
}
</script>

<template>
  <div class="main">
    <!-- 导航栏 -->
    <NavBar2></NavBar2>

    <!-- 欢迎横幅 -->
    <WelCome2></WelCome2>

    <!-- 侧栏 + 主体内容 -->
    <div class="main-content">
      <!-- 侧栏 -->
      <div class="sideBar"></div>

      <!-- 主体内容 -->
      <div class="content">
        <!-- 打卡情况 -->
        <div class="record">
          <!-- 左侧描述 -->
          <div class="describe">
            <div class="ch_des">打卡情况</div>
            <div class="en_des">Attendance status</div>
          </div>

          <!-- 右侧未归还 -->
          <div class="history">未打满 ></div>
        </div>

        <!-- 记录内容 -->
        <div class="record-content">
          <div class="record-item" ref="recordItem" v-for="item in leaveHistory" :key="item.id">
            <span class="avatar"></span>
            <span class="name">{{ item.name }}</span>
            <span class="date">{{ item.timerAbsenceTime }}</span>
            <span
              class="state"
              :style="{
                backgroundColor: item.timerAbsenceStatus === '已批准' ? '#79918b' : '#f8cb1a'
              }"
              >{{ item.timerAbsenceStatus }}</span
            >
            <span
              class="more"
              @click="
                goApprove(item.id, item.timerAbsenceStatus, item.name, item.timerAbsenceReason)
              "
            >
              <span class="more-item"></span>
              <span class="more-item"></span>
              <span class="more-item"></span>
            </span>
          </div>
          <!-- <div class="record-item">
            <span class="avatar"></span>
            <span class="name">Peter</span>
            <span class="date">10:00:00</span>
            <span class="state">已打满</span>
            <span class="more">
              <span class="more-item"></span>
              <span class="more-item"></span>
              <span class="more-item"></span>
            </span>
          </div>
          <div class="record-item">
            <span class="avatar"></span>
            <span class="name">Peter</span>
            <span class="date">10:00:00</span>
            <span class="state">已打满</span>
            <span class="more">
              <span class="more-item"></span>
              <span class="more-item"></span>
              <span class="more-item"></span>
            </span>
          </div> -->
        </div>

        <!-- 打卡请假 -->
        <div class="record">
          <!-- 左侧描述 -->
          <div class="describe">
            <div class="ch_des">打卡请假</div>
            <div class="en_des">Punch in and out of absence</div>
          </div>

          <!-- 右侧未归还 -->
          <div class="history">我的请假 ></div>
        </div>

        <!-- 请假周次 -->
        <div class="link">
          <div class="ch_des">请假周次：</div>
          <input
            type="text"
            class="input"
            @keyup.enter="handleSubmit"
            v-model="leaveWeek"
            placeholder="请输入请假周次"
          />
        </div>

        <!-- 请假原因 -->
        <div class="link">
          <div class="ch_des">请假原因：</div>
          <input
            type="text"
            @keyup.enter="handleSubmit"
            v-model="leaveReason"
            class="input"
            placeholder="请输入请假原因"
          />
        </div>

        <!-- 上传按钮 -->
        <button class="submitBtn" @click="handleSubmit">上传</button>
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
  /* background-color: skyblue; */
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
  line-height: 44.65px;
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
  /* background-color: skyblue; */
}

.record-content .record-item {
  width: 942px;
  height: 94px;
  /* background-color: pink; */
  border-radius: 45px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}
.record-content .record-item:hover {
  background-color: #dbe2e0;
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
  margin-left: 1;
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
