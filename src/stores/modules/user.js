import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore(
  'user',
  () => {
    // 1. 用户基本信息
    const userInfo = ref({
      userId: '',
      name: '',
      token: '',
      meetingAbsenceId: '',
      timerAbsenceId: ''
    })
    const adminInfo = ref({
      userName: '',
      token: ''
    })

    // 2. 登录后的接口  →  靠其他页面来调用此方法
    const setUserInfo = (data) => {
      // resetAdminInfo()
      userInfo.value = data
    }
    const setAdminInfo = (data) => {
      // resetUserInfo()
      adminInfo.value = data
    }

    //3. 重置用户信息
    const resetUserInfo = () => {
      userInfo.value = {
        userId: '',
        name: '',
        token: ''
      }
    }
    const resetAdminInfo = () => {
      adminInfo.value = {
        userName: '',
        token: ''
      }
    }

    // 4. 用户 会议请假 / 打卡请假 的id(请假成功后 后端返回来的数据有 对应id)
    const setMeetingAbsenceId = (id) => {
      userInfo.value.meetingAbsenceId = id
    }
    const setTimerAbsenceId = (id) => {
      userInfo.value.timerAbsenceId = id
    }

    return {
      userInfo,
      adminInfo,

      setUserInfo,
      setAdminInfo,
      setMeetingAbsenceId,
      setTimerAbsenceId
    }
  },
  {
    persist: true
  }
)
