// Function to render the cart items from localStorage
function renderCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const cartItemsElement = document.getElementById("cart-items");
    const totalCostElement = document.getElementById("total-cost");

    cartItemsElement.innerHTML = ""; // Clear current cart items

    // Loop through the cart and display each item
    cart.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details" style="display: flex; justify-content: center; align-items: center; flex-direction: column;">

                    <span class="cart-item-name">${item.name}</span>
                    <span class="cart-item-price">$${item.price}</span>
                    <input type="number" value="${item.quantity}" min="1" onchange="updateQuantity('${item.name}', this.value)">
                    <button onclick="removeFromCart('${item.name}')">Remove</button>
                </div>
            </div>
        `;
        cartItemsElement.appendChild(li);
    });

    // Update the total cost
    totalCostElement.textContent = cart
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2);
}

// Function to update quantity of a product
function updateQuantity(productName, quantity) {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const product = cart.find((item) => item.name === productName);

    if (product) {
        product.quantity = parseInt(quantity, 10); // Update the quantity
    }

    localStorage.setItem("cart", JSON.stringify(cart)); // Save changes
    renderCart(); // Re-render the cart
}

// Function to remove a product from the cart
function removeFromCart(productName) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.name !== productName); // Remove the product

    localStorage.setItem("cart", JSON.stringify(cart)); // Save changes
    renderCart(); // Re-render the cart
}

// Function to proceed to checkout


// Render the cart on page load
document.addEventListener("DOMContentLoaded", renderCart);
