<template>
  <div>
    <Notice />
    <Feeds />
  </div>
</template>

<script>
import Notice from '@/components/common/notice.vue';
import Feeds from '@/components/common/feeds.vue';

export default {
  components: {
    Notice,
    Feeds,
  },
}
</script>
