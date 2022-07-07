<template>
  <div class="person" id="person">
    <nuxt-img class="person__content--image" :src="person.images[3].url" :alt="person.images[3].alt" />
    <div class="person__content">
      <h1 class="person__content--title">{{ person.persontitle }}</h1>
      <div class="text__big" v-html="person.persontext"></div>
      <div class="person__content--space">
        <div class="space__item"><h1>↙</h1></div>
        <div class="space__item"></div>
        <div class="space__item"></div>
      </div>
    </div>
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
    @use "Person";
</style>