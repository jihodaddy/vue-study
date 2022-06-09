<template>
  <div>
    <ul>
      <li v-for="(item, n) in pcs" :key="n">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pcs: ["Windows7", "Win10", "MacBook"],
    };
  },
};
</script>

<style lang="scss" scoped></style>
