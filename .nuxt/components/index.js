export { default as Anfrage } from '../../components/Anfrage/Anfrage.vue'
export { default as Articles } from '../../components/Articles/Articles.vue'
export { default as CookieBox } from '../../components/CookieBox/CookieBox.vue'
export { default as Firma } from '../../components/Firma/Firma.vue'
export { default as Footer } from '../../components/Footer/Footer.vue'
export { default as Header } from '../../components/Header/Header.vue'
export { default as Map } from '../../components/Map/Map.vue'
export { default as Navigation } from '../../components/Navigation/Navigation.vue'
export { default as Person } from '../../components/Person/Person.vue'
export { default as Spacer } from '../../components/Spacer/Spacer.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
