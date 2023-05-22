// variables 

// Navigation Icon
let navToggleIcon = document.getElementById("toggle-menu-icon");

// Menu list
let secondMenuList = document.getElementById("second-menu-list");

// This event listener hides and displays the mobile menu List
navToggleIcon.addEventListener('click',()=>{
    
    if (secondMenuList.style.display === "none"){
        secondMenuList.style.display = "block";
        navToggleIcon.src="img/icons/close-menu.png";
    }else{
        secondMenuList.style.display = "none";
        navToggleIcon.src="img/icons/menu-toggle.png";
    }
});