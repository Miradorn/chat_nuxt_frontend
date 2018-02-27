import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

// You can also specify those components you are going to use for "a la carte" build:
// https://github.com/vuetifyjs/nuxt/blob/master/template/plugins/vuetify.js
// https://github.com/vuetifyjs/a-la-carte/blob/master/template/src/main.js

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.lighten1, // a color that is not in the material colors palette
    accent: colors.yellow.darken1,
    secondary: colors.teal.darken1,
    info: colors.blue.lighten4,
    warning: colors.amber.base,
    error: colors.deepOrange.accent4,
    success: colors.green.accent3
  }
})
