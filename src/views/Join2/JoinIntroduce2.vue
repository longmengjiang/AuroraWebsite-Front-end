<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()

const textIntroduce = ref(route.query.introduce || '')
console.log('textIntroduce:', textIntroduce.value)

const handleSubmit = () => {
  console.log('joinintroduce', textIntroduce.value)

  router.push({
    path: '/join',
    query: {
      introduce: textIntroduce.value
    }
  })
  textIntroduce.value = ''
}
</script>

<template>
  <div class="main">
    <div class="content">
      <!-- 介绍你自己 -->
      <div class="describe">
        <div class="ch_des">介绍你自己</div>
        <div class="en_des">Introduce yourself</div>
      </div>

      <!-- 表单 -->
      <div class="textBox">
        <textarea class="textarea" v-model="textIntroduce">111</textarea>
      </div>

      <!-- 箭头 -->
      <div class="arrow" @click="handleSubmit">
        <!-- 点击传送 往 *** 页面，待处理 -->
        <div class="you"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.main {
  min-width: 1440px;
  min-height: 1074px;
  opacity: 1;
  background: rgba(0, 0, 0, 1);
  /* background-color: pink; */
  overflow: hidden;
}
.content {
  margin: 0 auto;
  margin-top: 152px;
  width: 1200px;
  height: 638.72px;

  background: rgba(255, 255, 255, 1);
  /* background-color: skyblue; */
  box-shadow: 0px 12px 12px 12px rgba(0, 0, 0, 0.25);
  position: relative;
}
.content .describe {
  width: 515.18px;
  height: 55.96px;
  opacity: 1;
  display: flex;
  gap: 10px;
  margin-top: 129px;
}

.ch_des {
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}
.en_des {
  /** 文本3 */
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 58.13px;
  color: rgba(140, 140, 140, 1);
  text-align: left;
  vertical-align: top;
}
.textBox {
  width: 1100px;
  height: 248px;
  margin: 0 auto;
  margin-top: 16px;
}
.textarea {
  display: inline-block;
  width: 1100px;
  height: 248px;
  opacity: 1;
  border-radius: 18px;
  background: rgba(74, 74, 74, 0.2);
  border: none;
  resize: none;

  padding: 20px;
}

/* 箭头 */
.arrow {
  position: absolute;
  margin: 0 auto;
  width: 146px;
  height: 146px;
  border-radius: 50%;
  border: none;
  background-color: #2ca081;
  cursor: pointer;
  top: 100%;
  left: 50%;
  opacity: 0.9;
  transform: translate(-50%, -50%);
}
.arrow .you {
  position: absolute;
  left: 28%;
  top: 36%;
  width: 42px;
  height: 42px;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(45deg);
}
</style>
