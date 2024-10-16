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

// // Wait until the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//     const cartItemsContainer = document.getElementById("cart-items");
//     const totalPriceElement = document.getElementById("total-price");
//     const cartStatus = document.getElementById("cart-status");
//     let totalPrice = 0;
    

//     // Update the cart status message
//     function updateCartStatus() {
//         if (cartItemsContainer.children.length === 0) {
//             cartStatus.style.display = 'block';
//         } else {
//             cartStatus.style.display = 'none';
//         }
//     }

//     // Update the total price
//     function updateTotalPrice() {
//         totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
//     }

//     // Add item to cart
//     let quantity = document.createElement('p');paragraph.textContent = 1
//     document.cartItemsContainer.appendChild(paragraph)
//     function secondAddfunc(){
//         quantity.style.left = '50px' 
//         if (cartItem === 1){
//             updateCartStatus()
//             updateTotalPrice()
//             quantity = "1"
//         }
//         else if (cartItem > 1){
//             updateTotalPrice()
//             quantity = quantity + cartItem
//         }
//         else{
//             quantity.style.display = 'none'
//         }
//     }

//     function firstAddfunc(name, price) {
//         cartItemsContainer.style.paddingTop = '20px'
//         const cartItem = document.createElement("div");
//         cartItem.classList.add("cart-item");
//         cartItem.innerHTML = `
//             <span>${name}</span>
//             <span>$${price}</span>
//             <button class="delete-btn">Delete</button>
//         `;

//         // Add delete button functionality
//         cartItem.querySelector(".delete-btn").addEventListener("click", function () {
//             totalPrice -= parseFloat(price);
//             cartItemsContainer.removeChild(cartItem);
//             updateTotalPrice();
//             updateCartStatus();
//         });

//         cartItemsContainer.appendChild(cartItem);
//         totalPrice += parseFloat(price);
//         updateTotalPrice();
//         updateCartStatus();

        
//     }

//     document.getElementById("addToCart").addEventListener("click", function(){
//         firstAddfunc();
//         secondAddfunc();
//     });

//     // Clear the entire cart
//     document.getElementById("clr").addEventListener("click", function () {
//         cartItemsContainer.innerHTML = ""; // Remove all items from the cart
//         totalPrice = 0;
//         updateTotalPrice();
//         updateCartStatus();
//     });

//     // Attach event listeners to each "Add to Cart" button
//     const addToCartButtons = document.querySelectorAll(".add-to-cart");
//     addToCartButtons.forEach(button => {
//         button.addEventListener("click", function () {
//             const name = button.getAttribute("data-name");
//             const price = button.getAttribute("data-price");
//             addToCart(name, price);
//         });
//     });

//     // Initial update
//     updateCartStatus();
// });

      
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

    // Check if item exists in cart by name
    function itemExistsInCart(name) {
        const cartItems = cartItemsContainer.getElementsByClassName('cart-item');
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i].querySelector('span').textContent === name) {
                return cartItems[i];
            }
        }
        return null;
    }

    // Add or update item in the cart
    function addOrUpdateCartItem(name, price) {
        cartItemsContainer.style.paddingTop = '20px'
        let existingCartItem = itemExistsInCart(name);

        if (existingCartItem) {
            // If item exists, update the quantity and price
            let quantityElem = existingCartItem.querySelector('.quantity');
            let newQuantity = parseInt(quantityElem.textContent) + 1;
            quantityElem.textContent = newQuantity;

            totalPrice += parseFloat(price);  // Update the total price
        } else {
            // If item doesn't exist, create a new item
            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            cartItem.innerHTML = `
                <span>${name}</span>
                <span class="item-price">$${price}</span>
                <span class="quantity">1</span>
                <button class="delete-btn">Delete</button>
            `;

            // Add delete button functionality
            cartItem.querySelector(".delete-btn").addEventListener("click", function () {
                let itemPrice = parseFloat(cartItem.querySelector(".item-price").textContent.slice(1));
                let quantity = parseInt(cartItem.querySelector(".quantity").textContent);
                totalPrice -= (itemPrice * quantity);  // Deduct total price based on quantity
                cartItemsContainer.removeChild(cartItem);  // Remove item from cart
                updateTotalPrice();
                updateCartStatus();
            });

            cartItemsContainer.appendChild(cartItem);
            totalPrice += parseFloat(price);  // Update total price for the new item
        }

        updateTotalPrice();
        updateCartStatus();
    }

    // Clear the entire cart
    document.getElementById("clr").addEventListener("click", function () {
        cartItemsContainer.innerHTML = "";  // Remove all items from the cart
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
            addOrUpdateCartItem(name, price);  // Add or update the cart item
        });
    });

    // Initial update
    updateCartStatus();
});

      
