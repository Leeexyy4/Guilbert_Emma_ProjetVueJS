<template>
  <div>
    <p> PAGE DES DETAILS DU FILM</p>
    <MovieDetail />
  </div>
</template>

<script>
// Importez les composants nécessaires depuis le dossier components
import MovieDetail from '@/components/MovieDetail.vue';

export default {
  name: 'moviedetail',
  components: {
    // Déclarez les composants importés pour les utiliser dans votre template
    MovieDetail,
  },
}
</script>
