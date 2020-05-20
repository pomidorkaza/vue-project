<template>
    <div class="main-wrapper"> 
    <div class="game-container">
        <Game v-for="game in allGames"
            :id="game.id"
            :key="game.id"
            :name="game.name"
            :price="game.price"
            :janre="game.janre"
            :img="game.img"
            :relize_data="game.relize_data"></Game>

    </div>
    <BucketContainer/>
   </div>
</template>


<script>
import {mapGetters, mapActions, mapMutations} from 'vuex';
import Game from './Game';
import BucketContainer from './BucketContainer';
export default {
    name:'GamesContaner',
    methods:{
        ...mapActions(['fetchGamesAPI']),

    },
    computed:mapGetters(['allGames']),
    created(){
        this.fetchGamesAPI();

    },
    components:{
        Game,
        BucketContainer
    }
}
</script>

<style scoped>
.main-wrapper{
    width: 100%;
    display: flex;
}
.game-container{
    width: 1280px;
    display: flex;
    flex-wrap: wrap;
}

</style>