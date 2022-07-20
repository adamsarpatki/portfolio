<template>

  <div>
    <h2 class="h2-bold mb-72">Case Studies</h2>
  </div>

  <div class="study-grid">

<div class="col-start-1 col-end-7 h-auto">

  <div class="sm:relative flex flex-col order-last sm:order-none w-auto mx-auto">
      <picture>
        <source
          media="(max-width: 639px)"
          srcset="/src/assets/study-card-gabo-small@2x.png"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/study-card-gabo-mobile@2x.png"
        />
        <source
          media="(max-width: 1279px)"
          srcset="/src/assets/study-card-gabo-tablet@2x.png"
        />
        <img
          class="h-438 border-2 border-gray-900 rounded-xl"
          srcset="/src/assets/rulebook-redesigned-study-card.jpg"
          alt="The header image of the GABO Redesign"
        />
      </picture>
  </div>

</div>

<div class="col-start-7 col-end-13 h-auto">

<div class="sm:relative flex flex-col order-last sm:order-none w-auto mx-auto">
      <picture>
        <source
          media="(max-width: 639px)"
          srcset="/src/assets/study-card-gabo-small@2x.png"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/study-card-gabo-mobile@2x.png"
        />
        <source
          media="(max-width: 1279px)"
          srcset="/src/assets/study-card-gabo-tablet@2x.png"
        />
        <img
          class="h-438 border-2 border-gray-900 rounded-xl"
          srcset="/src/assets/gabo-redesigned-study-card.jpg"
          alt="The header image of the GABO Redesign"
        />
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