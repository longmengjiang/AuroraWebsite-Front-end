<script setup>
import { ref } from 'vue'

const fileInput = ref()
const uploadFile = () => {
  console.log('点击了上传文件图片')

  // 获取文件输入元素

  // 获取选中的文件
  const files = fileInput.value.files
  // 如果未选择文件，则返回
  if (!files.length) return

  console.log('点击了上传文件')

  // 创建 FormData 对象，包含要上传的文件
  const formData = new FormData()

  // 将文件添加到 FormData 对象中
  formData.append('file', files[0])

  // 发送文件上传请求
  // this.$http.post('/upload', formData).then

  // 清空文件输入元素的值，以便可以再次选择相同的文件
  fileInput.value.value = null

  // 注意：确保 FormData 对象的 append 方法中的第一个参数与服务器端接收文件数据的字段名称相匹配。
  // 上传文件请求的具体实现取决于你的后端框架或服务器配置。
  console.log(1)
}
</script>

<template>
  <div class="avatar_box">
    <!-- 上传图片仍有问题 -->
    <img src="@/assets/img/Setting/Avatar.jpg" @click="uploadFile" />
    <input type="file" ref="fileInput" />
  </div>
</template>

<!-- <script>
export default {
  methods: {
    uploadFile() {
      console.log('点击了上传文件图片')

      // 获取文件输入元素
      const fileInput = this.$refs.fileInput

      // 获取选中的文件
      const files = fileInput.files
      // 如果未选择文件，则返回
      if (!files.length) return

      console.log('点击了上传文件')

      // 创建 FormData 对象，包含要上传的文件
      const formData = new FormData()

      // 将文件添加到 FormData 对象中
      formData.append('file', files[0])

      // 发送文件上传请求
      // this.$http.post('/upload', formData).then

      // 清空文件输入元素的值，以便可以再次选择相同的文件
      fileInput.value = null

      // 注意：确保 FormData 对象的 append 方法中的第一个参数与服务器端接收文件数据的字段名称相匹配。
      // 上传文件请求的具体实现取决于你的后端框架或服务器配置。
      console.log(1)
    }
  }
}
</script> -->

<style scoped>
.avatar_box {
  width: 150px;
  height: 150px;
  opacity: 1;
  background: rgba(204, 204, 204, 1);
  border-radius: 50%;
  cursor: pointer;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  cursor: pointer;
}
input {
  margin-top: 10px;
  cursor: pointer;
}
</style>
