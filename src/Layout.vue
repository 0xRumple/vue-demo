<template>
  <div id="app">
      <!--<img src="./assets/logo.png">-->
      <div>
      <app-header></app-header>
      <section class="main-section section">
        <div class="container content">
          <router-view></router-view>
        </div>
      </section>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue"
import AppFooter from "./components/AppFooter.vue"

export default {
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter
  },
  name: "Layout"
}
</script>

<style scoped lang="scss">
  @import "~bulma";

    .columns{
      flex-wrap: wrap
    }

  #app {
    /*
     text-align: center;
     margin-top: 60px;
    */
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
