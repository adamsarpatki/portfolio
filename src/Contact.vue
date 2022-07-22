<template>
  <div
    class="
      px-4
      h-auto
      xl:px-32
      md:px-6
      sm:px-4 sm:mt-72 sm:mb-20 xl:mb-24 
      grid grid-cols-12
      text-left
      selection:bg-yellow-200 selection:text-gray-900
    "
  >
    <div class="col-start-1 xl:col-end-8 col-end-10 sm:px-4 md:px-68 xl:px-0">
      <h1 class="sm:h1-bold h2-bold text-gray-900 mb-11">
        How Can I Help You?
      </h1>
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

    <div
      class="
        xl:col-start-8 col-start-10 col-end-13
        self-top
        fix-blur
        xl:order-1 xl:justify-self-center
        w-3/6
      "
    >
      <img
        class=""
        src="/src/assets/corgi.png"
        alt="An image of Adam Sarpatki standing in front of a white wall and smiling."
      />
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
