<template>
  <main id="content">
    <div class="grid">
      <h1>{{ page.content.contenttitle }}</h1>
      <div v-html="page.content.contenttext"></div>
    </div>
    <SubpagePosts />
  </main>
</template>


<script>
import metaTags from "../mixins/metaTags";

export default {
  mixins: [metaTags],
  
  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('subpage')"
    }, app.i18n.locale)
    return { page }
  } 
}
</script>
