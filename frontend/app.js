// Array para armazenar os produtos
const products = [];

// Função para adicionar produtos ao sistema
function addProduct(id, title, description, price, image, quantity) {
    const product = {
        id,
        title,
        description,
        price,
        image,
        quantity,
    };
    products.push(product);
}

// Para adicionar produtos manualmente
addProduct(1, "Parafusadeira", "Parafusadeira elétrica de alta performance.", 299.99, "https://via.placeholder.com/200", 10);
addProduct(2, "Serra Circular", "Serra circular ideal para cortes precisos.", 499.99, "https://via.placeholder.com/200", 5);
addProduct(3, "Chave de Fenda", "Conjunto de chaves de fenda profissionais.", 19.90, "https://via.placeholder.com/200", 20);

// Exportando os produtos para uso no frontend
export { products };
