var burger = document.getElementById("menu");
var mobilenav = document.getElementById("mobileNav");

mobilenav.style.display = "none";
burger.style.opacity = 1;

burger.onclick = function(){
    if(mobilenav.style.display == "none"){
        mobilenav.style.display = "block";
        burger.style.opacity = 0.5;
    }
    else{
        mobilenav.style.display = "none";
        burger.style.opacity = 1;
    }
}