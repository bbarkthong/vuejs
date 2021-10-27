<template>
  <div id="app">
    <FixedTopBar />
    <div class="content-wrapper">
      <div class="container-fluid">
        <Breadcrumb />
        <router-view />
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import FixedTopBar from '@/components/navigation/FixedTopBar.vue'
import Footer from '@/components/navigation/Footer.vue'
import Breadcrumb from '@/components/common/breadcrumb.vue'

export default {
  components: {
    FixedTopBar,
    Footer,
    Breadcrumb
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Malgun Gothic', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  overflow-x: hidden;
  padding-top: 120px;
}
</style>
