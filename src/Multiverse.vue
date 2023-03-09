<template>
    <div class="flex flex-col">

    <MultiverseHeader/>
    <MultiverseBackground/>
    <MultiverseDashboard/>
    <MultiversePurchases/>

    </div>


</template>

<script>
import MultiverseHeader from './components/MultiverseHeader.vue'
import MultiverseBackground from './components/MultiverseBackground.vue'
import MultiverseDashboard from './components/MultiverseDashboard.vue'
import MultiversePurchases from './components/MultiversePurchases.vue';

export default {
  name: "Multiverse",
  components: {
    MultiverseHeader,
    MultiverseBackground,
    MultiverseDashboard,
    MultiversePurchases
  }
};
</script>