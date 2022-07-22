<template>
  <!-- Hero -->

  <div class="sm:mt-72 mt-12 text-left px-4 xl:px-32 md:px-6">
    <h1 class="sm:h1-bold h2-bold text-gray-900 mb-11">
      Hi, I'm Ádám Sárpátki,
    </h1>
  </div>
  
  <div
    class="
      h-auto
      px-4
      xl:px-32
      md:px-6
      mb-72 
      text-left
    "
  >
    <div class="">
      <div class="fix-blur w-1/3 float-right pt-0 pr-0 pb-5 pl-5 [shape-outside:circle()]">
      <img
        class="rounded-full border-solid border-gray-900 border-2"
        src="/src/assets/me_2022_medium_v2.jpg"
        alt="An image of Adam Sarpatki standing in front of a white wall and smiling."
      />
    </div>
      <p class="h4-regular text-gray-900 mb-8">
        an enthusiastic UX designer based in Budapest, Hungary, with a
        professional background in library and information science, and
        translation.
      </p>
      <p class="h4-regular text-gray-900 mb-8">
        I want to solve real problems in a friendly, diverse and inclusive
        environment, with incredible people.
      </p>
      <p class="h4-regular text-gray-900 mb-8">
        Are you interested in working together?
      </p>
      <router-link to="/contact"
        ><button class="btn mt-4">Let's Talk</button></router-link
      >
    </div>
    
  </div>

  <CaseStudies />
  <Dribbble />
  <Values />
  <WorkTogether />
</template>

<script>
import WorkTogether from "./WorkTogether.vue";
import CaseStudies from "./CaseStudies.vue";
import Values from "./Values.vue";
import Dribbble from "./Dribbble.vue";

export default {
  name: "Index",
  components: {
    CaseStudies,
    Values,
    WorkTogether,
    Dribbble,
  },
};
</script>

<style scoped>
.fix-blur {
  image-rendering: -webkit-optimize-contrast;
}
</style>