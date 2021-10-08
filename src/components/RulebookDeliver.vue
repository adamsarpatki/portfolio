<template>
  <div class="study-grid h-auto mb-16">
    <div class="desktop:col-start-1 desktop:col-end-7 col-span-full text-left">
      <h3 class="h3-bold text-gray-900 mb-7">Deliver</h3>
      <div class="">
        <h4 class="h4-medium text-gray-900">Prototyping</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            Once I thought I was happy with the low-fidelity wireframes, it was
            time to create a <b>high-fidelity prototype</b> and a
            <b>design system</b> to go with it.
          </p>
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            For the design system, I've created color styles, a typography
            guide, fields, buttons, templates, and multiple variants of every
            component. I went the extra mile, and I’ve even designed error
            messages, even though I’ve yet to use them.
          </p>
          <p class="paragraph-mobile-small font-bold desktop:paragraph-regular-bold">Check out my 
            <a
              href="https://www.figma.com/file/zHSNdDsbsXFXFytnRkAHV3/High-Fidelity-Prototype?node-id=0%3A1"
              class="text-link"
              target="_blank"
              >High-Fidelity Prototype (version 1.)</a
            >.
          </p>
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            During this process, I've started to familiarize myself with
            <b>Apple's Human Interface Guidelines</b> to make sure my designs
            were as accurate as possible, and if I'm breaking any rules, I'm
            conscious of it.
          </p>
        </div>
      </div>
      <div class="">
        <h4 class="h4-medium text-gray-900">Accessibility</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            After finishing the first version of the high-fidelity prototype, I
            started looking at it critically with accessibility in mind. I
            wanted to make sure as many people could use it as possible. So I
            have made changes to the color scheme, using WebAIM, to give more
            contrast to the pages, as well as making the font size larger,
            therefore making the text more legible.
          </p>
          <p class="paragraph-mobile-small font-bold desktop:paragraph-regular-bold">Check out my 
            <a
              href="https://www.figma.com/file/kQmg70uB9PViL3PAubin8I/Accessibility-Progress-and-Iteration"
              class="text-link"
              target="_blank"
              >FigJam board</a
            >.
          </p>
        </div>
      </div>
    </div>
    <div class="desktop:col-start-7 desktop:col-end-13 col-span-full m-auto">
      <img
        src="/src/assets/accessible-login@2x.png"
        alt="An image of how accessibility changed the design of the app"
      />
    </div>
  </div>

  <div class="grid grid-cols-12 gap-4 h-full mb-16">
    <div class="col-span-full">
      <picture>
        <source
          media="(max-width: 639px)"
          srcset="/src/assets/high-fi-banner-vertical@2x.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/high-fi-banner-vertical@2x.jpg"
        />
        <img
          class="w-full"
          src="/src/assets/high-fi-banner@2x.png"
          alt="Screens of the app before and after accessibility"
        />
      </picture>
    </div>
  </div>
  <div class="study-grid h-auto mb-16">
    <div class="desktop:col-start-1 desktop:col-end-7 col-span-full text-left">
      <h4 class="h4-medium text-gray-900">Testing</h4>
      <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          The next step was to test the prototype on some users and get
          qualitative feedback on the app’s current usability. After testing,
          I've once again employed affinity mapping to arrange user insights,
          just like in the research phase.
        </p>
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          Most of the feedback was positive, however, some areas needed
          improvement.
        </p>
        <div class="desktop:paragraph-regular paragraph-mobile-small">
          <ul class="list-disc pl-8">
            <li>
              The animation of the Search Result Modal wasn’t clear enough,
              users got confused about why the tab bar disappeared.
            </li>
            <li>
              The icon of the Browse screen did not communicate the screen’s
              functionality clearly, so users had trouble locating it.
            </li>
            <li>
              Some of the users felt that the functionality and design of the
              Browse screen could be clearer, especially since its “table of
              contents” looked drastically different than the following screen.
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      class="
        desktop:col-start-8 desktop:col-end-12
        sm:col-start-3 sm:col-end-11
        col-start-1 col-end-13
        self-center
        desktop:h-296
        pt-4
        desktop:py-0
        desktop:pt-3
        text-left rounded-md
        bg-gray-200
      "
    >
      <h5
        class="
          font-heading
          text-xl
          font-medium
          leading-6
          text-gray-900 text-center
          mb-4
        "
      >
        Overview
      </h5>
      <div
        class="pr-3 pl-5 desktop:paragraph-regular paragraph-mobile-small"
      >
        <ul class="list-disc list-inside">
          <li>7 <b>unmoderated interviews</b></li>
          <li>
            The participants were given <b>6 tasks</b> to complete in the
            prototype, and they needed to record their reactions via a
            microphone and, if possible, a webcam.
          </li>
          <li>Tools: <b>Lookback</b> and <b>Zoom</b></li>
          <li>5 participants had a software engineering/testing background</li>
          <li>2 participants were UX/UI designer students</li>
        </ul>
      </div>
    </div>
    <div class="desktop:col-start-1 desktop:col-end-7 col-span-full text-left">
      <h4 class="h4-medium text-gray-900">Iteration</h4>
      <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          Based on the feedback from the usability testing, I decided I will
          implement some changes.
        </p>
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          However, some of these meant that I had to find new ways to present
          information, so this was the perfect opportunity for me to make quite
          a few adjustments to almost every screen of the app. Since I've
          started working on this project, I've learned a lot about design, and
          I wanted my prototype to show this.
        </p>
        <p class="paragraph-mobile-small font-bold desktop:paragraph-regular-bold">Check out my 
          <a
            href="https://www.figma.com/file/XqD0EAVTg9PA58jHaM8ssQ/High-Fidelity-Prototype-Accessibility"
            class="text-link"
            target="_blank"
            >current design</a
          >.
        </p>
      </div>
    </div>

    <div
      class="desktop:col-start-1 desktop:col-end-7 text-left col-span-full sm:pl-8"
    >
      <h5 class="h5-bold text-gray-900">Better Design System</h5>
      <div class="md:pr-4 mt-2">
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          I have started to rework my design system. Some of my adjustments only
          meant reorganizing things, e.g. labeling elements differently, while
          others meant revamping buttons, fields, the tab bar, and the nav bar —
          to follow Apple's guidelines more closely. This remained a continuous
          process as I started working on other areas of the app.
        </p>
      </div>
    </div>

    <div
      class="
        desktop:col-start-7 desktop:col-end-13
        col-span-full
        text-left
        sm:pl-8
      "
    >
      <h5 class="h5-bold text-gray-900">New browsing</h5>
      <div class="sm:pr-4 mt-2">
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          Redesigned the Browse screen experience to be more like a table of
          contents, and be more compact and usable even with a large amount of
          reading material. For this, I went back to my low-fidelity prototype
          to first create a simplified version.
        </p>
      </div>
    </div>

    <div
      class="desktop:col-start-1 desktop:col-end-7 col-span-full text-left sm:pl-8"
    >
      <h5 class="h5-bold text-gray-900">Onboarding</h5>
      <div class="sm:pr-4 mt-2">
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          I wanted to make the process of signing up or signing in as easy as
          possible, and provide some useful tips for new users about how to use
          D&D Rulebook's most basic features.
        </p>
      </div>
    </div>

    <div
      class="
        desktop:col-start-7 desktop:col-end-13
        col-span-full
        text-left
        sm:pl-8
      "
    >
      <h5 class="h5-bold text-gray-900">New name</h5>
      <div class="sm:pr-4 mt-2">
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          I have renamed the app, because "Lorebook" was misleading.
        </p>
      </div>
    </div>

    <div
      class="desktop:col-start-1 desktop:col-end-7 col-span-full text-left sm:pl-8"
    >
      <h5 class="h5-bold text-gray-900">Better Animation</h5>
      <div class="sm:pr-4 mt-2">
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          Altered the animation of the Search Result Modal to indicate more
          clearly that it’s a modal.
        </p>
      </div>
    </div>

    <div
      class="
        desktop:col-start-7 desktop:col-end-13
        row-span-2
        col-span-full
        text-left
        sm:pl-8
      "
    >
      <h4 class="h5-bold text-gray-900">Cleaner Search page</h4>
      <div class="sm:pr-4 mt-2">
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          The previous version didn't follow Apple's guidelines very closely,
          and I had to figure out a better way to handle keywords and search
          results from multiple sources. I opted for table views to do this —
          it's a solution that's native to iOS, and is capable of presenting
          large amounts of list-style information.
        </p>
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          The new "Selected keywords" section's height would be fixed, making it
          so that the user can add only 3 or 4 keywords — this is something I
          haven't specified in earlier versions. Since keywords would have an
          AND relation between them, combined with the free-text search, it
          should be more than enough.
        </p>
      </div>
    </div>

    <div
      class="desktop:col-start-1 desktop:col-end-7 col-span-full text-left sm:pl-8"
    >
      <h4 class="h5-bold text-gray-900">New tab bar</h4>
      <div class="sm:pr-4 mt-2">
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          Swapped out the icon of the Browse screen to indicate a more book-like
          function and make it easier for users to recognize. I've also added
          labels to the icons of the tab bar.
        </p>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-4 h-full mb-16">
    <div class="col-span-full">
      <picture>
        <source
          media="(max-width: 639px)"
          srcset="/src/assets/final-app-banner-vertical@2x.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/final-app-banner-vertical@2x.jpg"
        />
        <img
          class="w-full"
          src="/src/assets/final-app-banner@2x.png"
          alt="Screens of the finished application."
        />
      </picture>
    </div>
  </div>
</template>

<script>
export default {
  name: "RulebookDeliver",
};
</script>