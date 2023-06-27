// entering variables
const textOr = document.getElementById("text");
const speedOr = document.getElementById("speed");
const text = "Martin jak se máš?";
let idLetter = 1;
let time = 200;
let delay = time / speedOr.value; 
// function to gradually display the text
function printText (){
    textOr.innerText = text.slice(0, idLetter);
    idLetter++;
    if(idLetter > text.length){
        idLetter = 1;
    }
    // seTimeout = method calls a function after a number of milliseconds
    setTimeout(printText, delay);
}
printText();
speedOr.addEventListener("input",function(event){
    delay = time / event.target.value;
});

