//Configurações iniciais
const express = require('express');
const app = express();
const path = require('path');
const port = 4000;

// Setando rotas
const homeRouter = require('./src/routes/homeRouter');

//Configurações padrão EJS
app.set('view engine', 'ejs');
app.set ('views', 'src/views');

//Configurações pasta public
app.use(express.static(path.resolve('public'))); 

// Utilizando as rotas
app.use(homeRouter);

//Configurando servidor
app.listen(4000, () => {
    console.log(`Server on port: ${port}`);
})