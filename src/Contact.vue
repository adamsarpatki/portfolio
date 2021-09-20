<template>
 <div class="px-4 desktop:px-32 md:px-6 sm:px-4 flex flex-col items-center mt-20 md:mt-44">
        <div class="desktop:px-72 md:px-68 sm:px-27">
          <h1 class="sm:h1-bold h2-bold text-blue-900 mb-11">Let’s work together!</h1>
          <p class="subheading-regular text-gray-700 mb-124">I'm currently looking for new and exciting job opportunities in the UX field, so feel free to contact me using the form below, or on <b><a href="https://www.linkedin.com/in/adamsarpatki/" target="_blank">LinkedIn</a></b>.</p>
        </div>
  </div>
<!-- Contact Form -->
  <div class="flex flex-row justify-center">
  <form class="flex flex-col items-center text-left md:w-382 sm:w-608 w-343 mb-40">
    <div class="flex flex-col w-full">
      <label for="fname" class="subheading-regular">Full Name <span class="text-yellow-600">*</span></label>
      <input type="text" id="fname" name="fname" placeholder="Enter your first name and last name" v-model="name" class=" h-16 form-field" required>
    </div>
    <div class="flex flex-col w-full">
      <label for="email" class="subheading-regular">Email <span class="text-yellow-600">*</span></label>
      <input type="text" id="email" name="email" placeholder="Enter your email address" v-model="email" class=" h-16 form-field" required>
    </div>
    <div class="flex flex-col w-full">
      <label for="message" class="subheading-regular">Message <span class="text-yellow-600">*</span></label>
      <textarea id="message" name="message" placeholder="Enter your message here..." v-model="message" class="form-field  h-60 pt-4" required></textarea>
    </div>

    <div class="flex flex-row w-full mb-7 text-left">
      <input type="checkbox" id="privacy" name="privacy" value="Privacy" class="w-5 h-5 mr-2 m-0 self-center" required>
      <label for="privacy" class="paragraph-regular m-0 self-center">Yes, I have read and agree to the <router-link to="/privacy" class="font-medium" target="_blank">Privacy Policy</router-link>.</label>
    </div>
    <input type="submit" class="btn" value="Submit" @click="cica">
  </form>
  </div>

</template>

<script>
export default {
    name: "Contact",
    data: () => {
      return {
        name: "",
        email: "",
        message: ""
      }
    },
    methods: {
      cica() {
        alert(this.message)
      }
    }
}
</script>
