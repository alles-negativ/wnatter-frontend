<template>
    <div class="accordion__wrapper">
        <div v-for="element in data" :key="element.id">
            <Accordion>
             <template v-slot:title>
                <h3 class="title"> {{ element.title }} </h3>
              </template>
              <template v-slot:body>
                <div class="text__big" slot="introtext" v-html="element.introtext"></div>
                <div class="text" slot="contenttext" v-html="element.contenttext"></div>
                <div class="image" slot="image">
                    <nuxt-img class="image image__img" :src="element.images[0].url" :alt="element.images[0].alt" />
                </div>
              </template>
          </Accordion>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SubpagePosts',

    data() {
        return {
            data: [],
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('subpage').children",
            "select": {
                "title": true,
                "introtext": true,
                "contenttext": true,
                "contentimage": true,
                "images": {
                    "query": "page.files",
                    "select": {
                        "name": true,
                        "url": true,
                        "alt": true
                    }
                }
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.data = data
    },
}
</script>

<style lang="scss" scoped>
    @use "SubpagePosts";
</style>