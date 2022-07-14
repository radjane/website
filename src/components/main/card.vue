<template>

  <!-- 背景宽度 100 黑暗模式 -->
  <div class=" dark:bg-gray-800">
    <div class="md:container md:mx-auto  flex-wrap-reverse  ">
      <ul class="flew flex-wrap py-2  [&>*]:p-4 [&>*]:bg-white [&>*]:rounded-lg [&>*]:shadow space-y-4">
        <li class=" flew flex-wrap dark:bg-black-700 transition duration-500 ease-in-out flex mx-6 hover:bg-gray-200 
           hover:transform hover:-translate-y-1.5 hover:scale-10 dark:bg-gray-800 " v-for="(e, i) in dataList" :key="i">
          <img class=" h-10 w-10 rounded-full" :src="e.logo" alt="" />
          <div class="ml-3 overflow-hidden ">
            <p class="text-sm font-medium  dark:text-gray-600 dark:hover:text-white ">
              {{ e.title }}</p>
            <p class="text-sm font-small  dark:text-gray-600 dark:hover:text-white">
              {{ e.author }}</p>
          </div>
          <div class="ml-60  dark:bg-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" class=" h-6 w-6 text-slate-500 text-center align-middle" fill="none"
              viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </li>
      </ul>
    </div>
  </div>

</template>









<script >
import { OscNews } from '/src/api/api.ts'
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
setup() {
const param = reactive({
      pageNo: 1,
      pageSize: 10,
      input: ""
    })
    let dataList = ref([]);

    const newsList = () => {
      OscNews.newsList(param).then((res) => {
        console.log(res);
        dataList.value = res.data.data.records;
      })
    }
    newsList();
return {
OscNews,
defineComponent,
reactive,
ref,
param,
dataList,
newsList,
};
},
});
</script>



