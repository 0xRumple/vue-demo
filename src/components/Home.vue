<template>
  <div>
    <app-header></app-header>
    <section>
      <div class="columns">
        <div class="column" v-for="student in students">
          <div class="card">
            <div class="card-content">
              {{ student.name }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <app-footer></app-footer>    
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue"
import AppFooter from "./AppFooter.vue"

export default {
  components: {
    "app-header": AppHeader,
    "app-footer": AppFooter
  },
  data(){
    return {
      students: [
        { id: 1, name: "Yaser", passportNumber: "123456abc"},
        { id: 2, name: "Mohammed", passportNumber: "789123qwe"},
        { id: 3, name: "Osaid", passportNumber: "000157tyu"},
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "~bulma";
</style>
