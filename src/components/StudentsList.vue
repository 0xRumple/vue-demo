<template>
<section>
      <div class="columns">
        <div class="column" v-for="student in students">
          <app-student-card :student="student"></app-student-card>
        </div>
      </div>
    </section>
</template>

<script>
    import StudentCard from "./StudentCard.vue";

    export default{
        components: {
            'app-student-card': StudentCard
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

<style scoped lang="scss">
  @import "~bulma";
</style>
