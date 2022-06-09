<template>
  <div>
    <!-- <UserPhone rank="B" /> -->
    <!-- <GreetingComp greeting="식사하셨습니까" who="김세경" /> -->
    <!-- <GreetingComp :greeting="msg" :who="name" /> -->
    <!-- <PhonePmtVue
      :principal="pricipal"
      rate="rate"
      :period="period"
      :msg="msg"
    /> -->
    <TodoVue
      v-if="!error"
      :todoListPromise="todoPromise"
      @addItem="addItem"
      @delItem="delItem"
      @updateFinished="updateFinished"
    />
    <div v-else>
      {{ error }}
    </div>
  </div>
</template>

<script>
// import UserPhone from "./components/UserPhone.vue";
// import GreetingComp from "./components/GreetingComp.vue";
// import PhonePmtVue from "./components/PhonePmt.vue";
import TodoVue from "./components/Todo.vue";
import axios from "axios";

export default {
  name: "App",

  data() {
    return {
      todoPromise: null,
      error: null,

      // msg: "커피드셨습니까",
      // name: "바인딩",
      // pricipal: 613000,
      // period: 24,
      // rate: 5.9,
    };
  },
  components: {
    // UserPhone,
    // GreetingComp,
    // PhonePmtVue,
    TodoVue,
  },
  created() {
    //mounted() {
    this.todoPromise = fetch("http://damansa72.cafe24.com/api/todos")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("todos를 가져올 수 없습니다");
      })
      .catch((error) => {
        console.log(error);
        this.error = error;
      });
  },
  methods: {
    addItem(task) {
      axios
        .post("http://damansa72.cafe24.com/api/todos", task)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("add item complete");
        });
    },
    delItem(id) {
      axios
        .delete("http://damansa72.cafe24.com/api/todos/" + id)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("delete item complete");
        });
    },
    updateFinished(id) {
      axios
        .put("http://damansa72.cafe24.com/api/todos/" + id)
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          console.log("update item finished complete");
        });
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=DM+Sans&display=swap");
@import "styles/main.scss";
</style>
