<template>
    <div class="contact" id="contact">
        <div class="contact__content">
            <div class="contact__content--text" v-html="contact.contactadd"></div>
            <p class="contact__content--text">{{ contact.contacttel }}</p>
            <a class="contact__content--text" :href="'mailto:' + contact.contactmail">
                <p>{{ contact.contactmail }}</p>
            </a>
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
