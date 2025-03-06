<script setup>
import { ref, watch, computed } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

// 其余路由
// 管理员后台  →  钥匙管理、打卡、报名情况、会议   4个页面
// 工作室工具  →  会议请假、上传照片、钥匙记录、刷题记、我的刷题记录、打卡情况、会议内容、发布成就   8个页面
const routers = ref([
  // 首页
  { name: '首页', path: '/home', id: 1 },

  // 加入我们
  { name: '加入我们', path: '/join', id: 2 },

  // 关于我们
  {
    name: '关于我们',
    path: '/about',
    id: 3,
    children: [
      {
        name: '简介',
        path: '/about/introduce',
        id: 31
      },
      {
        name: '团队照片',
        path: '/about/teamPhoto',
        id: 32
      },
      {
        name: '成就',
        path: '/about/achievement',
        id: 33
      },
      {
        name: '活动展示',
        path: '/about/activeshow',
        id: 34
      }
    ]
  },

  // 登录
  { name: '登录', path: '/login', id: 4 },

  // 管理员后台页面
  {
    name: '管理员后台页面',
    path: '/manage',
    id: 5,
    children: [
      {
        name: '刷题记录管理',
        path: '/manage/recordManage',
        id: 51
      },
      {
        name: '钥匙管理',
        path: '/manage/keyManage',
        id: 52
      },
      {
        name: '会议',
        path: '/manage/meeting',
        id: 53,
        children: [
          {
            name: '会议内容上传',
            path: '/manage/meeting/meetingPush',
            id: 531
          },
          {
            name: '会议请假管理',
            path: '/manage/meeting/meetingLeaveManage',
            id: 532
          },
          {
            name: '会议请假管理批准',
            path: '/manage/meeting/meetingLeaveApprove',
            id: 533
          }
        ]
      },
      {
        name: '打卡情况',
        path: '/manage/clock',
        id: 54,
        children: [
          {
            name: '打卡请假管理批准',
            path: '/manage/clock/clockLeaveApprove',
            id: 541
          }
        ]
      },
      {
        name: '报名情况',
        path: '/manage/baoMing',
        id: 54
      }
    ]
  },

  // 工作室工具
  {
    name: '工作室工具',
    path: '/tool',
    id: 6,
    children: [
      {
        name: '会议请假',
        path: '/tool/meetingLeave',
        id: 61,
        children: [{ name: '我的会议请假', path: '/tool/meetingLeave/myMeetingLeave', id: 611 }]
      },
      {
        name: '上传照片',
        path: '/tool/pushPhoto',
        id: 62,
        children: [{ name: '编辑上传照片', path: '/tool/pushPhoto/editPushPhoto', id: 621 }]
      },
      { name: '钥匙记录', path: '/tool/keyRecord', id: 63 },
      {
        name: '刷题记录',
        path: '/tool/record',
        id: 64,
        children: [{ name: '我的刷题记录', path: '/tool/record/myRecord', id: 641 }]
      },
      {
        name: '打卡情况',
        path: '/tool/clockState',
        id: 65,
        children: [{ name: '我的打卡情况', path: '/tool/clockState/myClockState', id: 651 }]
      },
      { name: '会议内容', path: '/tool/meetingContent', id: 66 },
      { name: '发布成就', path: '/tool/publishAchievement', id: 67 }
    ]
  }
])

// 右侧路由区域
const filterRouter = computed(() =>
  // routers.value.filter((item) => item.name !== activeRouter.value) // 如果要动态右侧就使用这条
  routers.value.filter((item) => item.name !== '')
)

// 左侧路由区域
// 主路由  当前活跃的主路由
const activeRouter = ref(routers.value[0])

// 子路由  当前活跃的子路由
const subActiveRouter = ref(null)

