<script setup>
import { ref } from 'vue'
import { PostAchievement } from '@/api/index'

const group = ref('Web组')
const group_list = ref({ name: 'Web组', placeholder: '请输入分组' })
const topic_list = ref({ name: '不知道什么主题好', placeholder: '请输入主题' })
const achievementIntroduce_list = ref({
  name: '上上下下左左右右BABA',
  placeholder: '请输入成就介绍'
})
const file1 = ref('')
const file2 = ref('')

const getValue = async () => {
  PostAchievement(group.value, topic_list.value, achievementIntroduce_list.value, file1.value, file2.value)
  // (team, topic, synopsis) (file1, file2)
}
</script>

<template>
  <div class="background">
    <!-- Welcome to join us -->
    <WelcomeBar class="welcomeBar"></WelcomeBar>

    <div class="backgroundImg"></div>

    <div class="big">
      <!-- 头像 -->
      <AvaTar></AvaTar>

      <!-- 表单 -->
      <form action="">
        <InPut v-model="group_list">
          <template #ch>分组</template>
          <template #en>Grouping</template>
        </InPut>

        <InPut v-model="topic_list">
          <template #ch>主题</template>
          <template #en>Topic</template>
        </InPut>

        <InPut v-model="achievementIntroduce_list">
          <template #ch>成就介绍</template>
          <template #en>Achievement introduce</template>
        </InPut>
      </form>

      <ArrowGo class="ArrowGo" @login="getValue"></ArrowGo>

      <DecoratePoint class="DecoratePoint1"></DecoratePoint>
      <DecoratePoint class="DecoratePoint2"></DecoratePoint>
    </div>
  </div>
</template>

<!-- <script>
import { PostAchievement } from '@/api/index'
export default {
  data() {
    return {
      group: 'Web组',
      group_list: { name: 'Web组', placeholder: '请输入分组' },
      topic_list: { name: '不知道什么主题好', placeholder: '请输入主题' },
      achievementIntroduce_list: { name: '上上下下左左右右BABA', placeholder: '请输入成就介绍' },
      file1: '',
      file2: ''
    }
  },
  methods: {
    // async getValue() {
    //   /* console.log(
    //     this.group,
    //     this.topic,
    //     this.achievementIntroduce,
    //     '获取发布成就信息成功'
    //   ) */
    //   await this.$http({
    //     url: 'http://192.168.3.157:8081/settings/announced',
    //     method: 'post',
    //     params: {
    //       team: this.group,
    //       topic: this.topic
    //       // synopsis:this.achievementIntroduce
    //     },
    //     data: {
    //       // file1:
    //       // file2:
    //     }
    //   }).then(res => {
    //     console.log(res)
    //   })
    // },
    async getValue() {
      PostAchievement(this.group, this.topic, this.achievementIntroduce, this.file1, this.file2)
      // (team, topic, synopsis) (file1, file2)
    }
  }
}
</script> -->

<style scoped>
.bgi {
  background-image: url(@/assets/img/Setting/SettingBgi.jpg);
}
.background {
  background-color: black;
  /* height: 1300px; */
  height: 100%;
}
.backgroundImg {
  position: absolute;
  width: 100%;
  height: 108%;
  background-image: url(@/assets/img/Setting/SettingBgi.jpg);
  filter: brightness(0.3);
  background-position: 30% 70%;
}
.big {
  width: 1320px;
  margin: 100px auto;
  padding: 100px 0;
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
