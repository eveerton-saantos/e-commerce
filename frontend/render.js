// Importando os produtos do app.js
import { products } from './app.js';

// Selecionando a lista de produtos no DOM
const productList = document.getElementById("product-list");

// Função para renderizar os produtos na página
function renderProducts() {
    products.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p class="price">R$ ${product.price.toFixed(2)}</p>
            <p class="quantity">Estoque: ${product.quantity}</p>
            <button onclick="addToCart(${product.id})">Adicionar ao Carrinho</button>
            `;
        productList.appendChild(productCard);
    });
}

// Função para adicionar um produto ao carrinho
function addToCart(productId) {
    const product = products.find((p) => p.id === productId);
    const cartItem = cart.find((item) => item.id === productId);

    if (cartItem) {
      // Incrementa a quantidade se o item já estiver no carrinho
        if (cartItem.quantity < product.quantity) {
            cartItem.quantity++;
            alert(`${product.title} foi adicionado ao carrinho. Quantidade: ${cartItem.quantity}`);
        } else {
            alert("Estoque insuficiente!");
        }
        } else {
        // Adiciona o produto ao carrinho
        cart.push({ ...product, quantity: 1 });
        alert(`${product.title} foi adicionado ao carrinho.`);
        }

        saveCart();
        renderCart();
    }

// Função para salvar o carrinho no LocalStorage
    function saveCart() {
        localStorage.setItem("cart", JSON.stringify(cart));
    }

// Função para carregar o carrinho do LocalStorage
    function loadCart() {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            cart.push(...JSON.parse(storedCart));
        }
    }

// Função para renderizar o carrinho
    function renderCart() {
        const cartSection = document.getElementById("cart");
        cartSection.innerHTML = ""; // Limpa a seção do carrinho antes de renderizar

    if (cart.length === 0) {
        cartSection.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    const cartList = document.createElement("ul");
    cart.forEach((item) => {
        const cartItem = document.createElement("li");
            cartItem.innerHTML = `
            ${item.title} - R$ ${item.price.toFixed(2)} x ${item.quantity} 
            <button onclick="removeFromCart(${item.id})">Remover</button>
            `;
            cartList.appendChild(cartItem);
    });

    cartSection.appendChild(cartList);
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const totalElement = document.createElement("p");
            totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
            cartSection.appendChild(totalElement);
    }

// Função para remover um item do carrinho
    function removeFromCart(productId) {
        const itemIndex = cart.findIndex((item) => item.id === productId);
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
            saveCart();
            renderCart();
            alert("Item removido do carrinho.");
        }
    }

// Carrega o carrinho do LocalStorage ao iniciar
loadCart();
renderProducts();
renderCart();

// Torna as funções disponíveis no escopo global
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;

// Renderizando os produtos ao carregar a página
renderProducts();