const init = (newRoute) => {
  // 思路
  // 在主路由匹配当前路由，用find
  // 主路由当中如果找到子路由1，判断有无子路由1，如果有子路由1，则在 子路由1里 寻找 是否有与 当前子路由1 匹配的，若没有，则子路由1 设置为 当前主路由的第一个子路由1，并返回子路由1的路径；若没有子路由1，结束函数，返回主路由的路径
  // 子路由1 寻找完毕后，再次判断有无 子路由2，如果有，则在 子路由2里 寻找 是否有与 当前子路由2匹配的，若没有，则子路由2设置为 当前子路由1的第一个子路由2，并返回子路由2的路径；若没有子路由2，结束函数，返回子路由1的路径

  //   看到这里，我注意到你正在尝试在 Vue 组件中实现一个导航栏，并且你正在使用 Vue Router 来管理路由。你的代码中使用了 `routers` 数组来存储路由信息，并尝试通过 `find` 方法来找到当前激活的路由。然而，你的代码中存在一些问题，导致无法正确地找到激活的路由。
  // 首先，你的代码中存在一些语法错误。例如，你在 `find` 方法中使用了 `return` 语句，但是没有正确地返回结果。你需要确保 `find` 方法返回一个布尔值，以便正确地找到激活的路由。
  // 其次，你的代码中存在一些逻辑错误。例如，你在 `find` 方法中使用了嵌套的 `find` 方法，但是没有正确地处理嵌套的路由。你需要确保你的代码能够正确地处理嵌套的路由，以便正确地找到激活的路由。
  // 最后，你的代码中存在一些不必要的重复代码。例如，你在 `find` 方法中多次使用了 `console.log` 语句，这可能会导致你的控制台输出大量的日志信息。你可以考虑使用一个变量来存储结果，并在需要时打印该变量。

  const hard = ref('') // 存储当前激活的路由
  const res2 = routers.value.find((item) => {
    // 检查主路由
    // console.log(item.path, '主', route.path)

    // 一、主路由逻辑
    if (item.path === route.path) {
      activeRouter.value = item
      // console.log(activeRouter.value, '主路由');

      // console.log('找到了主路由:', item.path)
      // 此处变更逻辑，将当前主路由下的第一个子路由赋值给hard.value
      if (item.children) {
        return (hard.value = item.children[0])
      }
      return (hard.value = item || true)
    } // 找到了主路由

    // 二、子路由1逻辑
    // 如果有 子路由1，则遍历子路由1
    if (item.children) {
      item.children.find((item1) => {
        // console.log(item1.path, '子1', route.path)
        // 检查子路由1
        if (item1.path === route.path) {
          activeRouter.value = item
          // console.log('找到了子路由1:', item1.path)
          return (hard.value = item1 || true)
        } // 找到了子路由1

        // 三、子路由2逻辑
        // 如果子路由1 还有子路由2，则遍历子路由2
        if (item1.children) {
          item1.children.find((item2) => {
            // console.log(item2.path, '子2', route.path)
            if (item2.path === route.path) {
              activeRouter.value = item
              // console.log('找到了子路由2:', item2.path)
              return (hard.value = item2 || true)
            } // 找到了子路由2
          })
        }
        return false // 在当前子路由1中没有找到匹配
      })
    }
    return false // 在主路由中没有找到匹配
  })

  subActiveRouter.value = newRoute || hard.value
}

// 点击跳转的问题解决了！！！
const setRouter = (route) => {
  const isChild = activeRouter.value.children?.some((c) => c.id === route.id)

  if (isChild) {
    // console.log(activeRouter.value) // 此处固定变成 首页了，说明是初始化的问题，初始化没有将其设置为 当前主路由，而是默认的 首页    主路由解决了！！！

    router.push(route.path) // 如果是子路由，直接跳转 。。
  } else {
    // 如果是切换主路由
    const newActiveRouter = routers.value.find((item) => item.id === route.id)
    if (!newActiveRouter) return // 如果没有找到主路由，则返回

    activeRouter.value = newActiveRouter // 更新当前活跃的主路由
    subActiveRouter.value =
      newActiveRouter.children && newActiveRouter.children.length > 0
        ? newActiveRouter.children[0]
        : null // 设置第一个子路由为活跃状态

    const fullPath = newActiveRouter.path // 直接使用新的主路由路径

    router.push(fullPath) // 路由跳转
  }
}

// 修改3: 重构面包屑计算逻辑  如果看不懂，就去ai吧，因为现在写的就是ai的逻辑
const breadcrumbItems = computed(() => {
  // 999: 新增路由链查找逻辑
  const findRouteChain = (routes, targetPath) => {
    for (const route of routes) {
      if (route.path === targetPath) return [route]
      if (route.children) {
        const childChain = findRouteChain(route.children, targetPath)
        if (childChain) return [route, ...childChain]
      }
    }
    return null
  }

  // 999: 获取当前路由链
  let chain = findRouteChain(routers.value, route.path) || []

  // 999: 处理单层路由且有子路由的情况
  if (chain.length === 1 && chain[0].children?.length) {
    // router.push(chain[0].children[0].path)
    // console.log(chain[0].children[0].path);
    // subActiveRouter.value = chain[0].children[0]
    return [chain[0].name, chain[0].children[0].name]
  }

  // 999: 正常返回路由链名称
  return chain.map((item) => item.name)
})

// 通过判断域名附带的路径，一进入页面就马上初始化
watch(
  () => route,
  (newRoute) => {
    init(newRoute)
  },
  { immediate: true }
)
</script>

<template>
  <div class="navBar">
    <div class="left-area">
      <el-breadcrumb class="breadcrumb" :separator-icon="ArrowRight">
        <!-- 修改5: 动态绑定面包屑 -->
        <el-breadcrumb-item
          v-for="(item, index) in breadcrumbItems"
          :key="index"
          class="breadcrumb-item"
          :class="{ 'active-route': index === breadcrumbItems.length - 1 }"
        >
          {{ item }}
        </el-breadcrumb-item>
      </el-breadcrumb>

      <div v-if="activeRouter.children" class="submenu">
        <span
          v-for="child in activeRouter.children"
          :key="child.id"
          @click="setRouter(child)"
          class="submenu-item"
          :class="{ active: child.path === subActiveRouter?.path }"
        >
          <span class="content">
            <span class="name">{{ child.name }}</span>
            <span class="arrow"></span>
          </span>
        </span>
      </div>
    </div>

    <div class="right-area">
      <span
        v-for="router in filterRouter"
        :key="router.id"
        @click="setRouter(router)"
        class="route-item"
      >
        {{ router.name }}
      </span>
    </div>
  </div>
