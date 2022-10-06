// Ciao ragazzi,
// esercizio di oggi: calcolo del prezzo del biglietto del treno
// cartella/repo js-biglietto-treno
// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

/* INPUT */
// Richiedere all'utente l'età
const userAge = parseInt(prompt("Qual è la tua età?"));
// Richiedere all'utente il numero di chilometri da percorrere
const userDistance = parseInt(prompt("Quanti km devi percorrere?"));
console.log(userAge, typeof(userAge), userDistance, typeof(userDistance));

/* ELABORAZIONE DATI */
// Moltiplicare 0.21€ per i km da percorrere per ottenere il prezzo parziale
const pricePerKm = 0.21;
let pricePartial = pricePerKm * userDistance;
console.log(pricePartial);

// SE l'età dell'utente è minore di 18 ALLORA applicare 20% di sconto al prezzo parziale 
const underDiscount = 20;
const overDiscount = 40;

if (userAge < 18) {
    pricePartial -= ((pricePartial / 100) * underDiscount);
} else if (userAge >= 65) {
    // ALTRIMENTI SE l'età dell'utente è maggiore-uguale a 65 ALLORA applicare lo sconto del 40% di sconto al prezzo parziale 
    pricePartial -= ((pricePartial / 100) * overDiscount);
}
console.log("pricePartial:", pricePartial);

// Arrotondare il prezzo parziale a due cifre dopo la virgola per ottenere il prezzo finale
const priceFinal = pricePartial.toFixed(2);
console.log("priceFinal:", priceFinal);

/* OUTPUT */
// Mostrare il prezzo finale del biglietto
document.getElementById("ticket-price").innerHTML = "Prezzo del biglietto: " + priceFinal;
