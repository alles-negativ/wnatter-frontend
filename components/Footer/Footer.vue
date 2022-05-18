<template>
  <footer>
    <div class="container">
      <!-- <div class="container__top">
        <div class="contact">
          <p class="text__small">{{ footer.contactmail }}</p>
          <p class="text__small">{{ footer.contacttel }}</p>
          <div class="text__small" v-html="footer.contactadd"></div>
        </div>
      </div> -->
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
            "query": "page('home')",
            "select": {
                "contactmail": true,
                "contacttel": true,
                "contactadd": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.footer = data
    }
}
</script>

<style lang="scss" scoped>
  @use "Footer";
</style>