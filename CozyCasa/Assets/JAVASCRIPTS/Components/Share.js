const clickableImage = document.querySelector('.clickable-image');
const hiddenLink = document.querySelector('.hidden-link');

clickableImage.addEventListener('click', () => {
  // Mờ ảnh
  clickableImage.style.opacity = 0.5;
  // Hiển thị link
  hiddenLink.style.display = 'inline-block';
});

hiddenLink.addEventListener('click', () => {
  // Đưa ảnh về trạng thái ban đầu (không mờ)
  clickableImage.style.opacity = 1;
  // Ẩn link đi
  hiddenLink.style.display = 'none';
});






