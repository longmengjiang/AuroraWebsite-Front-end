<script setup>
import { ref } from 'vue'
import { GetJoinUsList } from '@/api'

const list = ref()
const total = ref(0)
const params = ref({ ye: 1, tiao: 10 })

const getList = async () => {
  const res = await GetJoinUsList(params.value.ye, params.value.tiao)
  list.value = res.data.records
  total.value = res.data.total

  ElMessage.success(res.data.msg || '获取成功')
  console.log(res.data)
}
getList()

// 条数改变  →  重置页数为第一页
const tiaoChange = (val) => {
  params.value.ye = 1
  params.value.tiao = val
  getList(params.value.ye, params.value.tiao)
}
const yeChange = (val) => {
  params.value.ye = val
  getList(params.value.ye, params.value.tiao)
}

// 核心：通过请求，返回当前页数以及每页显示的条数，然后通过v-for循环渲染出来
</script>

<template>
  <NavBar2></NavBar2>
  <div class="background">
    <div class="newBackgroundImg">
      <img src="@/assets/img/Setting/BaoMing_Welcome.jpg" alt="" />
    </div>

    <div class="Table">
      <table>
        <thead>
          <tr>
            <th width="133px">姓名</th>
            <th width="123px">性别</th>
            <th width="144px">年级</th>
            <th width="213px">电话</th>
            <th width="213px">邮箱</th>
            <th width="213px">专业</th>
            <th width="132px">方向</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="ele in list" :key="ele.id">
            <td>{{ ele.name }}</td>
            <td>{{ ele.gender }}</td>
            <td>{{ ele.grade }}</td>
            <td>{{ ele.phone }}</td>
            <td>{{ ele.email }}</td>
            <td>{{ ele.majors }}</td>
            <td>{{ ele.orientation }}</td>
          </tr>
        </tbody>
      </table>
      <el-pagination
        v-model:current-page="params.ye"
        v-model:page-size="params.tiao"
        class="pagination"
        @size-change="tiaoChange(params.tiao)"
        @current-change="yeChange(params.ye)"
        :page-sizes="[5, 10, 20, `${total}`]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      />
    </div>

    <div class="gap" style="height: 200px"></div>
  </div>
</template>

<style scoped>
.pagination {
  margin: 0 auto;
  margin-top: 20px;
}
.Table {
  width: 1183px;
  margin: 0 auto;

  border-radius: 4px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.newBackgroundImg {
  width: 100%;
}
img {
  width: 100%;
}

table {
  width: 100%;
  /* 取消行列之间的间隙 */
  border-collapse: collapse;
  border-spacing: 0;
}

th {
  /* width: 16.66%; */
  font-size: 30px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 80px;
  color: rgba(0, 0, 0, 1);
  /* text-align: left; */
  vertical-align: top;
  padding: 8px;
  height: 80px;
  /* background-color: skyblue; */
}
td:nth-last-of-type(1) {
  border-left: 1px solid #e4e4e4;
  /* background-color: pink; */
}
td {
  /* width: 16.66%; */
  font-size: 20px;
  line-height: 20px;
  height: 80px;
  /* background-color: #ededed; */
  text-align: center;
  border-bottom: 1px solid #b6b3b3; /* 下面的线 */
  border-right: 1px solid #e4e4e4; /* 右边的线 */
}

/*    odd：奇数   even：偶数    */
tr:nth-child(odd) {
  background: #ffffff;
}
tr:nth-child(even) {
  background: #ebebeb;
}

th:nth-child(odd) {
  background-color: #e2e2e2;
}
th:nth-child(even) {
  background-color: #efefef;
}
th:last-child() {
  border-radius: 30px;
}
/* td:nth-child(odd) {
  // background-color:#ededed;
}
td:nth-child(even) {
  // background-color: #ffffff;
} */
</style>
