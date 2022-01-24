<template>
  <div id="app">
    <layout-nav-bar v-if="showNavBar"/>

    <router-view/>
  </div>
</template>

<script>
import LayoutNavBar from './components/layout/LayoutNavBar'

export default {
  components: {
    LayoutNavBar
  },

  computed: {
    showNavBar: function () {
      return this.$route.name !== 'home' && this.$route.name !== 'login'
    }
  }
}
</script>

<style lang="scss">
</style>
