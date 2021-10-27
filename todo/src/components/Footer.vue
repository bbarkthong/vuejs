<template>
  <div>
    <button type="button" class="btn btn-danger" v-on:click="truncateTodo">
      모두 지우기
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    truncateTodo: function () {
      this.$store.commit("truncateTodo");
    },
  },
};
</script>
