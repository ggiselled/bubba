<template>
    <Layout :titulo="tituloPagina">
      <h2>{{ titulo }}</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="campo1">Campo 1:</label>
          <input v-model="campo1" type="text" id="campo1" required />
        </div>
  
        <div>
          <label for="campo2">Campo 2:</label>
          <input v-model="campo2" type="text" id="campo2" required />
        </div>
  
        <div>
          <label for="campo3">Campo 3:</label>
          <input v-model="campo3" type="text" id="campo3" required />
        </div>
  
        <div>
          <label>Puntuación:</label>
          <star-rating v-model="puntuacion" :star-size="25" :increment="0.5" />
        </div>
  
        <button type="submit">Enviar</button>
      </form>
    </Layout>
  </template>
  
  <script>
    import Layout from '../components/Layout.vue';

  
    export default {
        data() {
            return {
                titulo: 'Formulario de Puntuación',
                campo1: '',
                campo2: '',
                campo3: '',
                puntuacion: 0,
                tituloPagina: 'Encuesta',
            };
        },
        methods: {
            submitForm() {
                const formData = {
                    campo1: this.campo1,
                    campo2: this.campo2,
                    campo3: this.campo3,
                    puntuacion: this.puntuacion,
                };
                console.log(formData);
            },
        },
        components: { Layout }
    };
  </script>
  