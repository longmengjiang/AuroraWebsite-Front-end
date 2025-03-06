<script setup>
defineOptions({
  name: 'myJoin2'
})
import { ref, watch, onMounted } from 'vue'
import { PostJoinUs } from '@/api'
import { useRouter, useRoute } from 'vue-router'
// import { ElMessage } from 'element-plus'
const router = useRouter()
const route = useRoute()

const majorList = ref([
  { id: 1, name: '计算机科学与技术' },
  { id: 2, name: '软件工程' },
  { id: 3, name: '物联网工程' },
  { id: 4, name: '通信工程' },
  { id: 5, name: '数据科学与大数据技术' },
  { id: 7, name: '其他(自己填写)' }
])
const DirectionList = ref([
  { id: 1, name: '网络安全' },
  { id: 2, name: 'Web前端' },
  { id: 3, name: 'Web后端' },
  { id: 4, name: '设计' },
  { id: 5, name: '嵌入式' },
  { id: 6, name: '算法' },
  { id: 7, name: '数据分析' }
])

// 表单数据对象
const formData = ref({
  name: '光头强',
  gender: '女', // 默认选中女性
  grade: '2025',
  phone: '13513213511',
  email: '123456@qq.com',
  major: 'sahx',
  direction: '后端',
  introduce: ''
})

// 专业和方向选择处理
const pushMajor = (value, type) => {
  if (type === 'major') {
    formData.value.major = value
  } else if (type === 'direction') {
    formData.value.direction = value
  }
}

// 表单提交处理
const submitForm = async () => {
  try {
    // 表单验证
    if (!validateForm()) return

    // 发送POST请求
    const res = await PostJoinUs(
      formData.value.name,
      formData.value.gender,
      formData.value.grade,
      formData.value.phone,
      formData.value.email,
      formData.value.major,
      formData.value.direction,
      formData.value.introduce
    )

    ElMessage.success(res.msg)
    resetForm()
  } catch (error) {
    console.error('提交失败:', error)
    alert('提交失败，如果信息正确，请联系管理员')
  }
}

// 表单验证
const validateForm = () => {
  const requiredFields = [
    { field: 'name', name: '姓名' },
    { field: 'grade', name: '年级' },
    { field: 'phone', name: '电话' },
    { field: 'email', name: '邮箱' },
    { field: 'major', name: '专业' },
    { field: 'direction', name: '方向' }
  ]

  for (const { field, name } of requiredFields) {
    if (!formData.value[field].trim()) {
      alert(`${name}不能为空`)
      return false
    }
  }

  // 年级格式验证
  if (!/^(2023|2024|2025)$/.test(formData.value.grade)) {
    alert('你这年级确定填对了？')
    return false
  }
  // 手机号格式验证（简单版）
  if (!/^1[3-9]\d{9}$/.test(formData.value.phone)) {
    alert('你这手机号不对吧……')
    return false
  }

  // 邮箱格式验证
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(formData.value.email)) {
    alert('你这邮箱不对吧')
    return false
  }

  // 专业格式验证
  if (!/^[a-zA-Z\u4e00-\u9fa5]+$/.test(formData.value.major)) {
    alert('你莓专业也能上学啊')
    return false
  }

  // 方向格式验证
  if (
    !/^(Web前端|前端|后端|Web后端|网络安全|网安|设计|嵌入式|算法|数据分析)$/.test(
      formData.value.direction
    )
  ) {
    alert('这方向你来了可就是皇帝')
    return false
  }

  // 个人简介格式验证
  if (!/^[a-zA-Z\u4e00-\u9fa5]+$/.test(formData.value.introduction)) {
    alert('你这简介不对吧')
    return false
  }
  return true
}

// 重置表单
const resetForm = async () => {
  console.log('页面1:', formData.value.introduce, '页面2:', route.query.introduce)
  router.push({
    path: '/join',
    query: {}
  })
  formData.value = {
    name: '',
    gender: '女',
    grade: '',
    phone: '',
    email: '',
    major: '',
    direction: '',
    introduce: ''
  }
  route.query.introduce = ''
  console.log('页面1:', formData.value.introduce, '页面2:', route.query.introduce)

  // 重置可见性状态  →  必须使用 setTimeout，以此来跳过watch的防抖500ms验证机制
  setTimeout(() => {
    inputSpan1Visibility.value = {
      name: false,
      grade: false,
      phone: false,
      email: false,
      major: false,
      direction: false
    }
    inputSpan2Visibility.value = {
      name: '',
      grade: '',
      phone: '',
      email: '',
      major: '',
      direction: ''
    }
  }, 501)
}

