const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.static('public'));



app.get('/', (req, res) => {
    const tabuada = parseInt(req.query.tabuada) || 1;
    const sequencia = parseInt(req.query.sequencia) || 10; 

    if (isNaN(tabuada)) {
        return res.send('<h1>Por favor, forneça um número válido para a tabuada.</h1>');
    }

    let resultado = `<h1>Tabuada do ${tabuada}</h1><ul>`;
    for (let i = 0; i <= sequencia; i++) {
        resultado += `<li>${tabuada} x ${i} = ${tabuada * i}</li>`;
    }
    resultado += '</ul>';

    res.send(resultado);
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
