var span = document.getElementById("span-all"),
load = document.getElementById('loader'),
ul = document.getElementById("ul"),
nav = document.getElementById("nav"),
li = document.querySelector('header').querySelectorAll("li"),
link = document.querySelector('header').querySelectorAll('a'),
currentLocation = location.href;

function myloader() {
    load.style.display = "none";
}

span.onclick = function(){
    nav.classList.toggle("active1");
    ul.style.display = "block";
    ul.style.width = "250px";
    for(var i=0; i < li.length; i++){
        li[i].style.margin = "30px";
    }
}

// for(var x=0 ; x< link.length; x++) {
//     link[x].onclick = function(){
//         link.forEach(nav => nav.classList.remove('active'));
//         link[x].classList.add('active');
//     }
// }

for (var x=0; x<link.length; x++) {
    if(link[x].href === currentLocation) {
        link.forEach(nav => nav.classList.remove('active'));
        link[x].className = 'active';
    }
}