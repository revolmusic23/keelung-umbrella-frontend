<template>
  <v-sheet
    class="mx-auto rounded-lg border position-relative"
    elevation="4"
    max-width="1200"
  >

    <header class="banner">
      <v-img
        src="images/cloud.svg"
        class="cloud-1"
      ></v-img>
      <v-img
        src="images/cloud.svg"
        class="cloud-2"
      ></v-img>
      <v-img
        src="images/cloud.svg"
        class="cloud-3"
      ></v-img>
      <v-img
        src="images/sun.svg"
        class="sun"
      ></v-img>
      <v-img src="images/flash.png" class="flash-1"></v-img>
      <v-img src="images/flash.png" class="flash-2"></v-img>
      <div class="banner-container">
        <div
          class="d-flex flex-sm-row flex-column align-center"
          style="gap: 2rem"
        >
          <v-img
            src="images/umb-family.png"
            class="banner-container-img d-flex text-center"
          >
          </v-img>
          <div
            class="banner-container-word d-flex flex-column align-sm-start align-center justify-end"
          >
            <h1 class="banner-container-word-title">一起「傘人」1~2~3!</h1>
            <h3 class="banner-container-word-subtitle">傘人家族創意合照 - <br class="break">手機攝影比賽</h3>
          </div>
        </div>
      </div>
    </header>

    <article class="article">
      <div class="article-container">
        <div class="article-container-title">
          <h4 class="article-container-title-text">關於傘人家族</h4>
        </div>
        
        <p class="article-container-content">
          「傘人家族」是基隆城市指標系統中擔任城市的小小導覽員，將城市色彩和資訊相結合，串聯城市、生活和交通資源，你可以在孝三路商圈、城隍廟、崁仔頂、委託行商圈和許梓桑古厝等地找到他們喔。目前他們已分佈在 17 處，不管你看到的是優雅的「大傘」，俏皮的「小傘」，還是可愛的「小雲」 ，只要看到傘橘色的傘人家族，就趕緊拿起手機掃一掃 QR Code 吧!小傘人們會帶你連接到基隆旅遊網，獲得景點的相關資訊，讓你的基隆旅程更加豐富趣味！
        </p>
      </div>
      <v-img
        src="images/hand.png"
        class="hand"
        cover="true"
        max-height="150%"
      ></v-img>
    </article>

    <main class="introduce paragraph d-flex flex-column align-center">
      <h4 class="introduce-title">傘人家族大點名</h4>
      <div class="introduce-container img-info-container pt-4 d-sm-flex" style="gap: 1rem">
        <div :class="imgInfoClass">
          <div class="img-container">
            <v-img src="images/toy-1.png" class="toy" contain></v-img>
            <div class="drop-background">
              <div class="drop"></div>
            </div>
          </div>
          <div :class="textInfoClass">
            <h2 class="yellow-bold-text">大傘</h2>
            <p class="text-sm-center white-bold-text introduce-container-content">
              <b>撐著長傘，以優雅的姿態<br>瀏覽基隆雨都的各種風貌。</b>
            </p>
          </div>
        </div>
        <div :class="imgInfoClass">
          <div class="img-container">
            <v-img src="images/toy-2.png" class="toy" contain></v-img>
            <div class="drop-background">
              <div class="drop"></div>
            </div>
          </div>
          <div :class="textInfoClass">
            <h2 class="yellow-bold-text">小傘</h2>
            <p class="text-sm-center white-bold-text introduce-container-content"><b>頂著小傘，活潑且<br>愉快的穿梭在大街小巷。</b></p>
          </div>
        </div>
        <div :class="imgInfoClass">
          <div class="img-container">
            <v-img src="images/toy-3.png" class="toy" contain></v-img>
            <div class="drop-background">
              <div class="drop"></div>
            </div>
          </div>
          <div :class="textInfoClass">
            <h2 class="yellow-bold-text">小雲</h2>
            <p class="text-sm-center white-bold-text introduce-container-content">
              <b>雲朵帶的雨滴，加入成為<br>基隆傘人家族的一員。</b>
            </p>
          </div>
        </div>
      </div>
      <div class="drop-cover">
        <div class="rain1"></div>
        <div class="rain2"></div>
        <div class="rain3"></div>
        <div class="rain4"></div>
        <div class="rain5"></div>
        <div class="rain6"></div>
        <div class="rain7"></div>
        <div class="rain8"></div>
        <div class="rain9"></div>
        <div class="rain10"></div>
        <div class="rain11"></div>
        <div class="rain12"></div>
        <div class="rain13"></div>
        <div class="rain14"></div>
        <div class="rain15"></div>
        <div class="rain16"></div>
        <div class="rain17"></div>
        <div class="rain18"></div>
        <div class="rain19"></div>
        <div class="rain20"></div>
        <div class="rain21"></div>
        <div class="rain22"></div>
        <div class="rain23"></div>
        <div class="rain24"></div>
        <div class="rain25"></div>
        <div class="rain26"></div>
        <div class="rain27"></div>
        <div class="rain28"></div>
        <div class="rain29"></div>
        <div class="rain30"></div>
      </div>
    </main>

    <section class="map-area d-flex flex-column align-center">
      <h4 class="map-area-title">傘人家族的位置</h4>
      <div class="map-area-container">
        <p class="map-area-container-content">
          目前設置傘人家族資訊柱數量共 17 個，位置如下：
        </p>
        <div class="map-area-container-list">
          <ul>
            <li>1.城際轉運站</li>
            <li>2.城隍廟</li>
            <li>3.孝三路商圈</li>
            <li>4.委託行商圈</li>
            <li>5.崁仔頂</li>
            <li>6.許梓桑古厝</li>
          </ul>
          <ul>
            <li>7.基隆塔(一樓)</li>
            <li>8.基隆塔(頂樓)</li>
            <li>9.忠烈祠</li>
            <li>10.清法戰爭紀念園區</li>
            <li>11.基隆要塞司令官邸</li>
            <li>12.基隆要塞司令部校官眷舍</li>
          </ul>
          <ul>
            <li>13.基隆要塞司令部</li>
            <li>14.正濱漁港色彩屋</li>
            <li>15.阿根納造船廠遺構</li>
            <li>16.潮境公園</li>
            <li>17.望幽谷</li>
          </ul>
        </div>
      </div>
      
      <v-img src="images/family-map.jpg" class="w-100"></v-img>
    </section>

  </v-sheet>

  <HomeModal />
