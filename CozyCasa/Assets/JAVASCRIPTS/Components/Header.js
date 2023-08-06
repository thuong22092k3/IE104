var cartIcon = document.getElementById("cartIcon");
var cartSidebar = document.getElementById("cartSidebar");
var closeCartButton = document.getElementById("closeCartButton");
var overlay = document.getElementById("overlay");

// Hiển thị cart sidebar khi đưa chuột vào icon cart trên thanh header
// show the overlay and the dialog
cartIcon.addEventListener('click', function () {
    cartSidebar.classList.remove('hidden');
});

// hide the overlay and the dialog
closeCartButton.addEventListener('click', function () {
    cartSidebar.classList.add('hidden');
    overlay.classList.add('hidden');
});

cartIcon.addEventListener("click", () => {
    cartSidebar.classList.add("active");
    overlay.style.display = "block";
});

// Ẩn cart sidebar và overlay khi nhấp nút "Close"
closeCartButton.addEventListener("click", () => {
    cartSidebar.classList.remove("active");
    overlay.style.display = "none";
});

function goToCart() {
    window.location.href = "/CozyCasa/Assets/HTML/Components/Cart/Cart.html";
}

function goToCheckOut() {
    window.location.href = "/CozyCasa/Assets/HTML/Components/Check_Out/Check_Out.html";
}