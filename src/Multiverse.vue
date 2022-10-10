<template>
    <div class="flex flex-col">

    <MultiverseHeader/>
    <GaboBackground/>
    <GaboProcess/>
    <GaboResearch/>
    <GaboDefine/>
    <GaboDevelop/>
    <GaboDeliver/>
    <GaboConclusion/>
    </div>


</template>

<script>
import MultiverseHeader from './components/MultiverseHeader.vue'
import GaboBackground from './components/GaboBackground.vue'
import GaboConclusion from './components/GaboConclusion.vue'
import GaboDeliver from './components/GaboDeliver.vue'
import GaboDevelop from './components/GaboDevelop.vue'
import GaboResearch from './components/GaboResearch.vue'
import GaboProcess from './components/GaboProcess.vue'

export default {
  name: "Multiverse",
  components: {
    MultiverseHeader,
    GaboBackground,
    GaboDeliver,
    GaboDevelop,
    GaboResearch,
    GaboProcess,
    GaboConclusion
  }
};
</script>