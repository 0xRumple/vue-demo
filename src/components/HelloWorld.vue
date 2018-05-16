<template>
  <div>
    <h1>Hey there</h1>
    <template>
      <div class="columns">
        <div class="column" v-for="student in students">
          <div class="card">
            <div class="card-content">
              {{ student.name }}
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
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
@import '~bulma';
</style>
