// enter variables
const input = document.querySelector(".inputSearch");
const search = document.querySelector(".search");
const button = document.querySelector(".btn");
// function to add the active class
button.addEventListener("click",function(){
    // toggle = switch
    search.classList.toggle("active");
    // function that we can write directly when clicking in the field
    input.focus();
});



