// Função para carregar os itens do carrinho do LocalStorage
function loadCart() {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
}

  // Função para salvar o carrinho no LocalStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

  // Função para renderizar o carrinho na página
function renderCart() {
    const cartPage = document.getElementById("cart-page");
    const cart = loadCart();

    cartPage.innerHTML = ""; // Limpa o conteúdo antes de renderizar

    if (cart.length === 0) {
    cartPage.innerHTML = "<p>Seu carrinho está vazio.</p>";
    return;
    }

    const cartTable = document.createElement("table");
    cartTable.innerHTML = `
    <thead>
        <tr>
        <th>Produto</th>
        <th>Quantidade</th>
        <th>Preço</th>
        <th>Total</th>
        <th>Ação</th>
        </tr>
    </thead>
    <tbody>
        ${cart.map(item => `
        <tr>
            <td>${item.title}</td>
            <td>${item.quantity}</td>
            <td>R$ ${item.price.toFixed(2)}</td>
            <td>R$ ${(item.price * item.quantity).toFixed(2)}</td>
            <td><button onclick="removeFromCart(${item.id})">Remover</button></td>
        </tr>
        `).join('')}
    </tbody>
    `;

    cartPage.appendChild(cartTable);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const totalElement = document.createElement("p");
        totalElement.textContent = `Total do Carrinho: R$ ${total.toFixed(2)}`;
        cartPage.appendChild(totalElement);

    const checkoutButton = document.createElement("button");
        checkoutButton.textContent = "Finalizar Compra";
        checkoutButton.onclick = () => alert("Compra finalizada! Obrigado pela preferência.");
        cartPage.appendChild(checkoutButton);
}

  // Função para remover um item do carrinho
function removeFromCart(productId) {
    const cart = loadCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    saveCart(updatedCart);
    renderCart();
}

  // Renderiza o carrinho ao carregar a página
renderCart();
