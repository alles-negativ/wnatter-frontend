<template>
  <div>
    <div class="switch">
      <nuxt-link class="text__menu" v-for="locale in $nuxt.$i18n.locales" :key="locale.code" :to="switchLocalePath(locale.code)">
          <p>{{ locale.code }}</p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    availableLocales () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
    }
  }
}
</script>

<style lang="scss" scoped>
    @use "LanguageInput";
</style>