<template>
  <Navbar/>  

  <router-view></router-view>

  <!-- Contact Me -->
  <div
    class="
      h-409
      px-4
      desktop:px-32
      md:px-6
      sm:px-4
      flex flex-col
      items-center
      justify-center
    "
  >
    <div class="desktop:px-344.5 md:px-124 sm:px-82">
      <p class="h2-medium text-blue-900 mb-54 sm:mb-12">Let's work together!</p>
      <button class="btn">Contact Me</button>
    </div>
  </div>
  <Footer />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
