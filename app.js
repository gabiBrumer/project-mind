//Configurações iniciais
const express = require('express');
const app = express();
const port = 3000;


//Configurando servidor
app.listen(3000, () => {
    console.log(`Servidor rodando na porta: ${port}`);
})