import { createStore } from "vuex";

const storage = {
  fetch() {
    const arr = []
    for (var i = 0; i < localStorage.length; i++) {
      var key = localStorage.key(i);
      if (key !== "loglevel:webpack-dev-server") {
        arr.push(JSON.parse(localStorage.getItem(key)));
      }
    }
    return arr
  }
}

const store = createStore({
  state: {
    todos: storage.fetch()
  },
  mutations: {
    toggleCompleteTodo(state, todo) {
      localStorage.setItem(todo.title, JSON.stringify(todo));
    },
    deleteTodo(state, todo, index) {
      localStorage.removeItem(todo.title);
      state.todos.splice(index, 1);
    },
    insertTodo(state, todo) {
      var item = {
        title: todo,
        complete: false,
      };
      localStorage.setItem(todo, JSON.stringify(item));
      state.todos.push(item);
    },
    truncateTodo(state) {
      localStorage.clear();
      state.todos = [];
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    }
  }
});
export default store