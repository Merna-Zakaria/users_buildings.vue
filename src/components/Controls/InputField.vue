<template>
  <v-form>
    <v-container>
      <v-row class="justify-center">
        <v-col sm="2">
          <p>{{ field.title }}</p>
        </v-col>

        <v-col sm="6">
            <v-text-field
            v-model="field.value"
            :label="field.label"
            variant='outlined'
            single-line
            maxlength="30"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "InputField",
  props:  ['fields'],
  setup(props){
    let field = props.fields
  return{
   field
  }
  }
};
</script>
