<script setup>
defineOptions({
  name: 'myJoin2'
})
import { ref } from 'vue'

const majorList = ref([
  { id: 1, name: '计算机科学与技术' },
  { id: 2, name: '软件工程' },
  { id: 3, name: '物联网工程' },
  { id: 4, name: '通信工程' },
  { id: 5, name: '数据科学与大数据技术' },
  { id: 7, name: '其他(自己填写)' }
])
const DirectionList = ref([
  { id: 1, name: '网络安全' },
  { id: 2, name: 'Web前端' },
  { id: 3, name: 'Web后端' },
  { id: 4, name: '设计' },
  { id: 5, name: '嵌入式' },
  { id: 6, name: '算法' },
  { id: 7, name: '数据分析' }
])

// const open = () => {
//   ElMessageBox.alert('', '', {
//     // if you want to disable its autofocus
//     // autofocus: false,
//     // confirmButtonText: 'OK',
//     callback: (action) => {
//       ElMessage({
//         type: 'info',
//         message: `action: ${action}`
//       })
//     }
//   })
// }

// const dialogVisible = ref(false)
// const handleClose = () => {
//   ElMessageBox.confirm('Are you sure to close this dialog?')
//     .then(() => {
//       done()
//     })
//     .catch(() => {
//       // catch error
//     })
// }
</script>

<template>
  <div class="main">
    <!-- 导航栏 -->
    <NavBar2></NavBar2>

    <!-- 背景图片 -->
    <div class="bgc">
      <div class="jia-shenBgc"></div>
    </div>

    <!-- 欢迎横幅 -->
    <div class="welcome">
      <span>welcome to join us</span>
    </div>

    <!-- 整体填写区域 -->
    <div class="inputMain">
      <!-- 姓名 -->
      <div class="nameInput">
        <div class="describe">
          <div class="ch_des">姓名</div>
          <div class="en_des">Your name</div>
        </div>
        <input class="input" placeholder="Enter" />
      </div>

      <!-- 性别 -->
      <div class="genderInput">
        <span class="span1">性别</span>
        <label class="gender">
          男
          <input class="gender" type="radio" name="gender" value="男" @change="getValue" />
        </label>
        <span class="span2"> /</span>
        <label class="gender">
          女
          <input class="gender" type="radio" name="gender" value="女" checked @change="getValue" />
        </label>
      </div>

      <!-- 年级 -->
      <div class="gradeInput">
        <div class="describe">
          <div class="ch_des">年级</div>
          <div class="en_des">Grade</div>
        </div>
        <input class="input" placeholder="Enter" />
      </div>

      <!-- 电话 -->
      <div class="phoneInput">
        <div class="describe">
          <div class="ch_des">电话</div>
          <div class="en_des">Phone</div>
        </div>
        <input class="input" placeholder="Enter" />
      </div>

      <!-- 邮件 -->
      <div class="emailInput">
        <div class="describe">
          <div class="ch_des">邮件</div>
          <div class="en_des">E-mail</div>
        </div>
        <input class="input" placeholder="Enter" />
      </div>

      <!-- 专业 -->
      <div class="majorInput">
        <div class="describe">
          <div class="ch_des">专业</div>
          <div class="en_des">Major</div>
        </div>
        <input class="input" placeholder="Enter" />

        <!-- 弹出框 -->
        <div class="select-box">
          <ul class="select-box-ul">
            <li v-for="item in majorList" :key="item.id" @click="pushMajor(item.name)">
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 方向 -->
      <div class="directionInput">
        <div class="describe">
          <div class="ch_des">方向</div>
          <div class="en_des">Direction</div>
        </div>
        <input class="input" placeholder="Enter" />

        <!-- 弹出框 -->
        <div class="select-box">
          <ul class="select-box-ul">
            <li v-for="item in DirectionList" :key="item.id" @click="pushMajor(item.name)">
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- 介绍你自己  @click="open" -->
      <el-button plain  class="introduceInput">
        <div class="introduceDescribe">
          <div class="introduceCh_des">介绍你自己</div>
          <div class="introduceArrow"></div>
        </div>
      </el-button>

      <!-- <el-dialog v-model="dialogVisible" title="Tips" width="500" :before-close="handleClose">
        <span>This is a message</span>
        <template #footer>
          <div class="dialog-footer">
            <el-button @click="(dialogVisible = false)">Cancel</el-button>
            <el-button type="primary" @click="(dialogVisible = false)"> Confirm </el-button>
          </div>
        </template>
      </el-dialog> -->

      <!-- <el-card style="max-width: 480px">
        <div class="END">END</div>
      </el-card> -->
    </div>

    <!-- 加入按钮 -->
    <div class="joinBtn">
      <button class="btn">加入我们</button>
      <!-- <div class="signUp">
        <span class="signBtn">SIGN UP</span>
      </div> -->
    </div>

    <!-- END -->
    <div class="END">END</div>

    <!-- <el-card style="max-width: 480px">
      <p v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</p>
    </el-card> -->
  </div>
</template>

<style scoped>
.main {
  min-width: 1440px;
  min-height: 2878px;
  background-color: #fff;
}

/* 导航栏 */
.navBar {
  min-width: 1440px;
  min-height: 60px;
  background-color: #fff;
}