</template>

<style scoped>
/* 面包屑导航 */
.breadcrumb {
  cursor: pointer;
  height: 62px;
  display: flex;
  align-items: center;
  /* text-align: center; */
  /* line-height: 62px; */
}
.breadcrumb-item {
  font-size: 18px;
  color: black;
  font-weight: 400;
  height: 20px;
  /* padding-bottom: 2px; */
  /* line-height: 62px; */
}
.active-route {
  font-size: 18px;
  color: black;
  font-weight: 400;
  height: 20px;
  /* position: absolute; */
  left: 100%;
  /* height: 62px; */
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #383838;
  padding-bottom: 10px;
  margin-top: 10px;
}

/* 修改7: 调整子菜单样式 */
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 100;
  cursor: pointer;
  display: none;
  /* 初始隐藏 */

  width: 195px;
  opacity: 0.8;

  border-radius: 11px;
  background: rgba(0, 0, 0, 1);
  color: rgba(255, 255, 255, 1);
}

.submenu-item {
  height: 62px; /* 我自己计算的 */
  display: block;
  cursor: pointer;

  padding-left: 13px;
  padding-right: 5px;
  line-height: 62px;
}
.submenu-item .content {
  width: 100%;
  height: 62px;
  display: inline-block;

  border-bottom: 1px solid rgba(255, 255, 255, 0.5);

  display: flex;
  align-items: center;
  justify-content: space-between;
}
.submenu-item .arrow {
  margin-right: 15px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
  rotate: 45deg;
}

.left-area:hover .submenu {
  display: block; /* 悬停显示 */
}

.submenu-item:nth-child(1) {
  border-radius: 11px 11px 0 0;
}
.submenu-item:nth-last-child(1) {
  border-radius: 0 0 11px 11px;
}
.submenu-item:hover {
  background: #f5f5f5;
  color: black;
}
.submenu-item:hover .arrow {
  border-top: 1px solid black;
  border-right: 1px solid black;
  border-bottom: 1px solid transparent;
  border-left: 1px solid transparent;
}

.submenu-item.active {
  font-weight: bold;
}

/* 导航栏 */
.navBar {
  width: 1440px;
  margin: 0 auto;
  height: 60px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.left-area {
  min-width: 100px;
  max-width: 720px;
  width: 40%;
  margin-left: 5%;
  /* cursor: pointer; */
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  line-height: 100%;
}

.right-area {
  /* width: 829.92px; */
  width: 60%;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 57px;
  margin-right: 1%;
}

.route-item {
  cursor: pointer;
  /* padding-bottom: 300px; */

  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 24.79px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
}

.route-item:hover {
  padding-bottom: 2px;
  /* margin-bottom: 2px; */
  border-bottom: 2px solid black;
}
</style>

<!-- 要求：
1. 做一个路由导航栏，导航栏分为左侧区域(下称左侧)和右侧区域(下称右侧)
2. 导航栏一共有ABCDEF六个主路由，以A主路由为例，每个主路由下又有a1,a2,a3,a4四个子路由(下称子路由1)，且a1又有a11,a12两个子路由(下称子路由2)；但是E主路由没有子路由
3. 左侧默认显示A主路由及其当前所在子路由1，子路由1页面里有事件前往子路由2，右侧默认显示ABCDEF六个主路由
4. 鼠标经过左侧主路由，则会有下拉菜单显示主路由的子路由1列表，经过右侧不显示子路由1列表
5. 点击左侧子路由1列表其中一项，则当前左侧主路由更新显示为该子路由1，右侧不变
6. 点击右侧主路由，则左侧主路由更新显示为该主路由+子路由1，其他逻辑同上述要求，右侧不变
7. 在当前页面(假设是主路由B+子路由b2)点击按钮前往子路由2，则左侧主路由更新显示为该主路由+子路由1+子路由2，在右侧更换主路后逻辑同理，右侧不变
8. 特殊情况的E，左侧只显示E主路由，右侧不变
9. 需要特别注意的是！左侧只会在最后一个路由有下划线，例如：A>a1>a11，则只有a11有下划线；A>a1，则只有a1有下划线；E，则只有E有下划线。
10.在不通过点击导航栏的任意主路由或者子路由1以及页面里的任意事件前往任意路由时，
只通过浏览器的返回前进按钮，以及浏览器域名栏输入地址，左侧主路由和右侧主路由需要同步更新，且左侧主路由需要同步更新当前所在资源路径的地址(即主路由/主路由+子路由1/主路由+子路由1+子路由2)，右侧不变 -->
