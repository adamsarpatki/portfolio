<template>
  <div class="sm:relative flex flex-col justify-center">
      <picture class="order-2 sm:order-none">
        <source media="(max-width: 639px)" srcset="/src/assets/study-header-rulebook-small@2x.png">
        <source media="(max-width: 767px)" srcset="/src/assets/study-header-rulebook-mobile@2x@2x.png">
        <source media="(max-width: 1279px)" srcset="/src/assets/study-header-rulebook-tablet@2x.png">
        <source media="(max-width: 1439px)" srcset="/src/assets/study-header-rulebook-1280@2x.png">
        <img class="w-full" src="/src/assets/study-header-rulebook-desktop@2x.png" alt="The header image of the D&D Rulebook project">
      </picture>

    <div class="order-1 sm:order-none sm:absolute xl:bottom-16 xl:left-32 sm:bottom-6 sm:left-4 md:left-4 xl:w-full md:w-3/5 sm:w-3/6 md:pr-0 px-4 pt-6 sm:text-left bg-rulebook sm:bg-transparent">
      <p class="display-medium-smaller md:display-medium text-gray-900">D&D Rulebook</p>
      <p class="subheading-italic text-gray-900">
        A mobile-based solution for the players of Dungeons & Dragons.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "RulebookHeader",
};
</script>