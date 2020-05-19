import axios from "axios";

function isEmpty(games){
    return games.length===0;
}
const state = {
    games: []
};

const getters = {
    allGames:(state)=>state.games,
    getGameById: (state) => (id) => {
        
        return state.games.find(game => game.id === id);
    }

};

const actions = {
    async fetchGamesAPI({commit}){
        const response = await axios.get('http://www.mocky.io/v2/5ec18c872f0000489d4c88ce');
        const res=[{
            id: 1,
            name: "Last of Us",
            price: 2999,
            relize_data: 2018,
            img: 'https://main-cdn.goods.ru/mid9/hlr-system/1630060/100023690252b1.jpg'
        },
        {
            id: 2,
            name: "Prince of Persia",
            price: 2599,
            relize_data: 2016,
            img: 'https://3dnews.ru/assets/external/illustrations/2020/05/07/1010356/01.jpg'
        },
        {
            id: 3,
            name: "Assasin's Creed",
            price: 2599,
            relize_data: 2013,
            img: 'https://main-cdn.goods.ru/mid9/hlr-system/1630060/100023690252b1.jpg'
        },
        {
            id: 4,
            name: "FAR CRY 3",
            price: 1599,
            relize_data: 2012,
            img: 'https://www.klasgame.com/thumb/800/uploads/far-cry-3.jpg'

        },
        {
            id: 5,
            name: "MAX PAYNE 3",
            price: 1599,
            relize_data: 2012,
            img: 'https://img1.goodfon.ru/original/2560x1600/1/b6/max-payne-3-oruzhie.jpg'

        },
        {
            id: 6,
            name: "FIFA 2018",
            price: 1599,
            relize_data: 2018,
            img: 'https://main-cdn.goods.ru/mid9/hlr-system/1630060/100023690252b1.jpg'

        }];


        commit('setAllGames',res);

    }
};

const mutations = {
    setAllGames: (state, games)=>{
        state.games = games;
    },
    
};


export default {
    state,
    getters,
    actions,
    mutations
};