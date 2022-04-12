<template>
  <div class="study-grid bg-gray-300 h-40">
    <h2 class="col-span-full px-4 md:px-0 self-center h2-bold text-gray-900">
      The Background
    </h2>
  </div>

  <div class="study-grid h-auto mt-12 desktop:mt-0 desktop:pt-56">
    <div
      class="
        desktop:col-start-1 desktop:col-end-7
        col-span-full
        row-start-1
        text-left
      "
    >
      <h3 class="h3-bold text-gray-900 mb-7">Overview</h3>
      <div class="sm:px-3 sm:pl-8 sm:pr-8">
        <p class="paragraph-mobile-small desktop:paragraph-regular">
          GABO Publishing is a Hungarian group, consisting of three publishers:
          GABO, Ciceró Könyvstúdió and Akkord. Each year they publish a lot of
          works on a lot of different topics, in multiple genres: romantic
          fiction, science fiction, fantasy, science, children’s books, YA
          books, crime fiction, non-fiction, cooking etc. I would consider them
          one of the most prolific publishing groups in the country.
        </p>
      </div>
    </div>

    <div
      class="
        desktop:pt-72 desktop:col-start-7 desktop:col-end-13
        col-span-full
        row-span-1
        text-left
      "
    >
      <div class="">
        <h4 class="h4-medium mb-4 text-gray-900">Timeline</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            About 4.5 months, from November 2021 to March 2022.
          </p>
        </div>
      </div>

      <div class="">
        <h4 class="h4-medium mb-4 text-gray-900">My Role</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            I am the sole designer on this project, doing everything myself from
            research to prototyping.
          </p>
        </div>
      </div>
    </div>
  </div>

  <div class="study-grid h-auto mb-12 mt-12 desktop:mt-0 desktop:pt-56">
    <div class="desktop:col-start-1 desktop:col-end-7 col-span-full text-left">
      <h3 class="h3-bold text-gray-900 mb-7">The Problems</h3>

      <h4 class="h4-medium mb-4 text-gray-900">Problem #1</h4>
      <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
        <p class="paragraph-mobile-small desktop:paragraph-regular">
          The design of GABO’s current online shop,
          <a href="https://www.gabo.hu/hu/" class="text-link" target="_blank"
            >GABO Online</a
          >
          is <b>severely outdated</b>. It doesn’t look or feel like a truly
          modern site, and it’s <b>not responsive</b>, so on mobile, you only
          get the desktop site, really zoomed out.
        </p>
        <p class="paragraph-mobile-small desktop:paragraph-regular">
          Just in case they update it in the future, feel free to check out the
          <a
            href="https://miro.com/app/board/o9J_loXL4Jk=/?moveToWidget=3074457366784305196&cot=14"
            class="text-link"
            target="_blank"
          >
            “Current User Flow” frame
          </a>
          on my project’s Miro board
        </p>
      </div>
    </div>

    <div
      class="
        desktop:pt-72
        col-start-1 col-end-13
        desktop:col-start-7 desktop:col-end-13
        text-left
      "
    >
      <h4 class="h4-medium mb-4 text-gray-900">Problem #2</h4>
      <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
        <p class="paragraph-mobile-small desktop:paragraph-regular">
          The publishing group <b>doesn’t have a unified branding</b>. Their
          online shop looks vastly different from their social media presence,
          Ciceró even has
          <a
            href="http://www.cicerokonyvstudio.hu/"
            class="text-link"
            target="_blank"
            >a separate website</a
          >
          where you can’t buy anything, it just advertises their books. Akkord
          doesn’t have either a website or a social media account. GABO’s
          purple-black logo is not present on GABO Online, only on their
          socials. Also,
          <b
            >it’s not immediately obvious that these three publishers operate as
            one group</b
          >. This discrepancy could be jarring for (new) customers and should be
          solved. (I can also imagine how difficult it makes things from a
          marketing perspective.)
        </p>

        
      </div>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-4 h-full mb-12">
    <div class="col-span-full">
      <figure>
        <picture>
          <source
            media="(max-width: 639px)"
            srcset="/src/assets/old-design-vertical@2x.jpg"
          />
          <source
            media="(max-width: 767px)"
            srcset="/src/assets/old-design-vertical@2x.jpg"
          />
          <img
            class="w-full"
            src="/src/assets/old-design@2x.jpg"
            alt="Screenshots of the current design of GABO Online on desktop and on mobile."
          />
        </picture>
        <figcaption class="caption">
          Screenshots of the current design of GABO Online on desktop and on
          mobile.
        </figcaption>
      </figure>
    </div>
  </div>

  <div class="study-grid h-auto mb-12">
    <div
      class="
        desktop:col-start-1 desktop:col-end-13
        col-span-full
        row-start-2
        text-left
      "
    >
      <h3 class="h3-bold text-gray-900 mb-7">Solution</h3>
      <div class="desktop:col-start-1 desktop:col-end-7">
        <h4 class="h4-medium mb-4 text-gray-900">Disclaimer</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            First and foremost, the solution I propose here is <b>a concept</b>.
            I wasn’t contacted by anyone at GABO to do this project, I did
            everything in my free time, and for no compensation whatsoever.
            During the project I paid special attention not to infringe on
            GABO’s copyright in any way - that’s why I created fictitious book
            titles and author names for my prototype. Also, I was GABO’s social
            media manager for a couple of years, and I probably know the site
            better than most users, but I’ve made a conscious effort to not base
            anything on my biases and to not fix anything that’s not truly
            broken.
          </p>
        </div>
      </div>
      <div class="desktop:col-start-1 desktop:col-end-7">
        <h4 class="h4-medium mb-4 text-gray-900">Scope</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            For a publisher, having a nice online shop is important — when
            customers buy books directly from you, you get to keep every cent,
            so it’s in your interest your shop is nice and usable. With books,
            it’s also difficult, because once you print them, you can’t sell
            those copies for more money than the price on their back covers, so
            you cannot make up the difference your distributors keep from the
            profit.
          </p>
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            <b
              >I wanted to focus mostly on redesigning GABO Online (for desktop
              and for mobile), and, to a lesser extent, on branding.</b
            >
            I’m not a graphic designer, so I felt like I shouldn’t spend too
            much time on the latter.
          </p>
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            I also knew that redesigning a whole site is a lot of work, so I set
            out to create a new home page and a new product page. But the home
            page needed some extra features, like a sign-up flow, and after the
            product page, creating the cart popup and the first stage of the
            checkout process seemed like logical next steps. So this project
            grew quite a bit as time went on...
          </p>
          <p class="paragraph-mobile-small desktop:paragraph-regular">
              While the analysis of this is beyond the scope of this project, the group’s distributor, <a
                href="https://www.facebook.com/GABOKIADO/posts/419854423071594"
                class="text-link"
                target="_blank"
                >Talentum recently launched a new site</a> called <a
                href="https://akcioskonyvek.hu/"
                class="text-link"
                target="_blank"
                >akcióskönyvek.hu</a
              >, selling their older books for a lower price. However, they don’t seem to advertise this site anywhere on GABO Online, and since it looks like <a href="https://www.gabo.hu/hu/content/5-altalanos-szerzodesi-feltetelek" class="text-link" target="_blank">GABO Online is also operated by Talentum</a>, from a product strategy perspective I think it was a weird decision to sell their books for a lower price here, and a higher price there. <b>Why not enhance GABO Online’s user experience, and try selling bargain-priced books for their existing buyers?</b> Why do users have to sign up for another site? Why create <a href="https://www.facebook.com/akcioskonyvek.hu" class="text-link" target="_blank">a separate Facebook page</a> for akcióskönyvek.hu?</p>
        </div>
      </div>
      <div class="desktop:col-start-1 desktop:col-end-7">
        <h4 class="h4-medium mb-4 text-gray-900">Branding</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            Even though branding wasn’t my main concern, I had jotted down some
            thoughts after checking out some of GABO’s competitors. As one of
            Hungary’s largest publishing groups,
            <b>
              <a
                href="https://libricsoport.hu"
                class="text-link"
                target="_blank"
                >Libri</a
              >
              should be an example to follow</b
            >, at least in many ways. This group has 5 publishers under its
            name, and while each of their websites is unique, their design is
            basically the same. So when you open one, you can immediately see
            that it’s a part of a larger entity. And their websites aren’t just
            for show: you can select books to buy, add them to your cart, and
            then buy them on their main online shop.
          </p>
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            I think GABO Online should become a main online shop like that -
            just like it is now, while also having
            <b>secondary sites for the three publishers</b>, introducing them
            and their books, authors, translators, editors. Each site could be
            unique while being similar enough to
            <b>lessen the users’ cognitive load</b>. These changes would
            <b>make the publishing group’s online presence more personal</b> and
            I think that would be invaluable.
          </p>
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            For my current design, I’ve opted for something simpler: I put some
            links about the group in the footer, and I’ve used GABO’s current
            purple-black logo as an inspiration for the colour scheme.
          </p>
        </div>
        
      </div>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-4 h-full mb-12">
    <div class="col-span-full">
      <figure>
        <picture>
          <source
            media="(max-width: 639px)"
            srcset="/src/assets/desktop-vertical@2x.jpg"
          />
          <source
            media="(max-width: 767px)"
            srcset="/src/assets/desktop-vertical@2x.jpg"
          />
          <img
            class="w-full"
            src="/src/assets/desktop@2x.jpg"
            alt="Screenshots of my redesign on desktop and on mobile."
          />
          <figcaption class="caption">
            Screenshots of my redesign on desktop and on mobile.
          </figcaption></picture
        >
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "GaboBackground",
};
</script>