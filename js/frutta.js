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


//  This section is responsible for toggling between viewing a button that take's you to product page and if you click on the backdrop it remove's the backdrop so the user can keep using the carousel...

let view_more_backdrop_homePage = document.getElementById("view-more-backdrop");

let click_on_img_home = document.getElementsByClassName("carousel-item"); 



view_more_backdrop_homePage.addEventListener('click',()=>{
  view_more_backdrop_homePage.style.display = "none";
  // console.log('closed');
});

for(let i = 0; i <= 6; i++){
  click_on_img_home[i].addEventListener('click', ()=>{
    view_more_backdrop_homePage.style.display = "flex";
    // console.log('open');
  });
};

