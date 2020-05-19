<template>
    <div class="bucket-container">
    <div class="bucket-container-img-wrapper">
        <img
        :src="game_data.img"
        class="bucket-container-img"
    />
    </div>

    <div class="bucket-container-content">
    <h3 class="bucket-container-content-header">Название:{{game_data.name}}</h3>
    <span class="bucket-container-content-price">Цена:{{game_data.price}}</span>
    <span class="bucket-container-content-amount">
        Количество:
        <input type="number" />
    </span>
    <div class="bucket-container-content-btn-wrapper">
        <button class="bucket-container-content-btn">Купить</button>
    </div>
    </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';
export default {
    props:['id'],
    data(){
        return {
        game_data:{
            id:null,
            name:"",
            img:"",
            price:"",
            relize_data:"",
        }
             


        }
    },
    computed: mapGetters(['allGames','getGameById']),
    methods:{
            ...mapActions(['fetchGamesAPI']),
    },
    created(){
        const that = this;
        that.fetchGamesAPI().then(()=>{
        
            that.getGameById(parseInt(that.id));
            this.game_data= {...that.getGameById(parseInt(that.id))};
        });
    }
};
</script>

<style scoped>
.bucket-container {
    width: 80%;
    margin: 0 auto;
    display: flex;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}
.bucket-container-img-wrapper {
    flex-basis: 600px;
}
.bucket-container-content {
    flex: 1;
    display: flex;
    flex-flow: column;
    justify-content: center;
}
.bucket-container-img {
    width: 100%;
    display: block;
}
.bucket-container-content-header {
    width: 100%;
    font-size: 36px;
    font-weight: 600;
    text-align: center;
}   
.bucket-container-content-price {
    width: 100%;
    font-size: 36px;
    font-weight: 500;
    text-align: center;
}

.bucket-container-content-btn-wrapper {
    width: 100%;
    display: flex;
    margin: 15px auto;
    justify-content: center;
}
.bucket-container-content-amount {
    width: 100%;
    text-align: center;
    font-size: 20px;
}
.bucket-container-content-amount > input {
    width: 40px;
}
.bucket-container-content-btn {
    width: 200px;
    height: 60px;
    font-size: 26px;
    border-radius: 8px;
    border: none;
    color: #fff;
    text-transform: uppercase;
    background-color: rgb(0, 98, 255);
}
</style> 