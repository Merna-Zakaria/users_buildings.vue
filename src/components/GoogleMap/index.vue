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
    geojson: JSON,
  },
  setup(props) {
    // the google map object
    const map = ref(null);

    // the map element in the template
    const mapDivRef = ref(null);
    //     }

    // load in the google script
    onMounted(() => {
      // key is is the .env file
      const key = process.env.VUE_APP_GOOGLEMAPS_KEY;

      // create the script element to load
      const googleMapScript = document.createElement("SCRIPT");
      googleMapScript.setAttribute(
        "src",
        `https://maps.googleapis.com/maps/api/js?key=AIzaSyDl7gXSa1FUPaHI7mm6X6Nn9ScvfPUmUUg&callback=initMap`
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
        position: props.center,
        map: map.value,
        draggable: true,
        title: "Drag me!",
      });

      let selectedCountry = JSON.parse(props.geojson);
      map.value.data.addGeoJson(selectedCountry);
      map.value.data.setStyle({
        strokeColor: "red",
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
