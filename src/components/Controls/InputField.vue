<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col sm="3">
          <p>{{ title }}</p>
        </v-col>

        <v-col sm="6">
            <v-text-field
            v-model="field.text"
            :label="field.label"
            variant='outlined'
          ></v-text-field>
          <!-- <v-text-field
          v-model='event.title'
          :value='modelValue'
            :rules="[rules.required, rules.email]"
            :label='placeholder'
            :variant="variant"
            :error-messages= 'errorMsg' 
            single-line
            maxlength="30"
            @input="$emit('update: value', $event.target.value)"
          ></v-text-field> -->
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: "InputField",
  props:  ['fields'],
   data() {
        return {
            field: this.fields
        };
    },
      created() {
        this.$emit("fields", this.field);
    },
  // props: ['title', 'label'],
  // props:{
  //   title:{
  //     type: String,
  //     default: ''
  //   },
  //     variant: {
  //       type: String,
  //       default: 'outlined'
  //     },
  //  placeholder: {
  //       type: String,
  //       default: ''
  //     },
  //       errorMsg: {
  //       type: String,
  //       default: ''
  //     },
  //           modelValue: {
  //       type: [String, Number],
  //       default: ''
  //     },
  // },
  
  // data() {
  //   return {
  //     inputValue: "",
  //     rules: {
  //       required: (value) => !!value || "Required.",
  //       counter: (value) => value.length <= 20 || "Max 20 characters",
  //       email: (value) => {
  //         const pattern =
  //           /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //         return pattern.test(value) || "Invalid e-mail.";
  //       },
  //     },
  //   };
  // },
};
</script>
