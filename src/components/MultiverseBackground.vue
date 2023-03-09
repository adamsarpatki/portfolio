<template>
    <div class="study-grid bg-gray-200 h-40">
      <h2 class="col-span-full px-4 md:px-0 self-center h2-bold text-gray-900">
        The Background
      </h2>
    </div>
  
    <div class="study-grid h-auto mt-12 mb-12 xl:mt-0 xl:pt-56">
      <div
        class="
          xl:col-start-1 xl:col-end-7
          col-span-full
          row-start-1
          text-left
        "
      >
        <h3 class="h3-bold text-gray-900 mb-7">About the Project</h3>
        <div class="sm:px-3 sm:pl-8 sm:pr-8">
          <p class="paragraph-mobile-small xl:paragraph-regular">
            I created this project as a part of <a href="https://hype4.academy/video-courses/web-design-course" target="_blank" class="text-link">Hype4 Academy's SaaS product web design course.</a> This is an admin dashboard design for a fictional New York comic book/geek store chain, Multiverse Comics. (Think of Forbidden Planet in London.)
          </p>
          <p class="paragraph-mobile-small xl:paragraph-regular">
            The whole process took a few weeks, and after that, I got some feedback from Michal, the tutor of the course. I've implemented most of his recommendations into the finished product here.
          </p>
        </div>
      </div>
  
      <div
        class="
           xl:col-start-7 xl:col-end-13
          col-span-full
          row-span-1
          text-left
        "
      >
        <div class="">
            <h3 class="h3-bold text-gray-900 mb-7">The Logo</h3>
          <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
            <p class="paragraph-mobile-small xl:paragraph-regular">
              I've designed the logo of Multiverse Comics. It's relatively simple, and represents three planets, the immense variety of comic books, and the multiverse.
            </p>
          </div>
        </div>
  
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MultiverseBackground",
  };
  </script>