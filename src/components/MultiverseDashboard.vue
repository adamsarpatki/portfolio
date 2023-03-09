<template>
    <div class="study-grid bg-gray-200 h-40">
    <h2 class="col-span-full self-center h2-bold text-gray-900">
      The Design
    </h2>
  </div>

  <div class="study-grid h-auto mb-12 mt-12">
    <div
      class="
        xl:col-start-1 xl:col-end-13
        col-span-full
        row-start-2
        text-left
      "
    >
      <h3 class="h3-bold text-gray-900 mb-7">Dashboard</h3>
      <div class="xl:col-start-1 xl:col-end-7">
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="paragraph-mobile-small xl:paragraph-regular">
            This is the first screen I've designed. It's basically a high-level overview of what the whole web app would be capable of, and it's also the first page you see after signing in.
          </p>
          <p class="paragraph-mobile-small xl:paragraph-regular">
            This page informed the color scheme, layout and typography of the later screens. I wanted something clean, that's not too flashy, but still thematically accurate: since this design is for a comic book store, I wanted comic books to inform the colors. And since it's for a New York chain, Spider-Man was the obvious choice.
          </p>
        </div>
      </div>
  </div>
  </div>

  <div class="grid grid-cols-12 gap-4 h-full mb-12">
    <div class="col-span-full">
      <figure>
        <picture>
          <source
            media="(max-width: 639px)"
            srcset="/src/assets/multiverse-dashboard-default@2x.png"
          />
          <source
            media="(max-width: 767px)"
            srcset="/src/assets/multiverse-dashboard-default@2x.png"
          />
          <img
            class="w-full"
            src="/src/assets/multiverse-dashboard-default@2x.png"
            alt="A dashboard shot, full with sales graph, offers, purchases, employee management."
          />
          <figcaption class="caption">
            A dashboard shot, full with sales graph, offers, purchases, employee management.
          </figcaption></picture
        >
      </figure>
    </div>
  </div>

</template>

<script>
export default {
    name: "MultiverseDashboard"
}
</script>