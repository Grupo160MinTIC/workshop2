<template>
  <div id="app">

      <section id="team" class="container-fluid d-flex flex-row justify-content-around mt-5 mb-5" >
      <div class="card-deck w-25" v-for="(item,index) of team" :key="index">
        <team-card :member="item"></team-card>
      </div>
    </section>

  </div>
</template>

<script>

import TeamCard from './components/TeamCard.vue';

export default {
  name: 'App',
  components: {
    TeamCard
  },
  data() {
    return {
      title: "mensaje de pruebas",
      team: 
      [
        {
          codigo: 1,        
          nombre: "Camila Aparicio",
          descripcion: "Estudiante de Ingeniería de Sistemas como pasatiempo me gustan los juegos mentales, escuchar música y viajar.",
          rol: 'Desarrollo Frontend',
          imagen: "./camila.jpg",
        },
        {        
          codigo: 2,        
          nombre: "Carolina Motta",
          descripcion: "Ingeniera Mecatrónica que ama inventar, bailar, oir música, jugar basketball y viajar.",
          rol: 'Pruebas de software',
          imagen: "./carolina.jpg",
        },
        {        
          codigo: 3,        
          nombre: "Juan Saenz",
          descripcion: "Ingeniero Químico y estudiante de Ingeniería de Sistemas, me gusta leer, montar en bici, salir a caminar y comer.",
          rol: 'Desarrollo backend',
          imagen: "./juan.jpg",
        },
        {        
          codigo: 4,        
          nombre: "Lorena Valencia",
          descripcion: "Diseñadora Visual, estudiante de ADSI me encanta andar en bici, escalar, leer y viajar.",
          rol: 'Diseño visual / Desarrollo Frontend',
          imagen: "./lorena.jpg",
        },
      ]
    }
  }
}
</script>

