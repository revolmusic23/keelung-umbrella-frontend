<template>
  <v-sheet
    class="mx-auto pa-md-8 pa-4 rounded-lg border position-relative"
    elevation="4"
    max-width="1200"
  >
    <v-img
      src="images/cloud-opacity.svg"
      width="200"
      class="position-absolute top-0 right-0 ma-4 d-none d-md-flex"
    ></v-img>

    <h1 class="page-title">一起「傘人」1~2~3！</h1>
    <h3 class="page-subtitle">傘人家族創意合照 - 手機攝影比賽</h3>

    <div class="paragraph mt-md-12 position-relative">
      <v-img
        src="images/cloud-opacity.svg"
        width="160"
        class="position-absolute left-0 ma-4 d-none d-md-flex"
        style="top: -7rem"
      ></v-img>

      <h4 class="paragraph-title">活動內容</h4>
      <p>
        10/10～10/31
        活動期間至基隆文化中心前廣場與任一傘人家族成員合照，合照對象不限(人、竉物、玩偶、玩具…皆可)，
        再至活動網站，選擇一張合照並留下一句話，上傳作品，即完成參賽，
        活動結束後將選出前三名最有創意的照片，贈予精美獎品。
      </p>
      <br />

      <div class="d-md-flex justify-space-between gx-6">
        <p>
          <span class="font-weight-bold">獎項</span><br />
          第 1 名：<span class="orange-text font-weight-bold"
            >LEICA SOFORT 2 拍立得相機</span
          ><br />
          第 2 名：<span class="orange-text font-weight-bold"
            >Polaroid Now+ 拍立得相機 </span
          ><br />
          第 3 名：<span class="orange-text font-weight-bold"
            >FUJIFILM instax SQUARE SQ1</span
          ><br />
        </p>
        <div
          class="img-container d-flex w-md-50 w-sm-75 w-100"
          style="gap: 1.2rem"
        >
          <v-img src="images/prize-1.png"></v-img>
          <v-img src="images/prize-2.png"></v-img>
          <v-img src="images/prize-3.png"></v-img>
        </div>
      </div>
    </div>

    <div class="paragraph">
      <h4 class="paragraph-title">活動好禮</h4>
      <p>
        <b>
          <span class="orange-text">"限於活動現場"</span>
          完成參賽後，分享活動網站於個人IG或FB並追路基隆市文化觀光局臉書，經現場工作人員確認無
          誤後，將可獲得活動特製<span class="orange-text"
            >「傘人家族精緻小物」</span
          >一個（二款随機赠送，一人限領取一個，每日限量，送完為止）。
        </b>
      </p>
    </div>

    <div class="paragraph">
      <h4 class="paragraph-title">收件時間</h4>
      <p>
        2024 年
        <span class="date-text">10/10</span> 至
        <span class="date-text">10/31</span>
        止，逾期者恕不受理。
      </p>
    </div>

    <div class="paragraph">
      <h4 class="paragraph-title">評分方式</h4>
      <p>
        邀請基隆市政府文化觀光局人員及網紅伊米塔擔任評審，選出前三名作品。<br />
        <br />
        評分項目：
      </p>
      <v-table class="border">
        <thead>
          <tr>
            <th class="text-center">創意</th>
            <th class="text-center">文案</th>
            <th class="text-center">品質</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>60%</td>
            <td>30%</td>
            <td>20%</td>
          </tr>
        </tbody>
      </v-table>
    </div>

    <div class="paragraph">
      <h4 class="paragraph-title">收件方式</h4>
      <p>
        一律於活動網站，上傳作品：<br />
        <a :href="WEBSITE_URL" target="_blank" class="link">
          {{ WEBSITE_URL }}
        </a>
      </p>
    </div>

    <div class="paragraph">
      <h4 class="paragraph-title">得獎公佈</h4>
      <p>
        <span class="date-text">11/7</span> 將於<span class="orange-text"
          >活動網站、文化觀光局臉書、魅力基隆臉書</span
        >公佈前三名得獎名單，並通知得獎者領獎。
      </p>
    </div>
  </v-sheet>
</template>

<script setup>
import { ref, watch } from 'vue';
import { paragraphs } from './activityContent';
import { WEBSITE_URL } from '@/utils/constants';

import PageTitle from '@/components/PageTitle.vue';
</script>

<style lang="scss" scoped></style>
