const express = require("express");
const app = express();
const cors = require('cors');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const sequelize = new Sequelize("games_shop", "root", "", {
    dialect: "mysql",
    host: "localhost"
});


app.use(cors());
app.use(bodyParser.json());
const Game = sequelize.define("game", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    relize_data: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});


sequelize.sync().then(result=>{
    console.log(result);
  })
  .catch(err=> console.log(err));

app.get("/", (req, res) => {


        res.json({'data':[]});
});


app.post('/order',(req,res)=>{

    if(req.body){
        return  res.json({
                body:req.body,
                msg:"Ваш заказ успешно сформирован"
            });
        }
        return res.json({
            msg:"Ошибка не удалось сформировать заказ"
        });
    
});
app.get("/games", async(req, res) => {

   let allGames = await Game.findAll({raw: true});
   res.json([...allGames]);
 });
// начинаем прослушивать подключения на 3000 порту
app.listen(3000);