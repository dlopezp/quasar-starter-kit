import router from '@/router'
import store from '@/store'
import { sync } from 'vuex-router-sync'

export default ({ app, Vue }) => {
  sync(store, router)
}
