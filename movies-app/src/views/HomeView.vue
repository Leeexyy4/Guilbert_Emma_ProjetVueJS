<template>
  <div>
    <p>Guilbert Emma - Projet Vue JS : Films</p>
    <MovieSearch />
    <MovieList />
  </div>
</template>

<script>
// Importez les composants nécessaires depuis le dossier components
import MovieList from '@/components/MovieList.vue';
import MovieSearch from '@/components/MovieSearch.vue';

export default {
  name: 'HomeView',
  components: {
    MovieSearch,
    MovieList,
  },
}
</script>
