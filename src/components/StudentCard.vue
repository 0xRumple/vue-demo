<template>
    <div class="card">
        <div class="card-content">
          {{ student.name }}
        </div>
    </div>
</template>

<script>
    export default{
        props: ['student']
    }
</script>
