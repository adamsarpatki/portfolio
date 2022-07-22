<template>

  <div>
    <h2 class="h2-bold mb-72">Case Studies</h2>
  </div>

  <div class="xl:px-32 md:px-4 flex xl:flex-row flex-col gap-4 justify-center items-center">



<div class="xl:basis-1/2">

<div class="group sm:relative flex flex-col mx-auto">
      <picture>
        <source
          media="(max-width: 639px)"
          srcset="/src/assets/gabo-redesigned-study-card.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/gabo-redesigned-study-card.jpg"
        />
        <source
          media="(max-width: 1279px)"
          srcset="/src/assets/gabo-redesigned-study-card.jpg"
        />
        <img
          class="object-cover xl:h-438 xl:border-2 border-gray-900 xl:rounded-xl rounded-t-xl rounded-r-xl rounded-b-none border-b-0 border-x-2 border-t-2"
          srcset="/src/assets/gabo-redesigned-study-card.jpg"
          alt="An image showing screens of GABO Publishing's redesigned website."
        />
        <div
            class="xl:absolute xl:bottom-0 xl:left-0 w-full xl:h-0 flex flex-col justify-center xl:items-center items-start xl:bg-teal-900 bg-teal-400 xl:opacity-0 xl:group-hover:h-full xl:group-hover:opacity-90 xl:duration-500 xl:rounded-xl xl:px-16 rounded-b-xl xl:border-none border-b-2 border-x-2 border-gray-900 px-6  xl:mb-0 mb-4">
            <h3 class="h3-bold xl:text-white text-gray-900 xl:mb-4 mt-4 xl:mt-0">GABO Online Redesign</h3>
            <p class="subheading-italic xl:text-white text-gray-900 mb-4">Redesigning a Hungarian publisher's website and online shop.</p>
            <router-link to="/gabo"><p class="xl:text-white text-gray-900 subheading-bold text-link xl:mb-0 mb-4">Read the Case Study</p></router-link>
        </div>
      </picture>
  </div>

</div>

<div class="xl:basis-1/2">

  <div class="group sm:relative flex flex-col mx-auto">
      <picture>
        <source
          media="(max-width: 639px)"
          srcset="/src/assets/rulebook-redesigned-study-card.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/rulebook-redesigned-study-card.jpg"
        />
        <source
          media="(max-width: 1279px)"
          srcset="/src/assets/rulebook-redesigned-study-card.jpg"
        />
        <img
          class="object-cover xl:h-438 xl:border-2 border-gray-900 xl:rounded-xl rounded-t-xl rounded-r-xl rounded-b-none border-b-0 border-x-2 border-t-2"
          srcset="/src/assets/rulebook-redesigned-study-card.jpg"
          alt="An image showing screens of the D&D Rulebook mobile app."
        />
        <div
            class="xl:absolute xl:bottom-0 xl:left-0 w-full xl:h-0 flex flex-col justify-center xl:items-center items-start xl:bg-teal-900 bg-yellow-300 xl:opacity-0 xl:group-hover:h-full xl:group-hover:opacity-90 xl:duration-500 xl:rounded-xl xl:px-16 rounded-b-xl xl:border-none border-b-2 border-x-2 border-gray-900 px-6  xl:mb-0 mb-4">
            <h3 class="h3-bold xl:text-white text-gray-900 xl:mb-4 mt-4 xl:mt-0">D&D Rulebook</h3>
            <p class="subheading-italic xl:text-white text-gray-900 mb-4">A mobile-based solution for the players of Dungeons & Dragons.</p>
            <router-link to="/rulebook"><p class="xl:text-white text-gray-900 subheading-bold text-link xl:mb-0 mb-4">Read the Case Study</p></router-link>
        </div>
      </picture>
      
  </div>

</div>

  </div>

</template>

<script>
export default {
  name: "CaseStudies",
};
</script>