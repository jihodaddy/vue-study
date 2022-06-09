<template>
  <JejuIslandVue />
  <TravelPicVue />
</template>

<script>
import JejuIslandVue from "./components/JejuIsland.vue";
import TravelPicVue from "./components/TravelPic.vue";
export default {
  name: "App",
  components: {
    JejuIslandVue,
    TravelPicVue,
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
