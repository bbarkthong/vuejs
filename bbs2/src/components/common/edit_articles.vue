<template>
  <viewer :initialValue="viewerText" height="500px" />
</template>
<script>
  import '@toast-ui/editor/dist/toastui-editor-viewer.css';

  import { Viewer } from '@toast-ui/vue-editor';

  export default {
    components: {
      viewer: Viewer
    },
    data() {
      return {
        viewerText: '# This is Viewer.\n Hello World.'
      };
    }
  };
</script>
