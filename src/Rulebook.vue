<template>
    <div class="flex flex-col">

    <RulebookHeader/>
    <RulebookAbout/>
    <RulebookProcess/>
    <RulebookDiscover/>
    <RulebookDefine/>
    <RulebookDevelop/>
    <RulebookDeliver/>
    <RulebookConclusion/>
    </div>


</template>

<script>
import RulebookHeader from './components/RulebookHeader.vue'
import RulebookAbout from './components/RulebookAbout.vue'
import RulebookConclusion from './components/RulebookConclusion.vue'
import RulebookDefine from './components/RulebookDefine.vue'
import RulebookDeliver from './components/RulebookDeliver.vue'
import RulebookDevelop from './components/RulebookDevelop.vue'
import RulebookDiscover from './components/RulebookDiscover.vue'
import RulebookProcess from './components/RulebookProcess.vue'

export default {
  name: "Rulebook",
  components: {
    RulebookHeader,
    RulebookAbout,
    RulebookDefine,
    RulebookDeliver,
    RulebookDevelop,
    RulebookDiscover,
    RulebookProcess,
    RulebookConclusion
  }
};
</script>