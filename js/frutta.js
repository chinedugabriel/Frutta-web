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
    secondMenuList.style.display = "none";
    navToggleIcon.style.backgroundImage="url(../img/icons/menu-toggle.png)";
  }
  prevScrollpos = currentScrollPos;
});