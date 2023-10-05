<template>
    <main>
        <Impressum />
    </main>
  </template>
  
  <script>
  import metaTags from "../mixins/metaTags";
  
  export default {
  head: {
      title: 'W.Natter | Messtechnik - Impressum',
  },
  layout: 'impressum',
  mixins: [metaTags],
  
    async asyncData({ app, $kirby }) {
      const { json: page } = await $kirby.find({
        "query": "page('home')"
      }, 'de')
      return { page }
    }
  }
  </script>