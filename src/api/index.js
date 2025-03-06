import request from '@/utils/request'

// 1. 加入我们相关接口

// 1.1 提交个人信息  →  √
export const PostJoinUs = (name, gender, grade, phone, email, majors, orientation, introduce) =>
  request.post('/join', { name, gender, grade, phone, email, majors, orientation, introduce })
// Body参数 name, gender, grade, phone, email, majors, orientation(方向), introduce(可选)

// 1.2 获取页面开放状态  →  √
export const GetJoinUsState = () => request.get('/join')

// 1.3 分页查看报名信息  →  √
export const GetJoinUsList = (page, pageSize, name, majors, orientation) =>
  request.get('/admin/join/manage', { params: { page, pageSize, name, majors, orientation } })
// query参数 page, size, name(可选), majors(可选), orientation(可选)
// 还有Header参数(可选) adminToken：eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbklkIjoxLCJleHAiOjE3Mzc5MTg1MTYsImlhdCI6MTczNzg3NTMxNn0.CwIahOZP4WSFdJbU3MzSAGXx_w3JY-52LNb_xlHV_pE

// 1.4 更改报名页面开放状态  →  有问题！！！
export const PutJoinUsState = (status) => request.post('/admin/join/state/manage', { status })
// Query参数 status(可选)
// 还有Header参数(可选) adminToken：eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbklkIjoxLCJleHAiOjE3Mzc5MTg1MTYsImlhdCI6MTczNzg3NTMxNn0.CwIahOZP4WSFdJbU3MzSAGXx_w3JY-52LNb_xlHV_pE

// 2. 登录相关接口

// 2.1 成员登录  →  √
export const PostLogin = (userId, password) => request.post('/login/user', { userId, password })
// Body参数 userId, password

// 2.2 管理员登录  →  √
export const PostAdminLogin = (userName, password) =>
  request.post('/login/admin', { userName, password })
// Body参数 userName, password

// 3. 刷题相关接口

// 3.1 提交刷题记录  →  有问题！！！
export const PostRecord = (userId, titleUrl) =>
  request.post('/tools/algorithm/submit', { userId, titleUrl })
// Query参数 userId(可选), titleUrl(可选)
// 还有Header参数(可选) userToken：eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3Mzc4ODI1MDMsInVzZXJJZCI6MSwiaWF0IjoxNzM3ODc1MzAzfQ.H_a1RSBX-j5B0t2kCd5XaNjLEOXtGG23IH6Q0pkDbIY

// 3.2 分页查询刷题记录  →  √
export const GetRecord = (page, pageSize, userId) =>
  request.get('/tools/algorithm', { params: { page, pageSize, userId } })
// Query参数 page(可选), pageSize(可选), userId(可选)
// 还有Header参数(可选) userToken：eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3Mzc4ODI1MDMsInVzZXJJZCI6MSwiaWF0IjoxNzM3ODc1MzAzfQ.H_a1RSBX-j5B0t2kCd5XaNjLEOXtGG23IH6Q0pkDbIY

// 3.3 查询成员刷题数量  →  √
export const GetRecordCount = () => request.get('/admin/algorithm/count')
// 还有Header参数(可选) adminToken：eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbklkIjoxLCJleHAiOjE3Mzc5MTg1MTYsImlhdCI6MTczNzg3NTMxNn0.CwIahOZP4WSFdJbU3MzSAGXx_w3JY-52LNb_xlHV_pE
//                     userToken：eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3Mzc4ODI1MDMsInVzZXJJZCI6MSwiaWF0IjoxNzM3ODc1MzAzfQ.H_a1RSBX-j5B0t2kCd5XaNjLEOXtGG23IH6Q0pkDbIY

// 4. 钥匙相关接口

// 4.1 查询钥匙状态  →  √
export const GetKey = () => request.get('/tools/key')
// 还有Header参数(可选) userToken：eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3Mzc4ODI1MDMsInVzZXJJZCI6MSwiaWF0IjoxNzM3ODc1MzAzfQ.H_a1RSBX-j5B0t2kCd5XaNjLEOXtGG23IH6Q0pkDbIY

// 4.2 租赁归还钥匙  →  有问题！！！
export const PutKey = (leasedStatus, name, userId) =>
  request.post('/tools/key/rent', { leasedStatus, name, userId })
// Query参数 leasedStatus, name(可选), userId(可选)
// 还有Header参数(可选) userToken：eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3Mzc4ODI1MDMsInVzZXJJZCI6MSwiaWF0IjoxNzM3ODc1MzAzfQ.H_a1RSBX-j5B0t2kCd5XaNjLEOXtGG23IH6Q0pkDbIY

// 4.3 上传钥匙数量  →  有问题！！！ UI没给，不用
export const PostKeyNum = (keysNumber) => request.post('/admin/key/manage/set', { keysNumber })
// Query参数 keysNumber(可选)
// 还有Header参数(可选) adminToken：eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbklkIjoxLCJleHAiOjE3Mzc5MTg1MTYsImlhdCI6MTczNzg3NTMxNn0.CwIahOZP4WSFdJbU3MzSAGXx_w3JY-52LNb_xlHV_pE

// 4.4 查询钥匙租赁情况  →  √
export const GetKeyState = () => request.get('/admin/key/manage')
// 还有Header参数(可选) adminToken：eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbklkIjoxLCJleHAiOjE3Mzc5MTg1MTYsImlhdCI6MTczNzg3NTMxNn0.CwIahOZP4WSFdJbU3MzSAGXx_w3JY-52LNb_xlHV_pE

