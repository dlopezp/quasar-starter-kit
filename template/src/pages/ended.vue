<template>
  <NotificationPage :texts="[ $t('state.paused') ]" />
</template>

<script>
import { NotificationPage } from 'playmo-quasar-plugin'

export default {
  name: 'PageEnded',
  components: {
    NotificationPage
  }
}
</script>
