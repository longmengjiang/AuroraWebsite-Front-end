<script setup>
defineOptions({
  name: 'myJoin'
})
import { ref } from 'vue'
import InPut from '@/component/global/Input.vue'

const Major = ref([
  { id: 1, name: '计算机科学与技术' },
  { id: 2, name: '软件工程' },
  { id: 3, name: '物联网工程' },
  { id: 4, name: '通信工程' },
  { id: 5, name: '数据科学与大数据技术' },
  { id: 7, name: '其他(自己填写)' }
])
const Direction = ref([
  { id: 1, name: '网络安全' },
  { id: 2, name: 'Web前端' },
  { id: 3, name: 'Web后端' },
  { id: 4, name: '设计' },
  { id: 5, name: '嵌入式' },
  { id: 6, name: '算法' },
  { id: 7, name: '数据分析' }
])
const name_list = ref({
  name: '',
  placeholder: '请输入姓名',
  reg: /^[\u4e00-\u9fa5]{2,6}$|^[A-Za-z]{2,30}$|^[\u4e00-\u9fa5]{1,5}-[A-Za-z]{1,20}$/,
  error: '韦一名？',
  access: false,
  Disp1: false,
  Disp2: false
})
const gender = ref('男')
const grade_list = ref({
  name: '',
  placeholder: '请输入年级',
  reg: /^(2023|2024)$/,
  error: '你这年级确定填对了？',
  access: false,
  Disp1: false,
  Disp2: false
})
const phone_list = ref({
  name: '',
  placeholder: '请输入电话',
  reg: /^1[3-9]\d{9}$/,
  error: '你这手机号不对吧……',
  access: false,
  Disp1: false,
  Disp2: false
})
const email_list = ref({
  name: '',
  placeholder: '请输入邮箱',
  reg: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
  error: '你这邮箱不对吧',
  access: false,
  Disp1: false,
  Disp2: false
})
const major_list = ref({
  name: '',
  placeholder: '请输入专业',
  Major: Major.value,
  isDisp: false,
  reg: /[^  ]*/,
  error: '你莓专业也能上学啊',
  access: false,
  Disp1: false,
  Disp2: false
})
const direction_list = ref({
  name: '',
  placeholder: '请输入方向',
  isDisp: false,
  reg: /^(Web前端|前端|后端|Web后端|网络安全|网安|设计|嵌入式|算法|数据分析)$/,
  error: '这方向你来了可就是皇帝',
  access: false,
  Disp1: false,
  Disp2: false
})
const introduce = ref('')
const list = ref([])

const getValue = async () => {
  if (
    !name_list.value.name ||
    !grade_list.value.name ||
    !phone_list.value.name ||
    !email_list.value.name ||
    !major_list.value.name ||
    !direction_list.value.name
  ) {
    alert('哥姐，你还没填完呢')
    return
  }
  if (
    !name_list.value.access ||
    !grade_list.value.access ||
    !phone_list.value.access ||
    !email_list.value.access ||
    !major_list.value.access ||
    !direction_list.value.access
  ) {
    alert('你想提交，但是后台没通过，再检查一下吧')
    return
  }
  await $http({
    url: 'http://120.24.88.212:8080/join',
    method: 'post',
    params: {
      name: name_list.value.name,
      gender: gender.value,
      grade: grade_list.value.name,
      phone: phone_list.value.name,
      email: email_list.value.name,
      majors: major_list.value.name,
      orientation: direction_list.value.name,
      introduce: introduce.value
    }
  }).then((res) => {
    alert(res.data.msg)
    name_list.value.name = ''
    name_list.value.Disp1 = false
    grade_list.value.name = ''
    grade_list.value.Disp1 = false
    phone_list.value.name = ''
    phone_list.value.Disp1 = false
    email_list.value.name = ''
    email_list.value.Disp1 = false
    major_list.value.name = ''
    major_list.value.Disp1 = false
    direction_list.value.name = ''
    direction_list.value.Disp1 = false
    introduce.value = ''
  })
  console.log('提交并清空成功')
}

const getMajor = (NewMajor) => {
  major_list.value.name = NewMajor.name
  major_list.value.isDisp = NewMajor.bool
  // $refs.value.major.zhengze()
}
const getDirection = (NewDirection) => {
  direction_list.value.name = NewDirection.name
  direction_list.value.isDisp = NewDirection.bool
  // $refs.value.direction.zhengze()
}
</script>

<template>
  <div class="background">
    <!-- 背景图 -->
    <BackGroundImg class="bgi"></BackGroundImg>

    <!-- Welcome to join us -->
    <WelcomeBar></WelcomeBar>

    <!-- 具体大表单 -->
    <form action="">
      <InPut v-model="name_list">
        <template #ch>姓名</template>
        <template #en>Your name</template>
      </InPut>

      <GenDer :value="gender" @update:mychange="(gender = $event)"></GenDer>

      <InPut v-model="grade_list">
        <template #ch>年级</template>
        <template #en>Grade (请输入20xx)</template>
      </InPut>

      <InPut v-model="phone_list">
        <template #ch>电话</template>
        <template #en>Phone</template>
      </InPut>

      <InPut v-model="email_list">
        <template #ch>邮箱</template>
        <template #en>E-mail</template>
      </InPut>

      <InPut v-model="major_list" ref="major">
        <template #ch>专业</template>
        <template #en>Major (专业+班级)</template>
      </InPut>
      <SelectBox
        v-if="major_list.isDisp"
        :list="Major"
        :Disp="major_list.isDisp"
        @getMajorDirection="getMajor"
      ></SelectBox>

      <InPut v-model="direction_list" ref="direction">
        <template #ch>方向</template>
        <template #en>Director</template>
      </InPut>
      <SelectBox
        v-if="direction_list.isDisp"
        :list="Direction"
        :Disp="direction_list.isDisp"
        @getMajorDirection="getDirection"
      ></SelectBox>

      <TextArea v-model="introduce"></TextArea>

      <LoginBtn class="login" @login="getValue"></LoginBtn>
    </form>
  </div>
