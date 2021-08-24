<template>
  <!-- <main class="h-screen bg-gray-50"> -->
  <div class="mx-4 desktop:mx-32 md:mx-6 sm:mx-4 h-full">
    <div class="pt-4 sm:pt-16 md:pt-16 desktop:pt-16 flex-col justify-center items-center sm:items-start md:items-start desktop:items-start flex">
      <div class="text-xl font-bold leading-relaxed text-blue-900 font-body">
        Ádám Sárpátki
      </div>
      <div class="leading-normal text-gray-800 font-body">UX Designer</div>
    </div>

    <div class="-my-6 sm:-my-24 md:-my-24 desktop:-my-24 flex-col justify-center items-center flex h-full flex-wrap">
      <div class="mb-4 cs-heading text-blue-800">My website is coming soon.</div>
      <div class="cs-heading text-blue-800">
        Until then, feel free to contact me on
        <a
          href="https://www.linkedin.com/in/adamsarpatki/"
          target="_blank"
          class="text-blue-600"
          >LinkedIn</a
        >.
      </div>
      <button class="btn desktop:btn:hover my-8" type="button" onclick="window.location.href='https://www.linkedin.com/in/adamsarpatki/'">Contact Me</button>
    </div>
  </div>
  <!-- </main> -->
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  height: 100%;
}
</style>