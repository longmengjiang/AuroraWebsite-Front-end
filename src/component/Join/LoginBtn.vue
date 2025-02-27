<script setup>
const emit = defineEmits(['login'])
const getValue = () => {
  emit('login')
}
</script>

<template>
  <div @click="getValue">提交</div>
</template>

<style scoped>
div {
  width: 390px;
  height: 60px;
  opacity: 1;
  border-radius: 10px;
  background: rgba(6, 150, 117, 1);

  font-size: 25px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 60px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  vertical-align: top;
  cursor: pointer;
}
</style>
