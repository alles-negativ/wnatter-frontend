<template>
    <nav>
        <div class="nav">
            <ul>
                <li>
                    <nuxt-link class="image image__home" :to="localePath('/')">
                        <p :class="$i18n.locale" class="text__menu">Home</p>
                    </nuxt-link>
                </li>
                <li class="item" v-for="element in menu_elements" :key="element.id">
                    <nuxt-link :to="localePath('/' + element.slug)">
                        <p :class="$i18n.locale" class="text__menu">{{ element.title }}</p>
                    </nuxt-link>
                </li>
            </ul>
        </div>    
    </nav>
</template>

<script>
export default {
    name: 'Navigation',

    data() {
        return {
            translation: {
                de: [],
                en: []
            }
        }
    },
    async fetch() {
        const { json: data_de } = await this.$kirby.find({
            "query": "site.children",
            "select": {
                "title": true,
                "slug": true,
                "isHomePage": true,
                "isErrorPage": true,
                "status": true
            }
        }, 'de')
        const { json: data_en } = await this.$kirby.find({
            "query": "site.children",
            "select": {
                "title": true,
                "slug": true,
                "isHomePage": true,
                "isErrorPage": true,
                "status": true
            }
        }, 'en')

        const translation = {
            de: data_de,
            en: data_en
        }
        this.translation = translation
    },    
    computed: {
        menu_elements: function() {
            let elements = []

            if (this.$i18n.locale == "de") {
                for (let i = 0; i < this.translation.de.length; i++) {
                    if (this.translation.de[i].status == "listed" && !this.translation.de[i].isHomePage) {    
                        elements.push(this.translation.de[i])
                    }
                }
            }
            else {
                for (let i = 0; i < this.translation.en.length; i++) {
                    if (this.translation.en[i].status == "listed" && !this.translation.en[i].isHomePage) {    
                        elements.push(this.translation.en[i])
                    }
                }
            }
            return elements
        }
    }
}
</script>
  
<style lang="scss" scoped>
    @use "Navigation";
</style>