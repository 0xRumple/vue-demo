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
import appService from "../app.Service.js";

export default {
  components: {
    "app-student-card": StudentCard
  },
  data: {
    students: []
  },
  methods: {
    loadStudents() {
      this.students = appService.getStudents().then(data => {
        this.students = data;
      });

      //this.students = [
      //    { id: 1, name: "Yaser", passportNumber: "123456abc"},
      //    { id: 2, name: "Mohammed", passportNumber: "789123qwe"},
      //    { id: 3, name: "Osaid", passportNumber: "000157tyu"},
      //  ]

      //this.students.forEach(student => {
      //  console.log(student)
      //});
    }
  },
  created() {
    this.loadStudents();
  }
};
</script>

