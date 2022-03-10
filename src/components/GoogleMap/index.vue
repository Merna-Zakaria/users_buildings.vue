<template>
  <div class="map" ref="mapDivRef"></div>
</template>

<script>
import { ref, onBeforeMount, onMounted } from "vue";

export default {
  name: "GoogleMap",
  props: {
    center: { lat: Number, lng: Number },
    zoom: Number,
    mapType: String,
    disableUI: Boolean,
  },
  setup(props) {
    // the google map object
    const map = ref(null);

    // the map element in the template
    const mapDivRef = ref(null);
    return marker;
    //     }

    // load in the google script
    onMounted(() => {
      // key is is the .env file
      const key = process.env.VUE_APP_GOOGLEMAPS_KEY;

      // create the script element to load
      const googleMapScript = document.createElement("SCRIPT");
      googleMapScript.setAttribute(
        "src",
        `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`
      );
      googleMapScript.setAttribute("defer", "");
      googleMapScript.setAttribute("async", "");
      document.head.appendChild(googleMapScript);
    });

    /**
     * this function is called as soon as the map is initialized
     */
    window.initMap = () => {
      map.value = new window.google.maps.Map(mapDivRef.value, {
        mapTypeId: props.mapType || "hybrid",
        zoom: props.zoom || 8,
        disableDefaultUI: props.disableUI || false,
        center: props.center || { lat: 38.0, lng: -77.01 },
      });

      var myLatlng = new google.maps.LatLng(31.2001, 29.9187);
      const marker = new google.maps.Marker({
        position: { lat: 31.2001, lng: 29.9187 },
        map: map.value,
        draggable: true,
        title: "Drag me!",
      });
  
    };

    return {
      mapDivRef,
    };
  },
};
</script>

<style lang="css" scoped>
.map {
  width: 100%;
  height: 300px;
  background-color: azure;
}
</style>
