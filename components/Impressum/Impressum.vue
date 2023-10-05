<template>
<div class="firma" id="firma">
  <a class="impressum__link" href="/"> <- Zurück zu Home</a>
  <div class="firma__content">
    <h1 class="firma__content--title">Impressum</h1>
    <div class="text__big" v-html="impressum.impressumtext"></div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Impressum',

  data() {
    return {
      impressum: [],
    }
  },
  async fetch() {
    const { json: data } = await this.$kirby.find({
        "query": "page('home')",
          "select": {
              "impressumtitel": true,
              "impressumtext": true,
            }
    }, this.$nuxt.context.app.i18n.locale)
    this.impressum = data
  },
}
</script>

<style lang="scss" scoped>
    @use "Impressum";
</style>