<template>
  <v-container>
    <v-row class="justify-center">
      <v-col sm="2">
        <p>{{ field.title }}</p>
      </v-col>
      <v-col sm="6">
        <input
          type="text"
          :placeholder="field.label"
          v-model="field.value"
          @blur="toggle = false"
          @focus="onToggle"
          class="py-7"
        />
        <div class="results" v-if="toggle" height="100%">
          <div class="result" v-for="item in newResults" :key="item.id">
            <span @click="selectResult(item)" @mousedown.prevent class="cursor-pointer">
              {{ item[field.itemText] }}
            </span>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { watch, ref, reactive } from "vue";

export default {
  name: "Select",
  props: ["fields"],
  setup(props) {
    let field = props.fields;
    let search = "";
    let toggle = ref(false);
    let newResults = ref([]);

    watch(
      () => field.value,
      (newValue, oldValue) => {
        if (newValue === "") {
          newResults.value = field.items;
        } else {
          newResults.value = [];
          field.items?.forEach((element) => {
            if (
              element[field.itemText]
                ?.toLowerCase()
                .includes(field.value?.toLowerCase()) &&
              field.value != ""
            ) {
              newResults.value.push(element);
            }
            // else{
            //   newResults.value = [];
            //   newResults.value.push({name:'No result found', id:0});
            // }
          });
        }
      },
      { deep: true }
    );

    const selectResult = (item) => {
      field.valueObj = item;
      field.value = item[field.itemText];
    };

    const onToggle = () => {
      newResults.value = field.items;
      toggle.value = true;
    };

    return {
      field,
      search,
      toggle,
      selectResult,
      onToggle,
      newResults,
    };
  },
};
</script>
<style scoped>
.cursor-pointer {
  cursor: pointer;
}
.results {
  position: absolute;
  width: 80%;
  z-index: 100;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.result {
  padding: 10px 0.75rem;
}
.result:hover {
  background: #efefef;
}
input {
  width: 100%;
  border: none;
  height: 38px;
  padding-left: 10px;
  padding-right: -10px;
  box-shadow: inset 0 0 0 1px #b2b2b2;
  border-radius: 4px;
  background: transparent;
  transition: all 0.2s ease;
}
input:focus {
  outline: none;
  box-shadow: inset 0 0 0 2px #ffb300;
}
</style>
