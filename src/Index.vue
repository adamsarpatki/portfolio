<template>
  <!-- Hero -->
  <div
    class="
      md:h-496
      h-496
      sm:h-496
      px-4
      desktop:px-32
      md:px-6
      sm:px-4
      flex flex-col
      justify-center
      items-center
      mt-6
      mb-14
      sm:mt-20
      sm:mb-20
    "
  >
    <div class="desktop:px-72 sm:px-4 md:px-68">
      <h1 class="sm:h1-bold h2-bold text-blue-900 mb-11">
        Hi, I'm Ádám Sárpátki,
      </h1>
      <p class="subheading-regular text-gray-700 mb-14 desktop:px-64">
        an enthusiastic UX designer based in Budapest, Hungary, with a
        background in library and information science, customer service and
        translation.
      </p>
      <router-link to="/about-me"
        ><button class="btn">About Me</button></router-link
      >
    </div>
  </div>

  <div
    class="
      sm:relative
      flex flex-row
      items-center
      justify-center
      md:h-496
      sm:h-470
      w-343
      sm:w-auto
      mx-auto
      sm:mx-0
      desktop:px-32
      md:px-6
      sm:px-4
      min-h-720
      rounded-md
      sm:rounded-none
      bg-rulebook
      sm:bg-transparent
      filter sm:filter-none drop-shadow-card sm:drop-shadow-none
    "
  >
    <div class="flex flex-col filter sm:drop-shadow-card order-last sm:order-none">
      <picture class="">
        <source
          media="(max-width: 639px"
          srcset="/src/assets/study-card-small@2x.png"
        />
        <source
          media="(max-width: 767px"
          srcset="/src/assets/study-card-mobile@2x.png"
        />
        <source
          media="(max-width: 1439px"
          srcset="/src/assets/study-card-tablet@2x.png"
        />
        <source
          media="(min-width: 1440px"
          srcset="/src/assets/study-card-desktop@2x.png"
        />
        <img
          class="h-456 sm:rounded-md rounded-md"
          src="/src/assets/study-card-desktop@2x.png"
          alt="The header image of the D&D Rulebook project"
        />
      </picture>

      <div
        class="
          sm:absolute
          sm:text-left
          flex flex-col
          sm:justify-center
          mt-4
          sm:mt-0
          h-full
          desktop:w-984
          md:w-3/5
          sm:w-1/2
          w-343
          desktop:left-6
          md:left-4
          md:pr-0
          sm:left-1
          sm:px-4
          order-first
          sm:order-none
          
        "
      >
        <p class="uppercase sm:paragraph-regular paragraph-regular-small desktop:mb-28 md:mb-12 sm:mb-14 mb-4">Concept / UX / Mobile App</p>
        <h2 class="sm:display-medium-smaller h1-medium text-gray-900">D&D Rulebook</h2>
        <p class="md:subheading-italic subheading-italic-small text-gray-900 desktop:mb-9 sm:mb-7 mb-5">
          A mobile-based solution for the players of Dungeons & Dragons.
        </p>
        <router-link to="/rulebook"><button class="btn">View Case Study</button></router-link>
      </div>
    </div>
  </div>

  <WorkTogether />
</template>

<script>
import WorkTogether from "./WorkTogether.vue";

export default {
  name: "Index",
  components: {
    WorkTogether,
  },
};
</script>
