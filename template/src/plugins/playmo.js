import playmo from 'playmo-quasar-plugin'
import store from '@/store'
import router from '@/router'

export default ({ Vue }) => {
  const promotionId = process.env.PROMOTION_ID

  Vue.use(
    playmo,
    promotionId,
    store,
    router
  )
}
