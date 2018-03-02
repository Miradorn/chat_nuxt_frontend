<template lang="pug">
v-form(v-model='valid' @submit.prevent="submit")
  v-text-field(
    label='username'
    v-model='username'
    :rules='usernameRules'
    required)

  v-btn(
    type='submit'
    :disabled='!valid') Login
</template>
<script>
import login from '~/apollo/mutations/login'
import { mapMutations } from 'vuex'

export default {
  data: () => ({
    valid: true,
    username: '',
    usernameRules: [
      v => !!v || 'Name is required'
    ]
  }),
  head: {
    title: 'Chat App'
  },
  methods: {
    submit () {
      this.$apollo.mutate({
        mutation: login,
        variables: {
          name: this.username
        }
      }).then(({data}) => {
        this.setUser(data.login.id)
        this.$router.push('chat')
      })
    },
    ...mapMutations([
      'setUser'
    ])
  }
}
</script>

<style scoped lang='stylus'>
</style>
