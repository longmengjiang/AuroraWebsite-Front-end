<script setup>
defineOptions({
  name: 'myIntroduce2'
})
import BackGroundImg2 from './component/BackGroundImg2.vue'
// import { Swiper } from 'swiper/vue'

// Import Swiper styles
// import 'swiper/css'

// const swiper = new Swiper('.mySwiper', {
//   slidesPerView: 4,
//   centeredSlides: true,
//   spaceBetween: 30,
//   grabCursor: true,
//   pagination: {
//     el: '.swiper-pagination',
//     clickable: true
//   }
// })
</script>

<template>
  <!-- 导航栏 -->
  <NavBar2></NavBar2>

  <div class="specialBgi">
    <!-- 背景图片 -->
    <BackGroundImg2></BackGroundImg2>
    <div class="bgi_decorate">
      <!-- <div class="context_vue">
        <div class="context1_vue">WELCOME</div>
        <div class="context2_vue">to AURORA</div>
      </div> -->
      <div class="box_vue">
        <div class="title">
          <div class="ch_title">让每一个热爱技术的人都有一个归属地</div>
          <div class="en_title">Let everyone who loves technology have a place to belong</div>
        </div>
        <button @click="$router.push('/join')">Explore Now</button>
      </div>
    </div>
  </div>

  <!-- 欢迎横幅 -->
  <WelCome2></WelCome2>

  <!-- 工作室介绍 -->
  <div class="studioIntroduce">
    <!-- 文字介绍 -->
    <div class="studioIntroduce_title">
      <span class="ch_title">工作室介绍</span>
      <span class="en_title">Studio Introduction</span>
    </div>

    <!-- 正文描述 -->
    <div class="studioIntroduce_introduce">
      <div class="studioIntroduce_introduce1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa elementum eu praesent a sit
        mi nisl tincidunt consequat. At turpis facilisis semper neque
      </div>
      <div class="studioIntroduce_introduce2">
        or sit amet, consectetur adipiscing elit. Nibh hendrerit id mattis lacus. Nam dictum orci
        iaculis a. Justo.
      </div>
    </div>

    <!-- 轮播图片 -->
    <!-- 先用普通图片顶替 -->
    <!-- Swiper -->
    <!--
    <div class="swiper mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
        <div class="swiper-slide">Slide 4</div>
        <div class="swiper-slide">Slide 5</div>
        <div class="swiper-slide">Slide 6</div>
        <div class="swiper-slide">Slide 7</div>
        <div class="swiper-slide">Slide 8</div>
        <div class="swiper-slide">Slide 9</div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    -->
    <div class="swiperBox">
      <div class="swiper-item">
        <img src="" alt="" />
      </div>
      <div class="swiper-item">
        <img src="" alt="" />
      </div>
      <div class="swiper-item">
        <img src="" alt="" />
      </div>
    </div>
  </div>

  <!-- 部门介绍 -->
  <div class="department">
    <!-- 文字介绍 -->
    <div class="describe">
      <span class="ch_title">部门介绍</span>
      <span class="en_title">Studio Introduction</span>
    </div>

    <!-- 图片介绍 -->
    <div class="departmentBox">
      <div class="department-item">
        <div class="img"></div>
        <div class="describe">
          <span class="en_title">Cybersecurity</span>
          <span class="ch_title">网络安全</span>
        </div>
        <div class="arrow">
          <div class="heng"></div>
          <div class="go"></div>
        </div>
      </div>
      <div class="department-item">
        <div class="img"></div>
        <div class="describe">
          <span class="en_title">Web</span>
          <span class="ch_title">Web</span>
        </div>
        <div class="arrow">
          <div class="heng"></div>
          <div class="go"></div>
        </div>
      </div>
      <div class="department-item">
        <div class="img"></div>
        <div class="describe">
          <span class="en_title">Design</span>
          <span class="ch_title">设计</span>
        </div>
        <div class="arrow">
          <div class="heng"></div>
          <div class="go"></div>
        </div>
      </div>
      <div class="department-item">
        <div class="img"></div>
        <div class="describe">
          <span class="en_title">Embedded development</span>
          <span class="ch_title">嵌入式开发</span>
        </div>
        <div class="arrow">
          <div class="heng"></div>
          <div class="go"></div>
        </div>
      </div>
      <div class="department-item">
        <div class="img"></div>
        <div class="describe">
          <span class="en_title">Software development</span>
          <span class="ch_title">软件开发</span>
        </div>
        <div class="arrow">
          <div class="heng"></div>
          <div class="go"></div>
        </div>
      </div>
      <div class="department-item">
        <div class="img"></div>
        <div class="describe">
          <span class="en_title">Design Group</span>
          <span class="ch_title">数据分析</span>
        </div>
        <div class="arrow">
          <div class="heng"></div>
          <div class="go"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- END -->
  <div class="END">END</div>
