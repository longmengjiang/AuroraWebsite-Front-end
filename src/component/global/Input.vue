<!-- 1999 -->
<script setup>
import { ref, onMounted } from 'vue'
defineOptions({
  name: 'InPut'
})
defineProps({
  value: {
    type: Object
    // required: true
  }
})

// 1. 获取父组件传递的值
const Data = ref({}) // 此时应该是 undefined
onMounted(() => {
  // console.log(value.value, value)

  Data.value = { ...value.value }
})

// 2. 输入框改变时传递新值给父组件 模块
const emit = defineEmits(['input'])
const updateValue = () => {
  emit('input', { ...Data.value })
}

// 3. 输入框的正则模块
const zhengze = () => {
  if (Data.value.name === '') {
    Data.value.Disp1 = false
    Data.value.Disp2 = false
    return false
  }
  if (!Data.value.reg.test(Data.value.name)) {
    Data.value.Disp1 = false
    Data.value.Disp2 = true
    Data.value.access = false
    return false
  }
  Data.value.Disp2 = false
  Data.value.Disp1 = true
  dispContent.value = '✓'
  Data.value.access = true
  return true
}

// 4. 忘记是干什么的了
const DataDisp = () => {
  setTimeout(() => {
    Data.value.isDisp = false
  }, 100)
}

// 5. 输入框正确与否的 颜色和背景
const disp = ref({
  color: '',
  background: ''
})

// 6. 仅在 输入框正确时 显示 '√'
const dispContent = ref('')
</script>

<template>
  <div class="AllInput">
    <div class="describe">
      <div class="ch_des"><slot name="ch">姓名</slot></div>
      <div class="en_des"><slot name="en">Your name</slot></div>
    </div>
    <input
      ref="input"
      :placeholder="Data.placeholder"
      type="text"
      class="input"
      v-model="Data.name"
      @focus="(Data.isDisp = true)"
      @input="updateValue"
      @change="zhengze"
      autocomplete="new-password"
      @blur="DataDisp"
    />
    <!-- 请务必给blur加上定时器，否则不生效   v-show="Data.DispShow"-->
    <span class="span1" v-if="Data.Disp1">✓</span>
    <span class="span2" v-if="Data.Disp2">{{ Data.error }}</span>
  </div>
</template>

<style scoped>
.AllInput {
  width: 624px;
  height: 149px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.describe {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
}
.ch_des {
  margin-right: 16px;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}
.en_des {
  width: 50%;
  height: 50%;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(140, 140, 140, 1);
  text-align: left;
  vertical-align: top;
}
.input {
  padding-left: 20px;
  font-size: 20px;
  width: 624px;
  height: 60px;
  opacity: 1;
  border: 1px solid rgba(125, 138, 145, 1);
}
.span1 {
  position: absolute;
  display: inline-block;
  font-size: 16px;
  left: 101%;
  top: 65%;
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
.span2 {
  position: absolute;
  display: inline-block;
  font-size: 16px;
  left: 101%;
  top: 65%;
  width: 210px;
  height: 30px;
  padding: 16px;
  border: 1px solid rgb(157, 149, 149);
  color: red;
  border-radius: 5px;
  font-size: 16px;
  background-color: #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
