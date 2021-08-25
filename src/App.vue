<template>
  <!-- Navbar -->
  <nav
    class="
      px-4
      desktop:px-32
      md:px-6
      sm:px-4
      h-24
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

  <!-- Hero -->
  <div class="h-696 px-4 desktop:px-32 md:px-6 sm:px-4 flex flex-col items-center justify-center">
        <div class="px-72">
          <h1 class="h1-bold text-blue-900 mb-11">Hi, I'm Ádám Sárpátki,</h1>
          <p class="subheading-regular text-gray-700 mb-14">an enthusiastic UX designer based in Budapest, Hungary, with a background in library and information science, customer service and translation.</p>
          <button class="btn">Contact Me</button>
        </div>
  </div>

<!-- Case Studies -->
  <div class="h-536 px-4 desktop:px-32 md:px-6 sm:px-4 flex flex-row justify-center items-center">
    <div class="pl-8 pt-245 h-456 w-984 flex flex-col items-start bg-rulebook-card-desktop filter bg-cover drop-shadow-card">
      <h2 class="display-medium text-gray-900">D&D Rulebook</h2>
      <p class="subheading-italic text-gray-900">A mobile-based solution for the players of Dungeons & Dragons.</p>
    </div>
  </div>

<!-- Contact Me -->
  <div class="h-409 px-4 desktop:px-32 md:px-6 sm:px-4 flex flex-col items-center">
        <div class="px-344.5 pt-82">
          <p class="h1-medium text-blue-900 mb-54">Let's work together!</p>
          <button class="btn">Contact Me</button>
        </div>
  </div>

  <!-- Footer -->
  <footer class="">
    <div class="w-full flex flex-col">
      <div class="bg-blue-800 h-20 justify-center items-center flex-row px-4 desktop:px-32 md:px-6 sm:px-4 flex">
      <a href="" class="mx-2.5 font-body text-base text-gray-50">LinkedIn</a>
      <a href="" class="mx-2.5 font-body text-base text-gray-50">Instagram</a>
      <a href="" class="mx-2.5 font-body text-base text-gray-50">Twitter</a>
      </div>
      <div class="h-6 bg-blue-900 font-body text-xs text-gray-50 justify-center items-center flex-row flex space-x-4"><span>2021 © All rights reserved by Ádám Sárpátki</span> <span>|</span> <span><a href="">Privacy Policy</a></span></div>
    </div>
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