import VueI18n from 'vue-i18n'
import messages from 'src/i18n'
import Quasar from 'quasar'

export default ({ app, Vue }) => {
  const userLanguage = navigator.language

  Vue.use(VueI18n)

  // Set i18n instance on app
  app.i18n = new VueI18n({
    locale: userLanguage,
    fallbackLocale: 'es',
    messages
  })

  import(`quasar-framework/i18n/${userLanguage}`)
    .then(lang => {
      Quasar.i18n.set(lang.default)
    })
}
