<template>
  <main id="content">
    <h3>{{ page.content.contenttitle }}</h3>
    <div v-html="page.content.contenttext"></div>
    <p class="text">{{ page.content.headeropening }}</p>
    <a class="text text__big" href="mailto:hello@alles-negativ-fake.ch">{{ page.content.headeremail }}</a>
    <a class="text text__big" href="tel:+4733378901">{{ page.content.headertel }}</a>
  </main>
</template>

<script>
import metaTags from "../mixins/metaTags";

export default {
  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('contact')"
    }, app.i18n.locale)
    return { page }
  }
}
</script>