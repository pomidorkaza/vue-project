<template>

    <div class="game-el">
      <div class="game-el-img-wrapper"> 
            <img class="game-el-img" :src="img"/>
            </div>
    <div class="game-el-desc"> 
        <h4 class="game-el-desc-header">Название: {{name}}</h4>
        <span class="game-el-desc-price">Цена:{{price}} Р</span>   
        <span class="game-el-desc-janre">Жанр:{{janre}}</span>
        <span class="game-el-desc-data">Год релиза:{{relize_data}}</span>
        
   
          <button class="btn primary-btn game-el-btn"
          @click="addGameToBucket(id)"
          >Добавить в корзину</button>

    </div>
    </div>
</template>

<script>

import {mapGetters,mapActions,mapMutations} from 'vuex';
export default {
  name:'Game',

  computed: mapGetters(['allGames']),

  props:{
        id:String|Number,
        name:String,
        price:Number,
        janre:String,
        relize_data: Number|String,
        img:String,
    },
    methods:{
      ...mapMutations(['addGameToBucket']),
    },
    data(){
        return {
          link_to:'/games/'+this.id
        }
    },
    
}
</script>
<style scoped>
.game-el{
  width: 400px;
  display: flex;
  flex-flow: column;
  margin: 5px 10px;
  overflow: hidden;
  padding: 0.5rem 0.5rem 1.5rem 0.5rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.5); 
  }


.game-el-img-wrapper{
  display: flex;
  width: 100%;
  height: 300px;
}
  .game-el-img{
    flex: 1;
    width: 100%;
    
  }
.game-el-desc{
  flex:1;
  display: flex;
  flex-flow: column;
}
.game-el-desc-header{
  width: 100%;
  margin: 10px 20px;
  text-transform: uppercase;
  font-weight: 500;
  text-transform: uppercase;
  text-align: start;
}
.game-el-desc-janre{
  width: 100%;
  margin: 5px 20px;
  text-align: start;
}


.game-el-desc-price{
  width: 100%;
  text-align: start;
  margin: 5px 20px;
  
}
.game-el-desc-data{
  width: 100%;
  margin: 5px 20px;
  text-align: start;

}

.game-el-btn{
  width: 260px;
  margin:15px 20px;
  color: #fff;
  font-size: 16px;
  background-color: #193c9c;
}
</style>