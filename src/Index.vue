<template>
    <!-- Hero -->
    <div class="md:h-696 h-496 sm:h-496 px-4 desktop:px-32 md:px-6 sm:px-4 flex flex-col items-center my-20 sm:my-0 sm:pt-20 sm:mb-20 md:my-0 md:pt-44">
        <div class="desktop:px-72 sm:px-4 md:px-68">
          <h1 class="sm:h1-bold h2-bold text-blue-900 mb-11">Hi, I'm Ádám Sárpátki,</h1>
          <p class="subheading-regular text-gray-700 mb-14">an enthusiastic UX designer based in Budapest, Hungary, with a background in library and information science, customer service and translation.</p>
          <router-link to="/contact"><button class="btn">Contact Me</button></router-link>
        </div>
  </div>


  <div class="relative flex flex-row items-end justify-center md:h-496 sm:h-470 px-4 desktop:px-32 md:px-6 sm:px-4 h-456">
      <router-link to="/rulebook"><div class="flex filter drop-shadow-card transition-shadow duration-500 ease-in-out hover:shadow-xl">
      <picture class="filter blur sm:filter-none opacity-75 sm:opacity-100 ">
        <source media="(max-width: 639px" srcset="/src/assets/study-card-small@2x.png">
        <source media="(max-width: 767px" srcset="/src/assets/study-card-mobile@2x.png">
        <source media="(max-width: 1439px" srcset="/src/assets/study-card-tablet@2x.png">
        <source media="(min-width: 1440px" srcset="/src/assets/study-card-desktop@2x.png">
        <img class="h-456 rounded-md" src="/src/assets/study-card-desktop@2x.png" alt="The header image of the D&D Rulebook project">
      </picture>

    <div class="absolute desktop:pl-8 md:pl-4 sm:pl-4 desktop:pt-245 md:pt-124 md:pr-80 sm:pt-162 sm:pr-276 h-456 desktop:w-984 md:w-720 sm:w-608 w-343 sm:text-left flex flex-col justify-center">
      <h2 class="display-medium-smaller text-gray-900">D&D Rulebook</h2>
      <p class="subheading-italic text-gray-900">
        A mobile-based solution for the players of Dungeons & Dragons.
      </p>
    </div>
    </div></router-link>
  </div>
  


  <WorkTogether/>
</template>

<script>
import WorkTogether from './WorkTogether.vue'

export default ({
    name: "Index",
    components: {
      WorkTogether
    },
})
</script>
