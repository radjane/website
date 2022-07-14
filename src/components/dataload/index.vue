<template>
  <div v-if="props.loading" class="animate-translate flex items-center justify-center mt-2">
    <svg class=" w-6 h-6 text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
      viewBox="0 0 24 24" stroke="currentColor" style="--darkreader-inline-stroke: currentColor;"
      data-darkreader-inline-stroke="">
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>

  </div>
  <div v-else class="text-center text-xs mt-2 ">
    <p class="text-gray-500">
      没有更多内容...
    </p>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    loading: Boolean
  },
  setup(props) {
    console.log(props.loading);
    return {
      props
    }
  },
})
</script>
