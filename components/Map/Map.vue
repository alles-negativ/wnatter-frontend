<template>
    <div class="contact" id="contact">
        <div class="contact__content">
            <h1 class="contact__content--title">Kontakt</h1>
            <div class="text__big" v-html="contact.contactadd"></div>
            <div class="inside__container">
                <p class="contact__content--button">{{ contact.contacttel }} ↗︎</p>
                <a class="contact__content--button" id="button" :href="'mailto:' + contact.contactmail">
                    {{ contact.contactmail }} ↗︎
                </a>
            </div>
            <div class="text__big" v-html="contact.contactlinks"></div>
        </div>
        <div class="map" v-html="contact.mapframe"></div>
    </div>
</template>

<script>
export default {
    name: 'Map',

    data() {
        return {
            contact: []
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('home')",
            "select": {
                "contactmail": true,
                "contacttel": true,
                "contactadd": true,
                "contactlinks": true,
                "mapframe": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.contact = data
    }
}
</script>

<style lang="scss" scoped>
  @use "Map";
</style>
