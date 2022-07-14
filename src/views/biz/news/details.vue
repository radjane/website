<template>

  <div class="w-md  dark:bg-gray-800">
    <div class="md:container md:w-auto  dark:bg-gray-800 pb-1 pt-20 mx-1">

      <div v-if="news == null" class="w-md dark:bg-gray-800">
        <div class="animate-opacity  transition duration-500 ease-in-out   
           border border-gray-100 shadow rounded-md px-10 pb-10  mx-2 mb-3 mt-2.5 " >
          <div class="flex space-x-8">
            <div class="flex-1 space-y-3 py-1">
              <div class="grid grid-cols-8 mt-3">
                <div class="h-5 bg-slate-200 rounded col-span-5"></div>
              </div>
              <div class="space-y-4">
                <div class="grid grid-cols-6">
                  <div class="h-2 bg-slate-200 rounded col-span-2"></div>
                </div>
                <div class="h-2 bg-slate-200  rounded-md col-span-3" v-for="(item, i) in 3" :key="i"></div>
                <div class="grid grid-cols-6">
                  <div class="h-40 bg-slate-200  rounded-md col-span-6"></div>
                </div>
                <div class="h-2 bg-slate-200  rounded-md col-span-3" v-for="(item, i) in 15" :key="i"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="w-md dark:bg-gray-800 md:container md:w-auto">
        <div class="dark:bg-gray-800 p-4  pl-10 ">
          <h1 class="text-2xl font-bold font-sans">
            {{ news.title }}
          </h1>
          <div
            class="[&>span]:text-sm  [&>span]:mx-auto [&>span]:pr-2 [&>span]:pt-2 [&>span]:text-gray-500 dark:text-color-white">
            <span>来源：<a :href="news.url" target="_blank">点击跳转</a></span>
            <span>作者：{{ news.author }}</span>
            <span>时间：{{ news.pubDate }}</span>
            <span>转载</span>
          </div>
        </div>
        <div class="md:container md:w-auto 
     dark:bg-gray-800 px-10 pb-10  mx-2 mb-3 shadow-2xl 
     [&>*]:py-1
     [&>*]:font-mono
   [&>*]:dark:bg-gray-800 
     [&>p]:p-1
     [&>h2]:px-1
     [&>h3]:px-1
     [&>h2]:text-2xl 
     [&>h3]:text-xl 
     [&>h3]:font-black
     [&>h2]:font-black
     [&>ul>li]:my-1
     [&>p>span]:py-1
     [&>a]:underline hover:text-color-blue
    " v-html="news.body">
        </div>
      </div>

    </div>
  </div>
</template>

<script >
import { OscNews } from '@/api/api.ts'
import { defineComponent, reactive, ref } from 'vue'
import { useRoute } from 'vue-router'
export default defineComponent({
  setup() {
    const route = useRoute();
    const param = reactive({
      id: route.query.id,
    })
    console.log(param);
    let news = ref();
    //传入名字,根据名字生成颜色,这样颜色就固定下来了
    const extractColorByName = (name) => {
      var temp = [];
      temp.push("#");
      for (let index = 0; index < name.length; index++) {
        temp.push(parseInt(name[index].charCodeAt(0), 10).toString(16));
      }
      return temp.slice(0, 5).join('').slice(0, 4);
    }
    const newsLoad = () => {
      OscNews.newsDetails(param).then((res) => {
        console.log(res);
        news.value = res.data.data;
      })
    }
    setTimeout(() => {
      newsLoad();
    }, 200)

    return {
      OscNews,
      defineComponent,
      reactive,
      ref,
      param,
      news,
      extractColorByName
    };
  },
});
</script>
