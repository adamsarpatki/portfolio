<template>
  <div class="px-4 xl:px-32 md:px-6 mb-72 text-left flex flex-row gap-4">
    <div class="h-auto sm:mt-72 mt-12 md:basis-2/3">
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
    <div class="fix-blur md:visible hidden md:flex md:flex-col md:items-center md:basis-1/3 sm:mt-72 mt-12">
      <img
        class="h-64"
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
