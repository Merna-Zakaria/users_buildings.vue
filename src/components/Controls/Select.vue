<template>
  <div class="container">
    <input type="text" :placeholder="field.label" v-model="field.value"  @blur="toggle = false" @focus="onToggle">
    <div class="results" v-if="toggle">
      <div class="result" v-for="item in fields.items" :key='item.id'>
        <span @click="selectResult(item)" @mousedown.prevent>
          {{ item[field.itemText] }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { watch, ref } from 'vue';

  export default {
       name: "Select",
        props:  ['fields'],
         setup(props){
    let field = props.fields
    let search= ''
    let toggle= ref(false)
    let newResults = []
console.log('toggle', toggle)
    //  watch(
    //   () => field.value,
    //   (newValue, oldValue) => {
    //     console.log("new", newValue, "old", oldValue);
    //     // field.items?.forEach(element => {
    //     //       if(element.name.includes(field.value) && field.value != "") {
    //     //   newResults.push(element);
    //     // }
    //     // });
    //   },
    //   { deep: true }
    // );

    const selectResult = (item) => {
      field.valueObj = item;
      field.value = item[field.itemText];
      // toggle.value = false
    }

    const onToggle = () => {
      toggle.value = true
      console.log('clicked') 
      }

  return{
   field,
   search,
   toggle,
   selectResult,
   onToggle,
  }
  }
  //   watch: {
  //   search(val) {
  //     this.newBooks = [];
  //     this.books.forEach(element => {
        // if(element.name.includes(val) && val != "") {
        //   this.newBooks.push(element);
        // }
  //     });
  //   }
  // },
  // data () {
  //   return {
      // search: '',
      // toggle: false,
  //     books: [
  //       {name: 'Liste des livres de Chair de poule'},
  //       {name: 'Les Cent Meilleurs Romans policiers de tous les temps'},
  //       {name: 'Liste des livres publiés par Champ libre'}
  //     ],
  //     newBooks: []
  //   }
  // },
  // methods: {
    // selectResult(book) {
    //   this.search = book.name;
    // }
  // }
  }
</script>
<style scoped>
.container {
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 100px;
  position: relative;

}
 
  .results {
    position: absolute;
    width: 100%;
    z-index: 100;
    background: #fff;  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    /* .result {
      padding:  20px 0.75rem;
      &:hover {
        background: #efefef;
      }
    } */
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
    transition: all .2s ease;
    /* &:focus {
      outline: none;
      box-shadow: inset 0 0 0 2px #ffb300;
    } */
  }
</style>