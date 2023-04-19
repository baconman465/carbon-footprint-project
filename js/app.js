let el_nav = document.getElementById("nav");

el_nav.innerHTML = "<div class='header_container'><div class='header'><div class='nav_left'><a href='index.html'>Home</a><a href='#'>placeholder</a><a href='#'>placeholder</a></div><div class='header_img'><img src='images/really cool dinosaur.jpg' height='80rem' class='header_img rotate'></div><div class='nav_right'><a href='#'>placeholder</a><a href='#'>placeholder</a><a href='#'>placeholder</a></div><button class='closeButton' onclick='removeNav()'>Close</button></div></div>";


let navCode = el_nav.innerHTML;

function removeNav(){
    el_nav.innerHTML = "<button class = 'openButton' onclick='addNav()'>Open</button>";
}

function addNav(){
    el_nav.innerHTML = navCode;
}