// 手写防抖函数  →  只执行最后一次
const debounce = (fn, wait) => {
  // 1.声明定时器，不用给值，或者给null
  let timer = null

  // 2. return 返回一个匿名函数，原因和作用看下面
  return function (...args) {
    // (3. 2.3.4)步

    // 有定时器则关掉
    if (timer) clearTimeout(timer)

    // [重新]打开定时器，在 t时间后调用传递过来的 fn函数
    timer = setTimeout(function () {
      fn(...args)
    }, wait)
  }
}
// 手写节流函数  →  只执行第一次
const throttle = (fn, delay) => {
  let timer = null
  return function () {
    if (!timer) {
      fn()
      timer = setTimeout(() => {
        timer = null
      }, delay)
    }
  }
}

// 监听每个字段的变化
watch(
  () => formData.value.name,
  debounce((newValue) => {
    if (newValue.trim() === '') {
      inputSpan1Visibility.value.name = false
      inputSpan2Visibility.value.name = '姓名不能为空'
    } else {
      inputSpan1Visibility.value.name = true
      inputSpan2Visibility.value.name = ''
    }
  }, 500)
)

watch(
  () => formData.value.grade,

  debounce((newValue) => {
    if (!/^(2023|2024|2025)$/.test(newValue)) {
      inputSpan1Visibility.value.grade = false
      inputSpan2Visibility.value.grade = '你这年级确定填对了？'
    } else {
      inputSpan1Visibility.value.grade = true
      inputSpan2Visibility.value.grade = ''
    }
  }, 500)
)

watch(
  () => formData.value.phone,
  debounce((newValue) => {
    if (!/^1[3-9]\d{9}$/.test(newValue)) {
      inputSpan1Visibility.value.phone = false
      inputSpan2Visibility.value.phone = '你这手机号不对吧……'
    } else {
      inputSpan1Visibility.value.phone = true
      inputSpan2Visibility.value.phone = ''
    }
  }, 500)
)

watch(
  () => formData.value.email,
  debounce((newValue) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(newValue)) {
      inputSpan1Visibility.value.email = false
      inputSpan2Visibility.value.email = '你这邮箱不对吧'
    } else {
      inputSpan1Visibility.value.email = true
      inputSpan2Visibility.value.email = ''
    }
  }, 500)
)

watch(
  () => formData.value.major,
  debounce((newValue) => {
    if (!/^[a-zA-Z\u4e00-\u9fa5]+$/.test(newValue)) {
      inputSpan1Visibility.value.major = false
      inputSpan2Visibility.value.major = '你这专业也能上学啊'
    } else {
      inputSpan1Visibility.value.major = true
      inputSpan2Visibility.value.major = ''
    }
  }, 500)
)

watch(
  () => formData.value.direction,
  debounce((newValue) => {
    if (!/^(Web前端|前端|后端|Web后端|网络安全|网安|设计|嵌入式|算法|数据分析)$/.test(newValue)) {
      inputSpan1Visibility.value.direction = false
      inputSpan2Visibility.value.direction = '这方向你来了可就是皇帝'
    } else {
      inputSpan1Visibility.value.direction = true
      inputSpan2Visibility.value.direction = ''
    }
  }, 500)
)

const inputSpan1Visibility = ref({
  name: false,
  grade: false,
  phone: false,
  email: false,
  major: false,
  direction: false
})

const inputSpan2Visibility = ref({
  name: '',
  grade: '',
  phone: '',
  email: '',
  major: '',
  direction: ''
})

const showDirectionSelect = ref(false)
const showMajorSelect = ref(false)

const majorDisp = () => setTimeout(() => (showMajorSelect.value = false), 100)
const directionDisp = () => setTimeout(() => (showDirectionSelect.value = false), 100)

