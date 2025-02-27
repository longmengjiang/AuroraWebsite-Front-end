<script setup>
import { ref } from 'vue'
const name_list = ref({ name: '张三', placeholder: '请输入姓名' })
const grade_list = ref({ name: '大三', placeholder: '请输入年级' })
const position1_list = ref({ name: '', placeholder: '请输入职位1' })
const position2_list = ref({ name: '', placeholder: '请输入职位2' })
const introduce_list = ref({ name: '无敌的我又回来了', placeholder: '请输入介绍' })
const file = ref('')

const getValue = async () => {
  //   /* console.log(
  //     this.name,
  //     this.grade,
  //     this.position1,
  //     this.position2,
  //     this.introduce,
  //     '获取上传照片信息成功，缺少头像的获取'
  //   ) */
  await this.$http({
    url: 'http://120.24.88.212:8080/imadministrator/settings/upload',
    method: 'post',
    params: {
      grade: this.grade,
      orientation: '方向',
      name: this.name,
      positionOne: this.position1,
      positionTwo: this.position2,
      word: this.introduce
    },
    data: {
      file: this.file
    }
  }).then((res) => {
    console.log(res)
  })
}
</script>

<template>
  <div class="background">
    <!-- Welcome to join us -->
    <WelcomeBar class="welcomeBar"></WelcomeBar>

    <div class="backgroundImg"></div>

    <div class="big">
      <!-- 头像 -->
      <!-- 缺少动态获取头像资源的方法 -->
      <AvaTar></AvaTar>

      <!-- 表单 -->
      <form action="">
        <InPut v-model="name_list">
          <template #ch>姓名</template>
          <template #en>Your name</template>
        </InPut>

        <InPut v-model="grade_list">
          <template #ch>年级</template>
          <template #en>Grade</template>
        </InPut>

        <div class="position">
          <InPut class="position1" v-model="position1_list">
            <template #ch>职位1</template>
            <template #en>Position1</template>
          </InPut>

          <InPut class="position2" v-model="position2_list">
            <template #ch>职位2</template>
            <template #en>Position2</template>
          </InPut>
        </div>

        <InPut v-model="introduce_list">
          <template #ch>介绍自己</template>
          <template #en>Introduce yourself</template>
        </InPut>
      </form>

      <ArrowGo class="ArrowGo" @login="getValue"></ArrowGo>

      <DecoratePoint class="DecoratePoint1"></DecoratePoint>
      <DecoratePoint class="DecoratePoint2"></DecoratePoint>
    </div>
  </div>
</template>

<script>
// import { PostUpload } from '@/api/index'
export default {
  data() {
    return {
      name_list: { name: '张三', placeholder: '请输入姓名' },
      grade_list: { name: '大三', placeholder: '请输入年级' },
      position1_list: { name: '', placeholder: '请输入职位1' },
      position2_list: { name: '', placeholder: '请输入职位2' },
      introduce_list: { name: '无敌的我又回来了', placeholder: '请输入介绍' },
      file: ''
    }
  },
  methods: {
    async getValue() {
      //   /* console.log(
      //     this.name,
      //     this.grade,
      //     this.position1,
      //     this.position2,
      //     this.introduce,
      //     '获取上传照片信息成功，缺少头像的获取'
      //   ) */
      await this.$http({
        url: 'http://120.24.88.212:8080/imadministrator/settings/upload',
        method: 'post',
        params: {
          grade: this.grade,
          orientation: '方向',
          name: this.name,
          positionOne: this.position1,
          positionTwo: this.position2,
          word: this.introduce
        },
        data: {
          file: this.file
        }
      }).then((res) => {
        console.log(res)
      })
    }
    // async getValue() {
    //   await PostUpload(this.grade, this.orientation, this.name, this.position1, this.position2, this.introduce, this.file)
    // }
    // (grade, orientation, name, positionOne, positionTwo, word, file)  file可选
  }
}
</script>

<style scoped>
.bgi {
  background-image: url('@/assets/img/Setting/SettingBgi.jpg');
}
.background {
  background-color: black;
  /* height: 1300px; */
  height: 100%;
}
.backgroundImg {
  position: absolute;
  width: 100%;
  height: 118%;
  background-image: url(@/assets/img/Setting/SettingBgi.jpg);
  filter: brightness(0.3);
  background-position: 30% 70%;
}
.big {
  width: 1320px;
  margin: 100px auto;
  padding: 40px 0;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  /* margin-bottom: 100px; */
}
form {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ArrowGo {
  position: absolute;
  left: 96%;
}
.DecoratePoint1 {
  position: absolute;
  top: 82%;
  left: -9%;
}
.DecoratePoint2 {
  position: absolute;
  top: -10%;
  left: 87%;
}
</style>
