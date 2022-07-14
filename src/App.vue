<template>
  <div id="app">
    <Navbar> </Navbar>
    <router-view></router-view>
    <Footer> </Footer>
  </div>
</template>
<script setup>
import Navbar from "@/components/navbar/index.vue";
import Footer from "@/components/footer/index.vue";
</script>
 
