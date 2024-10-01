<template>
  <v-sheet
    class="mx-auto rounded-lg border position-relative"
    elevation="4"
    max-width="1200"
  >
    <header class="banner">
      <v-img src="images/cloud.svg" class="cloud-1"></v-img>
      <v-img src="images/cloud.svg" class="cloud-2"></v-img>
      <v-img src="images/cloud.svg" class="cloud-3"></v-img>
      <v-img src="images/sun.svg" class="sun"></v-img>
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
          ></v-img>
          <div
            class="banner-container-word d-flex flex-column align-sm-start align-center justify-end"
          >
            <h1 class="banner-container-word-title">一起「傘人」1~2~3!</h1>
            <h3 class="banner-container-word-subtitle">
              傘人家族創意合照 - <br class="break" />手機攝影比賽
            </h3>
          </div>
        </div>
      </div>
    </header>

    <article class="article">
      <div class="article-container">
        <div class="article-container-title">
          <h4 class="article-container-title-text">活動內容</h4>
        </div>

        <p class="article-container-content">
          10/10～10/31 活動期間至基隆市文化廣場與任一傘人家族成員合照，合照對象不限(人、竉物、玩偶、玩具…皆可)，再至活動網站，選擇一張合照並附上一句話上傳作品，即完成參賽，活動結束後將選出前三名最有創意的照片，贈予精美獎品。
        </p>
      </div>
    </article>

    <main class="information">
      <div class="information-container">
        <h3 class="paragraph-title mb-0">活動獎項</h3>
        <div class="d-lg-flex justify-space-between align-end gx-6">
          <div class="information-container-prize">
            <h4>第 1 名：LEICA 徠卡 SOFORT 2 拍立得相機</h4>
            <h4>
              第 2 名：Polaroid 寶麗來 Now+ G2 拍立得相機套組
              <span>( 含 5 種顏色濾鏡 + 底片 )</span>
            </h4>
            <h4>第 3 名：FUJIFILM 富士 instax SQUARE SQ1 拍立得相機</h4>
          </div>
          <div
            class="img-container d-flex w-lg-50 w-md-75 w-sm-75 mt-lg-0 mt-8 information-container-photo"
            style="gap: 1.2rem"
          >
            <v-img src="images/prize-1.png" class="photo-1">
              <div class="prize-medal">1</div>
            </v-img>
            <v-img src="images/prize-2.png" class="photo-2">
              <div class="prize-medal">2</div>
            </v-img>
            <v-img src="images/prize-3.png" class="photo-3">
              <div class="prize-medal">3</div>
            </v-img>
          </div>
        </div>

        <div class="information-container-gift">
          <div class="information-container-gift-left">
            <p>活動<br />好禮</p>
          </div>
          <div class="information-container-gift-right">
            活動期間每日
            <span>9:00 - 17:00 於活動現場</span>完成參賽，分享活動網站於個人IG或
            FB 並追蹤基隆市文化觀光局 FB
            ，經現場工作人員確認無誤後，將可獲得活動特製<span>「傘人家族精緻小物」</span>一個（二款隨機贈送，一人限領取一個，每日限量，送完為止）。<span
              >10/10、10/13、10/14、10/21、10/28</span
            >
            為休館日，無兌換活動，但仍可拍照參賽。
          </div>
        </div>

        <div class="d-md-flex justify-start align-center mt-12 gx-6">
          <div
            class="information-container-example img-container w-25 mt-lg-0 mt-8 mr-6 d-none d-md-flex"
            style="gap: 2rem"
          >
            <h5>- 作品範例 -</h5>
            <v-img src="images/photo-2.png"></v-img>
          </div>

          <div class="information-container-content w-md-75 w-100">
            <h3 class="paragraph-title">參賽辦法</h3>
            <ol class="pl-4">
              <li>作品限用手機拍攝，不限手機品牌。</li>
              <li>
                主題內容不限，唯必須與傘人家族任一成員合照，合照對象不限
                (人、竉物、玩偶、玩具…皆可)，但照片內容不可違反公序良俗，如有違背，主辦單位有權下架作品，不另行通知。
              </li>
              <li>
                參賽作品需在基隆市文化廣場傘人攝影活動場地拍攝之照片，且同意授權主辦單位於平台宣傳、展示使用權利。
              </li>
              <li>
                每人至多可上傳三張照片參賽，每張照片檔案不可小於 1,200
                萬畫素，⻑寬⽐為 4:3 的 JPEG 檔。
              </li>
              <li>
                作品後製僅限用手機調整明暗對⽐、⾊彩、裁切；禁止數位合成、加字、彩繪、疊片等。
              </li>
              <li>
                每張照⽚須附上 50
                字以內之敘述，文字內容禁止使用低俗、淫穢、粗鄙等不雅文字，如違反規定，主辦單位有權下架作品，不另行通知。
              </li>
            </ol>
          </div>
        </div>
      </div>
    </main>

    <section class="detail">
      <div class="detail-container">
        <div class="d-sm-flex justify-space-between">
          <div class="detail-container-left mr-sm-10 mr-0">
            <div class="detail-container-section">
              <h4 class="detail-container-section-title">收件時間</h4>
              <p class="detail-container-section-content">
                2024 年
                <span class="date-text">10/10</span> 至
                <span class="date-text">10/31</span>
                止，逾期者恕不受理。
              </p>
            </div>
            <div class="detail-container-section">
              <h4 class="detail-container-section-title">收件方式</h4>
              <p class="detail-container-section-content">
                一律於活動網站，上傳作品
              </p>
            </div>
          </div>
          <div class="detail-container-right">
            <div class="detail-container-section">
              <h4 class="detail-container-section-title">評分方式</h4>
              <p class="detail-container-section-content">
                聘邀影像藝術家、設計總監朱善修博士及網紅伊米塔擔任活動評審
              </p>
              <p class="detail-container-section-content mt-6">評分項目</p>
              <div class="detail-table">
                <div class="detail-table-top">
                  <div class="detail-table-top-item">創意</div>
                  <div class="detail-table-top-item">文案</div>
                  <div class="detail-table-top-item">品質</div>
                </div>
                <div class="detail-table-bottom">
                  <div class="detail-table-bottom-item">60%</div>
                  <div class="detail-table-bottom-item">30%</div>
                  <div class="detail-table-bottom-item">20%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail-container-section">
          <h4 class="detail-container-section-title">得獎公佈</h4>
          <p class="detail-container-section-content">
            <span class="date-text">11/7</span>
            將於<span>活動網站、文化觀光局臉書、魅力基隆臉書</span>公佈前三名得獎名單，並通知得獎者領獎。
          </p>
        </div>

        <div class="detail-container-section mb-0">
          <h4 class="detail-container-section-title">注意事項</h4>
          <div class="detail-container-section-content">
            <ol class="pl-4 notice-list">
              <li>凡上傳作品完成報名參加本活動者，即視為已充分瞭解本辦法中各項條款，且願意完全遵守本活動之各項規定。</li>
              <li>參賽作品不得含有任何具挑釁、猥褻、毀謗、暴力、情色、種族歧視性或其他任何引人厭惡或不合宜之內容，主辦單位得自行判斷並有權下架作品不另行通知。 </li>
              <li>主辦單位保留隨時修正、暫停、終止或解釋本活動之一切及最終權利（包括但不限於更換活動、提前終止或延⻑活動時間之最終決定權等事項），相關內容如有變動將於比賽活動網站及文化觀光局臉書另行公告，不另行通知，若有任何異動，以本競賽活動官方網站最新公告為準。</li>
              <li>若得獎獎項價值累計超過新台幣 1,001 元(含)以上者而未滿 18 歲之中獎者，視同父母或監護人中獎，由父母或監護人代為領獎，並請附上得獎者及其代領人關係證明影本。 </li>
              <li>本活動如有任何因電腦、網路、技術或其他不可歸責於主辦單位之事由，而使活動參加者所登錄之資料有所遺失、錯誤、無法辨識或毀損所導致資料無效之狀況，主辦單位不負任何法律責任，本活動參加者及獲採用者亦不得異議。
              如發生前述情形，主辦單位將不做任何通知。 </li>
              <li>本活動參加者應聲明及保證其所填寫或提出之資料均為真實，且未冒用或盜用任何第三人之資料，如冒用或盜用任何第三人資料之法律責任由該參加者自行負擔，概與主辦單位無關，參賽者保證所有填寫或提出之資料均為真實且正確，且未冒用或盜用任何第三人之資料。
              如有不實或不正確之情事，將被取消參加或得獎資格。如因此導致主辦單位無法通知其得獎訊息時，主辦單位不負任何責任，且如有致損害於主辦單位或其他任何第三人，參賽者應自負一切相關責任。</li>
              <li>參賽者在參賽之同時，即代表參賽者同意且未違反與第三者之協議、保證參賽作品未侵犯其他任何個人或實體之版權、商標權、人格權、隱私／公開權、以及智慧財產權，且未有第三者對該參賽作品具備任何權利、所有權、主張擁有或相關利益，亦未有違反其他法令情事。
              如有違反之虞，主辦單位得立即移除相關內容，並取消其參賽與得獎資格，並追回一切獎項，且參賽者須自負法律責任。 </li>
              <li>參賽者應尊重評審觀點，對於評審結果不得異議，經評審得獎確定之作品，不得要求取消得獎資格。 </li>
              <li>若主辦單位因使用參賽者所提供之圖文、照片及其他資料遭第三人請求、索賠、提出民、刑事訴訟或主張任何法律上之權利，參賽者應賠償主辦單位因此所生之全部損失與費用。 </li>
              <li>參賽者如因參加本活動或因活動獎項而遭受任何損失，主辦單位不負任何責任。一旦得獎者領取獎品後，若有遺失或被竊，主辦單位不發給任何證明或補償。 </li>
              <li>本辦法若有其他未盡事宜，悉依主辦單位相關規定或解釋辦理，主辦單位保有最終之解釋權。 </li>
              <li>參賽作品開放參觀民眾下載收藏。 </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  </v-sheet>
