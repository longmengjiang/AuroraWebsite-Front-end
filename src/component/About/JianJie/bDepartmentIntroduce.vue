<template>
  <div>
    <!-- 部门介绍 -->
    <IntroduceTitle>
      <template #ch_title>部门介绍</template>
      <template #en_title>Studio Introduction</template>
    </IntroduceTitle>

    <!-- 6个图片跳转 -->
    <div class="allGo">
      <bDepartmentIntroduceGo>
        <template #img>
          <img src="@/assets/img/About/JianJieBgi.jpg" alt="" />
        </template>
        <template #en_title>Cybersecurity</template>
        <template #zh_title>网络安全</template>
      </bDepartmentIntroduceGo>
      <bDepartmentIntroduceGo>
        <template #img> </template>
        <template #en_title>Web</template>
        <template #zh_title>Web</template>
      </bDepartmentIntroduceGo>
      <bDepartmentIntroduceGo>
        <template #img>
          <img src="" alt="" />
        </template>
        <template #en_title>Design</template>
        <template #zh_title>设计</template>
      </bDepartmentIntroduceGo>
      <bDepartmentIntroduceGo>
        <template #img>
          <img src="" alt="" />
        </template>
        <template #en_title>Embedded development</template>
        <template #zh_title>嵌入式开发</template>
      </bDepartmentIntroduceGo>
      <bDepartmentIntroduceGo>
        <template #img>
          <img src="" alt="" />
        </template>
        <template #en_title>Software development</template>
        <template #zh_title>软件开发</template>
      </bDepartmentIntroduceGo>
      <bDepartmentIntroduceGo>
        <template #img>
          <img src="" alt="" />
        </template>
        <template #en_title>Design Group</template>
        <template #zh_title>数据分析</template>
      </bDepartmentIntroduceGo>
    </div>
  </div>
</template>

<style scoped>
.allGo {
  /* width: 80%; */ /* **%能够根据宽度实现一行放置不同个数盒子 */
  width: 1516px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 30px;
  margin-bottom: 150px;
}
</style>
