const images3 = [
    '/CozyCasa/Assets/Images/Bedroom1.jpg',
    '/CozyCasa/Assets/Images/Bedroom3.jpg',
    '/CozyCasa/Assets/Images/Bedroom3.jpg'
  ];
  
  const  imageElement3 = document.getElementById('bedroom');
  let currentIndex3 = 0;
  
  function changeImage() {
    currentIndex3 = (currentIndex3 + 1) % images3.length;
    imageElement3.src = images3[currentIndex3];
  }
  
  // Thay đổi ảnh sau mỗi 5 giây (5000 millisecon   ds)
  setInterval(changeImage, 3000);