</template>

<script setup>
import { ref, watch } from 'vue';
import { paragraphs } from './activityContent';
import { WEBSITE_URL } from '@/utils/constants';

import PageTitle from '@/components/PageTitle.vue';
</script>

<style lang="scss" scoped>
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
      transform: translateY(15%);
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

    @media only screen and (max-width: 992px) {
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
  background-color: var(--primary-blue);
  width: 100%;
  padding: 2rem 0 0 0;

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

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
}

.information {
  background-color: var(--primary-blue);
  padding-top: 50px;
  width: 100%;

  &-container {
    width: 80%;
    margin: 0 auto;

    @media only screen and (max-width: 600px) {
      width: 90%;
    }

    &-prize {
      color: #fff;
      font-weight: 500;

      h4 {
        color: var(--primary-yellow);
        padding: 10px 0;
        border-bottom: 1px dotted #fff;
        line-height: 1;

        @media only screen and (max-width: 600px) {
          line-height: 1.5;
        }

        span {
          color: #fff;
          font-size: 10px;
          margin-left: 65px;
          margin-top: 5px;
          display: block;

          @media only screen and (max-width: 1280px) {
            margin-left: 0;
            display: inline-block;
          }
        }
      }
    }

    &-photo {
      width: 85%;

      .photo-1 {
        width: 41%;
      }
      .photo-2 {
        width: 30%;
      }
      .photo-3 {
        width: 29%;
      }
    }

    &-example {
      position: relative;

      h5 {
        position: absolute;
        font-size: 1rem;
        bottom: -10px;
        left: 50%;
        transform: translate(-50%, 50%);
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 700;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
        color: #fff;
      }
    }

    .prize-medal {
      position: relative;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: var(--primary-yellow);
      color: var(--primary-blue);
      font-weight: bold;
      font-size: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      transform: translate(3px, 3px);

      &::before {
        position: absolute;
        content: '';
        width: 36px;
        height: 36px;
        border-radius: 50%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        border: solid 1px var(--primary-yellow);
        position: absolute;
        z-index: -1;
      }

      @media only screen and (max-width: 600px) {
        width: 24px;
        height: 24px;
        font-size: 16px;

        &::before {
          width: 28px;
          height: 28px;
        }
      }
    }

    &-gift {
      width: 100%;
      margin-top: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid #fff;
      border-radius: 8px;
      overflow: hidden;

      @media only screen and (max-width: 800px) {
        flex-direction: column;
      }

      &-left {
        position: relative;
        width: 50px;
        background-color: var(--primary-orange);
        height: 6vw;
        width: 6vw;
        display: flex;
        justify-content: center;
        align-items: center;
        border-right: 2px solid #fff;

        @media only screen and (max-width: 1440px) {
          height: 100px;
          width: 100px;
        }

        @media only screen and (max-width: 1280px) {
          height: 140px;
          width: 140px;
        }

        @media only screen and (max-width: 800px) {
          height: auto;
          width: 100%;
          border-bottom: 2px solid #fff;
          border-right: none;
        }

        p {
          font-size: 1.6rem;
          padding: 1rem;
          color: #fff;
          font-family: 'Noto Sans TC', sans-serif;
          font-weight: 700;
          white-space: nowrap;

          @media only screen and (max-width: 800px) {
            padding: 0.2rem 0;
          }

          br {
            display: block;

            @media only screen and (max-width: 800px) {
              display: none;
            }
          }
        }
      }

      &-right {
        color: #fff;
        padding: 0.5rem 1rem;
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 500;

        span {
          color: var(--primary-yellow);
          font-weight: bold;
        }
      }
    }

    &-content {
      color: #fff;
      font-family: 'Noto Sans TC', sans-serif;
      font-weight: 500;

      @media only screen and (max-width: 768px) {
        width: 100%;
      }
    }
  }
}

