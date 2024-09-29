// const cart = [];
//         const cartItems = document.getElementById('cart-items');
//         const cartStatus = document.getElementById('cart-status');
//         const totalPrice = document.getElementById('total-price');
//         const deleteBtn = document.getElementById('clr');

//         document.querySelectorAll('.add-to-cart').forEach(button => {
//             button.addEventListener('click', () => {
//                 const itemName = button.getAttribute('data-name');
//                 const itemPrice = parseFloat(button.getAttribute('data-price'));

//                 // Add item to cart
//                 cart.push({ name: itemName, price: itemPrice });

//                 // Update cart status
//                 cartStatus.innerText = 'Items in your cart:';
//                 totalPrice.innerText = `$${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}`;

//                 // Update cart items
//                 const cartItem = document.createElement('div');
//                 cartItem.innerText = `${itemName} - $${itemPrice.toFixed(2)}`;
//                 cartItems.appendChild(cartItem);
                
//                 function clearDisplay(){
//                 // Clear the cart items content
//                  cartItems.innerHTML = '';
    
//                 // Reset the total price to $0.00
//                 totalPrice.innerText = '$0.00';
    
//                 // Set the cart status to "Your Cart is empty"
//                 cartStatus.innerText = 'Your Cart is empty';
//                 }
//             });
//         });

// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const cartStatus = document.getElementById("cart-status");
    let totalPrice = 0;

    // Update the cart status message
    function updateCartStatus() {
        if (cartItemsContainer.children.length === 0) {
            cartStatus.style.display = 'block';
        } else {
            cartStatus.style.display = 'none';
        }
    }

    // Update the total price
    function updateTotalPrice() {
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }

    // Add item to cart
    function addToCart(name, price) {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <span>${name}</span>
            <span>$${price}</span>
            <button class="delete-btn">Delete</button>
        `;

        // Add delete button functionality
        cartItem.querySelector(".delete-btn").addEventListener("click", function () {
            totalPrice -= parseFloat(price);
            cartItemsContainer.removeChild(cartItem);
            updateTotalPrice();
            updateCartStatus();
        });

        cartItemsContainer.appendChild(cartItem);
        totalPrice += parseFloat(price);
        updateTotalPrice();
        updateCartStatus();
    }

    // Clear the entire cart
    document.getElementById("clr").addEventListener("click", function () {
        cartItemsContainer.innerHTML = ""; // Remove all items from the cart
        totalPrice = 0;
        updateTotalPrice();
        updateCartStatus();
    });

    // Attach event listeners to each "Add to Cart" button
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const name = button.getAttribute("data-name");
            const price = button.getAttribute("data-price");
            addToCart(name, price);
        });
    });

    // Initial update
    updateCartStatus();
});

        
      
