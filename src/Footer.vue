<template>
    <!-- Footer -->
  <footer class="">
    <div class="w-full flex flex-col">
      <div
        class="
          bg-blue-800
          h-20
          justify-center
          items-center
          flex-row
          px-4
          desktop:px-32
          md:px-6
          sm:px-4
          flex
        "
      >
        <a href="" class="mx-2.5 font-body text-base text-gray-50">LinkedIn</a>
        <a href="" class="mx-2.5 font-body text-base text-gray-50">Instagram</a>
        <a href="" class="mx-2.5 font-body text-base text-gray-50">Twitter</a>
      </div>
      <div
        class="
          h-6
          bg-blue-900
          font-body
          text-xs text-gray-50
          justify-center
          items-center
          flex-row flex
          space-x-4
        "
      >
        <span>2021 © All rights reserved by Ádám Sárpátki</span> <span>|</span>
        <span><a href="">Privacy Policy</a></span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>
