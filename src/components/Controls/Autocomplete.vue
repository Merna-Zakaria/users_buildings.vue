<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col sm="3">
          <p>{{ title || "" }}</p>
        </v-col>
        <v-col sm="6">
          <v-autocomplete
            v-model="modelValue"
            :items="items"
            :label="label"
            :value="modelValue"
            :item-text="itemText"
            :item-value="itemValue"
            :variant="variant"
            @input="$emit('update:modelValue', '$event.target.value')"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>
<script>
export default {
  name: "Autocomplete",
  props: {
    title: {
      type: String,
      defaut: "",
    },
    modelValue: {
      type: [String, Number],
      defaut: "",
    },
    items: {
      type: Array,
      defaut: "",
    },
    value: {
      type: Object,
      defaut: "",
    },
    label: {
      type: String,
      defaut: "",
    },
    variant: {
      type: String,
      defaut: "",
    },
    itemText: {
      type: String,
      defaut: "",
    },
    itemValue: {
      type: String,
      defaut: "",
    },
  },
 
};
</script>
