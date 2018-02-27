<template lang="pug">
  v-app
    v-toolbar(dark app color='primary')
      v-toolbar-side-icon(@click.native.stop="sidebar = !sidebar")
      v-toolbar-title Chat
    v-navigation-drawer(app v-model='sidebar')
      v-list
        v-list-tile(router nuxt to='/')
          v-list-tile-content
            v-list-tile-title Home
    main
      v-content
        v-container(fluid)
          nuxt
</template>

<script>
export default {
  data () {
    return {
      sidebar: false
    }
  }
}
</script>

<style scoped lang='stylus'>
</style>
