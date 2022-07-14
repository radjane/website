<template>
  <div class="w-full  dark:bg-gray-800">
    <div class="mx-auto flex flex-wrap  dark:bg-gray-800 ml-60 mr-60">
      <div data-tooltip-target="tooltip-bottom" class="transition duration-500 ease-in-out  hover:transform hover:-translate-y-1.5 hover:scale-10 
    border border-blue-300 shadow rounded-md p-2 w-full h-15 mx-auto mt-2 ml-1" v-for="(e, i) in 100" :key="i">
        <p
          class="text-xs h-8 p-2 text-left dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          {{ i + 1 }}： 百度一下百度一下百度一下百度一下百度一下百度一下百度一下百度一下百度一下百度一下百度一下百度一下</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {

  },
})
</script>

