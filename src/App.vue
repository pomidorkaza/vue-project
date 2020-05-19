<template>

  <div id="app">
      
    <div class="game-container"> 
      <router-view></router-view>
  </div>
</div>

</template>

<script>
import Game from './components/Game';
import GameContainer from './components/GamesContainer';

export default {
  name: 'App',
  data(){

    return {
      
    }
  },
  methods:{

  },
  components: {
    Game,
    GameContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}


@import "https://fonts.googleapis.com/css?family=Ubuntu:400";
@import url(https://fonts.googleapis.com/css?family=Lobster);

</style>
