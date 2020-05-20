import axios from "axios";


const base_url='http://localhost:3000';
const state = {
    games: [],
    bucket_games:{
        
    },
    succsessOrder: false,
};

const getters = {
    getSuccessValue:(state)=>state.succsessOrder,
    getBucketGames:(state)=>{
        return state.bucket_games;
    },
    getAllGamesInBucketKeys:(state)=>{
        return {keys:Object.keys(state.bucket_games),
                bucket_games : state.bucket_games
        };

    },
    allGames:(state)=>state.games,
    getGameById: (state) => (id) => {
        return state.games.find(game => game.id === id);
    }

};

const actions = {

    async postOrderOfAllGames({commit,state}){
        let allBucketsData ={...state.bucket_games};
        console.log(state.succsessOrder);
        let response = await axios.post(`${base_url}/order`,{allBucketsData});
     
        if(response.data.body){
            commit('checkSuccess',true);
        }
        else {
            commit('checkSuccess',false);
        }
    },
    async fetchGamesAPI({commit}){
        
        const response = await axios.get(`${base_url}/games`);

        


        commit('setAllGames',response.data);

    }
};

const mutations = {

    checkSuccess:(state,succsessOrderVal)=>{
        console.log()
        state.succsessOrder = succsessOrderVal;
    },
    setAllGames: (state, games)=>{
        state.games = games;
    },
    deleteFromBucket:(state,id)=>{
        console.log('deleted');
        let newBucket = {...state.bucket_games};
        delete newBucket[id];
        state.bucket_games = {...newBucket};
        
    },

    addGameToBucket:(state,id)=>{
        console.log('addedGameToBucket')
        let added_game = state.games.find((game)=>game.id===id);
        state.bucket_games[id] = {
            name:added_game.name,
            img:added_game.img,
            price: added_game.price,
            amount: 0,


        };
        state.bucket_games = {
            ...state.bucket_games,
            [id]:{
                name:added_game.name,
                img:added_game.img,
                price: added_game.price,
                amount: 0,
            }
        }
    }
    
};


export default {
    state,
    getters,
    actions,
    mutations
};