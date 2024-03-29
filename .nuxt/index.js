import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_plugin_a7852246 from 'nuxt_plugin_plugin_a7852246' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_moment_29fbfaf6 from 'nuxt_plugin_moment_29fbfaf6' // Source: ./moment.js (mode: 'all')
import nuxt_plugin_pluginutils_bb0135b0 from 'nuxt_plugin_pluginutils_bb0135b0' // Source: ./nuxt-i18n/plugin.utils.js (mode: 'all')
import nuxt_plugin_pluginrouting_93896f1a from 'nuxt_plugin_pluginrouting_93896f1a' // Source: ./nuxt-i18n/plugin.routing.js (mode: 'all')
import nuxt_plugin_pluginmain_be8ea048 from 'nuxt_plugin_pluginmain_be8ea048' // Source: ./nuxt-i18n/plugin.main.js (mode: 'all')
import nuxt_plugin_axios_445d851a from 'nuxt_plugin_axios_445d851a' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_image_6e4f8b24 from 'nuxt_plugin_image_6e4f8b24' // Source: ./image.js (mode: 'all')
import nuxt_plugin_nuxtkirbykql_508c1b1e from 'nuxt_plugin_nuxtkirbykql_508c1b1e' // Source: ../plugins/nuxt-kirby-kql (mode: 'all')
import nuxt_plugin_previewclient_5fee6a20 from 'nuxt_plugin_previewclient_5fee6a20' // Source: ../plugins/preview.client.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt
    if (process.client && !globalNuxt && typeof window !== 'undefined') {
      return window.$nuxt
    }
    return globalNuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"W.Natter | Messtechnik","htmlAttrs":{"lang":"de"},"meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Die Firma W. Natter, Lufthygiene, Messtechnik, Beratungen bietet Dienstleistungen im Umweltbereich Lufthygiene an."},{"hid":"author","name":"author","content":"alles-negativ.ch"},{"hid":"keywords","name":"keywords","content":"W.Natter, Natter, Lufthygiene, Messtechnik, Beratung, Dienstleistungen, Umwelt, Heizungen"},{"hid":"theme-color","name":"theme-color","content":"#ffffff"},{"hid":"robots","name":"robots","content":"all"},{"hid":"referrer","name":"referrer","content":"no-referrer-when-downgrade"},{"hid":"og:locale","property":"og:locale","content":"de_CH"},{"hid":"og:locale:alternate","property":"og:locale:alternate","content":"en_GB"},{"hid":"og:site_name","property":"og:site_name","content":"W.Natter | Messtechnik"},{"hid":"og:type","property":"og:type","content":"website"},{"hid":"og:title","property":"og:title","content":"W.Natter | Messtechnik"},{"hid":"og:description","property":"og:description","content":"Die Firma W. Natter, Lufthygiene, Messtechnik, Beratungen bietet Dienstleistungen im Umweltbereich Lufthygiene an."},{"hid":"og:image","property":"og:image","content":"https:\u002F\u002Fwnatter\u002Fwnatter-static-image.jpg"},{"hid":"og:image:width","property":"og:image:width","content":"2121"},{"hid":"og:image:height","property":"og:image:height","content":"1414"},{"hid":"og:image:alt","property":"og:image:alt","content":"Messgeräte im Einsatz"},{"name":"format-detection","content":"telephone=no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"script":[{"src":"\u002Fscript.js"}],"style":[]},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_a7852246 === 'function') {
    await nuxt_plugin_plugin_a7852246(app.context, inject)
  }

  if (typeof nuxt_plugin_moment_29fbfaf6 === 'function') {
    await nuxt_plugin_moment_29fbfaf6(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginutils_bb0135b0 === 'function') {
    await nuxt_plugin_pluginutils_bb0135b0(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginrouting_93896f1a === 'function') {
    await nuxt_plugin_pluginrouting_93896f1a(app.context, inject)
  }

  if (typeof nuxt_plugin_pluginmain_be8ea048 === 'function') {
    await nuxt_plugin_pluginmain_be8ea048(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_445d851a === 'function') {
    await nuxt_plugin_axios_445d851a(app.context, inject)
  }

  if (typeof nuxt_plugin_image_6e4f8b24 === 'function') {
    await nuxt_plugin_image_6e4f8b24(app.context, inject)
  }

  if (typeof nuxt_plugin_nuxtkirbykql_508c1b1e === 'function') {
    await nuxt_plugin_nuxtkirbykql_508c1b1e(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_previewclient_5fee6a20 === 'function') {
    await nuxt_plugin_previewclient_5fee6a20(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // Wait for async component to be resolved first
  await new Promise((resolve, reject) => {
    // Ignore 404s rather than blindly replacing URL in browser
    if (process.client) {
      const { route } = router.resolve(app.context.route.fullPath)
      if (!route.matched.length) {
        return resolve()
      }
    }
    router.replace(app.context.route.fullPath, resolve, (err) => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err)
      if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

      // navigated to a different route in router guard
      const unregister = router.afterEach(async (to, from) => {
        if (process.server && ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath
        }
        app.context.route = await getRouteData(to)
        app.context.params = to.params || {}
        app.context.query = to.query || {}
        unregister()
        resolve()
      })
    })
  })

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
