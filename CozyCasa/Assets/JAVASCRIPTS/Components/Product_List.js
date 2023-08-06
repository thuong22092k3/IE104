function goToProductPage(event) {
    const target = event.target;
    const isButton = target.tagName.toLowerCase() === 'button';
    if (!isButton) {
        window.location.href = "/CozyCasa/Assets/HTML/Components/Single_Product/Single_Product.html";
    }
}

function addToCart(event) {
    event.stopPropagation();
    // Thêm sản phẩm vào giỏ hàng tại đây
}

function share(event) {
    event.stopPropagation();
    // Xử lý chia sẻ sản phẩm tại đây
}

function compare(event) {
    event.stopPropagation();
    // Xử lý so sánh sản phẩm tại đây
}

function like(event) {
    event.stopPropagation();
    const likeButton = event.currentTarget.querySelector('.icon');
    likeButton.classList.toggle('heart-icon');
    // Xử lý yêu thích sản phẩm tại đây
}
