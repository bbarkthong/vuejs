<template>
<div>
  <!-- <edit /> -->
  <!-- <Articles /> -->
  <grid />
</div>
</template>

<script>
import Articles from '@/components/common/articles.vue';
import edit from '@/components/common/edit_articles.vue';
import grid from '@/components/common/grid.vue';

export default {
  components: {
    // Articles, 
    // edit
    grid
  },
}
</script>
