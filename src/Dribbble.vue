<template>
  <div>
    <h2 class="h2-bold mt-20 mb-72">From Dribble</h2>
  </div>

  <div class="xl:px-32 md:px-4 flex xl:flex-row flex-col gap-4 justify-center items-center mb-72">

    <div class="xl:basis-1/3 h-auto">
      <a href="https://dribbble.com/shots/18159083-Landing-Page-Daily-UI-003" target="_blank">
      <img class="border-2 border-gray-900 hover:shadow-lg hover:shadow-yellow-500/20 rounded-xl transition duration-200 ease-in-out active:border-teal-400 active:shadow-md active:shadow-teal-600/30 fix-blur" src="/src/assets/dailyUI_day003_dribbble.png" alt="An image of a website design, for an imaginary research agency, lead by librarians."></a>
    </div>

    <div class="xl:basis-1/3 h-auto">
      <a href="https://dribbble.com/shots/16694393-Credit-Card-Checkout-Daily-UI-002" target="_blank">
      <img class="border-2 border-gray-900 hover:shadow-lg hover:shadow-yellow-500/20 rounded-xl transition duration-200 ease-in-out active:border-teal-400 active:shadow-md active:shadow-teal-600/30" src="/src/assets/dailyUI_day002.png" alt="An image of a mobile checkout flow design, for a yarn shop."></a>
    </div>

    <div class="xl:basis-1/3 h-auto">
      <a href="https://dribbble.com/shots/16685514-Sign-Up-Daily-UI-001" target="_blank">
      <img class="border-2 border-gray-900 hover:shadow-lg hover:shadow-yellow-500/20 rounded-xl transition duration-200 ease-in-out active:border-teal-400 active:shadow-md active:shadow-teal-600/30 fix-blur" src="/src/assets/dailyUI_day001.png" alt="An image of an imaginary social media site for plant and gardening enthusiasts."></a>
    </div>

  </div>
</template>

<script>
export default {
  name: "Dribble",
};
</script>


<style scoped>
.fix-blur {
  image-rendering: -webkit-optimize-contrast;
}
</style>