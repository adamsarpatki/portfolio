<template>
  <!-- Hero -->

  <div class="h-auto px-4 xl:px-32 md:px-6 mb-72 text-left sm:mt-72 mt-12">
    <h1
      class="sm:h1-bold h2-bold text-gray-900 mb-11"
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :delay="350"
    >
      Hi, I'm Ádám Sárpátki,
    </h1>

    <div
      class="
        fix-blur
        xl:w-1/3
        sm:w-1/2
        w-full
        sm:float-right
        pt-0
        pr-0
        sm:pb-5 sm:pl-5
        pb-11
        pl-1
        [shape-outside:circle()]
      "
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :delay="700"
    >
      <img
        class="rounded-full border-solid border-gray-900 border-2"
        src="/src/assets/me_2022_medium_v2.jpg"
        alt="An image of Adam Sarpatki standing in front of a white wall and smiling."
      />
    </div>
    <div class="">
      <p
        class="xl:h4-regular subheading-regular text-gray-900 mb-8"
        v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :delay="400"
      >
        an enthusiastic UX designer based in Budapest, Hungary, with a
        professional background in library and information science, and
        translation.
      </p>
      <p
        class="xl:h4-regular subheading-regular text-gray-900 mb-8"
        v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :delay="540"
      >
        I want to solve real problems in a friendly, diverse and inclusive
        environment, with incredible people.
      </p>
      <p
        class="xl:h4-regular subheading-regular text-gray-900 mb-8"
        v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :delay="640"
      >
        Are you interested in working together?
      </p>
    </div>
    <div
      class="flex justify-center sm:justify-start"
      v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :delay="780"
    >
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