<template>
  <ul class="list-group todo-input">
    <li
      class="list-group-item"
      v-for="(todo, index) in propsdata"
      v-bind:key="index"
    >
      <input
        class="form-check-input me-1 align-middle"
        type="checkbox"
        v-model="todo.complete"
        v-on:change="toggleCompleteTodo(todo, index)"
      />
      <span class="todo-list" :class="{ 'complete-item': todo.complete }">{{
        todo.title
      }}</span>
      <button type="button" class="btn pull-right" v-on:click="deleteTodo(todo, index)">
        <i class="bi bi-trash-fill" />
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: [
    'propsdata'
  ],
  methods: {
    deleteTodo: function(todo, index) {
      this.$emit('deleteTodo',todo, index)
    },
    toggleCompleteTodo: function(todo) {
      console.log("toggleCompleteTodo")
      this.$emit('toggleCompleteTodo',todo)
    }
  },
};
</script>

<style>
.todo-input {
  padding: 15px;
  text-align: left;
}
.todo-list {
  width: 80%;
  padding: 5px;
  vertical-align: middle;
}
.complete-item {
  text-decoration-line: line-through;
  color: gray;
}
.pull-right {
  left: 80%;
  position: relative;
}
</style>