.detail {
  background-color: var(--primary-blue);
  padding-top: 50px;
  padding-bottom: 50px;
  width: 100%;

  &-container {
    width: 80%;
    margin: 0 auto;

    @media only screen and (max-width: 600px) {
      width: 90%;
    }

    &-left {
      width: 45%;

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }

    &-right {
      width: 55%;

      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }

    &-section {
      margin-bottom: 30px;

      &-title {
        font-size: 1.6em;
        display: inline-block;
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 700;
        color: #fff;
      }

      &-content {
        color: #fff;
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 500;

        .notice-list {
          font-weight: normal;
        }

        span {
          color: var(--primary-yellow);
          font-weight: bold;

          &.date-text {
            font-size: 1.4rem;
          }
        }

        @media only screen and (max-width: 768px) {
          width: 100%;
        }
      }

      .detail-table {
        display: flex;
        flex-direction: column;
        border: 1px solid #fff;
        overflow: hidden;
        border-radius: 8px;
        margin-top: 10px;

        &-top {
          display: flex;
          justify-content: space-between;
          background-color: var(--primary-orange);
          color: #fff;
          font-size: 1.2rem;
          font-weight: 700;
          

          &-item {
            font-size: 1.2rem;
            font-weight: 700;
            width: 100%;
            padding: 0.3rem;
            width: 100%;
            border-right: 1px solid #fff;
            text-align: center;

            &:last-child {
              border-right: none;
            }
          }
        }

        &-bottom {
          display: flex;
          justify-content: space-between;

          &-item {
            font-size: 1.4rem;
            color: var(--primary-orange);
            font-weight: 700;
            width: 100%;
            padding: 0.2rem;
            background-color: #fff;
            text-align: center;
            border-right: 1px solid #ccc;

            &:last-child {
              border-right: none;
            }
          }
        }
      }
    }
  }
}
</style>
