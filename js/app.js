// let el_nav = document.getElementById("nav");

// el_nav.innerHTML = "<div class='header_container'><div class='header'><div class='nav_left'><a href='index.html'>Home</a><a href='transportation.html'>Transportation</a><a href='#'>placeholder</a></div><div class='header_img'><img src='images/really cool dinosaur.jpg' height='80rem' class='header_img rotate'></div><div class='nav_right'><a href='#'>placeholder</a><a href='#'>placeholder</a><a href='work cited.html'>Work Cited</a></div><button class='closeButton' onclick='removeNav()'>Close</button></div></div>";


// let navCode = el_nav.innerHTML;

// function removeNav(){
//     el_nav.innerHTML = "<button class = 'openButton' onclick='addNav()'>Open</button>";
// }

// function addNav(){
//     el_nav.innerHTML = navCode;
// }

//above is just the code for the old navbar, it was kinda bad and not responsive
//im keeping the code there just in case


//new better navbar i inject so its uniform in all the pages

let navbar = document.getElementById("navinject");
let navcode = "<div class='navbar-container' id='navbar'> <a class='navbar-item' href='index.html'>Home</a> <a class='navbar-item' href='transportation.html'>Transportation</a> <a class='navbar-item' href='#'>Placeholder</a>  <a class='navbar-item' href='#'>Placeholder</a> <a class='navbar-item' href='work cited.html'>Work Cited</a> <button class='closeButton' onclick='removeNav()'>Close</button> </div>";

navbar.innerHTML = navcode;

function removeNav(){
    navbar.innerHTML = "<div class='navbar-container-empty' id='navbar'> <a class='navbar-item-empty' href='index.html'>Home</a> <a class='navbar-item-empty' href='transportation.html'>Transportation</a> <a class='navbar-item-empty' href='#'>Placeholder</a> <a class='navbar-item-empty' href='#'>Placeholder</a> <a class='navbar-item-empty' href='work cited.html'>Work Cited</a> <button class='openButton' onclick='addNav()'>Open</button> </div>";
}
function addNav(){
    navbar.innerHTML = navcode;
}