const throttleSubmit = throttle(submitForm, 1000)

// 最终使用防抖函数
const debounceSubmit = debounce(submitForm, 500)

const goIntroduce = () => {
  router.push({
    path: '/join/introduce',
    query: {
      introduce: formData.value.introduce
    }
  })
}

onMounted(() => {
  if (route.query.introduce) formData.value.introduce = route.query.introduce
})
</script>

<template>
  <div class="main">
    <!-- 导航栏 -->
    <NavBar2></NavBar2>

    <!-- 背景图片 -->
    <div class="bgc">
      <div class="jia-shenBgc"></div>
    </div>

    <!-- 欢迎横幅 -->
    <div class="welcome">
      <span>welcome to join us</span>
    </div>

    <!-- 整体填写区域 -->
    <form class="inputMain">
      <!-- 姓名 -->
      <div class="nameInput">
        <div class="describe">
          <div class="ch_des">姓名</div>
          <div class="en_des">Your name</div>
        </div>
        <input class="input" v-model="formData.name" placeholder="Enter" />
        <span class="inputSpan1" v-if="inputSpan1Visibility.name">✓</span>
        <span class="inputSpan2" v-if="inputSpan2Visibility.name">
          {{ inputSpan2Visibility.name }}
        </span>
      </div>

      <!-- 性别 -->
      <div class="genderInput">
        <span class="span1">性别</span>
        <label class="gender">
          男
          <input
            class="gender"
            v-model="formData.gender"
            type="radio"
            name="gender"
            value="男"
            @change="getValue"
          />
        </label>
        <span class="span2"> /</span>
        <label class="gender">
          女
          <input
            class="gender"
            v-model="formData.gender"
            type="radio"
            name="gender"
            value="女"
            checked
            @change="getValue"
          />
        </label>
      </div>

      <!-- 年级 -->
      <div class="gradeInput">
        <div class="describe">
          <div class="ch_des">年级</div>
          <div class="en_des">Grade</div>
        </div>
        <input class="input" v-model="formData.grade" placeholder="Enter" />
        <span class="inputSpan1" v-if="inputSpan1Visibility.grade">✓</span>
        <span class="inputSpan2" v-if="inputSpan2Visibility.grade">
          {{ inputSpan2Visibility.grade }}
        </span>
      </div>

      <!-- 电话 -->
      <div class="phoneInput">
        <div class="describe">
          <div class="ch_des">电话</div>
          <div class="en_des">Phone</div>
        </div>
        <input class="input" v-model="formData.phone" placeholder="Enter" />
        <span class="inputSpan1" v-if="inputSpan1Visibility.phone">✓</span>
        <span class="inputSpan2" v-if="inputSpan2Visibility.phone">
          {{ inputSpan2Visibility.phone }}
        </span>
      </div>

      <!-- 邮件 -->
      <div class="emailInput">
        <div class="describe">
          <div class="ch_des">邮件</div>
          <div class="en_des">E-mail</div>
        </div>
        <input class="input" v-model="formData.email" placeholder="Enter" />
        <span class="inputSpan1" v-if="inputSpan1Visibility.email">✓</span>
        <span class="inputSpan2" v-if="inputSpan2Visibility.email">
          {{ inputSpan2Visibility.email }}
        </span>
      </div>

      <!-- 专业 -->
      <div class="majorInput">
        <div class="describe">
          <div class="ch_des">专业</div>
          <div class="en_des">Major</div>
        </div>
        <input
          class="input"
          v-model="formData.major"
          placeholder="Enter"
          @focus="(showMajorSelect = true)"
          @blur="majorDisp"
        />
        <span class="inputSpan1" v-if="inputSpan1Visibility.major">✓</span>
        <span class="inputSpan2" v-if="inputSpan2Visibility.major">
          {{ inputSpan2Visibility.major }}
        </span>

        <!-- 弹出框 -->
        <div class="select-box" v-if="showMajorSelect">
          <ul class="select-box-ul">
            <li v-for="item in majorList" :key="item.id" @click="pushMajor(item.name, 'major')">
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 方向 -->
      <div class="directionInput">
        <div class="describe">
          <div class="ch_des">方向</div>
          <div class="en_des">Direction</div>
        </div>
        <input
          class="input"
          v-model="formData.direction"
          placeholder="Enter"
          @focus="(showDirectionSelect = true)"
          @blur="directionDisp"
        />
        <span class="inputSpan1" v-if="inputSpan1Visibility.direction">✓</span>
        <span class="inputSpan2" v-if="inputSpan2Visibility.direction">
          {{ inputSpan2Visibility.direction }}
        </span>

        <!-- 弹出框 -->
        <div class="select-box" v-if="showDirectionSelect">
          <ul class="select-box-ul">
            <li
              v-for="item in DirectionList"
              :key="item.id"
              @click="pushMajor(item.name, 'direction')"
            >
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 介绍你自己  @click="open" -->
      <el-button plain class="introduceInput" @click="goIntroduce">
        <div class="introduceDescribe">
          <div class="introduceCh_des">介绍你自己</div>
          <div class="introduceArrow"></div>
        </div>
      </el-button>
    </form>

    <!-- 加入按钮 -->
    <div class="joinBtn">
      <button class="btn" @click.prevent="debounceSubmit()">
        <!-- :disabled="formData.name || formData.grade || formData.phone" -->
        加入我们
      </button>
    </div>

    <!-- END -->
    <div class="END">END</div>
  </div>
