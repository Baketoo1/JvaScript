// zadaní variables.
const slides = document.querySelectorAll(".slide");
// forEach = funkce která prochazí každé pole.
slides.forEach(function(oneslide){
    // funkce na poslochá jestli jsme kliky na slide, pokud jsem kliky 
    // na daní slide tak ostraní třídu active a dá třídu activ na daní slide který byl kliknut.
    oneslide.addEventListener("click",function(){
        deleateActiveClass();
        // funkce která přidá třidu active.
        oneslide.classList.add("active");
    });
});
// funkce na ostranění třídy activ.
function deleateActiveClass(){
    slides.forEach(function(mySlide){
        mySlide.classList.remove("active");
    });
}

