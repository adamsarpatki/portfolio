<template>
  <!-- Hero -->
  <div
    class="
      h-auto
      px-4
      xl:px-32
      md:px-6
      sm:px-4
      sm:mt-72
      sm:mb-72
      grid grid-cols-12 
      text-left
      selection:bg-yellow-200 selection:text-gray-900
    "
  >
    <div class="col-start-1 col-end-9 sm:px-4 md:px-0">
      <h1 class="sm:h1-bold h2-bold text-gray-900 mb-11">
        Hi, I'm Ádám Sárpátki,
      </h1>
      <p class="h4-regular text-gray-900 mb-8">
        an enthusiastic UX designer based in Budapest, Hungary, with a
        professional background in library and information science, and
        translation.
      </p>
            <p class="h4-regular text-gray-900 mb-8">
I want to solve real problems in a friendly, diverse and inclusive environment, with incredible people.

      </p>
                  <p class="h4-regular text-gray-900 mb-8">
Are you interested in working together?
      </p>
      <router-link to="/contact"
        ><button class="btn mt-4">Let's Talk</button></router-link
      >
      
  </div>
  <div class="col-start-9 col-end-13 self-top fix-blur mt-72">
      <img class="rounded-full border-solid border-gray-900 border-2" src="/src/assets/me_2022_medium_v2.jpg" alt="An image of Adam Sarpatki standing in front of a white wall and smiling."></div>
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
    Dribbble
},
};
</script>

<style scoped>
.fix-blur {
  image-rendering: -webkit-optimize-contrast;
}
</style>