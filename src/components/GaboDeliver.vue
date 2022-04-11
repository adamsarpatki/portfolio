<template>
  <div class="study-grid h-auto mb-12">
    <div class="desktop:col-start-1 desktop:col-end-13 col-span-full text-left">
      <h3 class="h3-bold text-gray-900 mb-7">Delivery</h3>
      <div class="">
        <h4 class="h4-medium mb-4 text-gray-900">Mood Board</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            While working on my low-fidelity prototype, I started to think about
            the next steps. At this stage, I still thought about delving into
            branding — I’ve even compiled some logo ideas before abandoning this
            part of my work.
          </p>
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            I’ve also realised, quite early on in the process, that the colour
            scheme of the design will be difficult to figure out. <b>The current
            colours of GABO and Ciceró just don’t work well together.</b> At least I
            couldn’t figure out a good solution. (I probably could have solved
            this problem more easily had I chosen a different hue of purple and
            green.)
          </p>
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            After realising GABO Online currently has 5 different fonts (Arial,
            Helvetica, Verdana, Times New Roman, Questrial Regular), <b>I wanted to
            simplify things</b> in this regard, too. <b>I’ve opted for a single font
            for the headers and the text — Work Sans.</b> It’s nothing fancy, but I
            think that’s why it’s perfect: there is already so much going on on
            each page that some simplicity is important.
          </p>
          <p class="paragraph-mobile-small desktop:paragraph-regular">
            Feel free to check out the
            <a
              href="https://miro.com/app/board/o9J_loXL4Jk=/?moveToWidget=3458764514297130463&cot=14"
              target="_blank"
              class="text-link"
              >“Mood Board” frame on my Miro project page</a
            >
            for more details.
          </p>
        </div>
      </div>
      <div class="">
        <h4 class="h4-medium mb-4 text-gray-900">High-Fidelity Prototype</h4>
        <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            Next, I started the longest phase of the design process: creating a
            working, high-fidelity prototype. <b>Creating font and colour styles
            was my first step.</b> To simplify matters, I finally chose <b>purple</b> as my
            main colour — in <b>the exact hue that GABO uses on social media</b> —, and
            went from there: I’ve selected multiple variants for the primary
            colour, the secondary colour, and the colours of the error and
            success states, while also selecting various shades of grey as well.
            Along the way I’ve paid attention to accessibility, using
            <a
              href="https://webaim.org/resources/contrastchecker/"
              target="_blank"
              class="text-link"
              >WebAIM</a
            >
            and
            <a href="https://whocanuse.com" target="_blank" class="text-link"
              >Who Can Use</a
            >.
          </p>
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            <b>I’ve designed a desktop and a mobile version.</b> For the latter, I’ve
            opted for the screen size of a smaller iPhone, like an iPhone 7,
            because that’s what I had on hand to check if my design looked good
            or not on a real device.
          </p>
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            I quickly realised that some parts of my low-fi prototype were way
            too small, so I had to work my way through some of these issues. All
            in all, <b>not much of my first plans changed fundamentally</b>. While
            prototyping I’ve also been doing <b>constant research to find the most
            usable solution for all my questions</b> — reading articles, looking at
            competitors of GABO Online, and checking Baymard Institute’s
            resources.
          </p>
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            Some functions were easier to design, while some were more
            difficult, requiring a lot more iteration. After the product cards,
            one of the most complex challenges was creating a page for search
            results with multiple filtering and sorting options, making sure
            both variants had the same functions and the same level of usability
            on desktop as well as on mobile.
          </p>
          <p class="desktop:paragraph-regular paragraph-mobile-small">
            It was my overall aim to <b>design a site that required little or no
            effort to learn to use</b> after using either the desktop or the mobile
            version. After running usability tests on the high-fidelity
            prototype, I think I was successful in this regard.
          </p>
        </div>
      </div>
    </div>

    <div
      class="
        desktop:col-start-4 desktop:col-end-10
        sm:col-start-3 sm:col-end-11
        col-span-full
        row-span-1
        self-center
      "
    >
      <div
        class="
          flex
          items-center
          md:px-12
          sm:px-8
          md:mx-12
          px-4
          h-48
          bg-gray-300
          rounded-md
        "
      >
        <p class="subheading-bold">
          "It's great that the mobile and desktop versions are similar.”
        </p>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-4 h-full mb-12">
    <div class="col-span-full">
      <figure><picture>
        <source
          media="(max-width: 639px)"
          srcset="/src/assets/checkout-vertical@2x.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/checkout-vertical@2x.jpg"
        />
        <img
          class="w-full"
          src="/src/assets/checkout@2x.jpg"
          alt="Frames of the checkout flow, both on desktop and mobile."
        />
      <figcaption class="caption">Frames of the checkout flow, both on desktop and mobile.</figcaption></picture></figure>
    </div>
  </div>

  <div class="study-grid h-auto mb-12">
    <div class="desktop:col-start-1 desktop:col-end-7 col-span-full text-left">
      <h4 class="h4-medium mb-4 text-gray-900">Testing</h4>
      <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-2">
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          At the beginning of February, I’ve scheduled <b>5 unmoderated interviews</b>
          with the users who previously tested the current (or old) site of GABO
          Online. This way they had some insight into how much has changed
          during the redesign. And, thankfully, they were more than happy to
          offer their honest criticisms about my work, which is always very
          appreciated.
        </p>
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          I’ve had one more conversation — <b>with my UX/UI designer friend</b> who
          couldn’t participate in this round of usability testing, so when I
          started implementing my changes based on the results of said testing,
          <b>we had a two-hour-long talk, going through everything I had done,
          examining possibilities etc.</b> This opportunity provided me with some
          invaluable insights.
        </p>
      </div>
    </div>
    <div
      class="
        flex
        desktop:col-start-7 desktop:col-end-13
        sm:col-start-3 sm:col-end-11
        col-start-1 col-end-13
        self-center
        desktop:h-48
        pt-4
        desktop:py-0 desktop:mx-12 desktop:px-8 desktop:pt-auto
        text-left
        rounded-md
        items-center
        bg-gray-200
      "
    >
      <div class="">
        <h5
          class="
            font-heading
            text-xl
            font-bold
            leading-6
            text-gray-900 text-center
            mb-4
          "
        >
          Overview
        </h5>
        <div class="pr-3 pl-5 desktop:paragraph-regular paragraph-mobile-small">
          <ul class="list-disc list-inside">
            <li>
              5 unmoderated interviews (+ 1 unstructured conversation) through
              Zoom.
            </li>
            <li>
              The participants were given 7 tasks to complete, each relating to
              a function of the design.
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="
        sm:px-3 sm:pl-8 sm:pr-4
        mt-2
        desktop:col-start-1 desktop:col-end-7
        col-span-full
        text-left
      "
    >
      <h5 class="h5-bold mb-4 mt-6 text-gray-900">Insights</h5>
      <p class="paragraph-mobile-small desktop:paragraph-regular">
        Overall, participants liked my design. They found <b>no blocking issues</b> and
        nothing that seemed too annoying. The new site even passed the
        accessibility test: they all used their own computers with different
        screen sizes, and all of them could see and read everything without
        having to zoom in on things. One of the participants was colourblind,
        and when I asked him about it, he said that the colour contrast looked
        okay to him.
      </p>
      <p class="paragraph-mobile-small desktop:paragraph-regular">
        There were, however, <b>some issues I had to address in the next iteration</b>.
        Since there was a lot of feedback from participants, after I synthesized
        the insights, I, again, colour coded them: red for high priority, orange
        for medium priority, yellow for low priority issues, and green for
        things that were good and didn’t need changing. Then <b>I’ve arranged the
        non-green post-its on a Time/Importance matrix</b> — obviously, their colour
        already showed their importance, but this way I could prioritise them
        better. It was an imperfect solution since some tasks needed more or
        less time than I predicted, either way, it made sense of the chaos, and
        gave me a starting point.
      </p>
    </div>

    <div
      class="
        sm:px-3
        sm:pl-8 sm:pr-4
        desktop:mt-16
        desktop:col-start-7 desktop:col-end-13
        col-span-full
        text-left
      "
    >
      <p class="paragraph-mobile-small desktop:paragraph-regular">
        <b>Key insights:</b>
      </p>
      <div class="sm:px-3 pl-8 sm:pl-14 sm:pr-4">
        <div class="">
          <ul
            class="paragraph-mobile-small desktop:paragraph-regular list-disc"
          >
            <li>The site is <b>much better than the old design</b>.</li>
            <li>
              It’s easy to switch between the desktop and mobile sites — if you
              know one, you know the other.
            </li>
            <li>
              The site is <b>intuitive</b> to use, nothing is in a very weird location.
            </li>
            <li>No blocking issues were present.</li>
            <li>
              The site is <b>a bit top-heavy</b>, the header could be arranged better.
              Looks a bit too industrial.
            </li>
            <li>
              Participants expected the <b>Profile icon</b> in the mobile header.
            </li>
            <li>
              Participants expected <b>“Advanced search”</b> under the Search bar.
            </li>
            <li>
              <b>Cart popup and cart page were redundant</b> since they provided
              basically the same details.
            </li>
          </ul>
        </div>
      </div>
      <p class="paragraph-mobile-small desktop:paragraph-regular">
          If you want to read more about the participants’ feedback, feel free
          to check out the
          <a
            href="https://miro.com/app/board/o9J_loXL4Jk=/?moveToWidget=3458764519551366527&cot=14"
            target="_blank"
            class="text-link"
            >“Usability Testing - New Design - Round 1” frame</a
          >
          on my Miro project page
        </p>
    </div>

    <div
      class="
        sm:col-start-3 sm:col-end-11
        desktop:col-start-4 desktop:col-end-10
        col-span-full
        row-span-1
        self-center
      "
    >
      <div
        class="
          flex
          items-center
          md:px-12
          sm:px-8
          md:mx-12
          px-4
          h-48
          bg-gray-300
          rounded-md
        "
      >
        <p class="subheading-bold">"Looks much better than the old design.”</p>
      </div>
    </div>
  </div>

    <div class="grid grid-cols-12 gap-4 h-full mb-12">
    <div class="col-span-full">
      <figure><picture>
        <source
          media="(max-width: 639px)"
          srcset="/src/assets/usability-vertical@2x.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/usability-vertical@2x.jpg"
        />
        <img
          class="w-full"
          src="/src/assets/usability@2x.jpg"
          alt="Screenshots of the post-its used to synthesize the insights after the new design's usability test."
        /><figcaption class="caption">Screenshots of the post-its used to synthesize the insights after the new design's usability test.</figcaption>
      </picture></figure>
    </div>
  </div>

  <div class="study-grid h-auto mb-12">
    <div class="desktop:col-start-1 desktop:col-end-13 col-span-full text-left">
      <h4 class="h4-medium mb-4 text-gray-900">Iteration</h4>
      <div class="sm:px-3 sm:pl-8 sm:pr-4 mt-4">
        <p class="desktop:paragraph-regular paragraph-mobile-small">
          After I gathered, synthesised and prioritized all the insights, I started to iterate on the design.
        </p>
      </div>
    </div>
    <div
      class="
        sm:px-3 sm:pl-8 sm:pr-4
        mt-2 desktop:mt-0
        desktop:col-start-1 desktop:col-end-7
        col-span-full
        text-left
      "
    >
      <h5 class="h5-bold mb-4 text-gray-900">Improved header</h5>
      <p class="paragraph-mobile-small desktop:paragraph-regular">
        I’ve changed the colours, the hover effect and the general layout of the header, according to participant feedback, to lose the industrial look and improve readability.
      </p>
      <h5 class="h5-bold mb-4 text-gray-900">Improved buttons</h5>
      <p class="paragraph-mobile-small desktop:paragraph-regular">
        Cleaned up the button styles to better represent their functionality — now the disabled button is truly grey, and there’s a secondary button for non-primary actions, and a tertiary text button for really low-importance tasks, like Empty Cart.
      </p>
            <p class="paragraph-mobile-small desktop:paragraph-regular">
        One of the reasons the CTA to buy an e-book is a secondary button is because I think for GABO Online selling e-books should not be a primary concern — at least not the way they currently sell them, via Dibook, a distributor that presumably takes a cut of the profit. Yes, those are still sales, but probably less profitable than physical books purchased directly from the publisher.
      </p>
      <h5 class="h5-bold mb-4 text-gray-900">Advanced Search on mobile</h5>
      <p class="paragraph-mobile-small desktop:paragraph-regular">
        It was difficult to find a place for Advanced Search since I didn’t find good examples of what I wanted to do. The easier solution would have been to abandon Advanced Search altogether, and just say that the Search bar will search everywhere, but that’s how the current site operates, and it’s just not that great, producing lots of irrelevant results. (Or lots of possible sales, depending on which side of the argument you stand.) I also knew that I couldn’t keep the link to the advanced search form under the Search bar on mobile, since it would be difficult to tap, and it looked horrendous if I left enough space to be easily tappable.
      </p>

      <p class="paragraph-mobile-small desktop:paragraph-regular">
        So I solved the problem by doing two things:
      </p>
      <div class="sm:px-3 pl-8 sm:pl-14 sm:pr-4 mt-2">
            <div class="">
              <ul
                class="
                  paragraph-mobile-small
                  desktop:paragraph-regular
                  list-disc
                "
              >
                <li>Users can access Advanced Search from the top of the menu if they want to use it immediately.</li>
                <li>After searching for something, users will find the link to Advanced Search at the top of the results, should they need it.</li>
              </ul>
            </div>
          </div>
        <p class="paragraph-mobile-small desktop:paragraph-regular">
        It’s not a perfect solution — it requires one extra tap from users — but I think this is where nice design meets usability and results in a compromise.
      </p>
      
    </div>

    <div
      class="
        sm:px-3 sm:pl-8 sm:pr-4
        mt-2 desktop:mt-0
        desktop:col-start-7 desktop:col-end-13
        col-span-full
        text-left
      "
    >
      <h5 class="h5-bold mb-4 text-gray-900">Profile icon</h5>
      <p class="paragraph-mobile-small desktop:paragraph-regular">
        I’ve rearranged the header and the menu of the mobile design, so now the user profile can be accessed from the top right of the page.
      </p>
      <h5 class="h5-bold mb-4 text-gray-900">Product carousel</h5>
      <p class="paragraph-mobile-small desktop:paragraph-regular">
        I got rid of it on the desktop site. While it’s a necessity on mobile since one can’t show too many rows of products to users without a deadly amount of vertical scrolling, on desktop one hardly has this problem. And a carousel would hide important products one might want to be visible. For now, I’m not worried that having a carousel on mobile would affect sales too much since every participant said that they generally shop on their computers, not on their phones. I would of course do further research about this if this project wasn’t a concept.
      </p>

      <h5 class="h5-bold mb-4 text-gray-900">Cart page</h5>
      <p class="paragraph-mobile-small desktop:paragraph-regular">
        I’ve abandoned the cart page. The cart popup is more than enough to show every necessary detail about the products in your cart, so when you click “Checkout”, it starts the checkout process immediately. Users can always open the cart popup again if they needed it.
      </p>
      <h5 class="h5-bold mb-4 text-gray-900">Filters & categories</h5>
      <p class="paragraph-mobile-small desktop:paragraph-regular">
        I have reworked this functionality in both the desktop and the mobile design since it caused some confusion among the participants. Now when they select some filters, the “Filters” button will show them how many are selected already, and when they choose a category, breadcrumbs will appear on top of the page heading, so that people know where they are at any given time. I was already using breadcrumbs for the product pages, so it made sense to reuse the function, and not come up with a different solution. And breadcrumbs could be used on both the desktop and the mobile site, which would probably make a developer’s job much easier.
      </p>
      <h5 class="h5-bold mb-4 text-gray-900">Smaller changes</h5>
      <div class="sm:px-3 pl-8 sm:pl-14 sm:pr-4 mt-2">
            <div class="">
              <ul
                class="
                  paragraph-mobile-small
                  desktop:paragraph-regular
                  list-disc
                "
              >
                <li>New cart icon</li>
                <li>Made error states for the sign-up and sign-in flows bolder, and thus more visible</li>
                <li>Added purple sidebars to each page of the desktop design, for more, but not overwhelming visual interest</li>
                <li>Changed the newsletter sign-up form to adhere to GDPR regulations</li>
                <li>Reworked the footer of the mobile design to be more readable/usable</li>
                <li>Fixed some alignment issues on the product page</li>
              </ul>
            </div>
          </div>
    </div>
    </div>