</template>

<!-- <script>
import SelectBox from '@/components/Join/SelectBox.vue'
import GenDer from '@/components/Join/GenDer.vue'
import TextArea from '@/components/Join/TextArea.vue'
import LoginBtn from '@/components/Join/LoginBtn.vue'
export default {
  name: 'myJoin',
  data() {
    return {
      Major: [
        { id: 1, name: '计算机科学与技术' },
        { id: 2, name: '软件工程' },
        { id: 3, name: '物联网工程' },
        { id: 4, name: '通信工程' },
        { id: 5, name: '数据科学与大数据技术' },
        { id: 7, name: '其他(自己填写)' }
      ],
      Direction: [
        { id: 1, name: '网络安全' },
        { id: 2, name: 'Web前端' },
        { id: 3, name: 'Web后端' },
        { id: 4, name: '设计' },
        { id: 5, name: '嵌入式' },
        { id: 6, name: '算法' },
        { id: 7, name: '数据分析' }
      ],
      name_list: {
        name: '',
        placeholder: '请输入姓名',
        reg: /^[\u4e00-\u9fa5]{2,6}$|^[A-Za-z]{2,30}$|^[\u4e00-\u9fa5]{1,5}-[A-Za-z]{1,20}$/,
        error: '韦一名？',
        access: false,
        Disp1: false,
        Disp2: false
      },
      gender: '男',
      grade_list: {
        name: '',
        placeholder: '请输入年级',
        reg: /^(2023|2024)$/,
        error: '你这年级确定填对了？',
        access: false,
        Disp1: false,
        Disp2: false
      },
      phone_list: {
        name: '',
        placeholder: '请输入电话',
        reg: /^1[3-9]\d{9}$/,
        error: '你这手机号不对吧……',
        access: false,
        Disp1: false,
        Disp2: false
      },
      email_list: {
        name: '',
        placeholder: '请输入邮箱',
        reg: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/,
        error: '你这邮箱不对吧',
        access: false,
        Disp1: false,
        Disp2: false
      },
      major_list: {
        name: '',
        placeholder: '请输入专业',
        Major: this.Major,
        isDisp: false,
        reg: /[^  ]*/,
        error: '你莓专业也能上学啊',
        access: false,
        Disp1: false,
        Disp2: false
      },
      // reg: /^(计算机科学与技术|软件工程|物联网工程|通信工程|数据科学与大数据技术|[^班]+)(\d+班|[一二三四五六七八九十]{1,3}班)?$/,
      direction_list: {
        name: '',
        placeholder: '请输入方向',
        isDisp: false,
        reg: /^(Web前端|前端|后端|Web后端|网络安全|网安|设计|嵌入式|算法|数据分析)$/,
        error: '这方向你来了可就是皇帝',
        access: false,
        Disp1: false,
        Disp2: false
      },
      introduce: '',
      list: []
    }
  },
  methods: {
    async getValue() {
      if (
        !this.name_list.name ||
        !this.grade_list.name ||
        !this.phone_list.name ||
        !this.email_list.name ||
        !this.major_list.name ||
        !this.direction_list.name
      ) {
        alert('哥姐，你还没填完呢')
        return
      }
      if (
        !this.name_list.access ||
        !this.grade_list.access ||
        !this.phone_list.access ||
        !this.email_list.access ||
        !this.major_list.access ||
        !this.direction_list.access
      ) {
        alert('你想提交，但是后台没通过，再检查一下吧')
        return
      }
      await this.$http({
        url: 'http://120.24.88.212:8080/join',
        method: 'post',
        params: {
          name: this.name_list.name,
          gender: this.gender,
          grade: this.grade_list.name,
          phone: this.phone_list.name,
          email: this.email_list.name,
          majors: this.major_list.name,
          orientation: this.direction_list.name,
          introduce: this.introduce
        }
      }).then((res) => {
        alert(res.data.msg)
        this.name_list.name = ''
        this.name_list.Disp1 = false
        this.grade_list.name = ''
        this.grade_list.Disp1 = false
        this.phone_list.name = ''
        this.phone_list.Disp1 = false
        this.email_list.name = ''
        this.email_list.Disp1 = false
        this.major_list.name = ''
        this.major_list.Disp1 = false
        this.direction_list.name = ''
        this.direction_list.Disp1 = false
        this.introduce = ''
      })
      console.log('提交并清空成功')
    },
    getMajor(NewMajor) {
      this.major_list.name = NewMajor.name
      this.major_list.isDisp = NewMajor.bool
      this.$refs.major.zhengze()
    },
    getDirection(NewDirection) {
      this.direction_list.name = NewDirection.name
      this.direction_list.isDisp = NewDirection.bool
      this.$refs.direction.zhengze()
    }
  },
  components: {
    SelectBox,
    GenDer,
    TextArea,
    LoginBtn
  }
}
</script> -->

<style scoped>
.bgi {
  background-image: url(@/assets/img/Join/JoinBgi.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
}
form {
  width: 1320px;
  /* height: 2800px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.background {
  background-color: black;
  /* height: 3000px; */
}
form {
  width: 1320px;
  /* height: 2800px; */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
}
.ArrowGo {
  margin-top: -50px;
}
.login {
  margin-bottom: 30px;
}
</style>
