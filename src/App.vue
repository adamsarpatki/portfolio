<template>
  <!-- Navbar -->
  <nav
    class="
      px-4
      desktop:px-32
      md:px-6
      sm:px-4
      h-10%
      bg-blue-900
      flex
      justify-between
      items-center
      filter
      drop-shadow-navbar
    "
  >
    <a href="/index.html" class="nav-link">Ádám Sárpátki</a>
    <div class="flex flex-row text-center">
      <a href="" class="nav-link nav-link:hover w-20 mx-2.5">Work</a>
      <a href="" class="nav-link nav-link:hover w-20 mx-2.5">About</a>
      <a href="" class="nav-link nav-link:hover w-20 mx-2.5">Contact</a>
    </div>
  </nav>

  <!-- Body Content -->
  <div
    class="px-4 desktop:px-32 md:px-6 sm:px-4 h-full grid grid-cols-12 gap-4"
  ></div>

  <!-- Footer -->
  <footer class="h-10% flex flex-row flex-wrap">
    <div class="bg-blue-800 w-full items-center justify-center px-4 desktop:px-32 md:px-6 sm:px-4 flex flex-row">
      <a href="" class="mx-2.5 font-body text-base text-gray-50">LinkedIn</a>
      <a href="" class="mx-2.5 font-body text-base text-gray-50">Instagram</a>
      <a href="" class="mx-2.5 font-body text-base text-gray-50">Twitter</a>
    </div>
    <div class="h-6 w-full bg-blue-900 flex-row font-body text-footer text-gray-50 justify-center">2021 © All rights reserved by Ádám Sárpátki</div>
  </footer>
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