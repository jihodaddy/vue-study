<template>
  <div>
    <h1>Movie List</h1>
    <div class="row">
      <div v-for="(movie, n) in movielist" :key="n" class="col-sm-4">
        <div class="card">
          <img :src="movie.img.src" :alt="movie.img.alt" class="card-img-top" />
          <div class="card-body">
            <h2 class="card-title">
              #{{ movie.ranking }} - {{ movie.title }} ({{ movie.year }})
              <ul class="list-group list-group-flush">
                <li class="list-group-item">배급: {{ movie.distributor }}</li>
                <li class="list-group-item">수익: {{ movie.amount }}</li>
              </ul>
            </h2>
          </div>
          <!-- card -->
        </div>
      </div>
      <!-- row -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movielist: [],
    };
  },
  mounted() {
    const movieListPromise = fetch("/data.json").then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
    Promise.all([movieListPromise]).then((values) => {
      this.movielist = values[0];
      console.log(this.movielist);
    });
  },
};
</script>

<style lang="scss" scoped></style>
