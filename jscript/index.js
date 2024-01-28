const display = document.getElementById("display");

 function appendToDisplay(input){
    display.value += input;
 }

 function clearDisplay(){
    display.value = "";
 }

 function calculate(){
    try{
        display.value = eval(display.value);
        if (display.value == "Infinity"){
         display.value = "Não pode dividir por 0!"
        }
    }
    catch(errors){    
        display.value = "ERROR";
    }
    
 }