<div class="grid grid-cols-12 gap-4 h-full mb-12">
    <div class="col-span-full">
      <figure><picture>
        <source
          media="(max-width: 639px)"
          srcset="/src/assets/iteration-vertical@2x.jpg"
        />
        <source
          media="(max-width: 767px)"
          srcset="/src/assets/iteration-vertical@2x.jpg"
        />
        <img
          class="w-full"
          src="/src/assets/iteration@2x.jpg"
          alt="Examples to show my iteration on both the desktop and the mobile design, showing changes to the cart page, the filters and categories, and the mobile menu and header."
        /><figcaption class="caption">Examples to show my iteration on both the desktop and the mobile design, showing changes to the cart page, the filters and categories, and the mobile menu and header.</figcaption>
      </picture></figure>
    </div>
  </div>

<div class="study-grid h-auto mb-12">
<div
      class="
        sm:col-start-3 sm:col-end-11
        desktop:col-start-4 desktop:col-end-10
        col-span-full
        row-span-1
        self-center
      "
    >
      <div
        class="
          flex
          items-center
          md:px-12
          sm:px-8
          md:mx-12
          px-4
          h-48
          bg-gray-300
          rounded-md
        "
      >
        <p class="subheading-bold">Feel free to check out the final prototype by <a href="https://www.figma.com/proto/2ricnzWQNFa1VKvriNKnUa/GABO-Online-redesign?node-id=167%3A6008&scaling=min-zoom&page-id=167%3A5997&starting-point-node-id=167%3A6008&show-proto-sidebar=1" target="_blank" class="text-link">clicking here.</a></p>
      </div>
    </div>
</div>

</template>

<script>
export default {
  name: "GaboDeliver",
};
</script>