<template>
    <div class="container"> 
        <ul v-for="columns in sortedArticles" :key="columns.id" class="container__columns">
            <li v-for="article in columns" :key="article.id" class="content">
                <nuxt-img :src="article.images[0].url" :alt="article.images[0].alt" />
                <h3>{{ article.title }}</h3>
                <p class="text__big">{{ $moment(article.date).format("DD.MM.YYYY") }}</p>
                <div class="text" v-html="article.contenttext"></div>
            </li>
        </ul>
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
                "title": true,
                "date": true,
                "contenttext": true,
                "contentimage": true,
                "images": {
                    "query": 'page.files',
                    "select": {
                        "name": true,
                        "url": true,
                        "alt": true
                    }
                }
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.articles = data
    },

    methods: {
        getScreen: function(){
            if (process.client) {
                if (window.innerWidth < 759.98) {
                    this.numberOfColumns = 1
                }
                else if(window.innerWidth > 1439.98 ) {
                    this.numberOfColumns = 3
                }
                else {
                    this.numberOfColumns = 2
                }
           } 
        }
    },

    computed: {
        sortedArticles(){
            var output = []
            var input = this.articles.sort(function(a,b){
                return new Date(b.date) - new Date(a.date);
            })
            for (var i=0; i<this.numberOfColumns; i++) {
                output[i] = []
                for (var j=i; j<input.length; j=j+this.numberOfColumns) {
                    output[i].push(input[j]) 
                }
            }
            return output
        }
    },

    mounted() {
        this.getScreen()
        window.addEventListener('resize', () => {
        this.getScreen()
    })
  },
}
</script>

<style lang="scss" scoped>
    @use "Articles";
</style>