<template>
    <!-- About Me -->
  <div class="px-4 xl:px-32 md:px-6 sm:px-4 sm:mt-24 pt-12 grid grid-cols-12 gap-4">
    <img class="xl:col-span-6 xl:row-span-2 xl:self-center xl:mt-0 order-3 xl:order-1 xl:w-5/6 xl:justify-self-center col-span-full mt-1 fix-blur" src="/src/assets/adam-sarpatki-bench-web.jpg" alt="Image of Adam Sarpatki sitting on a bench">
    
    <h1 class="sm:h1-bold h2-bold text-blue-900 xl:col-start-7 xl:col-end-13 xl:text-left text-center col-span-full leading-56 md:order-1 mb-5">Hi, I’m Ádám, a UX designer based in Budapest.</h1>
    <div class="xl:paragraph-regular paragraph-mobile xl:col-start-7 xl:col-end-13 col-span-full sm:text-left text-center order-2">
      <p class="mb-4">
        I have a professional background in <b>library science</b>, but I’m currently working as a freelance literary translator and editor for several Hungarian publishers — at this point, I’ve worked on more than 50 books.
      </p>
      <p class="mb-4">
        So you might ask the question: why do I want to switch to UX design?
      </p>
      <p class="mb-4">
        Well, I think <b>a part of me was always interested in UX</b>, just didn’t have the word for it. But now that I’m learning more and more about it, I realise <b>a lot of the things a librarian does is UX</b>: answering reference questions, understanding your patrons’ needs and problems, organizing information using various classification systems, helping patrons find what they’re looking for, saving them a lot of time and effort. Sounds familiar?
      </p>
      <p class="mb-4">
        Since I graduated from university in 2012, I’ve used a lot of software that wasn’t user-friendly. So that taught me <b>how important it is to have human-centred solutions, and now I want to make a positive impact by creating these solutions</b>.
      </p>
      <p class="mb-4">
        That’s why, in March 2021, I’ve enrolled in Udacity’s UX Nanodegree Program. I’ve learned a lot about the concepts and processes of UX, but it didn’t teach me everything, so <b>I’m always looking for new challenges and projects to try my hand at</b>.
      </p>
      <p class="mb-4">
        <b>I have a generalist mindset</b>: I love working on complex projects from the research phase to development.
      </p>
      <p class="mb-4">
        Outside of UX, I like to spend my time knitting, cooking, and listening to podcasts or music. I also love playing RPGs and video games, painting miniatures, or drawing fantasy maps.
      </p>
    </div>
      
    </div>
<WorkTogether/>
</template>

<script>
import WorkTogether from './WorkTogether.vue'

export default ({
    name: "AboutMe",
    components: {
      WorkTogether
    },
})
</script>

<style scoped>
.fix-blur {
    image-rendering: -webkit-optimize-contrast;
}
</style>