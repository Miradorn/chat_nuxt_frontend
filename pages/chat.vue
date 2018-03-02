<template lang="pug">
v-list
  v-list-tile User {{userId}}
</template>
<script>
import messageSubscription from '~/apollo/subscriptions/messages'
import { mapState } from 'vuex'

export default {
  apollo: {
    $subscribe: {
      messages: {
        query: messageSubscription,
        variables () {
          return {
            recipient: this.userId
          }
        },
        result ({data}) {
          this.messages.push(data.messages)
        }
      }
    }
  },
  data: () => ({
    messages: []
  }),
  head: {
    title: 'Chat App'
  },
  computed: {
    ...mapState([
      'userId'
    ])
  },
  mounted () {

  }
}
</script>

<style scoped lang='stylus'>
</style>
