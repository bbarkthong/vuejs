<template>
<div>
  <h3>edit</h3>
  <edit />
  <!-- <Articles /> -->
</div>
</template>

<script>
import Articles from '@/components/common/articles.vue';
import edit from '@/components/common/edit_articles.vue';

export default {
  components: {
    // Articles, 
    edit
  },
}
</script>
