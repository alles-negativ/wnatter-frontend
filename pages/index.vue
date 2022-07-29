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
title: "Home",
mixins: [metaTags],

  async asyncData({ app, $kirby }) {
    const { json: page } = await $kirby.find({
      "query": "page('home')"
    }, 'de')
    return { page }
  }
}
</script>