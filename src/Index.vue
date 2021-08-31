<template>
    <!-- Hero -->
    <div class="h-696 sm:h-496 px-4 desktop:px-32 md:px-6 sm:px-4 flex flex-col items-center mt-44">
        <div class="desktop:px-72 md:px-68 sm:px-27">
          <h1 class="h1-bold text-blue-900 mb-11">Hi, I'm Ádám Sárpátki,</h1>
          <p class="subheading-regular text-gray-700 mb-14">an enthusiastic UX designer based in Budapest, Hungary, with a background in library and information science, customer service and translation.</p>
          <button class="btn">Contact Me</button>
        </div>
  </div>

  <!-- Case Studies -->
  <div class="desktop:h-496 md:h-496 sm:h-470 px-4 desktop:px-32 md:px-6 sm:px-4 flex flex-row items-end justify-center">
    <div class="desktop:pl-8 md:pl-4 sm:pl-4 desktop:pt-245 md:pt-124 md:pr-80 sm:pt-162 sm:pr-276 h-456 desktop:w-984 md:w-720 sm:w-608 flex flex-col items-start text-left desktop:bg-rulebook-card-desktop md:bg-rulebook-card-tablet sm:bg-rulebook-card-mobile filter bg-cover drop-shadow-card">
      <router-link to="/rulebook"><h2 class="display-smaller-medium text-gray-900">D&D Rulebook</h2></router-link>
      <p class="subheading-italic text-gray-900">A mobile-based solution for the players of Dungeons & Dragons.</p>
    </div>
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
