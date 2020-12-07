<template>
  <div class="card">
        <img v-bind:src="member.imagen" class="card-img-top" alt="images">
        <div class="card-body">
            <h5 class="card-title">{{member.nombre}}</h5>
            <p class="card-text">{{member.descripcion}}</p>
            <p class="card-text">{{member.rol}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "TeamCard",
        // props: ['member']
        props: 
  {
      "member": Object
      },
    }
</script>

<style scoped>

</style>
