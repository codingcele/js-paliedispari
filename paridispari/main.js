
let tastoGenera = document.getElementById("genera");

tastoGenera.addEventListener('click',
    function() {
        let pc = Math.round(Math.random()*4)+1;

        document.getElementById("numPc").innerHTML = pc;

        let userNum = document.getElementById("num").value;

        let somma = parseInt(pc) + parseInt(userNum);

        document.getElementById("sum").innerHTML = somma;

        let bet = document.getElementById("bet").value

        let tipo

        if (somma % 2 == 0) {
            tipo = "even"
        }
        else {
            tipo = "odd"
        }

        if (tipo == bet) {
            document.getElementById("vincitore").innerHTML = "L'user vince.";
        }
        else {
            document.getElementById("vincitore").innerHTML = "Il Pc vince.";
        }
    }
);
