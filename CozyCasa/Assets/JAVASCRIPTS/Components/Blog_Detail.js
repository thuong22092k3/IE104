const readmoreWrapper = document.querySelector('.readmore-wrapper');
const shorterLine = document.querySelector('.shorter-line');
const readmoreBtn = document.querySelector('.readmore-btn');
const distanceThreshold = 10; // Khoảng cách để hiển thị hr (đơn vị là px)

readmoreWrapper.addEventListener('mousemove', (event) => {
  const wrapperRect = readmoreWrapper.getBoundingClientRect();
  const btnRect = readmoreBtn.getBoundingClientRect();
  const mouseX = event.clientX - wrapperRect.left;

  if (mouseX < distanceThreshold || mouseX > wrapperRect.width - distanceThreshold) {
    // Ẩn hr và in đậm chữ "Read More" khi con trỏ chuột nằm ngoài khoảng cách xác định
    shorterLine.style.display = 'none';
    readmoreBtn.style.fontWeight = 'bold';
  } else {
    // Hiển thị hr và trả về chữ "Read More" bình thường khi con trỏ chuột trong khoảng cách xác định
    shorterLine.style.display = 'block';
    readmoreBtn.style.fontWeight = 'normal';
    // Di chuyển hr tới vị trí của button "Read More"
    shorterLine.style.transform = `translateX(${btnRect.left - wrapperRect.left}px)`;
  }
});

// Sự kiện rời chuột để đưa hr về vị trí ban đầu
readmoreWrapper.addEventListener('mouseleave', () => {
  shorterLine.style.display = 'none';
  readmoreBtn.style.fontWeight = 'normal';
});
