<template>
  <div id="app">
  <div>
     <div class="input-wrapper">
       
      <label class="box-label" for="box-input">Введите название коробки</label>
      <input id="box-input" type="text" class="custom-input" v-model="newItem"/>
   <button class="btn btn-square btn-lg btn-filled-green" @click="addItem">Добавить</button>
 
 </div>
  <ListItem v-for="item in items"
      :name="item.name"
      :number="item.id"
      :key="item.id">
          
      </ListItem>
    </div>
    
  </div>
</template>

<script>
import ListItem from './components/ListItem';
export default {
  name: 'App',
  data(){
    return {
      newItem:"",
      items:[{
        id: 1,
        name:'box 1'
      },
      {
        id: 2,
        name:'box 2'
      }]
    }
  },
  methods:{
    addItem(){
        const {newItem} = this;
        let newItems = [...this.items];
    if(newItem){
      newItems.push({id:this.items.length+1,name:newItem });
      this.items = newItems;
      this.newItem = "";
        }

    },

  },
  components: {
    ListItem
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

@import "https://fonts.googleapis.com/css?family=Ubuntu:400";
@import url(https://fonts.googleapis.com/css?family=Lobster);
h1 {
  font-family: "Lobster", cursive;
  font-weight: 300;
  font-size: 2.5em;
}

body {
   color: #fff;
  margin: 1em;
}

.btn:not(last-child) {
  margin-right: 1em;
}

h2 {
  padding-bottom: 1em;
  padding-top: 1em;
  color: #fff;
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 300;
}

.btn {
  width: 200px;
  margin: 10px 0 0 0;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  background-color: transparent;
  outline: 0;
  padding: 0.5rem 1rem;
  -moz-transition: background-color 0.3s ease;
  -o-transition: background-color 0.3s ease;
  -webkit-transition: background-color 0.3s ease;
  transition: background-color 0.3s ease;
  font-family: "Ubuntu", sans-serif;
}

.btn-square {
  border: 0;
}

.btn-filled-green {
  background-color: #2ecc71;
}
.btn-filled-green:hover {
  background-color: #25a25a;
}
.btn-filled-green:active {
  -moz-box-shadow: inset 0 0 100px #1b7943;
  -webkit-box-shadow: inset 0 0 100px #1b7943;
  box-shadow: inset 0 0 100px #1b7943;
}
.custom-input{
  width: 250px;
  height: 30px;
  line-height: 30px;
  background: transparent;
  font-size: 20px;
  font-weight: 600;
}
.input-wrapper{
  display: flex;
  flex-flow: column;
  width: 400px;
}
.box-label{
  text-align: start;
  font-size: 16px;
}
</style>
