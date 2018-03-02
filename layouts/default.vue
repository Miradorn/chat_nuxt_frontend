<template lang="pug">
  v-app
    v-toolbar(dark app color='primary')
      v-toolbar-side-icon(@click.native.stop="sidebar = !sidebar")
      v-toolbar-title
        router-link.accent--text(to='/') Chat
    v-navigation-drawer(app v-model='sidebar')
      user-list
    main
      v-content
        v-container(fluid)
          nuxt
</template>

<script>
import UserList from '~/components/layout/UserList'

export default {
  components: {
    'user-list': UserList
  },
  data () {
    return {
      sidebar: false
    }
  }
}
</script>
