<template>
  <div>
    <Header />
    <Input />
    <List />
    <Footer />
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
