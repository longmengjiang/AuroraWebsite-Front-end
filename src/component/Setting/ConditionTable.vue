<script setup>
defineProps({
  list: {
    type: Array
  }
})
</script>

<template>
  <div class="Table">
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>年级</th>
          <th>电话</th>
          <th>邮箱</th>
          <th>专业</th>
          <th>方向</th>
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
  </div>
</template>

<style scoped>
table {
  width: 100%;
  /* 取消行列之间的间隙 */
  border-collapse: collapse;
  border-spacing: 0;
}

/* th,
td {
  border: 1px solid #000;
  text-align: center;
  vertical-align: middle;
  height: 80px;
  加边框
} */
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
