<template>
    <div id="movielist">
        <ul>
            <v-container>
                <v-row justify="center">
                    <v-col v-for="movie in movies" :key="movie.id" cols="12" sm="6" md="4" lg="3">
                        <v-card class="mx-auto" outlined>
                            <v-img :src="getImageUrl(movie.poster_path)" aspect-ratio="1.5" class="movie-image"></v-img>
                            <v-card-title>{{ movie.title }}</v-card-title>
                            <v-card-subtitle>{{ movie.release_date }}</v-card-subtitle>
                            <v-card-text class="movie-overview">{{ movie.overview }}</v-card-text>
                            <v-card-actions>
                                <v-btn color="primary" text @click="viewDetails(movie.id)">Details</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </ul>
    </div>
</template>

<script>
// Bibliothèque et fichier
import axios from 'axios';
const config = require("/src/config.json")

export default {
    name: 'MovieList',
    data() {
        return {
            movies: [],
        };
    },
    mounted() {
        this.fetchMovieList();
    },
    methods: {
        getImageUrl(path) {
            return config.url.photo_path + `${path}`;
        },
        fetchMovieList() {
            console.log('Fetching movie list...');
            const options = {
                method: 'GET',
                url: config.url.movie_list + '&api_key=' + config.api_key,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + config.acces_token,
                }
            };

            axios
                .request(options)
                .then((response) => {
                    this.movies = response.data.results;
                })
                .catch((error) => {
                    console.error("Movielist : fetchmovielist" + error);
                });
        },
        viewDetails(movieId) {
            // Déplacement vers la vue MovieDetail
            this.$router.push({ name: 'moviedetail', params: { id: movieId } });
        }
    },
};
</script>

<style>
.mx-auto {
    height: 500px;
    background-color: lightgrey;
}

.mx-auto .movie-overview {
    max-height: 198px;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
