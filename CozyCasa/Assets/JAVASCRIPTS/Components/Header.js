var cartIcon = document.getElementById("cartIcon");
var cartSidebar = document.getElementById("cartSidebar");
var closeCartButton = document.getElementById("closeCartButton");
var overlay = document.getElementById("overlay");
var searchBar = document.getElementById("search-bar");
var searchIcon = document.getElementById("search-icon");

// Hiển thị cart sidebar khi đưa chuột vào icon cart trên thanh header
// show the overlay and the dialog
let clicked = false;
let doubleClicked = false;

cartIcon.addEventListener("click", function () {
  if (!clicked) {
    // Thực hiện hành động khi chỉ click
    showCartSidebar();
    clicked = true;
    setTimeout(function () {
      clicked = false;
    }, 5000); // Reset trạng thái clicked sau 300ms
  } else if (clicked && !doubleClicked) {
    // Đợi thêm 300ms để kiểm tra nếu có double click
    doubleClicked = true;
    setTimeout(function () {
      clicked = false;
      doubleClicked = false;
    }, 5000);
  }
});

cartIcon.addEventListener("dblclick", function (event) {
  event.preventDefault();
  // Thực hiện hành động khi double click
  goToCart();
});

// Ẩn cart sidebar và overlay khi nhấp nút "Close"
closeCartButton.addEventListener("click", () => {
  cartSidebar.classList.add('hidden');
  overlay.style.display = "none";
});


searchIcon.addEventListener("click", function () {
  searchBar.classList.toggle("active");
});


function showCartSidebar() {
  cartSidebar.classList.remove('hidden');
  overlay.style.display = "block";
}

function goToCart() {
  window.location.href = "/CozyCasa/Assets/HTML/Components/Cart/Cart.html";
}

function goToCheckOut() {
  window.location.href = "/CozyCasa/Assets/HTML/Components/Check_Out/Check_Out.html";
}

function goToBlog() {
  window.location.href = "/CozyCasa/Assets/HTML/Components/Blog/Blog.html";
}
function goToComparision() {
  window.location.href = "/CozyCasa/Assets/HTML/Components/Comparision/Comparision.html";
}

const heartButton = document.getElementById("heartIcon");

heartButton.addEventListener("click", function() {
    heartButton.classList.toggle("active");
});