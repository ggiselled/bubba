<template>
    <Layout :titulo="tituloPagina">
      <div class="pagina3-content">
        <h2>{{ titulo }}</h2>
        <DynamicForm
          :firstName="{ fieldName: 'nombre', label: 'Nombre', placeholder: 'Nombre' }"
          :lastName="{ fieldName: 'apellido', label: 'Apellido', placeholder: 'Apellido' }"
          :email="{ fieldName: 'email', label: 'Email', type: 'email', placeholder: 'Email' }"
        />
        
      </div>
      <template #footer>
        <p class="footer">MUCHAS GRACIAS</p>
      </template>
    </Layout>
  </template>
  
  <script>
    import Layout from '../components/Layout.vue';
    import DynamicForm from '../components/EncuestaPage/DynamicForm.vue';
  
    export default {
        data() {
            return {
                titulo: 'Deja tu calificación y obten un 15% de descuento en tu primera compra',
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
        components: { Layout, DynamicForm }
    };
  </script>
  
  <style scoped>
  h2 {
    font-family: 'Gotham Rounded Bold Regular', sans-serif;
    font-size: 1.4rem;
    font-weight:lighter;
    text-align: center;
  }

  .pagina3-content {
    display: flex;
    flex-direction: column;
    width: 50%; 
    margin: 0 auto; 
  }
  </style>