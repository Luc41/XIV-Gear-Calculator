import Vue from 'vue'

import './styles/quasar.scss'
import lang from 'quasar/lang/zh-hans.js'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/icon-set/mdi-v5'
import 'quasar/icon-set/fontawesome-v5'
import { Quasar, Notify } from 'quasar'

Vue.use(Quasar, {
  config: {},
  components: { /* not needed if importStrategy is not 'manual' */ },
  directives: { /* not needed if importStrategy is not 'manual' */ },
  plugins: {
    Notify
  },
  lang: lang
})
