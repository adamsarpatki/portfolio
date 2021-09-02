<template>
  <div class="relative">
      <picture>
        <source media="(max-width: 375px" srcset="/src/assets/rulebook-header-iphone.png">
        <source media="(min-width: 1440px" srcset="/src/assets/rulebook-header-desktop.png">
        <!-- <source media="(max-width: 767px" srcset="/src/assets/rulebook-header-mobile.png"> -->
        <source media="(max-width: 768px" srcset="/src/assets/rulebook-header-tablet.png">
        <source media="(max-width: 376px" srcset="/src/assets/rulebook-header-mobile.png">
        <!-- <source media="(max-width: 1439px" srcset="/src/assets/rulebook-header-tablet.png"> -->
        <img class="w-full" src="/src/assets/rulebook-header-desktop.png" alt="The header image of the D&D Rulebook project">
      </picture>

    <div class="absolute desktop:bottom-20 desktop:left-32 md:bottom-20 sm:bottom-6 sm:left-4 md:left-6 md:w-2/5 sm:w-3/6 md:pr-0 text-left">
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