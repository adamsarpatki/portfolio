<template>
  <!-- Navbar -->
  <!-- <nav
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
      sticky z-50 top-0
    "
  >
    <a href="/index.html" class="nav-link">Ádám Sárpátki</a>
    <div class="flex flex-row text-center">
      <a href="" class="nav-link nav-link:hover w-20 mx-2.5">Work</a>
      <a href="" class="nav-link nav-link:hover w-20 mx-2.5">About</a>
      <a href="" class="nav-link nav-link:hover w-20 mx-2.5">Contact</a>
    </div>
  </nav> -->

  <header class="bg-blue-900 filter drop-shadow-navbar sticky z-50 top-0">
    <div
      class="
        px-4
        desktop:px-32
        md:px-6
        sm:px-4
        h-24
        bg-blue-900
        sticky
        z-50
        top-0
        flex
        justify-between
        items-center
      "
    >
      <div class="nav-link">Ádám Sárpátki</div>
      <div>
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="
            flex flex-row
            items-center
            text-gray-50
            hover:text-yellow-400
            focus:text-yellow-400
            focus:outline-none
          "
        >
          <span
            class="
              font-subheading
              desktop:text-xl
              md:text-base
              font-normal
              mr-2
            "
            >Menu</span
          >
          <svg
            class="h-5 w-5 fill-current"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 407.437 407.437"
            style="enable-background: new 0 0 407.437 407.437"
            xml:space="preserve"
          >
            <polygon
              v-if="!isOpen"
              points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "
            />
            <polygon
              v-if="isOpen"
              points="203.718,91.567 0,294.621 21.179,315.869 203.718,133.924 386.258,315.869 407.436,294.621 "
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="flex flex-col justify-center items-start px-4 pt-2 pb-4"
    >
      <a
        href=""
        class="block text-gray-50 font-subheading hover:text-yellow-400 rounded"
        >About</a
      >
      <a
        href=""
        class="
          mt-1
          block
          text-gray-50
          font-subheading
          hover:text-yellow-400
          rounded
        "
        >Work</a
      >
      <a
        href=""
        class="
          mt-1
          block
          text-gray-50
          font-subheading
          hover:text-yellow-400
          rounded
        "
        >Contact</a
      >
    </div>
  </header>

  <!-- Body Content -->

  <!-- Hero -->
  <div
    class="
      h-696
      sm:h-496
      px-4
      desktop:px-32
      md:px-6
      sm:px-4
      flex flex-col
      items-center
      justify-center
    "
  >
    <div class="desktop:px-72 md:px-68 sm:px-27">
      <h1 class="h1-bold text-blue-900 mb-11">Hi, I'm Ádám Sárpátki,</h1>
      <p class="subheading-regular text-gray-700 mb-14">
        an enthusiastic UX designer based in Budapest, Hungary, with a
        background in library and information science, customer service and
        translation.
      </p>
      <button class="btn">Contact Me</button>
    </div>
  </div>

  <!-- Case Studies -->
  <div
    class="
      desktop:h-496
      md:h-496
      sm:h-470
      px-4
      desktop:px-32
      md:px-6
      sm:px-4
      flex flex-row
      items-end
      justify-center
    "
  >
    <div
      class="
        desktop:pl-8
        md:pl-4
        sm:pl-4
        desktop:pt-245
        md:pt-124
        md:pr-80
        sm:pt-162
        sm:pr-276
        h-456
        desktop:w-984
        md:w-720
        sm:w-608
        flex flex-col
        items-start
        text-left
        desktop:bg-rulebook-card-desktop
        md:bg-rulebook-card-tablet
        sm:bg-rulebook-card-mobile
        filter
        bg-cover
        drop-shadow-card
      "
    >
      <h2 class="display-smaller-medium text-gray-900">D&D Rulebook</h2>
      <p class="subheading-italic text-gray-900">
        A mobile-based solution for the players of Dungeons & Dragons.
      </p>
    </div>
  </div>

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

  <!-- Footer -->
  <footer class="">
    <div class="w-full flex flex-col">
      <div
        class="
          bg-blue-800
          h-20
          justify-center
          items-center
          flex-row
          px-4
          desktop:px-32
          md:px-6
          sm:px-4
          flex
        "
      >
        <a href="" class="mx-2.5 font-body text-base text-gray-50">LinkedIn</a>
        <a href="" class="mx-2.5 font-body text-base text-gray-50">Instagram</a>
        <a href="" class="mx-2.5 font-body text-base text-gray-50">Twitter</a>
      </div>
      <div
        class="
          h-6
          bg-blue-900
          font-body
          text-xs text-gray-50
          justify-center
          items-center
          flex-row flex
          space-x-4
        "
      >
        <span>2021 © All rights reserved by Ádám Sárpátki</span> <span>|</span>
        <span><a href="">Privacy Policy</a></span>
      </div>
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

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
