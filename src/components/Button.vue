<template>
   <div :class="style">
       <v-btn
      :color="color"
      :text-color="textColor"
      :variant="variant"
    >
      {{text}}
    </v-btn>
   </div>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      default: "",
    },
    color: {
      type: String,
      default: "primary",
    },
    textColor: {
      type: String,
      default: "white",
    },
     style: {
      type: String,
      default: "",
    },
     variant: {
      type: String,
      default: "contained",
    },
  },
 
};
</script>