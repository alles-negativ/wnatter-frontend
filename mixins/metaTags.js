/**
 * If children of a component contains relative HTML links
 *  the mixins handles these as routes.
 */
export default {
    head() {
        return {
            titleTemplate: '%s - ' + this.page.content.title,
            meta: this.meta
        }
    },
    computed: {
        meta() {
            const output = []
            if (this.page.content.meta_description || this.page.content.meta_description != '') {
                output.push({
                    hid: 'description',
                    name: 'description',
                    content: this.page.content.meta_description,
                })
            }
            if (this.page.content.meta_keywords || this.page.content.meta_keywords != '') {
                output.push({
                    hid: 'keywords',
                    name: 'keywords',
                    content: this.page.content.meta_keywords,
                })
            }
            return output
        }
    }
};