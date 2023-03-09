<template>
  <div>
    <h2 class="h2-bold mb-72">Case Studies & Projects</h2>
  </div>

  <div>
    <h3 class="h3-bold mb-72">Finished</h3>
  </div>

  <div
    class="xl:px-32 px-4 flex flex-wrap xl:flex-row flex-col gap-4 justify-start items-center"
  >
    <div class="desktop:max-w-[584px] xl:max-w-[504px]">
      <div class="group relative flex flex-col mx-auto">
        <picture>
          <source
            media="(max-width: 639px)"
            srcset="/src/assets/multiverse_study_card_tall.png"
          />
          <source
            media="(max-width: 767px)"
            srcset="/src/assets/multiverse_study_card_tall.png"
          />
          <source
            media="(max-width: 1279px)"
            srcset="/src/assets/multiverse_study_card_tall.png"
          />
          <img
            class="object-cover h-auto xl:border-2 border-gray-900 xl:rounded-xl rounded-t-xl rounded-r-xl rounded-b-none border-b-0 border-x-2 border-t-2"
            srcset="/src/assets/multiverse_study_card_tall.png"
            alt="An image showing a screen of the dashboard design."
          />

          <!-- Overlay -->

          <router-link to="/multiverse">
            <div
              class="xl:absolute xl:bottom-0 xl:left-0 w-full xl:h-0 flex flex-col justify-center xl:items-center items-start xl:bg-teal-900 bg-teal-400 xl:opacity-0 xl:group-hover:h-full xl:group-hover:opacity-90 xl:duration-500 xl:rounded-xl xl:px-16 rounded-b-xl xl:border-none border-b-2 border-x-2 border-gray-900 px-6 xl:mb-0 mb-4"
            >
              <h3
                class="h3-bold xl:text-white text-gray-900 xl:mb-4 mt-4 xl:mt-0 text-left xl:text-center"
              >
                Multiverse Comics
              </h3>
              <p
                class="subheading-italic xl:text-white text-gray-900 mb-4 text-left xl:text-center"
              >
                Dashboard design for a fictional comic book store in New York.
              </p>
              <p
                class="subheading-bold xl:text-white text-gray-900 mb-4 text-left xl:text-center"
              >
                Coming soon.
              </p>
            </div></router-link
          >
        </picture>
      </div>
    </div>

    <div class="desktop:max-w-[584px] xl:max-w-[504px]">
      <div class="group relative flex flex-col mx-auto">
        <picture>
          <source
            media="(max-width: 639px)"
            srcset="/src/assets/gabo_study_card_tall.png"
          />
          <source
            media="(max-width: 767px)"
            srcset="/src/assets/gabo_study_card_tall.png"
          />
          <source
            media="(max-width: 1279px)"
            srcset="/src/assets/gabo_study_card_tall.png"
          />
          <img
            class="object-cover h-auto xl:border-2 border-gray-900 xl:rounded-xl rounded-t-xl rounded-r-xl rounded-b-none border-b-0 border-x-2 border-t-2"
            srcset="/src/assets/gabo_study_card_tall.png"
            alt="An image showing screens of GABO Publishing's redesigned website."
          />

          <!-- Overlay -->

          <router-link to="/gabo"
            ><div
              class="xl:absolute xl:bottom-0 xl:left-0 w-full xl:h-0 flex flex-col justify-center xl:items-center items-start xl:bg-teal-900 bg-teal-400 xl:opacity-0 xl:group-hover:h-full xl:group-hover:opacity-90 xl:duration-500 xl:rounded-xl xl:px-16 rounded-b-xl xl:border-none border-b-2 border-x-2 border-gray-900 px-6 xl:mb-0 mb-4"
            >
              <h3
                class="h3-bold xl:text-white text-gray-900 xl:mb-4 mt-4 xl:mt-0 text-left xl:text-center"
              >
                GABO Online Redesign
              </h3>
              <p
                class="subheading-italic xl:text-white text-gray-900 mb-4 text-left xl:text-center"
              >
                Redesigning a Hungarian publisher's website and online shop.
              </p>
            </div></router-link
          >
        </picture>
      </div>
    </div>

    <div class="desktop:max-w-[584px] xl:max-w-[504px]">
      <div class="group sm:relative flex flex-col mx-auto">
        <picture>
          <source
            media="(max-width: 639px)"
            srcset="/src/assets/rulebook_study_card_tall.png"
          />
          <source
            media="(max-width: 767px)"
            srcset="/src/assets/rulebook_study_card_tall.png"
          />
          <source
            media="(max-width: 1279px)"
            srcset="/src/assets/rulebook_study_card_tall.png"
          />
          <img
            class="object-cover h-auto xl:border-2 border-gray-900 xl:rounded-xl rounded-t-xl rounded-r-xl rounded-b-none border-b-0 border-x-2 border-t-2"
            srcset="/src/assets/rulebook_study_card_tall.png"
            alt="An image showing screens of the D&D Rulebook mobile app."
          />

          <!-- Overlay -->

          <router-link to="/rulebook"
            ><div
              class="xl:absolute xl:bottom-0 xl:left-0 w-full xl:h-0 flex flex-col justify-center xl:items-center items-start xl:bg-teal-900 bg-teal-400 xl:opacity-0 xl:group-hover:h-full xl:group-hover:opacity-90 xl:duration-500 xl:rounded-xl xl:px-16 rounded-b-xl xl:border-none border-b-2 border-x-2 border-gray-900 px-6"
            >
              <!-- Add xl:mb-0 mb-4 before adding next card -->
              <h3
                class="h3-bold xl:text-white text-gray-900 xl:mb-4 mt-4 xl:mt-0"
              >
                D&D Rulebook
              </h3>
              <p
                class="subheading-italic xl:text-white text-gray-900 mb-4 text-left xl:text-center"
              >
                A mobile-based solution for the players of Dungeons & Dragons.
              </p>
            </div></router-link
          >
        </picture>
      </div>
    </div>
  </div>

  <div>
    <h3 class="h3-bold mt-72 mb-72">Coming Soon</h3>
  </div>

  <div
    class="xl:px-32 px-4 flex flex-wrap xl:flex-row flex-col gap-4 justify-start items-center"
  >
    <div class="desktop:max-w-[584px] xl:max-w-[504px]">
      <div class="group relative flex flex-col mx-auto">
        <picture>
          <source
            media="(max-width: 639px)"
            srcset="/src/assets/upcycle_study_card_tall.png"
          />
          <source
            media="(max-width: 767px)"
            srcset="/src/assets/upcycle_study_card_tall.png"
          />
          <source
            media="(max-width: 1279px)"
            srcset="/src/assets/upcycle_study_card_tall.png"
          />
          <img
            class="object-cover h-auto xl:border-2 border-gray-900 xl:rounded-xl rounded-t-xl rounded-r-xl rounded-b-none border-b-0 border-x-2 border-t-2"
            srcset="/src/assets/upcycle_study_card_tall.png"
            alt="An image showing a logo of the Upcycle website and app design."
          />

          <!-- Overlay -->

          <div
            class="xl:absolute xl:bottom-0 xl:left-0 w-full xl:h-0 flex flex-col justify-center xl:items-center items-start xl:bg-teal-900 bg-teal-400 xl:opacity-0 xl:group-hover:h-full xl:group-hover:opacity-90 xl:duration-500 xl:rounded-xl xl:px-16 rounded-b-xl xl:border-none border-b-2 border-x-2 border-gray-900 px-6 xl:mb-0 mb-4"
          >
            <h3
              class="h3-bold xl:text-white text-gray-900 xl:mb-4 mt-4 xl:mt-0 text-left xl:text-center"
            >
              Upcycle
            </h3>
            <p
              class="subheading-italic xl:text-white text-gray-900 mb-4 text-left xl:text-center"
            >
              A new app to help sustainable consumption.
            </p>
            <p
              class="subheading-bold xl:text-white text-gray-900 mb-4 text-left xl:text-center"
            >
              Coming soon.
            </p>
          </div>
        </picture>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseStudies",
};
</script>