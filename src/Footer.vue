<template>
  <!-- Footer -->
  <footer class="flex flex-col items-center">
    <div class="footer-container">

      <!-- Left column -->
      <div class="footer-column text-left space-y-1">
        <div class="footer-column-header">Ádám Sárpátki</div>
        <div>
          <p class="footer-regular">
            An enthusiastic UX designer based in Budapest, who wants to solve
            real problems in a friendly, diverse and inclusive environment, with
            incredible people.
          </p>
        </div>
      </div>

      <!-- Right column -->

      <div class="footer-column space-y-1">
        <div class="flex-row flex justify-end space-x-4">
          <a href="https://www.linkedin.com/in/adamsarpatki/" target="_blank">
            <vue-feather type="linkedin" class="footer-icon"></vue-feather>
          </a>

          <a href="https://dribbble.com/adamsarpatki" target="_blank">
            <vue-feather type="dribbble" class="footer-icon"></vue-feather>
          </a>

          <a href="https://www.instagram.com/adam.sarpatki/" target="_blank">
            <vue-feather type="instagram" class="footer-icon"></vue-feather>
          </a>

          <a href="https://twitter.com/adamsarpatki" target="_blank">
            <vue-feather type="twitter" class="footer-icon"></vue-feather>
          </a>
        </div>
        <div class="text-right">
          <p class="footer-regular">Designed and developed by Ádám Sárpátki.</p>
        </div>
        <div class="text-right">
          <router-link class="footer-link" to="/privacy"
            >Privacy Policy & Copyright Info</router-link
          >
        </div>
        <div class="text-right">
          <p class="footer-regular">© 2022 Ádám Sárpátki</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>
