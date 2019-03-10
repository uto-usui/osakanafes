const path = require('path')
const StylelintPlugin = require('stylelint-webpack-plugin')

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: 'osakana fes - soratobiwo presents',
    htmlAttrs: {
      lang: 'ja',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          '2019年7月14日(日)に全50組の出演を予定している大阪・堀江 「お魚ロックフェスティバル」を開催します。soratobiwoが2019年から立ち上げた堀江を舞台にした5会場ライブサーキット！',
      },
    ],
    link: [
      { rel: 'shortcut icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon-precomposed', href: '/apple-touch-icon.png' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat:400,700',
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    // '~plugins/vue-lazyload.client.js',
    // '~plugins/console.js',
    // '~plugins/scrollTo.js',
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    ['@nuxtjs/google-gtag', { id: 'UA-135906193-1' }],
  ],

  /**
   * page transition
   */
  transition: {
    css: false,
    enter(el, done) {
      done()
    },
    leave(el, done) {
      this.$store.getters.getMenuOpen &&
        this.$store.dispatch('setMenuOpen', false)
      done()
    },
  },

  styleResources: {
    scss: [
      '~/assets/sass/foundation/variable/_variable.scss',
      '~/assets/sass/foundation/mixin/_mixin.scss',
    ],
  },

  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    splitChunks: {
      layouts: true,
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
        config.plugins.push(
          new StylelintPlugin({
            files: ['**/*.vue'],
          }),
        )
      }
      // import alias
      config.resolve.alias.Sass = path.resolve(__dirname, './assets/sass/')
      config.resolve.alias.Js = path.resolve(__dirname, './assets/js/')
      config.resolve.alias.Images = path.resolve(__dirname, './assets/images/')
      config.resolve.alias['~'] = path.resolve(__dirname)
      config.resolve.alias['@'] = path.resolve(__dirname)
    },
  },

  generate: {},
}
