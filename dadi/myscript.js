// resrituisce un numero random da 1 a 6
var numeroComputer = Math.floor(Math.random()*6);
console.log("Il numero generato dal compuer è " + numeroComputer);

// numero inserito dall'untente
var numeroUtente = parseInt(prompt("Inserisci un numero tra 1 e 6"));
console.log("Il tuo numero è " + numeroUtente);

// condizioni di validità
if (!numeroUtente || numeroUtente > 6 || numeroUtente <= 0) {
    alert("Dato non valido! Inserisci un numero da 1 a 6.");
}

// vediamo chi vince
if (numeroComputer > numeroUtente) {
    console.log("Mi dispiace, hai perso.");
} else if (numeroComputer < numeroUtente) {
    console.log("Complimenti! Hai vinto!")
} else if (numeroComputer === numeroUtente) {
    console.log("Pareggio! Riprova a giocare")
}