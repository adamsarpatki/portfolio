<template>
  <div class="study-grid bg-gray-200 h-40 mb-12">
    <h2 class="col-span-full self-center h2-bold text-gray-900">Conclusion</h2>
  </div>

  <div class="study-grid h-auto">
    <div class="xl:col-start-1 xl:col-end-13 col-span-full text-left">
      <h3 class="h3-bold text-gray-900 mb-7">What I’ve Learned</h3>
        <div class="">
        <h4 class="h4-medium mb-4 text-gray-900">Endurance</h4>
      <div class="sm:px-3 sm:pl-8 sm:pr-4">
        <p class="paragraph-mobile-small xl:paragraph-regular">
          Even though I’ve designed and developed my own website, <b>I count this
          project as my first full-blown website design</b>, with lots of moving
          parts and small details that needed attention. I enjoyed the process,
          and I think I was successful in redesigning GABO Online for the better
          (thankfully, my usability test participants expressed the same view).
          I’m sure I missed a bunch of things I never thought about, and will
          only remember them once I publish this case study for everyone to see,
          but that’s okay.
        </p>
        <p class="paragraph-mobile-small xl:paragraph-regular">
          I’ve learned that website design is an incredibly complex job, <b>these
          4.5 months were a true marathon</b>, especially as a team of one. But it
          was also enjoyable, and I’ve learned that <b>sometimes it’s good to take
          a step back</b> and try something again after a few days had passed, that
          way a solution might be instantly obvious.
        </p>
        </div>
      </div>
      <div class="">
        <h4 class="h4-medium mb-4 text-gray-900">Resource Management</h4>
      <div class="sm:px-3 sm:pl-8 sm:pr-4">
        <p class="paragraph-mobile-small xl:paragraph-regular">
          There were some things that I was thinking about doing, like creating
          an empathy map, or a user journey map, but in the end, I didn’t spend
          time on them, because for this project I felt they weren’t necessary.
          Yes, they would have been deliverables, but did I really need them?
          No. I had no stakeholders to persuade or help. This is another thing
          I’ve learned: <b>just because the process says you need something it
          doesn’t mean you have to do it if ultimately you won’t get closer to
          your goal</b>.
        </p>
        </div>
      </div>
      <div class="">
        <h4 class="h4-medium mb-4 text-gray-900">Instinct vs. Proof</h4>
      <div class="sm:px-3 sm:pl-8 sm:pr-4">
        <p class="paragraph-mobile-small xl:paragraph-regular">
          I’ve also come to the conclusion that only doing something because
          your gut tells you to, or because you think <b>“I just like it this way”
          is not enough</b>. There needs to be a balance between instinct — which
          you will probably develop with experience — and well-formed reasons.
        </p>
        <p class="paragraph-mobile-small xl:paragraph-regular">
          I like reading about best practices while sketching or even
          prototyping, to find out, for example, what the best location is for
          CTAs on a form. Most of the time, I have assumptions, but <b>it’s always
          better to find out how others solved a certain question, or if there
          are standards I should follow</b>. However, a lot of the time there are
          just too many options and explanations. And I often feel like I could
          or even should write a separate case study for each little decision I
          make. So these things were a bit overwhelming during this project. But
          I’m sure this feeling will kind of go away as I gain more experience.
        </p>
      </div>
      </div>
    </div>
  </div>

  <WorkTogether />

  <div class="study-grid bg-gray-200 h-40 mb-12">
    <h2 class="col-span-full self-center h2-bold text-gray-900">Resources</h2>
  </div>

  <div
    class="
      flex flex-row
      xl:px-32
      px-4
      md:px-6
      sm:px-4
      mb-16
      self-center
      text-left
    "
  >
    <div class="paragraph-mobile-small xl:paragraph-regular m-auto">
      <p class="">
        <a href="https://miro.com/app/board/o9J_loXL4Jk=/?share_link_id=144180012134" target="_blank" class="text-link"
          >Research</a
        >
      </p>
      <p>
        <a
          href="https://www.figma.com/proto/2ricnzWQNFa1VKvriNKnUa/GABO-Online-redesign?node-id=167%3A6008&scaling=min-zoom&page-id=167%3A5997&starting-point-node-id=167%3A6008&show-proto-sidebar=1"
          target="_blank" class="text-link"
          >Final prototype</a
        >
      </p>
        
      <br />
      <p>
        <a
          href="https://www.figma.com/community/file/1083171276892345691"
          target="_blank" class="text-link"
          >Material Design Icons</a
        >
      </p>
      <p>
        <a
          href="https://www.figma.com/community/file/922738986195002030"
          target="_blank" class="text-link"
          >iOS 15 Safari UI Kit</a
        >
      </p>
      <p>
        <a
          href="https://unsplash.com/collections/1vnTNCXD1Xw/gabo-redesign-project"
          target="_blank" class="text-link"
          >Images I've used or considered using for the project</a
        >
      </p>
      <p>
        <a
          href="https://www.figma.com/community/file/775789888359782610"
          target="_blank" class="text-link"
          >Device Mockups</a
        >
      </p>
    </div>
  </div>
</template>

<script>
import WorkTogether from "../WorkTogether.vue";

export default {
  name: "GaboConclusion",
  components: {
    WorkTogether,
  },
};
</script>