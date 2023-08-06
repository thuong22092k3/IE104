let currentPage = 1;

function showPage(pageNum) {
  const pageButtons = document.getElementsByClassName('page-button');
  for (let i = 0; i < pageButtons.length; i++) {
    pageButtons[i].classList.remove('active');
  }
  pageButtons[pageNum - 1].classList.add('active');
  currentPage = pageNum;
  updateButtons();
}

function nextPage() {
  currentPage++;
  showPage(currentPage);
}

function prevPage() {
  currentPage--;
  showPage(currentPage);
}

function updateButtons() {
  const prevButton = document.querySelector('.prev-button');
  const nextButton = document.querySelector('.next-button');
  
  if (currentPage === 1) {
    prevButton.style.display = 'none';
  } else {
    prevButton.style.display = 'inline-block';
  }
}
