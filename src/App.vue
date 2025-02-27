<script setup>
import { RouterView } from 'vue-router'
// import { Edit } from '@element-plus/icons-vue'
</script>

<template>
  <div class="app">
    <!-- 远程仓库别名   AuroraWebsiteFront-end  -->
    <!-- <NavBar /> -->
    <router-view></router-view>
  </div>
</template>

<style scoped>
.app {
  margin: 0 auto;
  min-width: 1440px;
  max-width: 2000px;
}
</style>
