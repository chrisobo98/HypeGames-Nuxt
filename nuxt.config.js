export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'HypeGames | Where Gamers Get Their Information',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  loading: { color: '#4fc08d'},
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    theme: {
      // default theme is light mode
      dark: true,
    }
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
  ],

  css: [
    'assets/main.css'
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },

  generate: {
    fallback: true
  }
}
