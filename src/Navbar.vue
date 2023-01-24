<template>
  <!-- Navbar -->
  <header
    class="
    bg-white
      xl:px-32
      md:px-6
      sm:px-4
      px-4
      sticky
      z-50
      top-0
      sm:flex
      sm:justify-between
      sm:items-center
    "
  >
    <div class="flex items-center justify-between py-3 sm:py-0 h-16">
      <router-link class="nav-link font-bold" to="/">Ádám Sárpátki</router-link>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="
            flex flex-row
            items-center
            text-gray-900
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
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="text-left sm:text-center sm:flex sm:p-0 px-2 pt-2 pb-4"
    >
        <router-link class="
            sm:text-base
            xl:text-xl
            sm:w-20
            sm:mx-2.5
            px-2
            py-1
            block
            text-gray-900
            font-subheading
            "
            to="/"><span class=" nav-link">Work</span>
        </router-link>
        <router-link  class="
            sm:text-base
            xl:text-xl
            sm:w-20
            sm:mx-2.5
            mt-1
            sm:mt-0
            block
            px-2
            py-1
            text-gray-900
            font-subheading" to="/about-me"><span class=" nav-link">About</span>
        </router-link>
        <router-link  class="
            sm:text-base
            xl:text-xl
            sm:w-20
            sm:mx-2.5
            mt-1
            sm:mt-0
            block
            px-2
            py-1
            text-gray-900
            font-subheading" to="/publications"><span class=" nav-link">Publications</span>
        </router-link>
                <router-link  class="
            sm:text-base
            xl:text-xl
            sm:w-20
            sm:mx-2.5
            mt-1
            sm:mt-0
            block
            px-2
            py-1
            text-gray-900
            font-subheading" to="/contact"><span class=" nav-link">Contact</span>
        </router-link>
        
    </nav>
  </header>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isOpen: false,
    };
  },
  watch:{
    $route () {
      this.isOpen = false;
    }
  } 
};
</script>
