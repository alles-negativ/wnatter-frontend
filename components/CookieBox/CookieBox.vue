<template>
  <VueIfBot>
    <cookie-consent>
      <template slot="message">
        <div class="message__container">
          <p>Diese Seite verwendet Cookies</p>
        </div>
      </template>
      <template slot="button">
        <div class="button__container">
          <div class="accept__button">
            <p class="accept__text">Oke!</p>
          </div>
        </div>
      </template>
    </cookie-consent>
  </VueIfBot>
</template>

<script>
  import VueIfBot from 'vue-if-bot/dist/vue-if-bot.es'
  import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'

  export default {
    components: {
      VueIfBot,
      CookieConsent
    }
  }
</script>

<style lang="scss" scoped>
    @use "CookieBox";
</style>
