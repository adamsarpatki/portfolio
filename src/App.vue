<template>
  <div>
    <Navbar/>
    <div class="max-w-screen-desktop m-auto">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #111827;
  display: flex;
  align-items: center;
  /* margin-top: 60px; */
}
</style>

<script>
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  },
};
</script>
