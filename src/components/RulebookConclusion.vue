<template>
    <div class="grid grid-cols-12 gap-4 px-32 bg-gray-300 h-40 mb-12">
    <h2 class="col-span-full self-center h2-bold text-gray-900">Conclusion</h2>
  </div>

  <div class="grid grid-cols-12 gap-4 px-32 h-auto mb-12">
    <div class="desktop:col-start-1 desktop:col-end-7 text-left">
      <h3 class="h3-bold text-gray-900 mb-7">What I’ve Learned</h3>
      <div class="px-3 pl-8 pr-4">
        <p class="paragraph-regular">
          Designing D&D Rulebook from start to finish was a thoroughly
          enjoyable, but not always easy process. It taught me a lot about the
          process of user-centered design, about the value of proper research
          and user testing, about listening to one's guts, and not being afraid
          to change something if it results in a better product.
        </p>
      </div>
    </div>

    <div class="desktop:col-start-7 desktop:col-end-13 text-left">
      <h3 class="h3-bold text-gray-900 mb-7">Next Steps</h3>
      <div class="px-3 pl-8 pr-4">
        <p class="paragraph-regular">
          I’m not done with this project yet. It still needs a lot of work and a
          lot of testing until I am willing to say it’s finished (as much as a
          project like this can ever be finished). However, I am confident that
          should I have the necessary resources to make it more than just a
          concept, it would solve a lot of problems for D&D players.
        </p>
      </div>
    </div>
  </div>

<WorkTogether/>

<div class="grid grid-cols-12 gap-4 px-32 bg-gray-300 h-40 mb-12">
    <h2 class="col-span-full self-center h2-bold text-gray-900">Resources</h2>
</div>

<div class="flex flex-row px-32 mb-16 self-center text-left">
  <div class="paragraph-regular m-auto px-80">
    <p>Sample text: <a href="https://dnd.wizards.com/articles/features/systems-reference-document-srd" target="_blank">System Reference Document</a></p>
    <p>Icons: <a href="https://www.figma.com/community/file/878585965681562011" target="_blank">Material Design Icons by smrkv</a>, <a href="https://developer.apple.com/sf-symbols/" target="_blank">SF Symbols 2</a></p>
    <p>iOS UI elements: <a href="https://www.figma.com/community/file/858143367356468985" target="_blank">(Variants) iOS & iPadOS 14 UI Kit for Figma by Joey Banks</a></p>
    <p>Blinking cursor: <a href="https://www.figma.com/community/file/905067239318782670" target="_blank">Cursors by The Human Interface</a></p>
    <p>Apple icon: <a href="https://developer.apple.com/design/human-interface-guidelines/sign-in-with-apple/overview/introduction/" target="_blank">"Sign in with Apple"</a></p>
    <p>Facebook icon: <a href="https://en.facebookbrand.com/facebookapp/" target="_blank">"Brand Resources"</a></p>
    <p>Google icon:<a href="https://developers.google.com/identity/branding-guidelines" target="_blank"> "Sign-In Branding Guidelines"</a></p>
  </div>
</div>
</template>

<script>
import WorkTogether from '../WorkTogether.vue'

export default ({
    name: "RulebookConclusion",
    components: {
      WorkTogether
    },
})
</script>