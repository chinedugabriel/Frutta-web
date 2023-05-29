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
        navToggleIcon.src="../img/icons/close-menu.png";
    }else{
        secondMenuList.style.display = "none";
        navToggleIcon.src="../img/icons/menu-toggle.png";
    }
});


// document.body.addEventListener("scroll")

// this just a reminder 
// add a feature for navigation onscroll such that when the user scrolls down the navigation hides and when the user scrolls up the navigation becomes visible.


