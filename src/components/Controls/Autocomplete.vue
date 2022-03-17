<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col sm="3">
          <p>{{ field.title || "" }}</p>
        </v-col>
        <v-col sm="6">
          <v-autocomplete
            v-model="field.value"
            :items="items"
            :label="field.label"
            :item-text="field.itemText"
            :item-value="field.itemValue"
            :variant="field.variant"
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "Autocomplete",
  props:  ['fields', 'items'],
  setup(props){
    let field = props.fields
    let itemsArr = props.items
  return{
   field,
   itemsArr
  }
  }
};

</script>

