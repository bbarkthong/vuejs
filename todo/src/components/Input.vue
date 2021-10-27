<template>
  <div class="input-group mb-3 todo-input">
    <input
      type="text"
      class="form-control"
      placeholder="할일을 입력하세요"
      aria-label="할일을 입력하세요"
      aria-describedby="button-addon2"
      v-model="this.newTodo"
      v-on:keyup.enter="insertTodo"
    />
    <button
      class="btn btn-success"
      type="button"
      id="button-addon2"
      v-on:click="insertTodo"
    >
      등록
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    insertTodo: function () {
      if (this.newTodo == "") {
        alert("할일을 입력하세요.");
      } else {
        this.$store.commit("insertTodo", this.newTodo);
        this.newTodo = "";
      }
    },
  },
  data() {
    return {
      newTodo: "",
    };
  },
};
</script>

<style>
.todo-input {
  padding: 15px;
}
</style>