// zadaní variables.
const input = document.querySelector(".inputSearch");
const search = document.querySelector(".search");
const button = document.querySelector(".btn");
    // funkce která přidá třidu active.
button.addEventListener("click",function(){
    // toggle = přepínač
    search.classList.toggle("active");
    // funkce kterou můžeme rovnou psát do pole.
    input.focus();
});



