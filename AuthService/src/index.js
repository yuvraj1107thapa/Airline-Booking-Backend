const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const {PORT}  = require('./config/serverConfig');

const db= require('./models/index');


const apiRouter = require('./Routes/index');



const prepareAndStartServer = ()=>{

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));


    app.use('/api', apiRouter);

    app.listen(PORT, async () => {
        console.log(`Server Started at PORT no : ${PORT}`);
        if(process.env.DB_SYNC){
            db.sequelize.sync({alter: true})
        }
 
    })

}

prepareAndStartServer();