// 1999
// 此处用于存放所有组件相关的接口   因为请求并不多，所以直接放一个文件

import request from '@/utils/request'

// 1. 发布成就接口
export const PostAchievement = (team, topic, synopsis, file1, file2) =>
  request.post('/settings/announced', { params: { team, topic, synopsis }, data: { file1, file2 } })
// query参数  obj{ team topic synopsis }  Body参数(必须)  obj{ file1 file2 }

// 2. 展示成就接口
export const GetAchievement = (team) => request.get('/about/project', { params: { team } })
// query参数  team: string

// 3. 展现团队风采接口
export const PostTeamStyle = (theme, time, describes) =>
  request.post('/settings/show', { params: { theme, time, describes } })
// query参数  obj{ theme time describes }  Body参数(必须)  obj{ file1 file2 file3 }

// 4. 团建活动展示接口
export const GetTeamBuilding = (page) => request.get('/about/activity', { params: { page } })
// query参数  page: int

// 5. 加入我们接口
export const PostJoinUs = (name, gender, grade, phone, email, majors, orientation, introduce) =>
  request.post('/join', {
    params: { name, gender, grade, phone, email, majors, orientation, introduce }
  })
// query参数  obj{ name gender grade phone email majors orientation introduce }

// 6. 报名情况接口
export const GetSignUp = () => request.get('/settings/roster')

// 7. 管理员登录接口
export const PostLogin = (account, password) => request.post('/settings/login', (account, password))
// query参数  obj{ account password }

// 8. 上传照片接口
export const PostUpload = (grade, orientation, name, positionOne, positionTwo, word, file) =>
  request.post('/settings/upload', {
    params: { grade, orientation, name, positionOne, positionTwo, word },
    data: { file }
  })
// query参数  obj{ grade orientation name positionOne positionTwo word }  Body参数(可选)  obj{ file }

// 9. 团队接口
export const GetTeam = (grade, orientation) =>
  request.get('/about/member', { params: { grade, orientation } })
// query参数  obj{ grade orientation }
