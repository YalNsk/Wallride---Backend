require('dotenv-flow').config(); //dotenv-flow permet de récuperer les variables d'environnement, le .config permet de les utiliser 

const express = require("express");
const cors = require("cors");

const app = express(); 
app.use(cors());

const {MESSAGE, NODE_ENV, PORT, MONGO_URL} = process.env;   // on va cherche les variables

console.log('Lancé en', NODE_ENV, ' : ', MESSAGE);

require('express-async-errors'); 
app.use(express.json());

// connexion à MONGO DB Cluster 
const mongoose = require('mongoose')
mongoose.connect(MONGO_URL)
    .then(() => console.log("Connexion réussie !"))
    .catch((err) => {
        console.log(err);
    });

// On importe notre router et dit à notre app de l'utiliser 
const Router = require('./routes/index-router');
app.use('/api', Router);


app.listen(PORT,() => {
    console.log(`Server up on port : ${PORT} [${NODE_ENV}]`);
});