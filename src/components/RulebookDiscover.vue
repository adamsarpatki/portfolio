<template>
    <div class="grid grid-cols-12 gap-4 px-32 h-auto mb-12">
    <div class="desktop:col-start-1 desktop:col-end-7 text-left">
      <h3 class="h3-bold text-gray-900 mb-7">Discover</h3>
      <div class="px-3 pl-8 pr-4">
        <p class="paragraph-regular">
          First, I did some <b>secondary research</b> online — since there
          aren't many academic publications about the effects of the pandemic on
          TTRPGs, this step mainly consisted of reading some informal articles.
          I'm a part of the subculture I wanted to target with my app, so I've
          had some pretty solid ideas about the changes brought about by
          COVID-19.
        </p>
        <p class="paragraph-regular">
          Second, I conducted <b>primary research</b> in the form of
          <b>user interviews</b>. My goal was to learn about how casual players
          (i.e. people who do not make their living by playing and streaming the
          game) used existing digital tools for D&D 5e during game sessions. I
          wanted to learn about their current behaviors, pain points, and needs.
        </p>
        <p class="paragraph-regular">
          (As a side note, I've prepared a quantitative survey as well, but due
          to the tight deadlines of Udacity's course, I did not have the chance
          to conduct a study before moving on to ideation and the second part of
          the diamond. This is something that I will remedy in the future.)
        </p>
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
        <h4 class="h4-medium text-gray-900">Research questions</h4>
        <div class="px-3 pl-8 pr-4 mt-2">
          <p class="paragraph-regular">
            First, I decided on some overarching questions I wanted to answer by
            my user interviews. These were:
          </p>
          <div class="pl-6">
            <ul class="paragraph-regular list-disc">
              <li>
                What is essential for playing D&D?
                <ul class="list-disc list-inside">
                  <li>What are the users' current pain points?</li>
                </ul>
              </li>
              <li>
                How do players currently use the tools available for D&D?
                <ul class="list-disc list-inside">
                  <li>How do they interact with existing digital products?</li>
                </ul>
              </li>

              <li>
                Do users need another tool for D&D?
                <ul class="list-disc list-inside">
                  <li>How do users feel about existing products?</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <h4 class="h4-medium text-gray-900">Method</h4>
        <div class="px-3 pl-8 pr-4 mt-2">
          <p class="paragraph-regular">
            30-minute semi-structured interviews on Zoom to gather in-depth
            qualitative data.
          </p>
        </div>
      </div>

      <div class="">
        <h4 class="h4-medium text-gray-900">Recruiting</h4>
        <div class="px-3 pl-8 pr-4 mt-2">
          <p class="paragraph-regular">
            I have recruited 5 participants from my friends and acquaintances
            who are...
          </p>
          <div class="pl-6">
            <ul class="paragraph-regular list-disc">
              <li>Between the ages 26 and 35</li>
              <li>Play D&D at least once a month</li>
              <li>Use digital tools during game sessions</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-12 gap-4 px-32 h-auto mb-12">
    <table class="bg-gray-50 col-span-full border-collapse">
      <thead class="bg-gray-300 border text-center h-16">
        <tr>
          <th></th>
          <th>Started playing...</th>
          <th>Playing frequency nowadays</th>
          <th>Digital products they currently use</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="border border-gray-300 h-12">Participant 1</td>
          <td class="border border-gray-300 h-12">15 years ago</td>
          <td class="border border-gray-300 h-12">Once a week</td>
          <td class="border border-gray-300 h-12">
            D&D Beyond, Kobold Fight Club, 5etools, Roll20
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 h-12">Participant 2</td>
          <td class="border border-gray-300 h-12">20 years ago</td>
          <td class="border border-gray-300 h-12">Once a week</td>
          <td class="border border-gray-300 h-12">D&D Beyond</td>
        </tr>
        <tr>
          <td class="border border-gray-300 h-12">Participant 3</td>
          <td class="border border-gray-300 h-12">January 2021</td>
          <td class="border border-gray-300 h-12">Once a week</td>
          <td class="border border-gray-300 h-12">D&D Beyond, Roll20</td>
        </tr>
        <tr>
          <td class="border border-gray-300 h-12">Participant 4</td>
          <td class="border border-gray-300 h-12">2-3 years ago</td>
          <td class="border border-gray-300 h-12">Once or twice a month</td>
          <td class="border border-gray-300 h-12">
            D&D Beyond, 5th Edition Spellbook, Owlbear Rodeo
          </td>
        </tr>
        <tr>
          <td class="border border-gray-300 h-12">Participant 5</td>
          <td class="border border-gray-300 h-12">20 years ago</td>
          <td class="border border-gray-300 h-12">Bi- or triweekly</td>
          <td class="border border-gray-300 h-12">
            D&D Beyond, Roll20, Owlbear Rodeo
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: "RulebookDiscover"
}
</script>