<template>
  <div>{{ who }}씨! {{ greeting }}</div>
</template>

<script>
export default {
  props: ["who", "greeting"],
};
</script>

<style lang="scss" scoped></style>
