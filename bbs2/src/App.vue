<template>
  <FixedTopBar/>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->

  <div class="content-wrapper">
    <div class="container-fluid">
      <Breadcrumb />
      <router-view />

      <!-- Icon Cards-->
      <!-- <div class="row">
          
      </div> -->
    </div>
  </div>

  <Footer />

    <!-- Scroll to Top Button-->
    <!-- <a class="scroll-to-top rounded" href="#page-top">
      <i class="fa fa-angle-up"></i>
    </a> -->

    <!-- Logout Modal-->
    <!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
          <div class="modal-footer">
            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
            <a class="btn btn-primary" href="login.html">Logout</a>
          </div>
        </div>
      </div>
    </div> -->
</template>

<script>
// @ is an alias to /src
import { Options, Vue } from 'vue-class-component';
import FixedTopBar from '@/components/navigation/FixedTopBar.vue'; 
import Footer from '@/components/navigation/Footer.vue'; 
import Breadcrumb from '@/components/common/breadcrumb.vue';
import Articles from '@/components/common/articles.vue';

export default {
  components: {
    FixedTopBar,
    Footer,
    Breadcrumb,
    Articles,
  },
  data() {
    return {
    }
  }
}
</script>

<style>
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
