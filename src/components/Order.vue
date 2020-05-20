<template>
    <div class="order">
    <h3 class="order-header">Ваш заказ:</h3>
        <div class="order-container">
            <span v-for="(value,index) in getAllGamesInBucketKeys().keys"
            :key="index" class="order-container-item">{{getAllGamesInBucketKeys().bucket_games[value].name}} : {{getAllGamesInBucketKeys().bucket_games[value].amount}} шт</span>
        </div>
        <button class="send-order">Подтвердить заказ</button>
        </div>
</template>

<script>

import {mapGetters} from 'vuex';
export default {
    data(){
        return{
        
        };
},
    methods:{
        ...mapGetters(['getAllGamesInBucketKeys','allGames']),
     

    }
    }

</script>

<style scoped>
.order {
  width: 100%;
  display: flex;
  flex-flow: column;
}
.order-header {
  text-align: center;
  font-size: 1.5rem;
}
.order-container {
  margin: 0 auto;
  width: 600px;
  display: flex;
  flex-flow: column;
  height: 600px;
  background-color: red;
}
.order-container-item {
  width: 100%;
  background: #fff;
  font-weight: 600;
  padding: 20px 0 20px 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.8), 23px 0 20px -23px rgba(0, 0, 0, 0.8),
    0 0 40px rgba(0, 0, 0, 0.1) inset;
}
.send-order{
    width: 600px;
    padding: 0.5rem 1rem;
    margin: 0 auto;
    border: none;
    color: #fff;
    text-transform: uppercase;
    background-color: blue;
}
</style>
