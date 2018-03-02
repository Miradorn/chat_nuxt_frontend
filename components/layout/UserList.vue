<template lang='pug'>
v-list
  v-list-tile(router nuxt v-for='user in users' :key='user.id' :to="`user/${user.id}`")
    v-list-tile-title {{ user.name }}
</template>
<script>
import users from '~/apollo/queries/users'
import userJoined from '~/apollo/subscriptions/userJoined'

export default {
  data () {
    return {
      users: []
    }
  },
  apollo: {
    users: {
      query: users,
      prefetch: true,
      subscribeToMore: {
        document: userJoined,
        updateQuery: (previousResult, { subscriptionData }) => {
          return {
            users: [
              ...previousResult.users,
              subscriptionData.data.userJoined
            ]
          }
        }
      }
    }
  }
}
</script>
