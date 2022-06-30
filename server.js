const express = require('express');
const database = require('./db/database');
const Restaurante = require('./modelos/CadRest');
const RestauranteRouter = require('./rotas/CadRest');

//Iniciando conexão com o banco de dados
try{
    const resultado = database.sync();
    console.log(resultado);
} catch (error) {
    console.log(error);
}

// Iniciando aplicação web para api
const app = express();
const porta = 3000;


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(porta, () => {
    console.log(`Servidor iniciado na porta ${porta}`);
});

//configurando middleware

app.use('/api/restaurante', RestauranteRouter);


