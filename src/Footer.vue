<template>
    <!-- Footer -->
  <footer class="">
    <div class="w-full flex flex-col">
      <div
        class="
          bg-blue-800
          h-auto
          items-center
          flex-col
          px-4
          xl:px-32
          md:px-6
          sm:px-4
          flex
        "
      >
      <div class="desktop:px-400 xl:px-64 md:px-166 sm:px-124 px-6 mb-8 mt-6 max-w-1184">
       <p class="h4-medium text-gray-50 mb-1">Ádám Sárpátki</p>
       <p class="footer-regular text-gray-50">An enthusiastic UX designer based in Budapest, who loves combining his attention to detail with his creativity.</p>
      </div>

       <div class="flex-row flex mb-6">

         <a href="https://www.linkedin.com/in/adamsarpatki/" target="_blank">
          <vue-feather type="linkedin" class="m-2 fill-current text-gray-50 hover:fill-current hover:text-yellow-400"></vue-feather>
         </a>

                  <a href="https://dribbble.com/adamsarpatki" target="_blank">
          <vue-feather type="dribbble" class="m-2 fill-current text-gray-50 hover:fill-current hover:text-yellow-400"></vue-feather>
         </a>

                  <a href="https://www.instagram.com/adam.sarpatki/" target="_blank">
          <vue-feather type="instagram" class="m-2 fill-current text-gray-50 hover:fill-current hover:text-yellow-400"></vue-feather>
         </a>

                  <a href="https://twitter.com/adamsarpatki" target="_blank">
          <vue-feather type="twitter" class="m-2 fill-current text-gray-50 hover:fill-current hover:text-yellow-400"></vue-feather>
         </a>
       </div>

      <div>
        <p class="text-gray-50 footer-regular mb-2">Designed and developed by Ádám Sárpátki.</p>
        <div class="mb-2"><router-link class="footer-link" to="/privacy">Privacy Policy & Copyright Info</router-link></div>
        <p class="text-gray-50 footer-regular mb-6">© 2022 Ádám Sárpátki</p>
      </div>

      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>
