<script setup></script>

<template>
  <!-- 导航栏 -->
  <!-- <NavBar2></NavBar2> -->

  <div class="main">
    <div class="main-content"></div>

    <!-- 欢迎横幅 -->
    <div class="welcome">
      <span>welcome to join us</span>
    </div>

    <div class="login">
      <!-- 主体内容 -->
      <div class="content">
        <!-- 左侧上传图片 -->
        <div class="avatarBox">
          <!-- 上传图片仍有问题 -->
          <img class="avatarImg" src="@/assets/img/Setting/Avatar.jpg" />
          <!-- <input type="file" ref="fileInput" /> -->
          <div class="fileDescribe">点击添加图片</div>
        </div>

        <!-- 右侧表单内容 -->
        <div class="inputBox">
          <!-- 姓名 -->
          <div class="nameInput">
            <div class="describe">
              <div class="ch_des">姓名</div>
              <div class="en_des">Your name</div>
            </div>
            <input class="input" placeholder="Enter" />
          </div>

          <!-- 年级 -->
          <div class="gradeInput">
            <div class="describe">
              <div class="ch_des">年级</div>
              <div class="en_des">Grade</div>
            </div>
            <input class="input" placeholder="Enter" />
          </div>

          <!-- 职位 -->
          <div class="jobBox">
            <!-- 职位1 -->
            <div class="jobInput1">
              <div class="describe">
                <div class="ch_des">职位1</div>
                <div class="en_des">Position1</div>
              </div>
              <input class="input" placeholder="Enter" />
            </div>

            <!-- 职位2 -->
            <div class="jobInput2">
              <div class="describe">
                <div class="ch_des">职位2</div>
                <div class="en_des">Position2</div>
              </div>
              <input class="input" placeholder="Enter" />
            </div>
          </div>

          <!-- 介绍自己 -->
          <div class="introduceInput">
            <div class="describe">
              <div class="ch_des">介绍自己</div>
              <div class="en_des">Introduce yourself</div>
            </div>
            <input class="input" placeholder="Enter" />
          </div>
        </div>

        <!-- 箭头 -->
        <div class="arrow">
          <div class="you"></div>
        </div>
      </div>

      <!-- 装饰点 -->
      <DecoratePoint2 class="decoratePoint1"></DecoratePoint2>

      <!-- 装饰点 -->
      <DecoratePoint2 class="decoratePoint2"></DecoratePoint2>
    </div>
  </div>
</template>

<style scoped>
.main {
  max-width: 1920px;
  min-width: 1440px;

  max-height: 1402px;
  position: relative;
  /* margin: 108px 0 85px; */
}
.main-content {
  max-width: 1950px;
  min-width: 1440px;
  min-height: 1209px;
  position: relative;
}
.main-content::before {
  position: absolute;
  content: '';
  display: inline-block;
  width: 100%;
  height: 100%;
  background: url(https://img.js.design/assets/img/669a0f6a43191e617f880b0f.jpg#921559fda0d1b76b734b0163ecd7c181);
  background-size: cover;
  background-repeat: no-repeat;
}
.main-content::after {
  position: absolute;
  content: '';
  display: inline-block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.76);
}

/* 欢迎横幅 */
.welcome {
  position: absolute;
  top: 0;
  left: 0;
  max-width: 1920px;
  min-width: 1620px;
  width: 100%;
  height: 133px;
  opacity: 1;
  background: rgba(204, 204, 204, 0.42);

  display: flex;
  justify-content: center;
  align-items: center;
}
.welcome span {
  /** 文本1 */
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 34.75px;
  color: rgba(166, 166, 166, 1);
}

.login {
  width: 1485px;
  height: 981px;

  margin: 151px auto 17px;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
.decoratePoint1 {
  position: absolute;
  top: 100%;
  left: 0.5%;
  transform: translate(0, -100%);
}
.decoratePoint2 {
  position: absolute;
  top: 0.2%;
  left: 100%;
  transform: translate(-100%, 0%);
}
/* 主体内容 */
.content {
  margin: 68px auto 103px;

  display: flex;
  background-color: #fff;
  max-width: 1217px;
  min-width: 1000px;
  height: 810px;
  border-radius: 9px;
  position: relative;
}

/* 左侧上传头像 */
.content .avatarBox {
  margin: 318px 91px 301px 122px;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 150px;
  height: 191px;
}
.content .avatarBox .avatarImg {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background: rgba(204, 204, 204, 1);
}
.content .avatarBox .fileDescribe {
  width: 125px;
  height: 27px;
  text-align: center;
  margin-top: 14px;

  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: rgba(140, 140, 140, 0.45);
}

/* 右侧表单内容 */
.content .inputBox {
  width: 654px;
  height: 572.78px;
  margin: 104px 144px 133px 0;
  /* background-color: pink; */
}
/* 表单的中英文描述 */
.inputBox .describe {
  display: flex;
  width: 369px;
  height: 29px;
}
.inputBox .describe .ch_des {
  margin-right: 10px;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
}
.inputBox .describe .en_des {
  /** 文本2 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(140, 140, 140, 1);
}
.inputBox .input {
  margin: 13px 0 0 0;
  padding: 15px 20px 14px 20px;
  width: 624px;
  height: 60.74px;
  border: 1px solid rgba(125, 138, 145, 1);

  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(140, 140, 140, 0.48);
}

.inputBox .nameInput {
  width: 624px;
  height: 102.46px;
}
.inputBox .gradeInput {
  margin: 33px 0 0 0;
  width: 624px;
  height: 102.46px;
}
.inputBox .jobBox {
  width: 624px;
  height: 137px;
  display: flex;
  margin-top: 33px;
}
.inputBox .jobBox .jobInput1 {
  width: 293px;
  height: 137px;
  margin-right: 52px;
}
.inputBox .jobBox .jobInput1 .input {
  width: 279px;
  height: 68px;
  padding: 15px 20px 14px 20px;
}
.inputBox .jobBox .jobInput2 {
  width: 279px;
  height: 135px;
  margin-right: 30px;
}
.inputBox .jobBox .jobInput2 .input {
  width: 279px;
  height: 68px;
  padding: 15px 20px 14px 20px;
}
.inputBox .introduceInput {
  width: 654px;
  height: 131px;
}

/* 箭头 */
.content .arrow {
  width: 130px;
  height: 128px;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 100%;
  opacity: 0.8;
  transform: translate(-50%, -50%);
  background-color: #1ca081;
  cursor: pointer;
}
.content .arrow .you {
  position: absolute;
  left: 26%;
  top: 36%;
  /* top: 50%; */
  /* transform: translate(1000%, 1000%); */
  width: 40px;
  height: 40px;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(45deg);
}
</style>
