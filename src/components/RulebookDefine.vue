<template>
  <div class="study-grid h-auto mb-12">
    <div class="desktop:col-start-1 desktop:col-end-7 col-span-full text-left">
      <h3 class="h3-bold text-gray-900 mb-7">Define</h3>
      <div class="sm:px-3 sm:pl-8 sm:pr-4">
        <p class="paragraph-mobile-small desktop:paragraph-regular">
          After the interviews, I took the insights gathered, and using
          <b>affinity mapping</b> I've arranged them by participants on a Miro
          board, then started clustering them based on similarities. This was a
          time-consuming process — as it should be. By iterating, I've managed
          to narrow down the prevalent themes of my findings. I could then start
          identifying problems and discoveries.</p>
          
          <p class="paragraph-mobile-small desktop:paragraph-regular">Check out my <a href="https://miro.com/app/board/o9J_l7eYgew=/" target="_blank">
           <b>Miro board</b>
        
         </a>
        </p>
        <!-- <p class="paragraph-mobile-small desktop:paragraph-regular">
          <a
            href="https://miro.com/app/board/o9J_l7eYgew=/"
            class="font-bold uppercase"
            target="_blank"
            >Check out my Miro board.</a
          >
        </p> -->
        <p class="paragraph-mobile-small desktop:paragraph-regular">
          Based on this, I have asked myself the question:
        </p>
        <div class="mt-3 md:px-12 sm:px-8 md:mx-12 px-4 py-4 bg-gray-300 rounded-md text-center">
          <p class="subheading-bold">
            How might we provide information about game mechanics for the
            players of Dungeons and Dragons 5th edition, so they can find
            answers to their questions more easily?
          </p>
        </div>
      </div>
    </div>
    <div
      class="
        desktop:col-start-7 desktop:col-end-13
        col-span-full
        desktop:mt-16
        mt-3
        text-left
      "
    >
      <div class="">
        <h4 class="h4-medium text-gray-900 mb-4">Key Findings</h4>
        <h5 class="h5-medium text-gray-900">Pain Points</h5>
        <div class="sm:px-3 pl-8 sm:pl-14 sm:pr-4 mt-2">
          <div class="">
            <ul
              class="paragraph-mobile-small desktop:paragraph-regular list-disc"
            >
              <li>It's difficult to find every rule and explanation.</li>
              <li>The rules are sometimes vague or confusing.</li>
              <li>Current tools are too manual.</li>
            </ul>
          </div>
        </div>
        <div class="">
          <h5 class="h5-medium text-gray-900">User Behavior</h5>
          <div class="sm:px-3 pl-8 sm:pl-14 sm:pr-4 mt-2">
            <div class="">
              <ul
                class="
                  paragraph-mobile-small desktop:paragraph-regular
                  list-disc
                "
              >
                <li>
                  There is an increasing need for digital tools among players.
                </li>
                <li>
                  Players use multiple digital tools to be able to do
                  everything.
                </li>
                <li>
                  Players mostly use Google to find answers to their questions.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="">
          <h5 class="h5-medium text-gray-900">User Needs</h5>
          <div class="sm:px-3 pl-8 sm:pl-14 sm:pr-4 mt-2">
            <div class="">
              <ul
                class="
                  paragraph-mobile-small desktop:paragraph-regular
                  list-disc
                "
              >
                <li>
                  Players would love to be able to see multiple resources in one
                  place.
                </li>
                <li>Users would love to search resources by keywords.</li>
                <li>
                  Players would like it if they could find often used rules
                  easily.
                </li>
                <li>Clear visual explanations are needed to help beginners.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RulebookDefine",
};
</script>