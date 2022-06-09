<template>
  <div>
    <h1>Travel Pic</h1>

    <div v-for="(item, n) in travel" :key="n">
      <div>{{ item.img }}</div>
      <div>{{ item.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      travel: [
        {
          img: require(`@assets/roma.jpg`),
          name: "스위스",
        },
        {
          img: require(`@assets/back.jpg`),
          name: "프랑스",
        },
        {
          img: require(`@assets/back.jpg`),
          name: "유럽여행",
        },
        {
          img: require(`@assets/back.jpg`),
          name: "이탈리아 로마",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
