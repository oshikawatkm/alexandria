<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

body {
  overflow-x: hidden;
}

.navbar {
  background-color: rgb(0, 40, 66) !important;
}

#main-footer {
  background-color: rgb(0, 40, 66) !important;
}

a {
  color: #ffffff;
  text-decoration: none;
}

#randing-top {
  min-height: 450px;
}
</style>
