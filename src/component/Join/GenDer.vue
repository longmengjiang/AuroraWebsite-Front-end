<script setup>
defineProps({
  value: {
    type: String
  }
})
const emit = defineEmits(['update:mychange'])
const getValue = (e) => {
  emit('update:mychange', e.target.value)
}
</script>

<template>
  <div class="Gender">
    <span>性别</span>
    <label class="gender">
      男
      <input class="gender" type="radio" name="gender" value="男" checked @change="getValue" />
    </label>
    <span> /</span>
    <label class="gender">
      女
      <input class="gender" type="radio" name="gender" value="女" @change="getValue" />
    </label>
  </div>
</template>

<style scoped>
.Gender {
  margin: 20px 0 20px -330px;
}
.Gender span {
  margin-right: 16px;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}
.Gender .gender {
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
}
.Gender input {
  width: 26px;
  height: 26px;
}
</style>
