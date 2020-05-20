<template>
    <aside class="bucket-container">
        <ul class="bucket-container-list">
        <li class="bucket-container-list-item"
            v-for="(value,index) in getAllGamesInBucketKeys().keys"
            :key="index"
        >
    <button  
        class="bucket-container-list-item-btn"
        v-on:dblclick="deleteFromBucketListener(value)">X</button>
        {{ getAllGamesInBucketKeys().bucket_games[value].name }}
        <input type="number"
            v-model="getAllGamesInBucketKeys().bucket_games[value].amount"
            class="bucket-container-list-item-amount"
        />
        </li>
        </ul>
    </aside>
</template>

<script>
import {mapGetters ,mapMutations} from 'vuex';
export default {
    data(){
        return{
        
        };
},
    methods:{
        ...mapGetters(['getAllGamesInBucketKeys','allGames']),
        ...mapMutations(['deleteFromBucket']),
        showCondition(){
            console.log( this.getAllGamesInBucketKeys().bucket_games);
        },
        deleteFromBucketListener(id){
            this.deleteFromBucket(id);
        }

    }
    }

</script>
<style scoped>
.bucket-container{
    
    width: 450px;
}
.bucket-container-list{
    width: 100%;
    
}
.bucket-container-list-item{
    list-style-type: none;
    margin: 5px 10px;
    display: flex;
    width: 100%;
    padding: 0.25rem 1rem;
    background-color: rgb(0, 128, 60);
}
.bucket-container-list-item-amount{
    width: 40px;
    min-height: 30px;
    margin: 0 0 0 auto;
}
.bucket-container-list-item-btn{
    width: 15px;
    height: 20px;
    font-size: 0.5rem;
    text-align: center;
    border-radius: 8px;
    margin-right: 6px;
}
</style>