// 4.5 查询持有钥匙  →  有问题！！！
export const GetKeyRent = (name, userId) =>
  request.get('/tools/key/rent', { params: { name, userId } })
// Body参数 name, userId
// 还有Header参数(可选) userToken：eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3Mzc4ODI1MDMsInVzZXJJZCI6MSwiaWF0IjoxNzM3ODc1MzAzfQ.H_a1RSBX-j5B0t2kCd5XaNjLEOXtGG23IH6Q0pkDbIY

// 5. 会议相关接口

// 5.1 分页查询会议请假记录  →  √
export const GetMeetingLeaveHistory = (page, pageSize, name) =>
  request.get('/admin/meeting/absence/manage', { params: { page, pageSize, name } })
// Query参数 page, pageSize, name(可选)
// 还有Header参数(可选) adminToken：eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbklkIjoxLCJleHAiOjE3Mzc5MTg1MTYsImlhdCI6MTczNzg3NTMxNn0.CwIahOZP4WSFdJbU3MzSAGXx_w3JY-52LNb_xlHV_pE

// 5.2 会议请假判定  →  有问题！！！
export const PutMeetingLeave = (meetingAbsenceId, meetingAbsenceStatus) =>
  request.post('/admin/meeting/absence/manage/decide', {
    meetingAbsenceId,
    meetingAbsenceStatus
  })
// Query参数 meetingAbsenceId(可选), meetingAbsenceStatus(可选)  1为同意，-1为拒绝
// 还有Header参数(可选) adminToken：eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbklkIjoxLCJleHAiOjE3Mzc5MTg1MTYsImlhdCI6MTczNzg3NTMxNn0.CwIahOZP4WSFdJbU3MzSAGXx_w3JY-52LNb_xlHV_pE

// 5.3 会议请假  →  √
export const PostMeetingLeave = (userId, name, meetingAbsenceTime, meetingAbsenceReason) =>
  request.post('/tools/meeting/absence', { userId, name, meetingAbsenceTime, meetingAbsenceReason })
// Body参数 userId, name, meetingAbsenceTime, meetingAbsenceReason
// 还有Header参数(可选) userToken：eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3Mzc4ODI1MDMsInVzZXJJZCI6MSwiaWF0IjoxNzM3ODc1MzAzfQ.H_a1RSBX-j5B0t2kCd5XaNjLEOXtGG23IH6Q0pkDbIY

// 5.4 查询个人请假  →  √
export const GetMeetingLeaveSelf = (userId) =>
  request.get('/tools/meeting/myAbsence', { params: { userId } })
// Query参数 userId
// 还有Header参数(可选) userToken：eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3Mzc4ODI1MDMsInVzZXJJZCI6MSwiaWF0IjoxNzM3ODc1MzAzfQ.H_a1RSBX-j5B0t2kCd5XaNjLEOXtGG23IH6Q0pkDbIY

// 6. 打卡相关接口

// 6.1 分页查询打卡请假  →  √
export const GetClockLeave = (page, pageSize, name) =>
  request.get('/admin/timer/absence/manage', { params: { page, pageSize, name } })
// Query参数 page, pageSize, name(可选)
// 还有Header参数(可选) adminToken：eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbklkIjoxLCJleHAiOjE3Mzc5MTg1MTYsImlhdCI6MTczNzg3NTMxNn0.CwIahOZP4WSFdJbU3MzSAGXx_w3JY-52LNb_xlHV_pE

// 6.2 打卡请假判定  →  有问题！！！
export const PutClockLeave = (timerAbsenceId, timerAbsenceStatus) =>
  request.post('/admin/timer/absence/manage/decide', {
    timerAbsenceId,
    timerAbsenceStatus
  })
// Query参数 timerAbsenceId(可选), timerAbsenceStatus(可选)  1为同意，-1为拒绝
// 还有Header参数(可选) adminToken：eyJhbGciOiJIUzI1NiJ9.eyJhZG1pbklkIjoxLCJleHAiOjE3Mzc5MTg1MTYsImlhdCI6MTczNzg3NTMxNn0.CwIahOZP4WSFdJbU3MzSAGXx_w3JY-52LNb_xlHV_pE

// 6.3 打卡请假  →  √
export const PostClockLeave = (userId, name, timerAbsenceTime, timerAbsenceReason) =>
  request.post('/tools/timer/absence', { userId, name, timerAbsenceTime, timerAbsenceReason })
// Body参数 userId, name, timerAbsenceTime, timerAbsenceReason
// 还有Header参数(可选) userToken：eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3Mzc4ODI1MDMsInVzZXJJZCI6MSwiaWF0IjoxNzM3ODc1MzAzfQ.H_a1RSBX-j5B0t2kCd5XaNjLEOXtGG23IH6Q0pkDbIY

// 6.4 查询个人打卡请假  →  √
export const GetClockLeaveSelf = (userId) =>
  request.get('/tools/timer/myAbsence', { params: { userId } })
// Query参数 userId(可选)
// 还有Header参数(可选) userToken：eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3Mzc4ODI1MDMsInVzZXJJZCI6MSwiaWF0IjoxNzM3ODc1MzAzfQ.H_a1RSBX-j5B0t2kCd5XaNjLEOXtGG23IH6Q0pkDbIY
