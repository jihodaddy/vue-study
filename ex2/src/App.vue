<template>
  <div>
    <Blog />
  </div>
</template>

<script>
// import BmiCheckVue from "./components/BmiCheck.vue";
// import CheckBmiVue from "./components/CheckBmi.vue";
import Blog from "./components/Blog.vue";
export default {
  name: "App",
  components: {
    // BmiCheckVue,
    // CheckBmiVue,
    Blog,
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
