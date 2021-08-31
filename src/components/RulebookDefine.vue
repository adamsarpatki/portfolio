<template>
    <div class="grid grid-cols-12 gap-4 px-32 h-auto mb-12">
    <div class="desktop:col-start-1 desktop:col-end-7 text-left">
      <h3 class="h3-bold text-gray-900 mb-7">Define</h3>
      <div class="px-3 pl-8 pr-4">
        <p class="paragraph-regular">
          After the interviews, I took the insights gathered, arranged them by
          participants on a Miro board, using <b>affinity mapping</b>, then
          started clustering them based on similarities. This was a
          time-consuming process — as it should be. By iterating, I've managed
          to narrow down the prevalent themes of my findings. I could then start
          identifying problems and discoveries.
        </p>
        <p class="paragraph-regular">
          Based on this, I have asked myself the question:
        </p>
        <div class="mt-3 px-12 py-4 bg-gray-50 text-center">
          <p class="subheading-bold">
            How might we provide information about game mechanics for the
            players of Dungeons and Dragons 5th edition, so they can find
            answers to their questions more easily?
          </p>
        </div>
      </div>
    </div>
    <div
      class="
        desktop:col-start-7 desktop:col-end-13
        mt-12
        text-left
        row-span-full
      "
    >
      <div class="">
        <h4 class="h4-medium text-gray-900">Key Findings / Pain Points</h4>
        <div class="px-3 pl-8 pr-4 mt-2">
          <div class="pl-6">
            <ul class="paragraph-regular list-disc">
              <li>It's difficult to find every rule and explanation.</li>
              <li>The rules are sometimes vague or confusing.</li>
              <li>Current tools are too manual.</li>
            </ul>
          </div>
        </div>
        <div class="">
          <h4 class="h4-medium text-gray-900">Key Findings / User Behavior</h4>
          <div class="px-3 pl-8 pr-4 mt-2">
            <div class="pl-6">
              <ul class="paragraph-regular list-disc">
                <li>
                  There is an increasing need for digital tools among players.
                </li>
                <li>
                  Players use multiple digital tools to be able to do
                  everything.
                </li>
                <li>
                  Players mostly use Google to find answers to their questions.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="">
          <h4 class="h4-medium text-gray-900">Key Findings / Needs</h4>
          <div class="px-3 pl-8 pr-4 mt-2">
            <div class="pl-6">
              <ul class="paragraph-regular list-disc">
                <li>
                  Players would love to be able to see multiple resources in one
                  place.
                </li>
                <li>Users would love to search resources by keywords.</li>
                <li>
                  Players would like it if they could find often used rules
                  easily.
                </li>
                <li>Clear visual explanations are needed to help beginners.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "RulebookDefine"
}
</script>