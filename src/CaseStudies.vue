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
          class="object-cover xl:h-438 border-2 border-gray-900 rounded-xl"
          srcset="/src/assets/gabo-redesigned-study-card.jpg"
          alt="An image showing screens of GABO Publishing's redesigned website."
        />
        <div
            class="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-teal-900 opacity-0 group-hover:h-full group-hover:opacity-90 duration-500 rounded-xl px-16">
            <h3 class="h3-bold text-white mb-4">GABO Online Redesign</h3>
            <p class="subheading-italic text-white mb-4">Redesigning a Hungarian publisher's website and online shop.</p>
            <router-link to="/gabo"><p class="text-white subheading-bold text-link">Read the Case Study</p></router-link>
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
          class="object-cover xl:h-438 border-2 border-gray-900 rounded-xl"
          srcset="/src/assets/rulebook-redesigned-study-card.jpg"
          alt="An image showing screens of the D&D Rulebook mobile app."
        />
        <div
            class="absolute bottom-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-teal-900 opacity-0 group-hover:h-full group-hover:opacity-90 duration-500 rounded-xl px-16">
            <h3 class="h3-bold text-white mb-4">D&D Rulebook</h3>
            <p class="subheading-italic text-white mb-4">A mobile-based solution for the players of Dungeons & Dragons.</p>
            <router-link to="/rulebook"><p class="text-white subheading-bold text-link">Read the Case Study</p></router-link>
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