<template>
<div class="firma" id="firma">
  <div class="firma__content">
    <h1 class="firma__content--title">{{ firma.firmatitle }}</h1>
    <div class="firma__content--text" v-html="firma.firmatext"></div>
  </div>
  <nuxt-img class="firma__content--image" :src="firma.images[0].url" :alt="firma.images[0].alt" />
</div>
</template>

<script>

export default {
  name: 'Firma',

  data() {
    return {
      firma: [],
    }
  },
  async fetch() {
    const { json: data } = await this.$kirby.find({
        "query": "page('home')",
          "select": {
              "firmatitle": true,
              "firmatext": true,
              "firmaimage": true,
              "images": {
                "query": "page.files",
                "select": {
                  "name": true,
                  "url": true,
                  "alt": true
                }
              }
            }
    }, this.$nuxt.context.app.i18n.locale)
    this.firma = data
  },
}
</script>

<style lang="scss" scoped>
    @use "Firma";
</style>