/* 背景图片 */
.bgc {
  min-width: 1440px;
  height: 203.93px;
}
.jia-shenBgc {
  min-width: 1440px;
  height: 200px;
  opacity: 1;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 12px 12px 12px 12px rgba(0, 0, 0, 0.25);

  /* 背景图片设置 */
  background-image: url(https://img.js.design/assets/img/66978236b335ca902d762e28.png);
  background-repeat: no-repeat;
  background-size: cover;
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

/* 整体填写区域 */
.inputMain {
  max-width: 581px;
  height: 1670px;
  margin: 51px 619px 0 240px;
  background-color: #eaeaea;
  display: flex;
  flex-direction: column;
}
/* 姓名 */
.nameInput {
  min-width: 573px;
  min-height: 130px;
  background-color: #fff;
}

.describe {
  width: 100%;
  /* height: 50%; */
  display: flex;
  justify-content: start;
  align-items: center;
}
.ch_des {
  margin-right: 16px;

  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}
.en_des {
  width: 50%;
  height: 50%;

  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(140, 140, 140, 1);
  text-align: left;
  vertical-align: top;
}
.input {
  width: 287px;
  height: 52px;
  opacity: 1;
  border: none;
  border-radius: 38px;
  background: rgba(74, 74, 74, 0.1);

  padding-left: 20px;
  /** 文本1 */
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 23.17px;
  color: rgba(140, 140, 140, 0.48);
  text-align: left;
  vertical-align: top;
}

/* 性别 */
.genderInput {
  min-width: 334px;
  min-height: 47px;
  margin: 14px 239px 10px 0;
  background-color: #fff;
}
.genderInput .span1 {
  width: 161.48px;
  height: 47.02px;
  opacity: 1;
  margin-right: 20px;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.genderInput .span2 {
  font-size: 20px;
  font-weight: 400;
  color: rgba(0, 0, 0, 1);
}
.genderInput .gender {
  /* display: inline-block; */
  /* width: 25px; */
  /* height: 47px; */
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
}

/* 年级 */
.gradeInput {
  width: 287px;
  height: 129px;
  background-color: #fff;
  margin: 7px 290px 1px 0;
}

/* 电话 */
.phoneInput {
  width: 477px;
  height: 127px;
  background-color: #fff;
  margin: 10px 101px 5px 0;
}
.phoneInput .input {
  width: 476px;
  height: 52px;
  opacity: 1;
  border-radius: 38px;
  background: rgba(74, 74, 74, 0.1);
}

/* 邮件 */
.emailInput {
  width: 477px;
  height: 127px;
  background-color: #fff;
  margin: 10px 101px 5px 0;
}
.emailInput .input {
  width: 476px;
  height: 52px;
  opacity: 1;
  border-radius: 38px;
  background: rgba(74, 74, 74, 0.1);
}

/* 专业 */
.majorInput {
  width: 576px;
  height: 525px;
  background-color: #fff;
  margin: 10px 101px 5px 0;
}
.majorInput .input {
  width: 476px;
  height: 52px;
  opacity: 1;
  border-radius: 38px;
  background: rgba(74, 74, 74, 0.1);
}

/* 弹出框 */
.select-box {
  width: 344px;
  /* height: 315px; */
  margin: 11px 139px 28px 93px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 1);
}
.select-box ul {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 10px 34px 3px 30px;
}
.select-box ul li {
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}
.select-box ul li span {
  display: inline-block;
  margin: 6px 0 6px 34px;

  /** 文本1 */
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 34.75px;
  color: rgba(140, 140, 140, 1);
}
.select-box ul li:nth-last-child(1) {
  border-bottom: none;
}

/* 方向 */
.directionInput {
  width: 581px;
  height: 525px;
  background-color: #fff;
  margin: 10px 101px 5px 0;
}
.directionInput .input {
  width: 476px;
  height: 52px;
  opacity: 1;
  border-radius: 38px;
  background: rgba(74, 74, 74, 0.1);
}

/* 介绍你自己 */
.introduceInput {
  width: 138px;
  height: 105px;
  background-color: #fff;
  margin: 24px 320px 153px 0;
  cursor: pointer;
}
.introduceInput .introduceDescribe {
  display: flex;
  align-items: center;
}
.introduceInput .introduceCh_des {
  margin-right: 6px;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 52.13px;
  color: rgba(0, 0, 0, 1);
}
.introduceInput .introduceArrow {
  width: 10px;
  height: 10px;

  color: rgba(0, 0, 0, 1);
  border-top: 1.33px solid transparent;
  border-right: 1.33px solid black;
  border-bottom: 1.33px solid black;
  border-left: 1.33px solid transparent;
  transform: rotate(-45deg);
}

/* 加入按钮 */
.joinBtn {
  width: 431px;
  height: 142px;
  background-color: #fff;
  margin: 86px auto 89px;
}
.joinBtn button {
  width: 431px;
  height: 69.27px;
  opacity: 1;
  border: none;
  border-radius: 10px;
  background: rgba(6, 150, 117, 1);

  /** 文本1 */
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 17.58px;
  color: rgba(255, 255, 255, 1);
  text-align: center;
}
.joinBtn .signUp {
  display: inline-block;
  width: 100%;
  height: 70px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  /** 文本1 */
  font-size: 15px;
  font-weight: 400;
  color: rgba(74, 144, 226, 1);
}
.joinBtn .signUp .signBtn {
  cursor: pointer;
}

/* END */
.END {
  width: 44px;
  height: 57px;
  margin: 162px auto 0px;

  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 27.54px;
  color: rgba(0, 0, 0, 0.7);
}
</style>
