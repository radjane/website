<template>

  <div v-if="props.ifShow">
    <div class="animate-opacity  transition duration-500 ease-in-out   
        border border-gray-100 shadow rounded-md p-2 mt-2.5 " v-for="(item, i) in 10" :key="i">
      <div class="flex space-x-4">
        <div class="flex-1 space-y-3 py-1">
          <div class="grid grid-cols-8 gap-4">
            <div class="h-5 bg-slate-200 rounded col-span-5"></div>
          </div>
          <div class="space-y-3">
            <div class="grid grid-cols-12 gap-4">
              <div class="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
            <div class="grid grid-cols-6 gap-4">
              <div class="h-2 bg-slate-200 rounded col-span-3"></div>
            </div>
            <div class="grid grid-cols-7 gap-4">
              <div class="h-2 bg-slate-200 rounded col-span-2"></div>
            </div>
            <div class="grid grid-cols-12 gap-4">
              <div class="h-4 bg-slate-200 rounded col-span-2"></div>
              <!-- <div class="h-4 bg-slate-200 rounded col-span-2"></div> -->
            </div>
          </div>
        </div>
        <div class="rounded-full bg-slate-200 w-12 h-12  mt-6 float-right"></div>
      </div>
    </div>
  </div>



</template>



<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    ifShow: Boolean,
  },
  setup(props) {
    console.log(props.ifShow);
    return {
      props
    };
  },
});
</script>
