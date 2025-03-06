// 1999
import { createRouter, createWebHistory } from 'vue-router'

// 首页
// import Home from '@/views/Home/Home.vue'

// 简介
import JianJie from '@/views/About/JianJie.vue'
const JianJieIntroduce = () => import('@/views/About/JianJieIntroduce.vue')
const TeamPhoto = () => import('@/views/About/TeamPhoto.vue')
const Achievement = () => import('@/views/About/Achievement.vue')
const AchievementDirectionIntroduce = () =>
  import('@/views/About/AchievementDirectionIntroduce.vue')
const ActiveShow = () => import('@/views/About/ActiveShow.vue')

// 加入我们
// import Join from '@/views/Join/Join.vue'

// 设置
// import DengLu from '@/views/Setting/DengLu.vue'
// const PushPhoto = () => import('@/views/Setting/PushPhoto.vue')
// const PostAchievement = () => import('@/views/Setting/PostAchievement.vue')
// const BaoMing = () => import('@/views/Setting/BaoMing.vue')

// 一、首页
const Home2 = () => import('@/views/Home/Home.vue')

// 二、关于我们(未部署完成)  →   "简介、部门介绍详情"、  "团队照片"、  "成就、成就详情"、  "活动展示"  6个页面
const Introduce2 = () => import('@/views/About2/Introduce2.vue')
const TeamPhoto2 = () => import('@/views/About2/TeamPhoto2.vue')
const Achievement2 = () => import('@/views/About2/Achievement2.vue')
const ActiveShow2 = () => import('@/views/About2/ActiveShow2.vue')

// 三、加入我们
const Join2 = () => import('@/views/Join2/Join2.vue')
const JoinIntroduce2 = () => import('@/views/Join2/JoinIntroduce2.vue')

// 四、登录
const Login2 = () => import('@/views/Login2/Login2.vue')

// 五、管理员后台(已经部署完成)  →  "钥匙管理"、 "打卡情况、打卡请假管理批准"、 "报名情况"、 "会议内容上传、会议请假管理、会议请假管理批准"、 "刷题记录管理"   8个页面
const KeyManage2 = () => import('@/views/Manage2/KeyManage2.vue')

const Clock2 = () => import('@/views/Manage2/Clock2.vue')
const ClockLeaveApprove2 = () => import('@/views/Manage2/ClockLeaveApprove2.vue')

const BaoMing = () => import('@/views/Setting/BaoMing.vue') // 旧版本的页面

const MeetingPush2 = () => import('@/views/Manage2/MeetingPush2.vue')
const MeetingLeaveManage2 = () => import('@/views/Manage2/MeetingLeaveManage2.vue')
const MeetingLeaveApprove2 = () => import('@/views/Manage2/MeetingLeaveApprove2.vue')

const RecordManage2 = () => import('@/views/Manage2/RecordManage2.vue')

// 六、工作室工具(已经部署完成)  →  "会议请假、我的会议请假"、 "上传照片、编辑上传照片"、 "钥匙记录"、 "刷题记录、我的刷题记录"、 "打卡情况、我的打卡请假"、 "会议内容"、"发布成就"   11个页面
const MeetingLeave2 = () => import('@/views/StudioTool2/MeetingLeave2.vue')
const MyMeetingLeave2 = () => import('@/views/StudioTool2/MyMeetingLeave2.vue')

const PushPhoto2 = () => import('@/views/StudioTool2/PushPhoto2.vue')
const EditPushPhoto2 = () => import('@/views/StudioTool2/EditPushPhoto2.vue')

const KeyRecord2 = () => import('@/views/StudioTool2/KeyRecord2.vue')

const Record2 = () => import('@/views/StudioTool2/Record2.vue')
const MyRecord2 = () => import('@/views/StudioTool2/MyRecord2.vue')

const ClockState2 = () => import('@/views/StudioTool2/ClockState2.vue')
const MyClockState2 = () => import('@/views/StudioTool2/MyClockState2.vue')

const MeetingContent2 = () => import('@/views/StudioTool2/MeetingContent2.vue')

const PublishAchievement2 = () => import('@/views/StudioTool2/PublishAchievement2.vue')

