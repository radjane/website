<template >
  <nav class="fixed top-0 left-0 right-0 bg-gray-100 border-gray-200 px-2 sm:px-4 py-2.5  dark:bg-gray-700">
    <div class=" container flex flex-wrap justify-between items-center mx-auto">
      <a href="https://flowbite.com/" class="flex items-center">
        <img src="../../assets/logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo">
        <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">WebSite</span>
      </a>
      <div class="flex items-center md:order-2">
        <!-- 黑夜模式 切换 -->
        <button id="theme-toggle" type="button" class="text-gray-500 dark:text-gray-400 
            hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 
            focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-4">
          <svg id="theme-toggle-dark-icon" @click="switchDark" class="w-4 h-4 hidden" fill="currentColor"
            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
          </svg>
          <svg id="theme-toggle-light-icon" @click="switchDark" class="w-4 h-4 " fill="currentColor" viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fill-rule="evenodd" clip-rule="evenodd"></path>
          </svg>
        </button>
        <!-- 头像点击 -->
        <button type="button"
          class="flex mr-3 text-sm bg-gray-700 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
          id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
          <span class="sr-only">Open user menu</span>
          <img class="w-8 h-8 rounded-full animate-spin-slow" src="../../assets/profile-picture-3.jpg" alt="">
        </button>
        <!-- 头像下拉 展示 -->
        <div
          class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
          id="dropdown"
          style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate(1247px, 848px);"
          data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top">
          <div class="py-3 px-4">
            <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
            <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
          </div>

          <ul class="py-1" aria-labelledby="dropdown">
            <li>
              <a href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">首页</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">修改密码</a>
            </li>
            <li>
              <a href="#"
                class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">登陆</a>
            </li>
          </ul>

        </div>


        <!-- 手机菜单 -->
        <button data-collapse-toggle="mobile-menu" type="button"
          class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu" aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
          <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>




      <!-- 中间菜单 -->
      <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:fontnewsPagesite-medium">
          <!-- <li>
            <a href="javascript:void(0)" @click="homePage"
              :class="active == 1 ? ' md:text-blue-700' : 'text-gray-700 border-b border-gray-100'"
              class="block py-2 pr-4 pl-3 text-gray-700 md:bg-transparent  md:p-0 dark:text-white">主页</a>
          </li> -->
          <li>
            <a href="JavaScript:void(0)" @click="newsPage"
              :class="active == 2 ? 'md:text-blue-700' : 'text-gray-700 border-b '"
              class="block py-2 pr-4 pl-3  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">开源资讯</a>
          </li>
          <li>
            <a href="JavaScript:void(0)" @click="sitePage"
              :class="active == 3 ? 'md:text-blue-700' : 'text-gray-700 border-b'"
              class="block py-2 pr-4 pl-3  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">网站导航</a>
          </li>
          <li>
            <a href="JavaScript:void(0)" @click="writeBlog"
              :class="active == 4 ? 'md:text-blue-700' : 'text-gray-700 border-b'"
              class="block py-2 pr-4 pl-3  border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">写博客</a>
          </li>
        </ul>
      </div>

    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const dark = ref(true);

    const active = ref(2);

    const switchDark = () => {
      if (document.documentElement.classList.contains('dark')) {
        document.documentElement.classList.remove('dark');
        document.getElementById('theme-toggle-dark-icon').classList.add('hidden');
        document.getElementById('theme-toggle-light-icon').classList.remove('hidden');
        localStorage.setItem('color-theme', 'light');
      } else {
        document.documentElement.classList.add('dark');
        document.getElementById('theme-toggle-dark-icon').classList.remove('hidden');
        document.getElementById('theme-toggle-light-icon').classList.add('hidden');
        localStorage.setItem('color-theme', 'dark');
      }
    }

    const router = useRouter();

    const hiddenMobileNavbar = () => {
      document.getElementById('mobile-menu').classList.add('hidden');
    }


    const sitePage = () => {
      hiddenMobileNavbar();
      active.value = 3;
      router.push({
        name: 'siteList'
      })
    }



    const newsPage = () => {
      hiddenMobileNavbar();
      active.value = 2;
      router.push({
        name: 'newsList'
      })
    }

    const homePage = () => {
      hiddenMobileNavbar();
      active.value = 1;
    }

    const writeBlog = () => {
      hiddenMobileNavbar();
      active.value = 4;
      router.push({
        name: 'writeBlog'
      })
    }

    return {
      dark,
      switchDark,
      newsPage,
      sitePage,
      active,
      homePage,
      writeBlog
    }
  }
});
</script>  