</template>

<style scoped>
.specialBgi {
  position: relative;
}

.specialBgi .bgi_decorate {
  width: 711px;
  height: 92px;

  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: flex-start;
  left: 40%;
  top: 528px;
  margin: 0 auto;
}
.specialBgi .context_vue {
  width: 592px;
  height: 149.46px;
  /* background-color: pink; */
}
.specialBgi .context1_vue {
  /** 文本1 */
  font-size: 80px;
  font-weight: 400;
  letter-spacing: -1.6px;
  line-height: 88px;
  color: rgba(255, 255, 255, 1);
}
.specialBgi .context2_vue {
  /** 文本2 */
  font-size: 80px;
  font-weight: 400;
  letter-spacing: -1.6px;
  line-height: 88px;
  color: #d2e0d5; /* undefinde */
  /* color: undefined; */
  text-align: right;
  vertical-align: top;
}

.specialBgi .box_vue {
  width: 711px;
  height: 92px;
  opacity: 1;
  border-radius: 22px;
  /* background: #e01a1a; */
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.specialBgi .title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 553px;
  height: 20.2px;
}
.specialBgi .ch_title {
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.specialBgi .en_title {
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 26.06px;
  color: rgba(0, 0, 0, 1);
  text-align: left;
  vertical-align: top;
}
.specialBgi button {
  width: 127px;
  height: 46.86px;
  opacity: 1;
  border-radius: 18px;
  background: #000000;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  /** 文本1 */
  font-size: 17px;
  font-weight: 600;
  letter-spacing: 0px;
  line-height: 19.92px;
  color: rgba(255, 255, 255, 1);
  text-align: left;
  vertical-align: top;
}

.studioIntroduce {
  width: 1200px;
  height: 640px;
  margin: 59px auto 0;
  position: relative;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
}
.studioIntroduce .studioIntroduce_title {
  width: 155px;
  height: 58px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.studioIntroduce .studioIntroduce_title .ch_title {
  text-align: center;
  display: inline-block;
  width: 100px;
  height: 31px;
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
}
.studioIntroduce .studioIntroduce_title .en_title {
  text-align: center;
  display: inline-block;
  width: 155px;
  height: 24px;
  opacity: 1;
  /** 文本1 */
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 23.17px;
  color: rgba(0, 0, 0, 0.38);
}
.studioIntroduce .studioIntroduce_introduce {
  margin: 67px auto 0;
  padding-left: 40px;
  display: flex;
  gap: 40px;
  /* width: 55%; */
  height: 230px;
  border-radius: 25px;

  width: 927px;
}
.studioIntroduce .studioIntroduce_introduce .studioIntroduce_introduce1 {
  width: 411.59px;
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.5px;
  line-height: 32px;
  color: rgba(116, 116, 116, 1);
}
.studioIntroduce .studioIntroduce_introduce .studioIntroduce_introduce2 {
  width: 484.44px;
  opacity: 1;
  /** 文本1 */
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 1px;
  line-height: 43.2px;
  color: rgba(51, 51, 51, 1);
}

/* .swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
} */

.swiperBox {
  width: 1200px;
  height: 330px;
  display: flex;
  /* gap: 0; */
}
.swiperBox .swiper-item:nth-child(1) {
  width: 353px;
  height: 330px;
  background: url(https://img.js.design/assets/img/6440bef4493676d9ed412ba0.png#22f531573f6e852260707a89dd09a9ae);
  background-repeat: no-repeat;
  background-size: cover;
}
.swiperBox .swiper-item:nth-child(2) {
  width: 710px;
  height: 330px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0) 100%),
    url(https://img.js.design/assets/img/6440bef42d87a0da9b600e33.png#fcadf9afb8dd982aee99e3c8960cd07c);
  background-repeat: no-repeat;
  background-size: cover;
}
.swiperBox .swiper-item:nth-child(3) {
  width: 115px;
  height: 330px;
  background: url(https://img.js.design/assets/img/6440bef424ed7c23faaae7eb.png#2443608b3868c297ccf7b1ddc9d84eb6);
  background-repeat: no-repeat;
  background-size: cover;
}

.department {
  margin: 0 auto;
  width: 1200px;
  height: 958px;
  display: flex;
  flex-direction: column;
  margin-top: 153px;
  align-items: center;
}
/* 部门介绍 */
.department .describe {
  width: 155px;
  height: 57px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.department .describe .en_title {
  width: 155px;
  height: 24px;
  opacity: 1;
  /** 文本1 */
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 23.17px;
  color: rgba(0, 0, 0, 0.38);
}
.department .describe .ch_title {
  width: 91px;
  height: 31px;
  opacity: 1;
  /** 文本1 */
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 28.96px;
  color: rgba(0, 0, 0, 1);
}

/* 图片介绍 */
.department .departmentBox {
  width: 1200px;
  height: 783px;
  margin-top: 98px;
  display: flex;
  flex-wrap: wrap;
  gap: 41px 125px;
}
.department .departmentBox .department-item {
  width: 316.66px;
  height: 367.44px;
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: center;
  box-shadow: 5px 7px 10px rgba(0, 0, 0, 0.25);
}
.departmentBox .department-item .img {
  width: 316.66px;
  height: 198.06px;
  opacity: 1;
  /* background: url(https://img.js.design/assets/img/66978236b335ca902d762e28.png); */
  box-shadow: 5px 7px 10px rgba(0, 0, 0, 0.25);
  border-radius: 0px 0px 0px 0px;
}
.departmentBox .department-item .describe {
  width: 316.66px;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.departmentBox .department-item .describe .en_title {
  text-align: center;
  width: 316.66px;
  /** 文本1 */
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 34.75px;
  color: rgba(255, 255, 255, 1);
}
.departmentBox .department-item .describe .ch_title {
  text-align: center;
  width: 316.66px;
  /** 文本1 */
  font-size: 24px;
  font-weight: 400;
  letter-spacing: 0px;
  line-height: 34.75px;
  color: rgba(255, 255, 255, 1);
  margin-top: 8px;
}
.departmentBox .department-item .arrow {
  margin-top: 16px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 1);
  position: relative;
}
.departmentBox .department-item .arrow .heng {
  width: 20.05px;
  height: 0px;
  opacity: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-bottom: 3px solid rgba(255, 255, 255, 1);
}
.departmentBox .department-item .arrow .go {
  width: 15px;
  height: 15px;
  opacity: 1;

  position: absolute;
  top: 57%;
  left: 41%;
  transform: translate(-50%, -50%);

  border-top: 3px solid rgba(255, 255, 255, 1);
  border-right: 3px solid rgba(255, 255, 255, 1);
  border-bottom: 3px solid transparent;
  border-left: 3px solid transparent;
  rotate: 45deg;
}

.departmentBox .department-item:nth-child(1) .img {
  background: url(https://img.js.design/assets/img/66978236b335ca902d762e28.png);
  background-size: cover;
  background-position: 50% 50%;
}
.departmentBox .department-item:nth-child(2) .img {
  background: url(https://img.js.design/assets/img/669786b4a4202cb4cce857d3.png);
  background-size: cover;
  background-position: 50% 50%;
}
.departmentBox .department-item:nth-child(3) .img {
  background: url(https://img.js.design/assets/img/6697876d063a03fa87fe47c2.png);
  background-size: cover;
  background-position: 50% 50%;
}
.departmentBox .department-item:nth-child(4) .img {
  background: url(https://img.js.design/assets/img/66978236b335ca902d762e28.png);
  background-size: cover;
  background-position: 50% 50%;
}
.departmentBox .department-item:nth-child(5) .img {
  background: url(https://img.js.design/assets/img/669786b4a4202cb4cce857d3.png);
  background-size: cover;
  background-position: 50% 50%;
}
.departmentBox .department-item:nth-child(6) .img {
  background: url(https://img.js.design/assets/img/6697876d063a03fa87fe47c2.png);
  background-size: cover;
  background-position: 50% 50%;
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
