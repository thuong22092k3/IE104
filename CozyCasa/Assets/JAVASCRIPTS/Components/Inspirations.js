const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlideIndex = 0; // Đổi tên biến này thành currentSlideIndex để tránh xung đột

function showSlide(slideIndex) {
  slides.forEach((slide, index) => {
    if (index === slideIndex - 1) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  dots.forEach((dot, index) => {
    if (index === slideIndex - 1) {
      dot.classList.add('active1');
    } else {
      dot.classList.remove('active1');
    }
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  showSlide(currentSlideIndex + 1);
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  showSlide(currentSlideIndex + 1);
}

function setCurrentSlide(slideIndex) {
  currentSlideIndex = slideIndex - 1;
  showSlide(slideIndex);
}

function updateDots() {
    dots.forEach((dot, index) => {
      if (index === currentSlideIndex) {
        dot.classList.add('active-dot');
      } else {
        dot.classList.remove('active-dot');
      }
    });
  }
  
  function currentSlide(slideIndex) {
    currentSlideIndex = slideIndex - 1;
    showSlide(slideIndex);
    updateDots(); // Gọi hàm updateDots để cập nhật trạng thái chấm tròn
  }
  
  function updateDots() {
    dots.forEach((dot, index) => {
      if (index === currentSlideIndex) {
        dot.classList.add('active-dot');
      } else {
        dot.classList.remove('active-dot');
      }
    });
  }
  
  function currentSlide(slideIndex) {
    currentSlideIndex = slideIndex - 1;
    showSlide(slideIndex);
    updateDots();
  }
  
showSlide(1);
