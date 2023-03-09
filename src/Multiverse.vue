<template>
    <div class="flex flex-col">

    <MultiverseHeader/>
    <MultiverseBackground/>
    <MultiverseDashboard/>

    </div>


</template>

<script>
import MultiverseHeader from './components/MultiverseHeader.vue'
import MultiverseBackground from './components/MultiverseBackground.vue'
import MultiverseDashboard from './components/MultiverseDashboard.vue';

export default {
  name: "Multiverse",
  components: {
    MultiverseHeader,
    MultiverseBackground,
    MultiverseDashboard
  }
};
</script>