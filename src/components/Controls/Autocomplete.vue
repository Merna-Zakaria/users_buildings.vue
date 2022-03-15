<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col sm="3">
          <p>{{ field.title || '' }}</p>
        </v-col>
        <v-col sm="6">
          <v-autocomplete
            v-model= field.value
            :items= itemsArr
            :label= field.label
            :variant= field.varient
            :value= field.value
            :item-text= field.item_text
            :return_object= field.return_object
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>

  import { isProxy, toRaw } from 'vue';
export default {
  name: "Autocomplete",
  props: ["fields", 'itemsArray'],
setup(props){
  let field = props.fields
  
     let itemsArr = props.itemsArray
     let rawObject
    
// if(isProxy(props)){ //this If() block is not really necessary
//    rawObject = toRaw(props)
// }

// JSON.parse(JSON.stringify(props.fields))
 
  console.log('props', props)
  return{
   field,
   itemsArr,
   rawObject
  }
  }
};

</script>
