// ATTENTION: remove "_" in the name before deployment
// Temporarily disabled for further development

<template>
    <div class="error__wrapper">
        <p>{{ error.headertext }}</p>
    </div>
</template>

<style>
.error__wrapper {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 95%;
    height: 100%;
    z-index: 998;
    top: 0;
}
</style>

<script>

export default {
    name: 'error',

    data() {
            return {
                error: []
            }
        },

  async fetch() {
        const { json: data } = await this.$kirby.find({
            "query": "page('error')",
            "select": {
                "headertext": true,
            }
        }, this.$nuxt.context.app.i18n.locale)
        this.error = data
    }, 
}
</script>