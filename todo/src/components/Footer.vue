<template>
  <div>
    <button type="button" class="btn btn-danger" v-on:click="truncateTodo">
      모두 지우기
    </button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('truncateTodo')
  },
};
</script>
