<template>
 <div class="h-696 sm:h-496 px-4 desktop:px-32 md:px-6 sm:px-4 flex flex-col items-center justify-center">
        <div class="desktop:px-72 md:px-68 sm:px-27">
          <h1 class="h1-bold text-blue-900 mb-11">Let’s work together!</h1>
          <p class="subheading-regular text-gray-700 mb-14">I'm currently looking for new and exciting job opportunities in the UX field, so feel free to contact me using the form below, or on <a href="https://www.linkedin.com/in/adamsarpatki/" target="_blank">LinkedIn</a>.</p>
        </div>
  </div>
<!-- Contact Form -->
  <div class="px-4 desktop:px-32 md:px-6 sm:px-4 flex flex-col text-left items-center">
    <form>
      <label for="fname" class="subheading-regular">Full Name <span class="text-yellow-600">*</span></label><br>
      <input type="text" id="fname" name="fname" placeholder="Enter your first name and last name" class="paragraph-regular-small w-382 h-16 bg-gray-300 rounded-md mb-8 placeholder-gray-500 px-3"><br>
      <label for="email" class="subheading-regular">Email <span class="text-yellow-600">*</span></label><br>
      <input type="text" id="email" name="email" placeholder="Enter your email address" class="paragraph-regular-small w-382 h-16 bg-gray-300 rounded-md mb-8 placeholder-gray-500 px-3"><br>
      <label for="message" class="subheading-regular">Message <span class="text-yellow-600">*</span></label><br>
      <input type="text" id="message" name="message" placeholder="Enter your message here..." class="paragraph-regular-small w-382 h-60 bg-gray-300 rounded-md mb-2 placeholder-gray-500 px-3"><br>
      <input type="checkbox" id="privacy" name="privacy" value="Privacy" class="mr-2 mb-7">
      <label for="privacy" class="paragraph-regular-small mb-7">Yes, I have read and agree to the Privacy Policy.</label><br>
      <input type="submit" class="btn" value="Submit">
    </form>
  </div>
</template>

<script>
export default {
    name: "Contact"
}
</script>
