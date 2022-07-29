<template>
  <main>
      <Spacer />
      <Firma />
      <Spacersmall />
      <Articles />
      <Anfrage />
      <Spacersmall />
      <Person />
      <Spacersmall />
      <Map />
  </main>
</template>

<script>
import metaTags from "../mixins/metaTags";

export default {
head: {
    title: 'W.Natter | Messtechnik',
},
mixins: [metaTags],

  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('home')"
    }, 'de')
    return { page }
  }
}
</script>