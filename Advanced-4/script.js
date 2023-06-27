// entering variables
const containerSlider = document.querySelector(".container-slider");
const slideLeft = document.querySelector(".slide-left");
const slideRight = document.querySelector(".slide-right");
const arrowDown = document.querySelector(".arrow-down");
const arrowUp = document.querySelector(".arrow-up");
const slideLength = slideRight.querySelectorAll("div").length;
let numberActiveSlide = 0;
// determining the base view
slideLeft.style.top = "-"+((slideLength - 1) * 100)+"vh";
// arrow click function
arrowUp.addEventListener("click",function(){
    changeSlide("up");
});
arrowDown.addEventListener("click",function(){
    changeSlide("down");
});
// shift function
function changeSlide(direction){
    const sliderHeight = containerSlider.clientHeight;
    if(direction == "up"){
        numberActiveSlide++;
        if(numberActiveSlide >= slideLength){
            numberActiveSlide = 0;
        }
    } else {
        numberActiveSlide--;
        if (numberActiveSlide < 0){
            numberActiveSlide = slideLength - 1;
        }
    }
    slideRight.style.transform = "translateY(-"+(numberActiveSlide * sliderHeight)+"px)";
    slideLeft.style.transform = "translateY( "+(numberActiveSlide * sliderHeight)+"px)";
}