const router = createRouter({
  // mode: 'history',
  history: createWebHistory(import.meta.env.BASE_URL), // 不带 #
  routes: [
    { path: '/', redirect: '/home' },

    // 1. 首页
    { path: '/home', name: 'home', component: Home2 },

    // 2. 加入我们
    { path: '/join', name: 'join', component: Join2 },
    { path: '/join/introduce', name: 'joinIntroduce', component: JoinIntroduce2 },

    // 3. 关于我们  "简介、部门介绍详情"、  "团队照片"、  "成就、成就详情"、  "活动展示"  6个页面
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: Introduce2,
    //   children: [
    //     // 简介  →  部门介绍详情(暂时用旧素材)
    //     {
    //       path: 'introduce',
    //       name: 'introduce',
    //       component: Introduce2,
    //       children: [{ path: '/', name: '', component: '' }]
    //     },

    //     // 团队照片
    //     { path: 'teamPhoto', name: 'teamPhoto', component: TeamPhoto2 },

    //     // 成就  →  成就详情(暂时用旧素材)
    //     {
    //       path: 'achievement',
    //       name: 'achievement',
    //       component: Achievement2,
    //       children: [
    //         {
    //           path: '/',
    //           name: '',
    //           component: ''
    //         }
    //       ]
    //     },

    //     // 活动展示
    //     { path: 'activeshow', name: 'activeshow', component: ActiveShow2 }
    //   ]
    // },

    // 关于我们
    { path: '/about', name: 'about', component: Introduce2 },

    // 简介  →  部门介绍详情(暂时用旧素材)
    { path: '/about/introduce', name: 'introduce', component: Introduce2 },
    { path: '/about/introduce/id', name: '', component: '' },

    // 团队照片
    { path: '/about/teamPhoto', name: 'teamPhoto', component: TeamPhoto2 },

    // 成就  →  成就详情(暂时用旧素材)
    { path: '/about/achievement', name: 'achievement', component: Achievement2 },
    { path: '/about/achievement/id', name: '', component: '' },

    // 活动展示
    { path: '/about/activeShow', name: 'activeShow', component: ActiveShow2 },

    // 4. 登录
    { path: '/login', name: 'login', component: Login2 },

    // 5. 管理员后台页面  →  "路由部署完成"
    // {
    //   path: '/manage',
    //   name: 'manage',
    //   component: RecordManage2,
    //   children: [
    //     // 管理员后台页面  刷题记录管理
    //     { path: 'recordManage', name: 'recordManage', component: RecordManage2 },

    //     // 管理员后台页面  钥匙管理
    //     { path: 'keyManage', name: 'keyManage', component: KeyManage2 },

    //     // 管理员后台页面  会议meeting  →  会议内容上传、(会议请假管理  →  会议请假管理批准)
    //     {
    //       path: 'meeting',
    //       name: 'meeting',
    //       component: MeetingPush2,
    //       children: [
    //         { path: 'meetingPush', name: 'meetingPush', component: MeetingPush2 },
    //         {
    //           path: 'meetingLeaveManage',
    //           name: 'meetingLeaveManage',
    //           component: MeetingLeaveManage2,
    //           children: [
    //             {
    //               path: 'meetingLeaveApprove',
    //               name: 'meetingLeaveApprove',
    //               component: MeetingLeaveApprove2
    //             }
    //           ]
    //         }
    //       ]
    //     },

    //     // 管理员后台页面  打卡情况  →  打卡请假管理批准
    //     {
    //       path: 'clock',
    //       name: 'clock',
    //       component: Clock2,
    //       children: [
    //         {
    //           path: 'clockLeaveApprove',
    //           name: 'clockLeaveApprove',
    //           component: ClockLeaveApprove2
    //         }
    //       ]
    //     },

    //     // 管理员后台页面  报名情况
    //     { path: 'baoMing', name: 'baoMing', component: BaoMing }
    //   ]
    // },
    // 管理员后台页面
    { path: '/manage', name: 'manage', component: RecordManage2 },

    // 管理员后台页面  刷题记录管理
    { path: '/manage/recordManage', name: 'recordManage', component: RecordManage2 },

    // 管理员后台页面  钥匙管理
    { path: '/manage/keyManage', name: 'keyManage', component: KeyManage2 },

    // 管理员后台页面  会议meeting  →  会议内容上传、(会议请假管理  →  会议请假管理批准)
    { path: '/manage/meeting', name: 'meeting', component: MeetingPush2 },
    { path: '/manage/meeting/meetingPush', name: 'meetingPush', component: MeetingPush2 },
    {
      path: '/manage/meeting/meetingLeaveManage',
      name: 'meetingLeaveManage',
      component: MeetingLeaveManage2
    },
    {
      path: '/manage/meeting/meetingLeaveApprove',
      name: 'meetingLeaveApprove',
      component: MeetingLeaveApprove2
    },

    // 管理员后台页面  打卡情况  →  打卡请假管理批准
    { path: '/manage/clock', name: 'clock', component: Clock2 },
    {
      path: '/manage/clock/clockLeaveApprove',
      name: 'clockLeaveApprove',
      component: ClockLeaveApprove2
    },

    // 管理员后台页面  报名情况
    { path: '/manage/baoMing', name: 'baoMing', component: BaoMing },

    // 6. 工作室工具  →  部署完成，只有上传照片 的 相关路由待定
    // {
    //   path: '/tool',
    //   name: 'tool',
    //   component: MeetingLeave2,
    //   children: [
    //     // 工作室工具  会议请假  →  我的会议请假
    //     {
    //       path: 'meetingLeave',
    //       name: 'meetingLeave',
    //       component: MeetingLeave2,
    //       children: [
    //         {
    //           path: 'myMeetingLeave',
    //           name: 'myMeetingLeave',
    //           component: MyMeetingLeave2
    //         }
    //       ]
    //     },

    //     // 工作室工具  上传照片  →  编辑上传照片   此处路由待定
    //     {
    //       path: 'pushPhoto',
    //       name: 'pushPhoto',
    //       component: PushPhoto2,
    //       children: [{ path: 'editPushPhoto', name: 'editPushPhoto', component: EditPushPhoto2 }]
    //     },

    //     // 工作室工具  钥匙记录
    //     { path: 'keyRecord', name: 'keyRecord', component: KeyRecord2 },

    //     // 工作室工具  刷题记录  →  我的刷题记录
    //     {
    //       path: 'record',
    //       name: 'record',
    //       component: Record2,
    //       children: [{ path: 'myRecord', name: 'myRecord', component: MyRecord2 }]
    //     },

    //     // 工作室工具  打卡情况  →  我的打卡情况
    //     {
    //       path: 'clockState',
    //       name: 'clockState',
    //       component: ClockState2,
    //       children: [{ path: 'myClockState', name: 'myClockState', component: MyClockState2 }]
    //     },

    //     // 工作室工具  会议内容
    //     { path: 'meetingContent', name: 'meetingContent', component: MeetingContent2 },

    //     // 工作室工具  发布成就
    //     { path: 'publishAchievement', name: 'publishAchievement', component: PublishAchievement2 }
    //   ]
    // },
    // 工作室工具
    { path: '/tool', name: 'tool', component: MeetingLeave2 },

    // 工作室工具  会议请假  →  我的会议请假
    { path: '/tool/meetingLeave', name: 'meetingLeave', component: MeetingLeave2 },
    {
      path: '/tool/meetingLeave/myMeetingLeave',
      name: 'myMeetingLeave',
      component: MyMeetingLeave2
    },

    // 工作室工具  上传照片  →  编辑上传照片   此处路由待定
    { path: '/tool/pushPhoto', name: 'pushPhoto', component: PushPhoto2 },
    { path: '/tool/pushPhoto/editPushPhoto', name: 'editPushPhoto', component: EditPushPhoto2 },

    // 工作室工具  钥匙记录
    { path: '/tool/keyRecord', name: 'keyRecord', component: KeyRecord2 },

    // 工作室工具  刷题记录  →  我的刷题记录
    { path: '/tool/record', name: 'record', component: Record2 },
    { path: '/tool/record/myRecord', name: 'myRecord', component: MyRecord2 },

    // 工作室工具  打卡情况  →  我的打卡情况
    { path: '/tool/clockState', name: 'clockState', component: ClockState2 },
    { path: '/tool/clockState/myClockState', name: 'myClockState', component: MyClockState2 },

    // 工作室工具  会议内容
    { path: '/tool/meetingContent', name: 'meetingContent', component: MeetingContent2 },

    // 工作室工具  发布成就
    { path: '/tool/publishAchievement', name: 'publishAchievement', component: PublishAchievement2 }

    // 加入我们  从此处开始均为  废案
    // { path: '/join', name: 'join', component: Join },

    // 设置
    // { path: '/setting', component: Setting },
    // { path: '/denglu', name: 'denglu', component: DengLu },
    // { path: '/pushphoto', name: 'pushphoto', component: PushPhoto },
    // { path: '/postachievement', name: 'postachievement', component: PostAchievement },
    // { path: '/baoming', name: 'baoming', component: BaoMing },

    // 关于我们
    // { path: '/jianjie', name: 'jianjie', component: JianJie },
    // { path: '/introduce', name: 'introduce', component: JianJieIntroduce },
    // { path: '/teamphoto', name: 'teamphoto', component: TeamPhoto },
    // { path: '/achievement', name: 'achievement', component: Achievement },
    // {
    //   path: '/achievementDirectionIntroduce',
    //   name: 'achievementDirectionIntroduce',
    //   component: AchievementDirectionIntroduce
    // },
    // { path: '/activeshow', name: 'activeshow', component: ActiveShow }
  ],
  linkActiveClass: 'router-active' // 改名为 router-active
  //  linkActiveClass: 'active', // 模糊匹配
  //  linkExactActiveClass: 'exact-active', // 精确匹配
})
export default router
