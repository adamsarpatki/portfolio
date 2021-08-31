<template>
    <div class="grid grid-cols-12 gap-4 h-456">
    <div class="absolute col-span-full">
      <img
        src="/src/assets/rulebook-header-desktop.png"
        alt="D&D Rulebook project header"
      />
    </div>

    <div class="relative col-start-2 col-end-7 pt-245 text-left">
      <h1 class="display-medium text-gray-900">D&D Rulebook</h1>
      <p class="subheading-italic text-gray-900">
        A mobile-based solution for the players of Dungeons & Dragons.
      </p>
    </div>
  </div>
</template>

<script>
export default {
    name: "RulebookHeader"
}
</script>