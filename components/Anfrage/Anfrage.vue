<template>
<div class="angebot" id="angebot">
  <div class="spacer__item">
    <h1>-></h1>
  </div>
  <div class="angebot__content">
    <h1 class="angebot__content--title">Anfragen</h1>
    <div class="angebot__content--text" v-html="anfrage.anfragetext"></div>
    <a href="mailto:info@wnatter.ch?cc=&amp;bcc=&amp;subject=Anfrage%20Messtechnik%20und%20Beratung&amp;body=Guten%20Tag%20Herr%20Natter%0A%0AAnfrage%20Typ%3A%20%5B%20%5D%20Beratung%20%2F%20%5B%20%5D%20Messtechnik%20%2F%20%5B%20%5D%20Sonstiges%0A%0AKontaktdaten%0AFirma%3A%0AAdresse%3A%0AName%20Ansprechsperson%3A%0ATelefon%3A%0AE-Mail%3A%0ABemerkung%3A%0A%0AFreundliche%20Gr%C3%BCsse" 
        class="angebot__content--button">
        Anfrageformular ↗︎
  </a>
  </div>
</div>
</template>

<script>

export default {
  name: 'Anfrage',

  data() {
    return {
      anfrage: [],
    }
  },
  async fetch() {
    const { json: data } = await this.$kirby.find({
        "query": "page('home')",
          "select": {
              "anfragetext": true,
            }
    }, this.$nuxt.context.app.i18n.locale)
    this.anfrage = data
  },
}
</script>

<style lang="scss" scoped>
    @use "Anfrage";
</style>