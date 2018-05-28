<template>
  <NotificationPage :texts="[ $t('state.draft') ]" />
</template>

<script>
import { NotificationPage } from 'playmo-quasar-plugin'

export default {
  name: 'PageDraft',
  components: {
    NotificationPage
  }
}
</script>
