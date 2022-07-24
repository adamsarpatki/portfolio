<template>
  <div class="px-4 xl:px-32 md:px-6 mb-72 text-left flex flex-row gap-4">
    <div class="h-auto sm:mt-72 mt-12 md:basis-2/3">
      <h1 class="sm:h1-bold h2-bold text-gray-900 mb-11" v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :delay="350">
        How Can I Help You?
      </h1>
      <p class="subheading-regular text-gray-900 mb-8" v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :delay="400">
        I'm currently open to new job opportunities in the UX and product design
        field, so feel free to drop me an e-mail at
        <a
          href="mailto:hello@adamsarpatki.com"
          target="_blank"
          class="text-link"
          >hello@adamsarpatki.com</a
        >.
      </p>
      <p class="subheading-regular text-gray-900 mb-8" v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :delay="440">
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
    <div class="fix-blur md:visible hidden md:flex md:flex-col md:items-center md:basis-1/3 sm:mt-72 mt-12 " v-motion
      :initial="{
        opacity: 0,
        y: 100,
      }"
      :enter="{
        opacity: 1,
        y: 0,
      }"
      :delay="540">
      <img
        class="border-2 border-solid border-gray-900 rounded-full sm:pb-4 sm:pl-4 bg-gray-100 xl:h-64"
        src="/src/assets/corgi-round.png"
        alt="A drawing of an extremely cute corgi."
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
