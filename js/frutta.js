// variables 

// this covers the complete navigation 
let mainNav = document.getElementById("main-nav");

// Navigation Icon
let navToggleIcon = document.getElementById("toggle-menu-icon");

// Menu list
let secondMenuList = document.getElementById("second-menu-list");

// This event listener hides and displays the mobile menu List
navToggleIcon.addEventListener('click',()=>{
    
    if (secondMenuList.style.display === "none"){
        secondMenuList.style.display = "block";
        navToggleIcon.style.backgroundImage="url(../img/icons/close-menu.png)";
    }else{
        secondMenuList.style.display = "none";
        navToggleIcon.style.backgroundImage="url(../img/icons/menu-toggle.png)";
    }
});



// this feature hides and shows the navigation when the user scrolls up the navigation becomes visible.


let prevScrollpos = window.pageYOffset;
window.addEventListener("scroll" ,()=> {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    mainNav.style.top = "0";
  } else {
    mainNav.style.top = "-400px";
    secondMenuList.style.display = "none";
    navToggleIcon.style.backgroundImage="url(../img/icons/menu-toggle.png)";
  }
  prevScrollpos = currentScrollPos;
});




// these are varables for product list, product details and buttons to show and hide 

// 1
let product_details_collection_1 = document.getElementById('product-details-collection-1');


let close_detail_product_btn_1 = document.getElementById('close-detail-product-btn-1');

let product_row_1 = document.getElementById('product-row-1');

let view_product_details_btn_1 = document.getElementById('view-product-details-btn-1');

// 2
let product_details_collection_2 = document.getElementById('product-details-collection-2');


let close_detail_product_btn_2 = document.getElementById('close-detail-product-btn-2');

let product_row_2 = document.getElementById('product-row-2');

let view_product_details_btn_2 = document.getElementById('view-product-details-btn-2');

// 3
let product_details_collection_3 = document.getElementById('product-details-collection-3');


let close_detail_product_btn_3 = document.getElementById('close-detail-product-btn-3');

let product_row_3 = document.getElementById('product-row-3');

let view_product_details_btn_3 = document.getElementById('view-product-details-btn-3');

// 4
let product_details_collection_4 = document.getElementById('product-details-collection-4');


let close_detail_product_btn_4 = document.getElementById('close-detail-product-btn-4');

let product_row_4 = document.getElementById('product-row-4');

let view_product_details_btn_4 = document.getElementById('view-product-details-btn-4');

// 5
let product_details_collection_5 = document.getElementById('product-details-collection-5');


let close_detail_product_btn_5 = document.getElementById('close-detail-product-btn-5');

let product_row_5 = document.getElementById('product-row-5');

let view_product_details_btn_5 = document.getElementById('view-product-details-btn-5');



// this function helps to hide and show between product details and the list of product

function productView(closeBtn,showBtn,productDetails,productCollection){
  closeBtn.addEventListener('click',()=>{
    // product details
  productDetails.style.display = "none";
  // list of product collection
  productCollection.style.display = "flex";
});

showBtn.addEventListener('click',()=>{
    // product details
  productDetails.style.display = "flex";
  // list of product collection
  productCollection.style.display = "none";
});
}

// 1
productView(close_detail_product_btn_1,view_product_details_btn_1,product_details_collection_1,product_row_1);

// 2
productView(close_detail_product_btn_2,view_product_details_btn_2,product_details_collection_2,product_row_2);

// 3
productView(close_detail_product_btn_3,view_product_details_btn_3,product_details_collection_3,product_row_3);

// 4
productView(close_detail_product_btn_4,view_product_details_btn_4,product_details_collection_4,product_row_4);

// 4
productView(close_detail_product_btn_5,view_product_details_btn_5,product_details_collection_5,product_row_5);







