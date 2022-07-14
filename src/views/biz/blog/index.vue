<template>
  <div class="w-md  dark:bg-gray-800">
     <div class="md:container md:w-auto  dark:bg-gray-800 pb-1 pt-20 mx-1">
      <MenuBar :editor="editor" class="border border-x-black  border-t-black  p-1.5 rounded-t-xl"/>
      <EditorContent class="border border-black py-4 px-2 min-h-screen rounded-b-xl " :editor="editor" />
    </div>  
  </div>
</template>

<script>
import { Editor, useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import { defineComponent, reactive } from 'vue'
import MenuBar from '@/components/tiptap/MenuBar.vue'
import TaskItem from '@tiptap/extension-task-item'
import TaskList from '@tiptap/extension-task-list'


export default defineComponent({
  components: {
    EditorContent,
    MenuBar,
    TaskItem,
    TaskList,
  },
  setup() {
    const editor = new Editor({
      content: '<p>I’m running Tiptap with vue-next. 🎉</p>',
      extensions: [
        StarterKit,
        TaskItem,
        TaskList,

      ]
    })
    return {
      editor
    }
  }
})
</script>
<style lang="scss">
.editor {
  margin: 60px;
  display: flex;
  flex-direction: column;
  max-height: 26rem;
  color: #0d0d0d;
  background-color: #fff;
  border: 3px solid #0d0d0d;
  border-radius: .75rem;

  &-header {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: .25rem;
    border-bottom: 3px solid #0d0d0d;
  }

  &-content {
    padding: .7rem .5rem;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}


/* 基本编辑器样式 */
.ProseMirror {
  height: 100%;

  &:focus {
    outline: none;
  }

  ul {
    list-style: circle;
    padding: 0 1rem;
  }

  ol {
    list-style: decimal;
    padding: 0 1rem;
  }

  h1 {
    font-size: 25px;
  }

  h2 {
    font-size: 20px;
  }

  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1 !important;
  }

  code {
    background-color: rgba(#616161, .1);
    color: #616161;
  }

  pre {
    background: #1e293b;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: .75rem 1rem;
    border-radius: .3rem;
    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: .8rem;
    }
  }

  mark {
    background-color: #faf594;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, .1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, .1);
    margin: 2rem 0;
  }

  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;

      >label {
        flex: 0 0 auto;
        margin-right: .5rem;
        user-select: none;
      }

      >div {
        flex: 1 1 auto;
      }
    }
  }
}
</style>
