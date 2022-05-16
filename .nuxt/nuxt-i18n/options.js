

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"fallbackLocale":"de","messages":{"de":{"locations":"Standorte","contact":"Kontakt","open":"Öffnungszeiten","accept":"Oke! 👍","readmore":"mehr","cookie":"Diese Website verwendet Cookies"},"en":{"locations":"Locations","contact":"Contact","open":"Opening Hours","accept":"Oke! 👍","readmore":"read more","cookie":"This website uses cookies"}}},
  vueI18nLoader: false,
  locales: [{"code":"de","name":"Deutsch"},{"code":"en","name":"English"}],
  defaultLocale: "de",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"de","name":"Deutsch"},{"code":"en","name":"English"}],
  localeCodes: ["de","en"],
}

export const localeMessages = {}
