<template>
  <main>
      <Articles />
  </main>
</template>

<script>
import metaTags from "../mixins/metaTags";

export default {
  layout: 'home',

  mixins: [metaTags],

  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('home')"
    }, app.i18n.locale)
    return { page }
  }
}
</script>