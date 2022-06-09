<template>
  <div>
    <input v-model="message" type="text" />
    <button @click="send()">Emit으로 메세지 보내기</button>
    <button @click="$emit('send', message)">
      Emit으로 메세지 보내기(inline방식)
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: null,
    };
  },
  methods: {
    send() {
      this.$emit("send", this.message);
    },
  },
};
</script>

<style lang="scss" scoped></style>
