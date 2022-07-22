<template>
  <div class="sm:mt-72 mt-12 text-left px-4 xl:px-32 md:px-6">
    <h1 class="sm:h1-bold h2-bold text-gray-900 mb-11">How Can I Help You?</h1>
  </div>
  <div class="h-auto px-4 xl:px-32 md:px-6 mb-72 text-left">
    <div class="">
      <div
        class="
          fix-blur
          float-right
          w-1/3
          pt-0
          pr-0
          pb-5
          pl-5
          [shape-outside:square()]
        "
      >
        <img
          class=""
          src="/src/assets/corgi.png"
          alt="An image of Adam Sarpatki standing in front of a white wall and smiling."
        />
      </div>
      <p class="subheading-regular text-gray-900 mb-8">
        I'm currently open to new job opportunities in the UX and product design
        field, so feel free to drop me an e-mail at
        <a
          href="mailto:hello@adamsarpatki.com"
          target="_blank"
          class="text-link"
          >hello@adamsarpatki.com</a
        >.
      </p>
      <p class="subheading-regular text-gray-900 mb-8">
        You can also contact me on
        <a
          href="https://www.linkedin.com/in/adamsarpatki/"
          target="_blank"
          class="text-link"
          >LinkedIn</a
        >
        or
        <a
          href="https://dribbble.com/adamsarpatki"
          target="_blank"
          class="text-link"
          >Dribbble</a
        >.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
  components: {},
};
</script>

<style scoped>
.fix-blur {
  image-rendering: -webkit-optimize-contrast;
}
</style>
