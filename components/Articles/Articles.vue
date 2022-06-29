<template>
    <div class="container" id="angebot"> 
        <div class="container__content" v-for="article in articles" :key="article.id">
            <h1 class="container__content--title" v-html="article.contenttitle"></h1>
            <div class="container__content--text" v-html="article.contenttext"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Articles',

    data() {
        return {
            articles: [],
            numberOfColumns: 1
        }
    },
    async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('home').children",
            "select": {
                "contenttitle": true,
                "contenttext": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.articles = data
    },
}
</script>

<style lang="scss" scoped>
    @use "Articles";
</style>