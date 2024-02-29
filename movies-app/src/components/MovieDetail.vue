<template>
    <div id="moviedetail">
        <v-container v-if="selectedMovie">
            <v-row justify="center">
                <v-col lg="9">
                    <v-card class=" mx-auto2" outlined>
                        <v-img :src="getImageUrl(selectedMovie.poster_path)" aspect-ratio="1.5" class="movie-image"></v-img>
                        <v-card-title>{{ selectedMovie.title }}</v-card-title>
                        <v-card-subtitle>{{ selectedMovie.release_date }}</v-card-subtitle>
                        <v-card-text class="movie-overview">{{ selectedMovie.overview }}</v-card-text>
                        <v-chip-group>
                            <v-chip v-for="genre in selectedMovie.genres" :key="genre.id">{{ genre.name }}</v-chip>
                        </v-chip-group>
                        <v-chip-group>
                            <v-chip v-for="language in selectedMovie.spoken_languages" :key="language.iso_639_1">{{
                                language.name }}</v-chip>
                        </v-chip-group>
                        <v-rating v-model="selectedMovie.vote_average" precision="0.001" max="10" disabled></v-rating>
                        <v-card-actions>
                            <v-btn v-on:click="closeDetail()">Fermer</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container v-else>
            <p>Aucun film sélectionné</p>
        </v-container>
    </div>
</template>
  
<script>
import axios from 'axios';
const config = require("/src/config.json")

export default {
    name: 'moviedetail',
    props: {
        movieId: Number,
    },
    data() {
        return {
            selectedMovie: {},
            movieId: this.$route.params.id
        };
    },
    methods: {
        getImageUrl(path) {
            return `https://image.tmdb.org/t/p/w300_and_h450_bestv2${path}`;
        },
        fetchMovieDetail() {
            const options = {
                method: 'GET',
                url: config.url.movie_detail + this.movieId + "?api_key=" + config.api_key,
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer ' + config.access_token,
                },
            };

            axios
                .request(options)
                .then((response) => {
                    this.selectedMovie = response.data;
                })
                .catch((error) => {
                    console.error("Moviedetail : fetchmovielist" + error);
                });

        },
        closeDetail() {
            this.$router.go(-1);
        },
    },
    mounted() {
        this.fetchMovieDetail()
    }
}
</script>
  
<style>
.mx-auto2 {
    height: 1000px;
    background-color: lightblue;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mx-auto .movie-overview {
    max-height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
}

.mx-auto2 .movie-title {
    font-size: 1.5em;
    margin-bottom: 5px;
}

.mx-auto2 .movie-genre {
    margin-left: 10px;
}

.mx-auto2 .v-rating {
    margin-top: 10px;

}

.mx-auto2 .v-btn {
    margin-top: 10px;
}
</style>
