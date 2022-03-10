<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <!-- <GoogleMap
      :disableUI="false"
      :zoom="12"
      mapType="roadmap"
      :lat="38.8977859"
      :lng="-77.0057621"
      :center="{ lat: 38.8977859, lng: -77.0057621 }"
    >
    </GoogleMap> -->
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import GoogleMap from "@/components/GoogleMap/index.vue";

@Options({
  components: {
    HelloWorld,
    GoogleMap,
  },
})
export default class HomeView extends Vue {}
</script>
