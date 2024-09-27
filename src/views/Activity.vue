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
          <v-img src="images/prize-1.png">
            <div class="prize-medal">1</div>
          </v-img>
          <v-img src="images/prize-2.png">
            <div class="prize-medal">2</div>
          </v-img>
          <v-img src="images/prize-3.png">
            <div class="prize-medal">3</div>
          </v-img>
        </div>
      </div>
    </div>

    <div class="paragraph">
      <h4 class="paragraph-title">活動好禮</h4>
      <p>
        
          <span class="orange-text"><b>"限於活動現場"</b></span>
          完成參賽後，分享活動網站於個人IG或FB並追路基隆市文化觀光局臉書，經現場工作人員確認無
          誤後，將可獲得活動特製<span class="orange-text"
            ><b>「傘人家族精緻小物」</b></span
          >一個（二款随機赠送，一人限領取一個，每日限量，送完為止）。
        
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

    <div class="paragraph">
      <h4 class="paragraph-title">注意事項</h4>
      <ol class="paragraph-list">
        <li>基隆市政府 員工、評審及配偶及二親等以內血 姻 親 均 不得參與比賽 ，有違
        反而得獎者，撤銷其參賽與得獎資格。</li>
        <li>凡上傳作品完成報名參加本活動者，即視為已充分瞭解本辦法中各項條款，
        且願意完全遵守本活動之各項規定。</li>
        <li>參賽作品不得含有任何具挑釁、猥褻、毀謗、暴力、情色、種族歧視性或其
        他任何引人厭惡或不合宜之內容，主辦單位得自行判斷並 有權下架作品不另
        行通知 。</li>
        <li>主辦單位保留隨時修正、暫停、終止或解釋本活動之一切及 最 終權利（包括
        但不限於更換活動、提前終止或延長活動時間之 最 終決定權等事項），相關
        內容如有變動將於 比賽 活動 網 站 及 文化觀光局臉書 另行公告，不另行通知，
        若有任何異動，以本競賽活動官方網站最新公告為準。</li>
        <li>若得獎獎項價值累計超過新台幣 1,001 元 含 以上者而未滿 1 8 歲之中獎
        者，視同父母或監護人中獎，由父母或監護人代為領獎，並請附上得獎者及
        其代領人關係證明影本。</li>
        <li>本活動如有任何因電腦、網路、技術或其他不可歸責於主辦單位之事由，而
        使活動參加者所登錄之資料有所遺失、錯誤、無法辨識或毀損所導致資料無
        效之狀況，主辦單位不負任何法律責任，本活動參加者及獲採用者亦不得異
        議。如發生前述情形，主辦單位將不做任何通知。</li>
        <li>本活動參加者應聲明及保證其所填寫或提出之資料均為真實，且未冒用或盜
        用任何第三人之資料，如冒用或盜用任何第三人資料之法律責任由該參加者
        自行負擔，概與主辦單位無關，參賽者保證所有填寫或提出之資料均為真實
        自行負擔，概與主辦單位無關，參賽者保證所有填寫或提出之資料均為真實且正確，且未冒用或盜用任何第三人之資料。如有不實或不正確之情事，將且正確，且未冒用或盜用任何第三人之資料。如有不實或不正確之情事，將被被取消參加或得獎資格。如因此導致主辦單位無法通知其得獎訊息時，主辦取消參加或得獎資格。如因此導致主辦單位無法通知其得獎訊息時，主辦單位不負任何責任，且如有致損害於主辦單位或其他任何第三人，參賽者應單位不負任何責任，且如有致損害於主辦單位或其他任何第三人，參賽者應自負一切相關責任。自負一切相關責任。</li>
        <li>參賽者在參賽之同時，即代表參賽者同意且未違反與第三者之協議、保證參參賽者在參賽之同時，即代表參賽者同意且未違反與第三者之協議、保證參賽作品未侵犯其他任何個人或實體之版權、商標權、人格權、隱私／公開賽作品未侵犯其他任何個人或實體之版權、商標權、人格權、隱私／公開權、以及智慧財產權，且未有第三者對該參賽作品具備任何權利、所有權、權、以及智慧財產權，且未有第三者對該參賽作品具備任何權利、所有權、主張擁有或相關利益，亦未有違反其他法令情事。如有違反之虞，主辦單位主張擁有或相關利益，亦未有違反其他法令情事。如有違反之虞，主辦單位得立即移除相關內容，並取消其參賽與得獎資格，並追回一切獎項，且參賽得立即移除相關內容，並取消其參賽與得獎資格，並追回一切獎項，且參賽者須自負法律責任。者須自負法律責任。</li>
        <li>參賽者應尊重評審觀點，對於評審結果不得異議，經評審得獎確定之作品，參賽者應尊重評審觀點，對於評審結果不得異議，經評審得獎確定之作品，不得要求取消得獎資格。不得要求取消得獎資格。</li>
        <li>若主辦單位因使用參賽者所提供之圖文、照片及其他資料遭第三人請求、索若主辦單位因使用參賽者所提供之圖文、照片及其他資料遭第三人請求、索賠、提出民、刑事訴訟或主張任何法律上之權利，參賽者應賠償主辦單位因賠、提出民、刑事訴訟或主張任何法律上之權利，參賽者應賠償主辦單位因此所生之全部損失與費用。此所生之全部損失與費用。</li>
        <li>參賽者如因參加本活動或因活動獎項而遭受任何損失，主辦單位不負任何責參賽者如因參加本活動或因活動獎項而遭受任何損失，主辦單位不負任何責任。一旦得獎者領取獎品後，若有遺失或被竊，主辦單位不發給任何證明或任。一旦得獎者領取獎品後，若有遺失或被竊，主辦單位不發給任何證明或補償。補償。</li>
        <li>本辦法若有其他未盡事宜，悉依主辦單位相關規定或解釋辦理，主辦單位保本辦法若有其他未盡事宜，悉依主辦單位相關規定或解釋辦理，主辦單位保有有最最終之解釋權。終之解釋權。</li>
      </ol>
    </div>
  </v-sheet>
</template>

<script setup>
import { ref, watch } from 'vue';
import { paragraphs } from './activityContent';
import { WEBSITE_URL } from '@/utils/constants';

import PageTitle from '@/components/PageTitle.vue';
</script>

<style lang="scss" scoped>
.prize-medal {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: yellow;
  color: #ed5d15;
  font-weight: bold;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 2px rgba(#000, 0.3);
}
</style>