</template>

<style scoped>
.main {
  min-width: 1440px;
  min-height: 2878px;
  background-color: #fff;
}

/* 导航栏 */
.navBar {
  min-width: 1440px;
  min-height: 60px;
  background-color: #fff;
}

/* 背景图片 */
.bgc {
  min-width: 1440px;
  height: 203.93px;
}
.jia-shenBgc {
  min-width: 1440px;
  height: 200px;
  box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.25);

  position: relative;
}
.jia-shenBgc::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  background-image: url(https://img.js.design/assets/img/66978236b335ca902d762e28.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.jia-shenBgc::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200px;
  opacity: 0.8;
  background: rgba(0, 0, 0, 0.7);
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

/* 整体填写区域 */
.inputMain {
  max-width: 581px;
  /* height: 1670px; */
  /* margin: 51px 619px 0 240px; */
  margin: 51px auto 0 auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
/* 姓名 */
.nameInput {
  min-width: 573px;
  min-height: 130px;
  background-color: #fff;
  position: relative;
}

.describe {
  width: 100%;
  /* height: 50%; */
  display: flex;
  justify-content: start;
  align-items: center;
}
.ch_des {
  margin-right: 16px;

  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}
.en_des {
  width: 50%;
  height: 50%;

  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(140, 140, 140, 1);
  text-align: left;
  vertical-align: top;
}
.input {
  width: 287px;
  height: 52px;
  opacity: 1;
  border: none;
  border-radius: 38px;
  background: rgba(74, 74, 74, 0.1);

  padding-left: 20px;
  /** 文本1 */
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 23.17px;
  /* color: rgba(140, 140, 140, 0.48); */
  text-align: left;
  vertical-align: top;
}
.inputSpan1 {
  position: absolute;
  display: inline-block;
  font-size: 16px;
  left: 50%;
  top: 50%;
  width: 30px;
  height: 30px;
  padding: 10px;
  border: 1px solid rgb(157, 149, 149);
  color: 'green';
  border-radius: 50%;
  font-size: 24px;
  background-color: #49ba9b;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inputSpan2 {
  position: absolute;
  display: inline-block;
  font-size: 16px;
  left: 50%;
  top: 48%;
  width: 210px;
  height: 30px;
  padding: 16px;
  border: 0px solid rgb(157, 149, 149);
  color: red;
  border-radius: 5px;
  font-size: 16px;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 性别 */
.genderInput {
  min-width: 334px;
  min-height: 47px;
  margin: 14px 239px 10px 0;
  background-color: #fff;
}

.genderInput .span1 {
  width: 161.48px;
  height: 47.02px;
  opacity: 1;
  margin-right: 20px;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.genderInput .span2 {
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.genderInput .gender {
  /* display: inline-block; */
  /* width: 25px; */
  /* height: 47px; */
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
}

/* 年级 */
.gradeInput {
  width: 287px;
  height: 129px;
  background-color: #fff;
  margin: 7px 290px 1px 0;
  position: relative;
}
.gradeInput .inputSpan1 {
  top: 64px;
  left: 290px;
}
.gradeInput .inputSpan2 {
  top: 64px;
  left: 290px;
}

/* 电话 */
.phoneInput {
  width: 477px;
  height: 127px;
  background-color: #fff;
  margin: 10px 101px 5px 0;
  position: relative;
}
.phoneInput .inputSpan1 {
  top: 63px;
  left: 480px;
}
.phoneInput .inputSpan2 {
  top: 63px;
  left: 480px;
}
.phoneInput .input {
  width: 476px;
  height: 52px;
  opacity: 1;
  border-radius: 38px;
  background: rgba(74, 74, 74, 0.1);
}

/* 邮件 */
.emailInput {
  width: 477px;
  height: 127px;
  background-color: #fff;
  margin: 10px 101px 5px 0;
  position: relative;
}
.emailInput .inputSpan1 {
  top: 63px;
  left: 480px;
}
.emailInput .inputSpan2 {
  top: 63px;
  left: 480px;
}
.emailInput .input {
  width: 476px;
  height: 52px;
  opacity: 1;
  border-radius: 38px;
  background: rgba(74, 74, 74, 0.1);
}

/* 专业 */
.majorInput {
  width: 576px;
  /* height: 525px; */
  background-color: #fff;
  margin: 10px 101px 5px 0;
  position: relative;
}
.majorInput .inputSpan1 {
  top: 63px;
  left: 480px;
}
.majorInput .inputSpan2 {
  top: 63px;
  left: 480px;
}
.majorInput .input {
  width: 476px;
  height: 52px;
  opacity: 1;
  border-radius: 38px;
  background: rgba(74, 74, 74, 0.1);
}

/* 弹出框 */
.select-box {
  width: 344px;
  /* height: 315px; */
  margin: 11px 139px 28px 93px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 1);
}
.select-box ul {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 10px 34px 3px 30px;
}
.select-box ul li {
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.select-box ul li span {
  display: inline-block;
  margin: 6px 0 6px 34px;

  /** 文本1 */
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 34.75px;
  color: rgba(140, 140, 140, 1);
}
.select-box ul li:nth-last-child(1) {
  border-bottom: none;
}

/* 方向 */
.directionInput {
  width: 581px;
  /* height: 525px; */
  background-color: #fff;
  margin: 10px 101px 5px 0;
  position: relative;
}
.directionInput .inputSpan1 {
  top: 63px;
  left: 480px;
}
.directionInput .inputSpan2 {
  top: 63px;
  left: 480px;
}
.directionInput .input {
  width: 476px;
  height: 52px;
  opacity: 1;
  border-radius: 38px;
  background: rgba(74, 74, 74, 0.1);
}

/* 介绍你自己 */
.introduceInput {
  width: 138px;
  height: 45px;
  background-color: #fff;
  margin: 24px 320px 0px 0;
  cursor: pointer;
  border: none;
}
.introduceInput .introduceDescribe {
  display: flex;
  align-items: center;
}
.introduceInput .introduceCh_des {
  margin-right: 6px;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}
.introduceInput .introduceArrow {
  width: 10px;
  height: 10px;

  color: rgba(0, 0, 0, 1);
  border-top: 1.33px solid transparent;
  border-right: 1.33px solid black;
  border-bottom: 1.33px solid black;
  border-left: 1.33px solid transparent;
  transform: rotate(-45deg);
}

/* 加入按钮 */
.joinBtn {
  width: 431px;
  /* height: 142px; */
  background-color: #fff;
  margin: 56px auto 89px;
}
.joinBtn button {
  width: 431px;
  height: 69.27px;
  opacity: 1;
  border: none;
  border-radius: 10px;
  background: rgba(6, 150, 117, 1);

  /** 文本1 */
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 17.58px;
  color: rgba(255, 255, 255, 1);
  text-align: center;

  /* background-color: #cccccc; */
  /* cursor: not-allowed; */
}

/* END */
.END {
  width: 44px;
  height: 57px;
  margin: 162px auto 0px;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 27.54px;
  color: rgba(0, 0, 0, 0.7);
}
</style>
