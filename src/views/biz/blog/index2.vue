<template>
  <div class="w-md  dark:bg-gray-800">
    <div class="md:container md:w-auto  dark:bg-gray-800 pb-1 pt-20 mx-1">
      <MenuBar :editor="editor"></MenuBar>
      <EditorContent class="editor__content" :editor="editor" />
    </div>
  </div>
</template>

<script>
import {
  Editor,
  EditorContent,
} from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

import MenuBar from '@/components/tiptap/MenuBar.vue'

export default {
  components: {
    EditorContent,
    Editor,
    MenuBar
  },

  setup() {
    const editor = new Editor({
      editorProps: {
        attributes: {
          class: 'border border-black mb-2 p-4 mx-auto focus:outline-none ',
        },
      },
      content: `
        <h1>我是一级标题</h1>
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That’s a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
        </p>
        <pre><code class="language-css">body {
        display: none;
      }</code></pre>
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that’s amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>`,
      extensions: [
        StarterKit,
      ],
    })

    return {
      editor
    }
  },
}
</script>
