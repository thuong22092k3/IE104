
// JavaScript Code
// Dùng một biến lưu trữ các sản phẩm trong giỏ hàng
let cartItems = [];

// Hàm thêm sản phẩm vào giỏ hàng
function addToCart(productName, quantity, price) {
    cartItems.push({ productName, quantity, price });
    updateCart();
}

// Hàm tính tổng số tiền trong giỏ hàng
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        total += cartItems[i].quantity * cartItems[i].price;
    }
    return total;
}

// Hàm cập nhật giỏ hàng trên sidebar
function updateCart() {
    const cartItemsElement = document.querySelector(".cart-sidebar-items");
    cartItemsElement.innerHTML = "";

    for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        const cartItemHTML = `
        <div class="cart-sidebar-item">
                <img src="/CozyCasa/Assets/Images/${item.productName}.jpg" alt="${item.productName}">
                <div class="item-cart-sidebar-info">
                    <p>${item.productName}</p>
                    <div class="cart-sidebar-price-content">
                        <div>${item.quantity}&emsp;x&emsp;</div>
                        <div id="cart-sidebar-price">${item.price}</div>
                    </div>
                </div>
                <button class="delete-cart-sidebar-item" onclick="removeFromCart(${i})">x</button>
        </div>
      `;
        cartItemsElement.innerHTML += cartItemHTML;
    }

    const subtotalElement = document.querySelector(".cart-sidebar-summary p");
    subtotalElement.textContent = `Subtotal: $${calculateTotal()}`;
}



// Hàm xóa sản phẩm khỏi giỏ hàng
function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCart();
}

// Gọi hàm updateCart() lần đầu tiên để hiển thị giỏ hàng khi tải trang
updateCart();
