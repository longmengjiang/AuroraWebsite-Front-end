<script setup>
defineProps({
  list: Array,
  Disp: Boolean
})

const emit = defineEmits(['getMajorDirection'])
const pushMajor = (e) => {
  emit('getMajorDirection', { name: e, bool: false })
}
</script>

<template>
  <div class="select-box">
    <ul>
      <li v-for="item in list" :key="item.id" @click="pushMajor(item.name)">
        {{ item.name }}
        <!-- <div class="select-box_line"></div> -->
      </li>
    </ul>
  </div>
</template>

<style scoped>
.select-box {
  width: 484px;
  border: 1px solid rgba(125, 138, 145, 1);
  padding: 8px 0;
}
ul {
  width: 260px;
  width: 484px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
li {
  width: 260px;
  width: 404px;
  height: 53px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.22);

  /** 文本1 */
  font-size: 24px;
  letter-spacing: 0px;
  line-height: 34.75px;
  color: rgba(140, 140, 140, 1);
  position: relative;
}
li:hover {
  /* color: rgb(206, 155, 155); */
  color: #fff;
  background-color: #f4bfbf;
  background-color: #eaeaea;
  color: rgb(61, 57, 57);
}
.select-box_line {
  position: absolute;
  top: 49px;
  /* 下面的线 */
  width: 404px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  margin-top: 4px;
}
</style>
