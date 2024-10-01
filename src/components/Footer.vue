<template>
  <v-footer
    class="bg-white py-4 px-md-12 d-flex footer"
  >
    <div class="logo-area">
      <div class="footer-logo">
        <h5>指導單位</h5>
        <v-img src="images/keelung-logo.png" max-width="200" />
      </div>
      <div class="footer-logo">
        <h5>主辦單位</h5>
        <v-img src="images/footer-logo.png" max-width="200" />
      </div>
      <div class="footer-logo">
        <h5>執行單位</h5>
        <v-img src="images/wheel-logo.png" max-width="200" />
      </div>
    </div>
    <div class="copyright">
      <h5>基隆市文化觀光局版權所有 All rights reserved.</h5>
    </div>
  </v-footer>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 120px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    max-height: 367px;
  }

  .logo-area {
    width: 100%;
    display: flex;

    .footer-logo {
      margin: 0 20px;
      width: 25%;

      @media screen and (max-width: 600px) {
        margin-bottom: 20px;
        width: 50%;
        margin-bottom: 30px;
      }

      h5 {
        color: #555;
        font-family: 'Noto Sans TC', sans-serif;
        font-weight: 400;
        margin-bottom: 10px;

        @media screen and (max-width: 600px) {
          text-align: center;
        }
      }
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .copyright {
    width: 100%;
    color: #777;
    text-align: right;

    @media screen and (max-width: 600px) {
      text-align: center;
    }
  }
}
</style>
