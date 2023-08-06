// Sắp xếp sản phẩm
function sortProducts() {
    const showProduct = parseInt(document.getElementById("showProduct").value);
    const sortBy = document.getElementById("sortBy").value;
    const filterInput = document.getElementById("filterInput").value;
  
    // Thực hiện logic sắp xếp sản phẩm dựa trên showProduct, sortBy và filterInput
    // ...
    // Sau khi sắp xếp xong, cập nhật lại result summary và hiển thị sản phẩm mới
    const resultSummary = `Showing 1–${showProduct} of ${totalResults} results`;
    document.querySelector(".filter-summary").textContent = resultSummary;
    // Cập nhật lại sản phẩm hiển thị trên trang web
    // ...
  }
  