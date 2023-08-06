const images = [
    '/CozyCasa/Assets/Images/Dining1.jpg',
    '/CozyCasa/Assets/Images/Dining2.jpg',
  ];
  
  const imageElement = document.getElementById('dining');
  let currentIndex = 0;
  
  function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
  }
  
  // Thay đổi ảnh sau mỗi 5 giây (5000 milliseconds)
  setInterval(changeImage, 1000);
  