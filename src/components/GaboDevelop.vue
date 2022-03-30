<template>
  <div class="study-grid h-auto">
    <div class="desktop:col-start-1 desktop:col-end-13 col-span-full text-left mb-12">
      <h3 class="h3-bold text-gray-900 mb-7">Development</h3>
      <div class="">
        <h4 class="h4-medium text-gray-900">Persona & Audience</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            I’ve created a persona to make it easier to summarise who I was designing for. GABO Online has such a wide audience, from teenagers to grandparents that it’s not easy to pin down who their main target is — especially since I didn’t have access to their statistics, I could only deduce some things by looking at their site. So I’ve written up a persona based on my research participants and their feedback.
          </p>
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            I also knew that since their audience is so varied, my redesign shouldn’t alienate anyone. Therefore I’ve aimed for a more minimalistic approach.
          </p>
        </div>
      </div>
      <div class="">
        <h4 class="h4-medium text-gray-900">Ideation</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <h5 class="h5-bold mb-4 mt-6 text-gray-900">Inspiration</h5>
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            Before starting to sketch some ideas, I wanted some inspiration, so I went and looked for other designs and currently live sites, like Bookdepository, Barnes & Noble, Biblio.com, etc. I didn’t want to copy any given site but was interested in some nice design choices. Most of them I haven’t used in the end, but some of them made it into my final design. Of course, the commonalities of GABO’s competitors also influenced me.
          </p>
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            Feel free to check out the <a href="https://miro.com/app/board/o9J_loXL4Jk=/?moveToWidget=3458764514246330467&cot=14" target="_blank" class="text-link">“Inspiration” frame on my Miro project page</a> for more details.
          </p>
          <h5 class="h5-bold mb-4 mt-6 text-gray-900">Sketches</h5>
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            After gathering inspiration, I started sketching my ideas on paper. Interestingly enough, not the home page was the most challenging, but the product page and the product cards. Product cards needed to convey a lot of information in a very tight space, even on desktop, so I’ve sketched different versions until I was kind of happy with them. These were also the hardest to design — they took the longest since they are just so finicky. However, one of my testers said when he saw how my design showed the search results: "You did a phenomenal job on this.” So I think the time and effort was worth it.
          </p>
        </div>
      </div>
    </div>
  </div>

<div class="grid grid-cols-12 gap-4 h-full mb-12">
    <div class="col-span-full">
      <picture>
        <source
          media="(max-width: 639px)"
          srcset="/src/assets/sitemap-vertical@2x.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/sitemap-vertical@2x.jpg"
        />
        <img
          class="w-full"
          src="/src/assets/sitemap@2x.jpg"
          alt="Screenshots of the sitemaps: one for the current design, and one for my new one."
        />
      </picture>
    </div>
  </div>

<div class="study-grid h-auto">
  <div class="desktop:col-start-1 desktop:col-end-13 col-span-full text-left mb-12">
    <div class="">
          <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2 desktop:mt-0">
            <h5 class="h5-bold mb-4 mt-6 text-gray-900">Sitemap</h5>
            <p class="paragraph-mobile-small desktop:paragraph-regular">
              One thing that helped me tremendously in my ideation was creating a sitemap of the current site. Nothing fancy, just some post-its in a kind of wireframe, representing each page of the site. This also revealed some previously unknown issues, like inconsistent naming on the profile page.
            </p>
            <p class="paragraph-mobile-small desktop:paragraph-regular">
              I wanted to simplify things. No sidebar, just a header and a footer. And, if it could be avoided, no unnecessary redundancy.
            </p>
            <p class="paragraph-mobile-small desktop:paragraph-regular">
              Feel free to check out my <a href="https://miro.com/app/board/o9J_loXL4Jk=/?moveToWidget=3074457368210395158&cot=14" target="_blank" class="text-link">my sitemap frames on my Miro project page</a> for more details.
            </p>
            <h5 class="h5-bold mb-4 mt-6 text-gray-900">Card sorting or tree testing?</h5>
            <p class="paragraph-mobile-small desktop:paragraph-regular">
              For a while, I played around with the idea of doing some card sorting or tree testing sessions, but I eventually gave up on these, as I realised the site is structured quite simply, and I didn’t think it warranted the time and effort of card sorting/tree testing sessions, even if I had to rearrange some things later on.
            </p>
            <p class="paragraph-mobile-small desktop:paragraph-regular">
              One of the more complex parts of the website’s infrastructure might be how the products are sorted into categories, but that’s traditionally done by the publisher (or the editor of a given book) — and, in a way, that process is standardised to fit in with other retailers’ systems, like Bookline’s or Libri’s, and it’s not unique to GABO. How these subjects or categories are divided could probably be improved in some cases, but that should be a part of a much larger UX project.
            </p>
            <h5 class="h5-bold mb-4 mt-6 text-gray-900">Low-Fidelity Prototype</h5>
            <p class="paragraph-mobile-small desktop:paragraph-regular">
              Next, I jumped into Figma to start building a low-fi prototype. It came out quite close to what I envisioned, and it was a good exercise to work out the general layout. I haven’t really tested this prototype, but I’ve asked my developer friend for some feedback as I went along.
            </p>
          </div>
    </div>
  </div>
</div>

<div class="grid grid-cols-12 gap-4 h-full mb-12">
    <div class="col-span-full">
      <picture>
        <source
          media="(max-width: 639px)"
          srcset="/src/assets/low-fi-vertical@2x.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/low-fi-vertical@2x.jpg"
        />
        <img
          class="w-full"
          src="/src/assets/low-fi@2x.jpg"
          alt="Frames from the low-fidelity prototype, both the desktop and the mobile versions."
        />
      </picture>
    </div>
  </div>

</template>
<script>
export default {
    name: "GaboDevelop"
}
</script>