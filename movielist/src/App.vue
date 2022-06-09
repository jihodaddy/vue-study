<template>
  <div>
    <button class="btn btn-primary">primary</button>
    <MovieListVue />
  </div>
</template>

<script>
import MovieListVue from "./components/MovieList.vue";

export default {
  name: "App",
  components: {
    MovieListVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
