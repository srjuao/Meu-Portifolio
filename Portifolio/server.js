const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Servir arquivos estáticos (HTML, CSS, imagens, JS etc)
app.use(express.static(__dirname));

// Rota principal para o index.html
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'Portifolio', 'index.html');
    console.log('Caminho do arquivo:', filePath); // Verifique o caminho
    res.sendFile(filePath);
});
// Iniciar servidor
app.listen(port, () => {
    console.log(`Servidor rodando em: http://localhost:${port}`);
});