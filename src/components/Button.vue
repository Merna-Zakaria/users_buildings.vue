<template>
   <v-btn
      :color="color"
      :text-color="textColor"
    >
      {{text}}
    </v-btn>
</template>
<script>
export default {
  name: "Button",
  props: {
    text: {
      type: String,
      defaut: "",
    },
    color: {
      type: String,
      defaut: "primary",
    },
    textColor: {
      type: String,
      defaut: "white",
    },
  },
 
};
</script>