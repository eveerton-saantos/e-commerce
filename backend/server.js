const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para permitir JSON
app.use(express.json());

// Mock de produtos
const products = [
{
    id: 1,
    name: "Martelo",
    price: 49.99,
    description: "Martelo resistente para uso geral.",
    image: "url-imagem-martelo.jpg",
    stock: 10,
    weight: 1.5,
    dimensions: { length: 30, width: 10, height: 5 },
    category: "Ferramentas"
},
{
    id: 2,
    name: "Parafusadeira",
    price: 149.99,
    description: "Parafusadeira elétrica compacta.",
    image: "url-imagem-parafusadeira.jpg",
    stock: 5,
    weight: 2.0,
    dimensions: { length: 25, width: 8, height: 6 },
    category: "Ferramentas Elétricas"
}
];

// Endpoint para retornar os produtos
app.get('/products', (req, res) => {
res.json(products);
});

// Inicializando o servidor
app.listen(PORT, () => {
console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
