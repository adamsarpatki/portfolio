<template>
  <div class="sm:relative flex flex-col justify-center">
      <picture class="order-2 sm:order-none">
        <source media="(max-width: 639px)" srcset="/src/assets/study-header-gabo-small@2x.png">
        <source media="(max-width: 767px)" srcset="/src/assets/study-header-gabo-mobile@2x.png">
        <source media="(max-width: 1439px)" srcset="/src/assets/study-header-gabo-tablet@2x.png">
        <img class="w-full" src="/src/assets/study-header-gabo-desktop@2x.png" alt="The header image of the GABO Online redesign project">
      </picture>

    <div class="order-1 sm:order-none sm:absolute desktop:bottom-16 desktop:left-32 sm:bottom-6 sm:left-4 md:left-4 desktop:w-full md:w-3/5 sm:w-3/6 md:pr-0 px-4 pt-6 sm:text-left bg-gabo sm:bg-transparent">
      <p class="display-medium-smaller md:display-medium text-gray-900">GABO Online</p>
      <p class="subheading-italic text-gray-900">
        Redesigning a small Hungarian publisher's website and webshop.
      </p>
    </div>
  </div>

</template>

<script>
export default {
  name: "GaboHeader",
};
</script>