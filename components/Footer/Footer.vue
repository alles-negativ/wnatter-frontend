<template>
  <footer>
    <div class="container">
      <div class="container__top">
        <div class="contact">
          <p class="text__small">{{ footer.headeremail }}</p>
          <p class="text__small">{{ footer.headertel }}</p>
          <p class="text__small">{{ $t('open') }}<br>{{ footer.headeropening }}</p>
        </div>
        <div class="legal">
          <nuxt-link :to="localePath('/' + 'kontakt#impressum')">
            <p class="text__small">Impressum</p>
          </nuxt-link>
        </div>
      <div class="standorte">
        <p class="text__footer">{{ $t('locations') }}</p>
      </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'Footer',

    data() {
        return {
            footer: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('kontakt')",
            "select": {
                "headeremail": true,
                "headertel": true,
                "headeropening": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.footer = data
    }
}
</script>

<style lang="scss" scoped>
  @use "Footer";
</style>