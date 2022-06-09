<template>
  <div>
    <input type="text" ref="userid" />
    <button @click="focus()">포커스</button>
    <p>메세지: {{ truncate(message) }}</p>

    <MessageEditor @send="message = $event" />
    <MessageEditor @send="send" />
    <button @click="message = null">리셋</button>
  </div>
</template>

<script>
import MessageEditor from "./components/MessageEditor.vue";
export default {
  name: "App",
  components: { MessageEditor },
  data() {
    return {
      message:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem IpsumWhy do we use It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpos",
    };
  },
  methods: {
    truncate(value) {
      if (value == null) return;
      return value.length > 120 ? `${value.slice(0, 20)}...` : value;
    },
    focus() {
      this.$refs.userid.focus();
    },
    send(message) {
      this.message = message;
    },
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
