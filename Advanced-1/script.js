// zadaní variables.
const textOr = document.getElementById("text");
const speedOr = document.getElementById("speed");
const text = "Martin jak se máš?";
let idLetter = 1;
let time = 200;
let delay = time / speedOr.value; 
// funkce na postupné zobrazování textu.
function printText (){
    textOr.innerText = text.slice(0, idLetter);
    idLetter++;
    if(idLetter > text.length){
        idLetter = 1;
    }
    // seTimeout = funkce která zpožďuje.
    setTimeout(printText, delay);
}
printText();
// addEventListener = posloucha jesli jsem něco nezměnily.
speedOr.addEventListener("input",function(event){
    delay = time / event.target.value;
});

