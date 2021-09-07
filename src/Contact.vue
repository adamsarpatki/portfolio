<template>
 <div class="px-4 desktop:px-32 md:px-6 sm:px-4 flex flex-col items-center mt-44">
        <div class="desktop:px-72 md:px-68 sm:px-27">
          <h1 class="h1-bold text-blue-900 mb-11">Let’s work together!</h1>
          <p class="subheading-regular text-gray-700 mb-124">I'm currently looking for new and exciting job opportunities in the UX field, so feel free to contact me using the form below, or on <b><a href="https://www.linkedin.com/in/adamsarpatki/" target="_blank">LinkedIn</a></b>.</p>
        </div>
  </div>
<!-- Contact Form -->
  <div class="flex flex-row justify-center">
  <form class="flex flex-col items-center text-left w-382">
    <div class="flex flex-col w-full">
      <label for="fname" class="subheading-regular">Full Name <span class="text-yellow-600">*</span></label>
      <input type="text" id="fname" name="fname" placeholder="Enter your first name and last name" class=" h-16 form-field">
    </div>
    <div class="flex flex-col w-full">
    <label for="email" class="subheading-regular">Email <span class="text-yellow-600">*</span></label>
    <input type="text" id="email" name="email" placeholder="Enter your email address" class=" h-16 form-field">
    </div>
    <div class="flex flex-col w-full">
    <label for="message" class="subheading-regular">Message <span class="text-yellow-600">*</span></label>
    <textarea id="message" name="message" placeholder="Enter your message here..." class="form-field  h-60 pt-4"></textarea>
    </div>

    <div class="flex flex-row w-full">
    <input type="checkbox" id="privacy" name="privacy" value="Privacy" class="mr-2 mb-7 self-start">
    <label for="privacy" class="paragraph-regular-small mb-7 self-start">Yes, I have read and agree to the Privacy Policy.</label>
    </div>
    <input type="submit" class="btn" value="Submit">
  </form>
  </div>

</template>

<script>
export default {
    name: "Contact"
}
</script>
