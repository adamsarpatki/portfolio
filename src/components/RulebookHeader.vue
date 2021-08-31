<template>
  <div class="relative">
      <!-- <img
        srcset="
          /src/assets/rulebook-header-desktop.png 1440w, 
          /src/assets/rulebook-header-tablet.png 768w,
          /src/assets/rulebook-header-mobile.png 640w,
          /src/assets/rulebook-header-iphone.png 375w
        "
        sizes="
        (max-width: 1440px) 1440px,
        (max-width: 768px) 768px,
        (max-width: 640px) 640px,
        (max-width: 375px) 375px"
        alt="The header image of the D&D Rulebook project"
      /> -->

      <picture>
        <source media="(max-width: 375px" srcset="/src/assets/rulebook-header-iphone.png">
        <source media="(min-width: 1440px" srcset="/src/assets/rulebook-header-desktop.png">
        <!-- <source media="(max-width: 767px" srcset="/src/assets/rulebook-header-mobile.png"> -->
        <source media="(max-width: 768px" srcset="/src/assets/rulebook-header-tablet.png">
        <source media="(max-width: 376px" srcset="/src/assets/rulebook-header-mobile.png">
        <!-- <source media="(max-width: 1439px" srcset="/src/assets/rulebook-header-tablet.png"> -->
        <img class="w-full" src="/src/assets/rulebook-header-desktop.png" alt="The header image of the D&D Rulebook project">
      </picture>

    <div class="absolute bottom-8 left-32 text-left">
      <h1 class="display-medium text-gray-900">D&D Rulebook</h1>
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