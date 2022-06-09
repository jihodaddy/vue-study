<template>
  <div class="app-container">
    <h1 class="app-header">Vue todo list</h1>

    <div class="add-task">
      <input
        type="text"
        placeholder="Add New Task"
        class="task-input"
        v-model="tasks.name"
        @keyup.enter="newItem"
      />
      <input
        type="submit"
        class="submit-task"
        title="Add Task"
        @click="newItem"
      />
    </div>

    <ul class="task-list">
      <li class="task-list-item" v-for="(task, n) in tasks" :key="n">
        <label class="task-list-item-label">
          <input
            type="checkbox"
            :checked="task.finished"
            v-model="task.finished"
            @change="updateFinished(task)"
          />
          <span>{{ task.name }}</span>
        </label>
        <span
          class="delete-btn"
          title="Delete Task"
          @click="delItem(task)"
        ></span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "todo list",
      tasks: [
        //  {name: 'Today:Vue  수업 준비'},
        //  {name: 'Tomorrow: 야구 시청'},
        //  {name: 'Daily: 유튜브 감상' },
      ],
    };
  },
  props: {
    todoListPromise: {
      type: Promise,
    },
  },
  mounted() {
    // const todoPromise = fetch("http://damansa72.cafe24.com/api/todos")
    //   .then((res) => {
    //     if (res.ok) {
    //       return res.json();
    //     }
    //     throw new Error("todos를 가져올 수 없습니다");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    const todoPromise = this.todoListPromise;

    Promise.all([todoPromise]).then((values) => {
      this.tasks = values[0];
    });
  },
  methods: {
    newItem: function () {
      if (!this.tasks.name) {
        return;
      }

      const task = {
        name: this.tasks.name,
      };

      this.tasks.push(task);

      this.tasks.name = "";
      this.$emit("addItem", task);
    },
    delItem: function (task) {
      this.tasks.splice(this.tasks.indexOf(task), 1);
      this.$emit("delItem", task.id);
    },
    updateFinished: function (task) {
      this.$emit("updateFinished", task.id);
    },
  },
};
</script>
