<script setup>
defineOptions ({
  name: 'myInput2',
})
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











