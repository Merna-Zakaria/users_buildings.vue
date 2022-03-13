<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col sm="3">
          <p>{{ title }}</p>
        </v-col>

        <v-col sm="6">
          <v-autocomplete
            v-model="field.selected"
            :items="field.answers"
            :label="field.label"
            :variant='field.varient'
            :value="field.selected"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Autocomplete",
  props: ["fields"],
  data() {
    return {
      field: this.fields,
    };
  },
  created() {
    this.$emit("fields", this.field);
  },
};
</script>
