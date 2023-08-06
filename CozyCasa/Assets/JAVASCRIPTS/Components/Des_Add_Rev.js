function openTab(evt, tabName) {
    var i, tabContent, tabLinks;
    tabContent = document.getElementsByClassName("tab-des-add-rev-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    tabLinks = document.getElementsByClassName("tab-des-add-rev-btn");
    for (i = 0; i < tabLinks.length; i++) {
      tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  document.addEventListener("DOMContentLoaded", function() {
    // Replace this number with the actual number of reviews
    var reviewCount = 2; 
  
    // Update the review count in the tab label
    var reviewCountElement = document.getElementById("reviewCount");
    reviewCountElement.textContent = reviewCount;
  });
    