<template>
  <div
    class="px-5 py-10 w-4/6 mx-auto  my-10 
     border border-gray-200 border-solid   
     bg-slate-100 font-light dark:bg-gray-800 dark:text-gray-200 "
    v-html="news.body">
  </div>
</template>

<script>
import Navbar from "@/components/navbar/index.vue";
import Footer from "@/components/footer/index.vue";
import { OscNews } from '/src/api/api.ts'

import { defineComponent, ref, reactive } from 'vue'

export default defineComponent({
  components: {
    Navbar,
    Footer,
  },
  setup() {
    const param = reactive({
      id: 201008
    })
    let news = ref([]);

    const newsDetails = () => {
      OscNews.newsDetails(param).then((res) => {
        console.log(res);
        news.value = res.data.data;
      })
    }
    newsDetails();
    return {
      OscNews,
      news,
    };
  },
});
</script>
