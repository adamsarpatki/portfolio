<template>
  <!-- About Me -->


<div class="sm:mt-72 mt-12 text-left px-4
      xl:px-32
      md:px-6">
      <h1 class="sm:h1-bold h2-bold text-gray-900 mb-11" v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :delay="350">About Me</h1>
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
        <div class="fix-blur xl:w-1/3 w-1/2 float-right pt-0 pr-0 sm:pb-5 sm:pl-5 pb-2 pl-2 [shape-outside:circle()]" v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :delay="700">
        <img
          class="rounded-full border-solid border-gray-900 border-2"
          src="/src/assets/adam_sarpatki_on_a_bench.jpg"
          alt="An image of Adam Sarpatki standing in front of a white wall and smiling."
        />
      </div>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8" v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :delay="400">
        I have a professional background in <b>library science</b>, but I’m currently
        working as a freelance literary translator and editor for several
        Hungarian publishers — at this point, I’ve worked on more than 50 books.
        I have publications ranging from fantasy novels to library science
        articles, <a href="/src/assets/Publications_by_AdamSarpatki.pdf" target="_blank" class="text-link">feel free to check out the whole list if you’re interested.</a>
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8" v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :delay="440">
        So you might ask the question: why do I want to switch to UX design?
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8" v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :delay="480">
        I think <b>a part of me was always interested in UX</b>, just didn’t have the
        word for it. But now that I’m learning more and more about it, I
        realise <b>a lot of the things a librarian does is related to UX</b>: answering
        reference questions, understanding your patrons’ needs and problems,
        organizing information using various classification systems, helping
        patrons find what they’re looking for, saving them a lot of time and
        effort. Sounds familiar?
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8" v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :delay="520">
        Since I graduated from university in 2012, I’ve encountered a lot of
        software that wasn’t user-friendly. So that taught me <b>
          how important it is to have human-centred solutions, and now I want to make a positive
          impact by creating these solutions.
        </b>
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8" v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :delay="560">
        That’s why, in March 2021, I’ve enrolled in Udacity’s UX Nanodegree
        Program. I’ve learned a lot about the concepts and processes of UX, but
        it didn’t teach me everything, so <b>
          I’m always looking for new challenges
          and projects to try my hand at.
        </b> Hey, I’ve even designed and developed
        this website by hand.
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8" v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :delay="600">
        I have a generalist mindset: I love working on complex projects from the
        research phase to development, but since written language has been such
        an integral part of my life, <b>
          I am an advocate of clear UX writing and
          good localization.
        </b>
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8" v-motion
        :initial="{
          opacity: 0,
          y: 100,
        }"
        :enter="{
          opacity: 1,
          y: 0,
        }"
        :delay="640">
        Outside of UX, I like to spend my time knitting, cooking, and listening
        to podcasts or music. I also love playing RPGs and video games, painting
        miniatures, or drawing fantasy maps.
      </p>
        
</div>

    </div>
    
  

  <Values />
  <WorkTogether />
</template>

<script>
import Values from "./Values.vue";
import WorkTogether from "./WorkTogether.vue";

export default {
  name: "AboutMe",
  components: {
    WorkTogether,
    Values,
  },
};
</script>

<style scoped>
.fix-blur {
  image-rendering: -webkit-optimize-contrast;
}
</style>