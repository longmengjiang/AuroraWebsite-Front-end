<script setup>
defineProps({
  value: {
    type: String
  }
})
</script>

<template>
  <div class="introduceYouself">
    <div class="describe">
      <div class="ch_des"><slot name="ch">介绍你自己</slot></div>
      <div class="en_des"><slot name="en">Introduce yourself</slot></div>
    </div>
    <textarea
      :value="value"
      @input="$emit('input', $event.target.value)"
      placeholder="请输入你的介绍(可选)，是否有一定基础"
    >
    </textarea>
  </div>
</template>

<style scoped>
/* 介绍你自己  未完成 */
/* 已经完成 */
/* .introduce .input {
  width: 1359px;
  height: 295.42px;
  opacity: 1;
  border: 1px solid rgba(125, 138, 145, 1);
} */
.introduceYouself {
  width: 624px;
  height: 449px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.introduceYouself .describe {
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
}
.introduceYouself .ch_des {
  width: 35%;
  height: 50%;
  margin-right: -16px;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}
.introduceYouself .en_des {
  width: 35%;
  height: 50%;
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(140, 140, 140, 1);
  text-align: left;
  vertical-align: top;
}
.introduceYouself textarea {
  margin-top: -110px;
  width: 624px;
  /* 禁止拖拽 */
  resize: none;
  height: 249px;
  border: 1px solid rgba(125, 138, 145, 1);
  font-size: 24px;
  font-weight: 400;
  font-family: 微软雅黑;
  letter-spacing: 0px;
  line-height: 22.13px;
  color: rgba(0, 0, 0, 1);
  padding: 10px;
}
</style>
