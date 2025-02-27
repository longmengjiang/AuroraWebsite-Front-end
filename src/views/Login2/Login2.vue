<script setup>
defineOptions({
  name: 'myLogin2'
})
</script>

<template>
  <div class="main">
    <!-- 导航栏 -->
    <NavBar2></NavBar2>

    <!-- 主体 -->
    <div class="main-content">
      <!-- 背景图片 -->
      <div class="bgc"></div>

      <!-- 登录 -->
      <div class="login">
        <!-- 姓名 -->
        <div class="name">
          <div class="describe">
            <div class="ch_des">姓名</div>
            <div class="en_des">Your name</div>
          </div>
          <input class="input" placeholder="Enter" />
        </div>

        <!-- 账号 -->
        <div class="account">
          <div class="describe">
            <div class="ch_des">账号</div>
            <div class="en_des">ID(账号为计时器的学号)</div>
          </div>
          <input class="input" placeholder="Enter" />
        </div>

        <!-- 密码 -->
        <div class="password">
          <div class="describe">
            <div class="ch_des">密码</div>
            <div class="en_des">Password</div>
          </div>
          <input class="input" placeholder="Enter" />
        </div>

        <!-- 箭头 -->
        <div class="arrow" to="/introduce">
          <!-- 点击传送 往 *** 页面，待处理 -->
          <div class="you"></div>
        </div>
      </div>
    </div>

    <!-- 欢迎横幅 -->
    <div class="welcome">
      <span>welcome to join us</span>
    </div>
  </div>
</template>

<style scoped>
.main {
  min-width: 1440px;
  min-height: 942px;
  background-color: #fff;
}

/* 导航栏 */
.navBar {
  min-width: 1440px;
  min-height: 60px;
  background-color: #fff;
}

.main-content {
  position: relative;
  min-width: 1440px;
  height: 700px;
  background-color: black;
}

/* 背景图片 */
.bgc {
  min-width: 1553px;
  height: 700px;
  opacity: 0.5;
  box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.25);
  background-image: linear-gradient(rgba(128, 128, 128, 0.5), rgba(128, 128, 128, 0.5)),
    url(https://img.js.design/assets/img/66967630e4dda85f6959d123.jpg#9af22541069032953c22bd2b394474cc);
  /* background-image: url(https://img.js.design/assets/img/66967630e4dda85f6959d123.jpg#9af22541069032953c22bd2b394474cc); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 56.5%;
}

.login {
  position: absolute;
  top: 0;
  left: 35.5%;
  width: 477.86px;
  height: 541.47px;
  /* background-color: pink; */
  /* margin: 112px 462px 0 500px; */
  margin: 112px 0 0 0;
  display: flex;
  gap: 40px;
  flex-direction: column;
}

.name {
  width: 477.86px;
  height: 106.39px;
  /* background-color: skyblue; */
}

.describe {
  width: 100%;
  /* height: 50%; */
  display: flex;
  justify-content: center;
  align-items: center;
}
.ch_des {
  margin-right: 20px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(255, 255, 255, 1);
}
.en_des {
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(140, 140, 140, 1);
}
.input {
  width: 477.86px;
  height: 45.38px;
  background: rgba(229, 229, 229, 0.37);
  border: none;
  text-align: center;

  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  color: rgba(140, 140, 140, 0.48);
}

/* 箭头 */
.arrow {
  position: relative;
  margin: 0 auto;
  margin-top: 20px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: none;
  background-color: #2ca081;
  cursor: pointer;
}
.arrow .you {
  position: absolute;
  left: 28%;
  top: 36%;
  width: 27px;
  height: 27px;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(45deg);
}

/* 欢迎横幅 */
.welcome {
  min-width: 1440px;
  height: 87px;
  background: rgba(204, 204, 204, 0.42);

  display: flex;
  justify-content: center;
  align-items: center;
}
.welcome span {
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(166, 166, 166, 1);
}
</style>
