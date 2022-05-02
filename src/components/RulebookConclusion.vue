<template>
    <div class="study-grid bg-gray-300 h-40 mb-12">
    <h2 class="col-span-full self-center h2-bold text-gray-900">Conclusion</h2>
  </div>

  <div class="study-grid h-auto">
    <div class="xl:col-start-1 xl:col-end-7 col-span-full text-left">
      <h3 class="h3-bold text-gray-900 mb-7">What I’ve Learned</h3>
      <div class="sm:px-3 sm:pl-8 sm:pr-4">
        <p class="paragraph-mobile-small xl:paragraph-regular">
          Designing D&D Rulebook from start to finish was a thoroughly
          enjoyable, but not always an easy process. It taught me a lot about the
          process of user-centered design, about the value of proper research
          and user testing, about listening to one's guts, and not being afraid
          to change something if it results in a better product.
        </p>
        <p class="paragraph-mobile-small xl:paragraph-regular">Research is something I would definitely do differently, more thoroughly now, using more techniques, not just user interviews. I would also start designing with atomic design in mind — this is something I didn't know much about when I began working on this project, but now I see that it would have made things so much easier and cleaner.</p>
      </div>
    </div>

    <div class="xl:col-start-7 xl:col-end-13 col-span-full text-left">
      <h3 class="h3-bold text-gray-900 mb-7">Next Steps</h3>
      <div class="sm:px-3 sm:pl-8 sm:pr-4">
        <p class="paragraph-mobile-small xl:paragraph-regular">
          I’m not done with this project yet. It still needs a lot of work and a lot of testing until I am willing to say it’s finished (let's be honest, no project is ever really finished). And while I cannot really provide numbers on business impact, I am confident that should I have the necessary resources to make D&D Rulebook more than just a concept, it would solve a lot of problems for D&D players.
        </p>
      </div>
    </div>
  </div>

<WorkTogether/>

<div class="study-grid bg-gray-300 h-40 mb-12">
    <h2 class="col-span-full self-center h2-bold text-gray-900">Resources</h2>
</div>

<div class="flex flex-row xl:px-32 px-4 md:px-6 sm:px-4 mb-16 self-center text-left">
  <div class="paragraph-mobile-small xl:paragraph-regular m-auto">
    <p class="">
          Research: <a href="https://miro.com/app/board/o9J_l7eYgew=/" target="_blank">Miro board</a>
    </p>
    <p class="">
            Prototypes:
            <a href="https://www.figma.com/file/XgMwHN8PArib3q6jgdnAjR/Lo-fi-prototype?node-id=0%3A1" target="_blank">Low-fidelity prototype</a>,
            <a href="https://www.figma.com/file/zHSNdDsbsXFXFytnRkAHV3/High-Fidelity-Prototype?node-id=0%3A1" target="_blank">High-Fidelity Prototype v1</a>,
            <a href="https://www.figma.com/file/XqD0EAVTg9PA58jHaM8ssQ/High-Fidelity-Prototype-Accessibility" target="_blank">Current design</a>
    </p>
    <p class="">
            
    </p>
    <p class="">
            Accessibility & usability testing: <a href="https://www.figma.com/file/kQmg70uB9PViL3PAubin8I/Accessibility-Progress-and-Iteration" target="_blank">FigJam board</a>
    </p>

    <br/>
    <p>Sample text: <a href="https://dnd.wizards.com/articles/features/systems-reference-document-srd" target="_blank">System Reference Document</a></p>
    <p>Onboarding illustrations: <a href="https://blush.design/collections/rES6I5tBfNMgTeKOCQjg/charco" target="_blank">Charco by Karthik Srinivas</a></p>
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