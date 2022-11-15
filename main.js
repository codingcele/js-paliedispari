
// chiedi all'user di inserire una parola




let tastoCheck = document.getElementById('check');

// crea una funzione per capire se è palindroma

tastoCheck.addEventListener('click',
    function reverseString() {
        let str = document.getElementById('parola').value;
        let splitString = str.split("");

        let reverseArray = splitString.reverse();

        let joinArray = reverseArray.join("");
    
        if (joinArray == str) {
            document.getElementById("pali").innerHTML = "La parola è palindroma.";
        }
        else {
            document.getElementById("pali").innerHTML = "La parola NON è palindroma!";
        }
    }
);





/* tastoCheck.addEventListener('click',
    function reverseString(str) {
        let splitString = str.split("");
    
        let reverseArray = splitString.reverse();
    
        let joinArray = reverseArray.join("");
        
        return joinArray;
    }
); */



// stampa output