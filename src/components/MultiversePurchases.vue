<template>

  <div class="study-grid h-auto mb-12">
    <div
      class="
        xl:col-start-1 xl:col-end-13
        col-span-full
        row-start-2
        text-left
      "
    >
      <h3 class="h3-bold text-gray-900 mb-7">Purchases</h3>
      <div class="xl:col-start-1 xl:col-end-7">
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="paragraph-mobile-small xl:paragraph-regular">
            Designing tables is always a bit of a struggle. They have to represent data in a usable way. I believe I have succeeded in designing something that achieves this requirement.
          </p>
          <p class="paragraph-mobile-small xl:paragraph-regular">
            You can order the table by the labels, like ID, Products, Date, Customer etc. While you can also filter the data entries by locations. Hovering activates a yellow highlight over the rows, while collapsing the menu on the left gives you more screen real-estate.
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
            srcset="/src/assets/multiverse-orders-default@2x.png"
          />
          <source
            media="(max-width: 767px)"
            srcset="/src/assets/multiverse-orders-default@2x.png"
          />
          <img
            class="w-full"
            src="/src/assets/multiverse-orders-default@2x.png"
            alt="A table of purchases, complete with stats."
          />
          <figcaption class="caption">
            A table of purchases, complete with stats.
          </figcaption></picture
        >
      </figure>
    </div>
    </div>

    <div class="grid grid-cols-12 gap-4 h-full mb-12">
    <div class="col-span-full">
      <figure>
        <picture>
          <source
            media="(max-width: 639px)"
            srcset="/src/assets/multiverse-orders-dropdown@2x.png"
          />
          <source
            media="(max-width: 767px)"
            srcset="/src/assets/multiverse-orders-dropdown@2x.png"
          />
          <img
            class="w-full"
            src="/src/assets/multiverse-orders-dropdown@2x.png"
            alt="A table of purchases, with an open dropdown for purchase locations."
          />
          <figcaption class="caption">
            A table of purchases, with an open dropdown for purchase locations.
          </figcaption></picture
        >
      </figure>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-4 h-full mb-12">
    <div class="col-span-full">
      <figure>
        <picture>
          <source
            media="(max-width: 639px)"
            srcset="/src/assets/multiverse-orders-hover@2x.png"
          />
          <source
            media="(max-width: 767px)"
            srcset="/src/assets/multiverse-orders-hover@2x.png"
          />
          <img
            class="w-full"
            src="/src/assets/multiverse-orders-hover@2x.png"
            alt="A table of purchases with a highlighted row, that shows how the hover effect would look."
          />
          <figcaption class="caption">
            A table of purchases with a highlighted row, that shows how the hover effect would look.
          </figcaption></picture
        >
      </figure>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-4 h-full mb-12">
    <div class="col-span-full">
      <figure>
        <picture>
          <source
            media="(max-width: 639px)"
            srcset="/src/assets/multiverse-orders-collapsed@2x.png"
          />
          <source
            media="(max-width: 767px)"
            srcset="/src/assets/multiverse-orders-collapsed@2x.png"
          />
          <img
            class="w-full"
            src="/src/assets/multiverse-orders-collapsed@2x.png"
            alt="A table of purchases, with a collapsed sidebar menu, for more space on the page."
          />
          <figcaption class="caption">
            A table of purchases, with a collapsed sidebar menu, for more space on the page.
          </figcaption></picture
        >
      </figure>
    </div>
  </div>

</template>

<script>
export default {
    name: "MultiversePurchases"
}
</script>