<script setup>
defineOptions({
  name: 'PublishAchievement2'
})

import { ref } from 'vue'
import { debounce } from '@/utils/DebounceThrottle'
import { useRouter } from 'vue-router'

const router = useRouter()

// 定义响应式变量
const group = ref('')
const topic = ref('')
const achievementIntroduction = ref('')

// 提交处理
const handleSubmit = debounce(() => {
  // 验证
  if (!group.value) {
    alert('分组不能为空')
    return
  } else if (!topic.value) {
    alert('主题不能为空')
    return
  } else if (!achievementIntroduction.value) {
    alert('成就介绍不能为空')
    return
  }

  // 模拟提交成功
  const submitSuccess = true // 这里替换为实际的提交逻辑

  if (submitSuccess) {
    alert('上传成功')
    router.push('/introduce') // 跳转到目标页面
  } else {
    alert('上传失败，请重试')
  }
}, 500)
</script>

<template>
  <div class="main">
    <!-- 导航栏 -->
    <NavBar2></NavBar2>

    <!-- 主体 -->
    <div class="main-content">
      <!-- 背景图片 -->
      <div class="bgc"></div>

      <!-- 登录 -->
      <div class="login">
        <!-- 姓名 -->
        <div class="name">
          <div class="describe">
            <div class="ch_des">分组</div>
            <div class="en_des">grouping</div>
          </div>
          <input class="input" v-model="group" @keyup.enter="handleSubmit" placeholder="Enter" />
        </div>

        <!-- 账号 -->
        <div class="account">
          <div class="describe">
            <div class="ch_des">主题</div>
            <div class="en_des">topic</div>
          </div>
          <input class="input" v-model="topic" @keyup.enter="handleSubmit" placeholder="Enter" />
        </div>

        <!-- 密码 -->
        <div class="password">
          <div class="describe">
            <div class="ch_des">成就介绍</div>
            <div class="en_des">Achievement introduction</div>
          </div>
          <input
            class="input"
            v-model="achievementIntroduction"
            @keyup.enter="handleSubmit"
            placeholder="Enter"
          />
        </div>

        <!-- 箭头 -->
        <div class="arrow" @click="handleSubmit">
          <!-- 点击传送 往 *** 页面，待处理 -->
          <div class="you"></div>
        </div>
      </div>

      <!-- 添加图片 -->
      <div class="addPhotoBox">
        <div class="addPhoto"></div>
        <div class="addDescribe">点击添加图片</div>
      </div>
    </div>

    <!-- 欢迎横幅 -->
    <div class="welcome">
      <span>welcome to join us</span>
    </div>
  </div>
</template>

<style scoped>
.main {
  min-width: 1440px;
  min-height: 942px;
  background-color: #fff;
}

/* 导航栏 */
.navBar {
  min-width: 1440px;
  min-height: 60px;
  background-color: #fff;
}

.main-content {
  position: relative;
  min-width: 1440px;
  height: 700px;
  background-color: black;
}

/* 背景图片 */
.bgc {
  min-width: 1553px;
  height: 700px;
  opacity: 0.5;
  box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)),
    url(https://img.js.design/assets/img/66967630e4dda85f6959d123.jpg#9af22541069032953c22bd2b394474cc);
  /* background-image: url(https://img.js.design/assets/img/66967630e4dda85f6959d123.jpg#9af22541069032953c22bd2b394474cc); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 56.5%;
}

.login {
  position: absolute;
  top: 0;
  left: 25%;
  width: 477.86px;
  height: 541.47px;
  /* background-color: pink; */
  /* margin: 112px 462px 0 500px; */
  margin: 112px 0 0 0;
  display: flex;
  gap: 40px;
  flex-direction: column;
}

.name {
  width: 477.86px;
  height: 106.39px;
  /* background-color: skyblue; */
}

.describe {
  width: 100%;
  /* height: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.ch_des {
  margin-right: 20px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(255, 255, 255, 1);
}
.en_des {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(140, 140, 140, 1);
}
.input {
  width: 477.86px;
  height: 45.38px;
  background: rgba(229, 229, 229, 0.37);
  border: none;
  text-align: center;

  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  /* color: rgba(140, 140, 140, 0.48); */
}

/* 箭头 */
.arrow {
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  background-color: #2ca081;
  cursor: pointer;
}
.arrow .you {
  position: absolute;
  left: 28%;
  top: 36%;
  width: 27px;
  height: 27px;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(45deg);
}

/* 点击添加图片 */
.addPhotoBox {
  position: absolute;
  top: 0;
  left: 57%;
  width: 326px;
  height: 198px;

  margin-top: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.addPhotoBox .addPhoto {
  width: 326px;
  height: 153px;
  background: rgba(229, 229, 229, 0.37);
}
.addPhotoBox .addDescribe {
  margin-top: 18px auto 0;
  width: 125px;
  height: 27px;
  text-align: center;

  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(140, 140, 140, 0.7);
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
</style>
