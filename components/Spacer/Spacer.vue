<template>
  <div class="spacer">
      <div class="spacer__item"><h1>↓</h1></div>
      <div class="spacer__item"></div>
      <div class="spacer__item"></div>
  </div>
</template>

<script>

export default {
  name: 'Person',

  data() {
    return {
      person: [],
    }
  },
  async fetch() {
    const { json: data } = await this.$kirby.find({
        "query": "page('home')",
          "select": {
              "persontitle": true,
              "persontext": true,
              "personimage": true,
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
    this.person = data
  },
}
</script>

<style lang="scss" scoped>
    @use "Spacer";
</style>