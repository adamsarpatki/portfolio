<template>
    <div class="study-grid h-auto">
    <div class="xl:col-start-1 xl:col-end-7 col-span-full text-left">
      <h3 class="h3-bold text-gray-900 mb-7">Develop</h3>
      <div class="">
        <h4 class="h4-medium text-gray-900">Ideation</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="paragraph-mobile-small xl:paragraph-regular">
            Based on this HMW question I've started to ideate on some possible
            features. All in all, I've gathered 11 possibilities, some more
            difficult than others, then arranged them on a Complexity-Value
            matrix, making sure I had a balance between features that are
            strategic and that are low-hanging fruit, to make sure I would have
            some features that are unique in the field, and some that are more
            easily built.
          </p>
        </div>
      </div>
      <div class="">
        <h4 class="h4-medium text-gray-900">Priorization</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="paragraph-mobile-small xl:paragraph-regular">
            I've then prioritized these features in a way that would make sense
            from a developing standpoint. For this whole process, I've asked the
            help of a developer to make sure my plans were realistic and
            technically doable.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="study-grid h-auto mb-16">
    <div class="xl:col-start-1 xl:col-end-7 col-span-full text-left">
      <h4 class="h4-medium text-gray-900">MVP</h4>
      <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
        <p class="paragraph-mobile-small xl:paragraph-regular">
          Next, I've determined what the Minimum Viable Product would be — what
          features the most basic version of the app should have. These features
          lay the groundwork for future updates while ensuring that D&D Rulebook
          already has tremendous value over its competitors.
        </p>
        <p class="paragraph-mobile-small xl:paragraph-regular">The chosen features are:</p>
        <ol type="1" class="list-decimal pl-8">
          <li class="xl:paragraph-regular-bold paragraph-mobile-small font-bold">
            Browse official resources
            <ul class="paragraph-mobile-small xl:paragraph-regular">
              <li>
                A more manual way to find answers, but a highly valuable and
                less complex starting place to get resources into the app.
              </li>
            </ul>
          </li>
          <li class="xl:paragraph-regular-bold paragraph-mobile-small font-bold">
            Keyword search
            <ul class="paragraph-mobile-small xl:paragraph-regular">
              <li>
                Players stated that they would like the option to search D&D
                resources by keywords. Complex to implement, but will lay the
                foundation for further options.
              </li>
            </ul>
          </li>
          <li class="xl:paragraph-regular-bold paragraph-mobile-small font-bold">
            Free-text search
            <ul class="paragraph-mobile-small xl:paragraph-regular">
              <li>
                Players like using Google to find answers. Free-text search
                shouldn't be too difficult to implement, and it's a logical next
                step.
              </li>
            </ul>
          </li>
          <li class="xl:paragraph-regular-bold paragraph-mobile-small font-bold">
            Customizable FAQ
            <ul class="paragraph-mobile-small xl:paragraph-regular">
              <li>
                Players indicated they would be interested in an FAQ
                functionality, but since every player has different problem
                areas, a customizable FAQ would be more practical. Developing it
                is a slightly complex process and not a direct continuation of
                the previous features, but it ultimately would bring more value
                than a pre-defined set of questions and answers.
              </li>
            </ul>
          </li>
        </ol>
      </div>
    </div>
    <div class="xl:col-start-7 xl:col-end-13 col-span-full">
      <img src="/src/assets/complexity-value@2x.png" alt="" />
    </div>
    <div class="xl:col-start-1 xl:col-end-7 col-span-full text-left">
      <h4 class="h4-medium text-gray-900">Early sketches</h4>
      <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
        <p class="paragraph-mobile-small xl:paragraph-regular">
          With this in place, my next step was to sketch some ideas, first by
          using the <b>Crazy Eights</b> method, then by creating
          <b>a very low-fidelity prototype</b> in Figma. I’ve iterated on it a
          few times, then conducted some usability studies, and iterated a few
          times, again, cleaning up some of the UI to better represent its
          intended functionality.
        </p>
        <p class="paragraph-mobile-small xl:paragraph-regular">
          I have started my prototype with the two main features of the app —
          browsing and searching —, trying to get a feel for the design.
        </p>
        <p class="paragraph-mobile-small xl:paragraph-regular">
          Needless to say, this changed tremendously over each iteration,
          especially since this was my first ever project, so I was learning a
          lot as I went.
        </p>
        <p class="paragraph-mobile-small font-bold xl:paragraph-regular-bold">
            Check out my <a href="https://www.figma.com/file/XgMwHN8PArib3q6jgdnAjR/Lo-fi-prototype?node-id=0%3A1" class="text-link" target="_blank">low-fidelity prototype</a>.
          </p>
      </div>
    </div>
    <div class="col-span-full m-auto">
      <img
        src="/src/assets/crazy-8-dnd.jpg"
        alt="An image of sketches for the application"
      />
    </div>
  </div>

  <div class="grid grid-cols-12 gap-4 h-full mb-16">
    <div class="col-span-full">
      <picture>
        <source media="(max-width: 639px)" srcset="/src/assets/low-fi-banner-vertical@2x.jpg">
        <source media="(max-width: 767px)" srcset="/src/assets/low-fi-banner-vertical@2x.jpg">
        <img class="w-full" src="/src/assets/low-fi-banner@2x.png" alt="An image of low-fidelity prototypes">
      </picture>
    </div>
  </div>
</template>

<script>
export default {
    name: "RulebookDevelop"
}
</script>