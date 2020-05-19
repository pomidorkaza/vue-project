<template>
    
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
</template>


<script>
import {mapGetters, mapActions} from 'vuex';
import Game from './Game';

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
    }
}
</script>

<style scoped>
.game-container{
    width: 1280px;
    display: flex;
    flex-wrap: wrap;
}

</style>