<template>
  <div>
    <Header />
    <Input v-on:insertTodo="insertTodo" />
    <List v-on:deleteTodo="deleteTodo" v-on:toggleCompleteTodo="toggleCompleteTodo" v-bind:propsdata="todos" />
    <Footer v-on:truncateTodo="truncateTodo" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Input from "./components/Input.vue";
import List from "./components/List.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Input,
    List,
    Footer,
  },
  methods: {
    insertTodo: function (todo) {
      var item = {
        title: todo,
        complete: false,
      };
      localStorage.setItem(todo, JSON.stringify(item));
      this.todos.push(item);
    },
    deleteTodo: function (todo, index) {
      localStorage.removeItem(todo.title);
      this.todos.splice(index, 1);
    },
    toggleCompleteTodo: function (todo) {
      localStorage.setItem(todo.title, JSON.stringify(todo));
    },
    truncateTodo: function () {
      localStorage.clear();
      this.todos = [];
    },
  },
  created() {
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key !== "loglevel:webpack-dev-server") {
        this.todos.push(JSON.parse(localStorage.getItem(key)));
      }
    }
  },
  data() {
    return {
      todos: [
        {
          title: "List #1",
          complete: false,
        },
        {
          title: "List #2",
          complete: true,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: "Malgun Gothic", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
