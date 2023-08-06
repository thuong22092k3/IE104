const images2 = [
    '/CozyCasa/Assets/Images/Living1.jpg',
    '/CozyCasa/Assets/Images/Living2.jpg',
    '/CozyCasa/Assets/Images/Living3.jpg'
  ];
  
  const  imageElement2 = document.getElementById('living');
  let currentIndex2 = 0;
  
  function changeImage() {
    currentIndex2 = (currentIndex2 + 1) % images2.length;
    imageElement2.src = images2[currentIndex2];
  }
  
  // Thay đổi ảnh sau mỗi 5 giây (5000 millisecon   ds)
  setInterval(changeImage, 2000);