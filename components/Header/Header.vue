<template>
<div class="header">
  <div class="header__content">
      <div class="header__content--top">
        <div class="logo__container">
          <nuxt-img class="header__content--logo" :src="header.images[2].url" :alt="header.images[2].alt" />
        </div>
        <div class="spacer">
        </div>
        <div class="spacer">
          <h1>↓</h1>  
        </div>
      </div>
      <nuxt-img class="header__content--image" :src="header.images[0].url" :alt="header.images[0].alt" />
  </div>
</div>
</template>

<script>

export default {
  name: 'Header',

  data() {
    return {
      header: [],
    }
  },
  async fetch() {
    const { json: data } = await this.$kirby.find({
        "query": "page('home')",
          "select": {
              "headerimage": true,
              "logoimage": true,
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
    this.header = data
  },
}
</script>

<style lang="scss" scoped>
    @use "Header";
</style>