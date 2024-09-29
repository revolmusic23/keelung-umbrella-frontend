<template>
  <v-footer
    class="bg-white py-4 px-md-12 d-flex footer"
  >
    <div class="logo-area">
      <v-img src="images/keelung-logo.png" class="footer-logo" max-width="200" />
      <v-img src="images/footer-logo.png" class="footer-logo" max-width="200" />
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
  max-height: 80px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    max-height: none;
  }

  .logo-area {
    width: 100%;
    display: flex;

    .footer-logo {
      margin: 0 20px;
      width: 25%;
    }

    @media screen and (max-width: 600px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .footer-logo {
        margin-bottom: 20px;
        width: 50%;
      }
      
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
