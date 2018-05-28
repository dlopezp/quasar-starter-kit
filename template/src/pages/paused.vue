<template>
  <NotificationPage :texts="[ $t('state.paused') ]" />
</template>

<script>
import { NotificationPage } from 'playmo-quasar-plugin'

export default {
  name: 'PagePaused',
  components: {
    NotificationPage
  }
}
</script>
