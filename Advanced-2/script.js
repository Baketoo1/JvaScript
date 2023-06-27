// entering variables
const slides = document.querySelectorAll(".slide");
// forEach = method calls a function for each element in an array.
// function to add an asset class
slides.forEach(function(oneslide){
    oneslide.addEventListener("click",function(){
        deleateActiveClass();
        oneslide.classList.add("active");
    });
});
// function to delete an asset class
function deleateActiveClass(){
    slides.forEach(function(mySlide){
        mySlide.classList.remove("active");
    });
}

