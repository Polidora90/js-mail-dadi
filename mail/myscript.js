var mailUtente = prompt("Inserisci il tuo indirizzo mail");
console.log(mailUtente);

// aggiungere validazioni tipo "deve contenere @" maybe

var elementExist = false;

var mailValide = ["giovanni.rossi@gmail.com","john.doe@gmail.com","maria.dolores@libero.it","polidorah.hi@gmail.com"];

for (var i = 0 ; i < mailValide.length ; i++) {
    if (mailUtente === mailValide[i]) {
        elementExist = true;
        console.log("Mail valida");
    }
}

if (!elementExist) {
    alert("La mail inserita non è valida!")
}