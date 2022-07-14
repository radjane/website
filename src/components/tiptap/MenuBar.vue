<template>
  <div>
    <template v-for="(item, index) in items">
      <menu-item v-if="item.icon === 'emotion-line'" v-bind="item" :key="`divider${index}`"
        data-tooltip-target="emotion-div" />
      <menu-item v-else :key="index" v-bind="item" />
    </template>
    <div id="emotion-div"  role="tooltip"
      class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700">
      <Emotion></Emotion>
      <div class="tooltip-arrow" data-popper-arrow></div>
    </div>
  </div>




</template>


<script>
import MenuItem from './MenuItem.vue'
import { Editor } from '@tiptap/vue-3'
import { reactive } from 'vue'
import Emotion from '@/components/emotion/index.vue'

export default {
  components: {
    MenuItem,
    Emotion
  },

  props: {
    editor: {
      type: Editor,
      required: true
    }
  },
  setup(props) {
    const items = reactive([
      {
        icon: 'h-1',
        title: '标题',
        action: () => props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => props.editor.isActive('heading', { level: 1 })
      },
      // {
      //   icon: 'h-2',
      //   title: 'Heading 2',
      //   action: () => props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
      //   isActive: () => props.editor.isActive('heading', { level: 2 })
      // },
      {
        icon: 'bold',
        title: '加粗',
        action: () => props.editor.chain().focus().toggleBold().run(),
        isActive: () => props.editor.isActive('bold')
      },
      {
        icon: 'italic',
        title: '斜体',
        action: () => props.editor.chain().focus().toggleItalic().run(),
        isActive: () => props.editor.isActive('italic')
      },
      {
        icon: 'double-quotes-l',
        title: '引用',
        action: () => props.editor.chain().focus().toggleBlockquote().run(),
        isActive: () => props.editor.isActive('blockquote')
      },
      // {
      //   icon: 'strikethrough',
      //   title: 'Strike',
      //   action: () => props.editor.chain().focus().toggleStrike().run(),
      //   isActive: () => props.editor.isActive('strike')
      // },
      {
        icon: 'paragraph',
        title: '段落',
        action: () => props.editor.chain().focus().setParagraph().run(),
        isActive: () => props.editor.isActive('paragraph')
      },
      // {
      //   icon: 'list-unordered',
      //   title: 'Bullet List',
      //   action: () => props.editor.chain().focus().toggleBulletList().run(),
      //   isActive: () => props.editor.isActive('bulletList')
      // },
      {
        icon: 'list-ordered',
        title: '有序列表',
        action: () => props.editor.chain().focus().toggleOrderedList().run(),
        isActive: () => props.editor.isActive('orderedList')
      },
      {
        icon: 'list-check-2',
        title: '任务列表',
        action: () => props.editor.chain().focus().toggleTaskList().run(),
        isActive: () => props.editor.isActive('taskList')
      },
      {
        icon: 'code-box-line',
        title: '代码块',
        action: () => props.editor.chain().focus().toggleCodeBlock().run(),
        isActive: () => props.editor.isActive('codeBlock')
      },
      {
        icon: 'emotion-line',
        title: '表情',
        // action: () => props.editor.chain().focus().setHorizontalRule().run()
      },
      {
        icon: 'arrow-go-back-line',
        title: '上一步',
        action: () => props.editor.chain().focus().undo().run()
      },
      {
        icon: 'arrow-go-forward-line',
        title: '下一步',
        action: () => props.editor.chain().focus().redo().run()
      }
    ])
    const showEmotion = () => {
      if (document.getElementById('emotion-div').classList.contains('hidden')) {
        document.getElementById('emotion-div').classList.remove('hidden');
      } else {
        document.getElementById('emotion-div').classList.add('hidden');
      }
    }

    return {
      items,
      showEmotion
    }
  },
}
</script>

<style lang="scss">
.divider {
  width: 2px;
  height: 1.25rem;
  background-color: rgba(#000, .1);
  margin-left: .5rem;
  margin-right: .75rem;
}
</style>
