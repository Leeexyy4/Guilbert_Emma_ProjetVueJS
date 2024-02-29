<template>
    <div id="app">
        <ul>
            <input type="text" placeholder="Search movies..." />

            <!-- Afficher la liste des films filtrés -->
            <li v-for="movie in movies" :key="movie.id">{{ movie.title }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
const config = require('../config.json');

export default {
    name: 'MovieSearch',
    data() {
        return {
            movies: [],
        };
    },
    methods: {

    },
};
</script>

<style></style>
