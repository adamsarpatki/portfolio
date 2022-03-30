<template>
    <div class="flex flex-col">

    <GaboHeader/>
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
import GaboHeader from './components/GaboHeader.vue'
import GaboBackground from './components/GaboBackground.vue'
import GaboConclusion from './components/GaboConclusion.vue'
import GaboDefine from './components/GaboDefine.vue'
import GaboDeliver from './components/GaboDeliver.vue'
import GaboDevelop from './components/GaboDevelop.vue'
import GaboResearch from './components/GaboResearch.vue'
import GaboProcess from './components/GaboProcess.vue'

export default {
  name: "Gabo",
  components: {
    GaboHeader,
    GaboBackground,
    GaboDefine,
    GaboDeliver,
    GaboDevelop,
    GaboResearch,
    GaboProcess,
    GaboConclusion
  }
};
</script>