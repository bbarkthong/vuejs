<template>
  <editor
    :initialValue="editorText"
    :options="editorOptions"
    height="500px"
    initialEditType="wysiwyg"
    previewStyle="vertical"
  />
</template>
<script>
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/vue-editor'

// const defaultOptions = {
//   minHeight: '200px',
//   language: 'ko-KR',
//   useCommandShortcut: true,
//   usageStatistics: true,
//   hideModeSwitch: false,
//   toolbarItems: [
//     ['heading', 'bold', 'italic', 'strike'],
//     ['hr', 'quote'],
//     ['ul', 'ol', 'task', 'indent', 'outdent'],
//     ['table', 'image', 'link'],
//     ['code', 'codeblock'],
//     ['scrollSync']
//   ]
// }

export default {
  components: {
    editor: Editor
  },
  data () {
    return {
      editorText: 'This is initialValue.',
      editorOptions: {
        hideModeSwitch: true
      }
    }
  }
}
</script>