</template>

<script setup>
import { ref, watch, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

import HomeModal from '@/components/HomeModal.vue';

const router = useRouter();

const HOME_TITLE = '就愛和你拍';
const SUBTITLE = '〈傘人家族〉創意合照競賽';

const imgInfoClass = [
  'img-info',
  'd-flex',
  'flex-column',
  'align-center',
  'w-sm-33',
];
const textInfoClass = ['text-sm-center', 'w-75', 'w-sm-100'];
</script>

<style scoped lang="scss">
.banner {
  background-color: var(--primary-water);
  position: relative;
  width: 100%;

  @media only screen and (max-width: 600px) {
    padding: 50px 20px;
    padding-bottom: 0;
  }

  &-container {
    position: relative;
    width: 80%;
    margin: 0 auto;
    z-index: 10;

    @media only screen and (max-width: 600px) {
      width: 90%;
    }

    &-word {

      @media only screen and (max-width: 600px) {
        order: 1;
      }

      &-title {
        font-size: 3.2vw;
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 900;
        color: #fff;
        text-shadow: 2px 2px 4px var(--primary-blue);
        white-space: nowrap;
        border-bottom: 3px solid var(--primary-yellow);
        padding-bottom: 5px;

        @media only screen and (max-width: 1600px) {
          font-size: 3.6vw;
          border-bottom: 2px solid var(--primary-yellow);
        }

        @media only screen and (max-width: 992px) {
          font-size: 4.2vw;
        }

        @media only screen and (max-width: 600px) {
          font-size: 36px;
        }

        @media only screen and (max-width: 400px) {
          font-size: 32px;
        }
      }

      &-subtitle {
        font-size: 1.6vw;
        font-weight: 700;
        margin-top: 5px;
        color: var(--primary-yellow);
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        width: 100%;
        text-align: right;
        white-space: nowrap;
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 700;

        @media only screen and (min-width: 601px) and (max-width: 1280px) {
            font-size: 2.4vw;
          }

        @media only screen and (max-width: 600px) {
          font-size: 24px;
          text-align: center;
        }

        @media only screen and (max-width: 400px) {
          white-space: wrap;
        }

        .break {
          display: none;

          @media only screen and (min-width: 601px) and (max-width: 1280px) {
            display: block;
          }

          @media only screen and (max-width: 400px) {
            display: block;
          }
        }
      }
    }

    &-img {
      position: relative;
      transform: translateY(20%);
      max-width: 400px;

      @media only screen and (max-width: 1280px) {
        width: 25vw;
      }

      @media only screen and (max-width: 992px) {
        width: 20vw;
      }

      @media only screen and (max-width: 600px) {
        width: 100%;
        transform: translateY(10%);
        order: 2;
      }
    }
  }

  .cloud-1 {
    position: absolute;
    width: 300px;
    left: 20px;
    top: 20px;
    animation: cloud-animation 10s infinite alternate linear both;

    @media only screen and (max-width: 1280px) {
      width: 250px;
    }

    @media only screen and (max-width: 768px) {
      width: 200px;
      top: 35%;
    }
  }

  .cloud-2 {
    position: absolute;
    width: 150px;
    left: 40%;
    top: 60%;
    opacity: 0.5;
    animation: cloud-animation 10s -2s infinite alternate linear both;

    @media only screen and (max-width: 768px) {
      width: 100px;
    }

    @media only screen and (max-width: 600px) {
      left: auto;
      right: 5%;
      top: 80%;
    }
  }

  .cloud-3 {
    position: absolute;
    width: 80px;
    right: 30%;
    top: 15%;
    opacity: 0.7;
    animation: cloud-animation 10s -5s infinite alternate linear both;

    @media only screen and (max-width: 600px) {
      right: 10%;
      top: 30%;
    }
  }

  .sun {
    position: absolute;
    width: 60px;
    height: 60px;
    top: 60px;
    left: 120px;
    animation: sun-animation 20s infinite alternate linear both;

    @media only screen and (max-width: 768px) {
      top: 40%;
      left: 80px;
    }
  }

  .flash-1 {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 60%;
    left: 7%;
    animation: scale-animation 1s -0.5s infinite alternate linear both;

    @media only screen and (max-width: 600px) {
      top: 70%;
      left: 0%;
    }
  }

  .flash-2 {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 85%;
    left: 45%;
    animation: scale-animation 1s infinite alternate linear both;

    @media only screen and (max-width: 600px) {
      top: 55%;
      left: auto;
      right: 5%;
    }
  }
}

.article {
  position: relative;
  background-color: var(--primary-green);
  width: 100%;
  padding: 2rem 0 4rem 0;

  @media only screen and (max-width: 600px) {
    padding: 3rem 0 0 0;
  }

  &-container {
    width: 80%;
    margin: 0 auto;

    @media only screen and (max-width: 600px) {
      width: 90%;
    }

    &-title {
      display: flex;
      justify-content: center;
      align-items: center;

      &-text {
        font-size: 1.6em;
        border: 2px solid #fff;
        border-radius: 8px;
        padding: 0.2rem 0.8rem;
        display: inline-block;
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 700;
        color: #fff;
        background-color: var(--primary-orange);
        transform: translateY(40%);
      }
    }

    &-content {
      color: #fff;
      padding: 1rem;
      padding-top: 30px;
      padding-bottom: 20px;
      font-family: 'Noto Sans TC', sans-serif;
      font-weight: 500;
      border: 2px solid #fff;
      border-radius: 8px;
      width: 70%;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }

  .hand {
    position: absolute;
    width: 18vw;
    height: 22.5vw;
    bottom: 0;
    right: 0;

    @media only screen and (max-width: 1600px) {
      width: 22vw;
      height: 27.5vw;
    }

    @media only screen and (max-width: 1400px) {
      width: 24vw;
      height: 30vw;
    }

    @media only screen and (max-width: 1200px) {
      width: 28vw;
      height: 35vw;
    }

    @media only screen and (max-width: 1000px) {
      width: 36vw;
      height: 45vw;
    }

    @media only screen and (min-width: 601px) and (max-width: 768px) {
      display: none;
    }

    @media only screen and (max-width: 600px) {
      position: relative;
      width: 100%;
      height: 150%;
    }
  }
}

.introduce {
  position: relative;
  background-color: var(--primary-blue);
  width: 100%;
  padding-top: 50px;

  &-title {
    font-size: 1.6em;
    border: 2px solid #fff;
    border-radius: 8px;
    padding: 0.2rem 0.8rem;
    display: inline-block;
    font-family: "Noto Sans TC", sans-serif;
    font-weight: 700;
    color: #fff;
    background-color: var(--primary-orange);
  }

  &-container {
    position: relative;
    width: 80%;
    margin: 0 auto;
    z-index: 10;

    @media only screen and (max-width: 600px) {
      width: 90%;
    }

    .img-container {
      margin-bottom: 1rem;
      position: relative;
      width: 250px;
      height: 250px;

      @media only screen and (max-width: 1280px) {
        width: 200px;
        height: 200px;
      }

      .toy {
        z-index: 10;
        filter: drop-shadow(0 0 5px rgba(255, 255, 255, 1));
      }

      .drop-background {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 0;

        .drop {
          position: absolute;
          background-color: #fff;
          opacity: 0.6;
          left: 50%;
          top: 50%;
          width: 80%;
          height: 80%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          transform-origin: top left;
        }

        &::before {
          content: '';
          position: absolute;
          width: 60%;
          height: 60%;
          background-color: #fff;
          opacity: 0.3;
          border-radius: 50%;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          transform-origin: top left;
        }
      }
    }

    &-content {
      font-family: 'Noto Sans TC', sans-serif;
      font-weight: 300;

      @media screen and (min-width: 600px) and (max-width: 768px) {
        br {
          display: none;
        }
      }

      @media screen and (max-width: 600px) {
        text-align: center;
        margin-bottom: 30px;
      }
    }
  }

  .drop-cover {
		position: absolute;
		width: 100%;height: 100%;
		left: 0;top: 0;
		z-index: 0;
		overflow: hidden;

		[class^="rain"] {
			width: 2px;
      height: 2px;
      border-radius: 50px;
			background-color: #fff;
			animation: rainFloat linear 3s infinite;
		}
		@for $i from 1 through 30 {
			.rain#{$i} {
				$size:random(10)+10;
				position: absolute;
				left: random()*100%;
				top: random()*100%;
				animation-delay: $i*-0.2s;
        width: #{$size}px;
				height: #{$size}px;
			}
		}
		@keyframes rainFloat {
			0% {opacity: 0;transform: scale(0);}
			50% {opacity: 0.5;}
			100% {opacity: 0;transform: scale(1);}
		}
	}
}

.map-area {
  background-color: var(--primary-blue);
  width: 100%;
  padding-top: 50px;

  &-title {
    font-size: 1.6em;
    border: 2px solid #fff;
    border-radius: 8px;
    padding: 0.2rem 0.8rem;
    display: inline-block;
    font-family: "Noto Sans TC", sans-serif;
    font-weight: 700;
    color: #fff;
    background-color: var(--primary-orange);
  }

  &-container {
    width: 80%;
    margin: 0 auto;

    @media only screen and (max-width: 600px) {
      width: 90%;
    }

    &-content {
      color: #fff;
      font-family: 'Noto Sans TC', sans-serif;
      font-weight: 500;
      margin-top: 20px;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }

    &-list {
      display: flex;
      justify-content: space-between;
      align-items: start;
      width: 100%;
      color: #fff;
      padding: 20px;
      margin: 20px 0 30px 0;
      font-family: 'Noto Sans TC', sans-serif;
      font-weight: 500;
      border: 2px solid #fff;
      border-radius: 8px;

      ul {
        li {
          list-style-type: none;
        }
      }

      @media only screen and (max-width: 600px) {
        flex-direction: column;
      }
    }
  }
}
</style>
