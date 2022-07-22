<template>
  <!-- About Me -->

  <div
    class="
      h-auto
      px-4
      xl:px-32
      md:px-6
      sm:px-4 sm:mt-72 sm:mb-72
      grid grid-cols-12
      text-left
    "
  >
    <div class="col-start-1 xl:col-end-9 col-end-13 sm:px-4 md:px-0">
      <h1 class="sm:h1-bold h2-bold text-gray-900 mb-11 col-span-full">About Me</h1>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8">
        I have a professional background in <b>library science</b>, but I’m currently
        working as a freelance literary translator and editor for several
        Hungarian publishers — at this point, I’ve worked on more than 50 books.
        I have publications ranging from fantasy novels to library science
        articles, feel free to check out the whole list if you’re interested.
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8">
        So you might ask the question: why do I want to switch to UX design?
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8">
        I think <b>a part of me was always interested in UX</b>, just didn’t have the
        word for it. But now that I’m learning more and more about it, I
        realise <b>a lot of the things a librarian does is related to UX</b>: answering
        reference questions, understanding your patrons’ needs and problems,
        organizing information using various classification systems, helping
        patrons find what they’re looking for, saving them a lot of time and
        effort. Sounds familiar?
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8">
        Since I graduated from university in 2012, I’ve encountered a lot of
        software that wasn’t user-friendly. So that taught me <b>
          how important it is to have human-centred solutions, and now I want to make a positive
          impact by creating these solutions.
        </b>
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8">
        That’s why, in March 2021, I’ve enrolled in Udacity’s UX Nanodegree
        Program. I’ve learned a lot about the concepts and processes of UX, but
        it didn’t teach me everything, so <b>
          I’m always looking for new challenges
          and projects to try my hand at.
        </b> Hey, I’ve even designed and developed
        this website by hand.
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8">
        I have a generalist mindset: I love working on complex projects from the
        research phase to development, but since written language has been such
        an integral part of my life, <b>
          I am an advocate of clear UX writing and
          good localization.
        </b>
      </p>
      <p class="paragraph-mobile-small xl:paragraph-regular text-gray-900 mb-8">
        Outside of UX, I like to spend my time knitting, cooking, and listening
        to podcasts or music. I also love playing RPGs and video games, painting
        miniatures, or drawing fantasy maps.
      </p>
      
    </div>
    <div class="xl:col-start-9 xl:col-end-13 xl:pt-72 self-top fix-blur xl:order-1 xl:justify-self-center col-span-full">
      <img
        class="rounded-full border-solid border-gray-900 border-2"
        src="/src/assets/me_2022_medium_v2.jpg"
        alt="An image of Adam Sarpatki standing in front of a white wall and smiling."
      />
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