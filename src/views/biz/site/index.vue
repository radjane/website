<template>

  <div class="w-md  dark:bg-gray-800">
    <div class="md:container md:w-auto  dark:bg-gray-800 pb-1 pt-20 mx-1">
      <!-- 骨架屏幕 缓冲 列表 -->
      <SkeletalList :ifShow="dataList.length == 0"></SkeletalList>
      <div @click="details(item.url)" class="cursor-pointer transition duration-500 ease-in-out   
        border border-gray-100 shadow rounded-md p-2 mt-2.5 " v-for="(item, i) in dataList" :key="i">
        <!-- 作者 的首个字符 -->
        <avatar :name="item.title" :background-color="extractColorByName(item.title)" color="#fff" :inline="true"
          class="w-12 h-12 rounded-full float-right mt-8" />
        <p class="cursor-pointer text-lg h-8 p-1 text-left  
          font-bold
          hover:underline md
          truncate hover:text-clip
          dark:text-gray-400 
          md:dark:hover:text-white 
          dark:hover:bg-gray-700 
          dark:hover:text-white 
          md:dark:hover:bg-transparent 
          dark:border-gray-700">
          {{ item.title }}</p>
        <p
          class="text-sm p-1 text-left subpixel-antialiased hover:text-blue-600 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          {{ item.slogan }}
        </p>
        <p
          class="text-xs p-1 text-left 
          text-gray-600 
          dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          {{ item.content }}
        </p>
        <p
          class="text-xs p-1 text-left 
          text-gray-600 
          dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          <a :href="item.url" target="_blank" class="hover:text-blue-500">{{ item.url }}</a>
        </p>

        <p>
          <span
            class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            <!-- {{
                item.siteTypeId
            }}
             -->
            网站导航
          </span>
        </p>
      </div>
      <!-- 滚动刷新 -->
      <DataLoad :loading="loading"></DataLoad>
    </div>
  </div>
</template>


<script >
import DataLoad from '@/components/dataload/index.vue';
import SkeletalList from '@/components/skeletal/skeletalList.vue'

import { SiteInfo } from '/src/api/api.ts'
import { defineComponent, reactive, ref, onMounted } from 'vue'



export default defineComponent({
  components: {
    DataLoad,
    SkeletalList
  },
  setup() {
    document.documentElement.scrollTop = 0;
    const param = reactive({
      pageNo: 1,
      pageSize: 10,
      input: ""
    })
    let dataList = ref([]);
    const loading = ref(true);
    const infoList = () => {
      SiteInfo.infoList(param).then((res) => {
        loading.value = res.data.data.total < param.pageSize ? false : true;
        dataList.value = dataList.value.concat(res.data.data.records);
      })
    }
    setTimeout(() => {
      infoList();
    }, 200)

    //传入名字,根据名字生成颜色,这样颜色就固定下来了
    const extractColorByName = (name) => {
      var temp = [];
      temp.push("#");
      for (let index = 0; index < name.length; index++) {
        temp.push(parseInt(name[index].charCodeAt(0), 10).toString(16));
      }
      return temp.slice(0, 5).join('').slice(0, 4);
    }

    // 实时滚动条高度
    const scrollTop = () => {
      let clientHeight = document.documentElement.clientHeight; //浏览器高度
      let scrollHeight = document.body.scrollHeight;
      let scrollTop = document.documentElement.scrollTop;
      let distance = 135;
      //距离视窗还用 distance 的时候，开始触发；
      if ((scrollTop + clientHeight) >= (scrollHeight - distance) && loading) {
        console.log("开始加载数据");
        param.pageNo = param.pageNo + 1;
        infoList(param);
      }
    }

    const details = (url) => {
      window.location.href = url
    }

    onMounted(() => {
      // 监听滚动条位置
      window.addEventListener('scroll', scrollTop, true)
    })
    return {
      dataList,
      extractColorByName,
      DataLoad,
      loading,
      SkeletalList,
      details
    }
  },
});
</script>
