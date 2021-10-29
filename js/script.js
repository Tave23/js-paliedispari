// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



//prompt della parola richiesta dall'utente
const str = prompt('inserisci una parola')
let strReverse = str.split("").reverse().join("");

if (str === strReverse) {
  console.log("Questa parola è palindroma");
} else {
  console.log("Questa parola NON è palindroma");
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// prompt pari o dispari
// const pariDispari = prompt('Inserisci pari o dispari'); 
// const oneToFive = prompt('inserisci un numero da 1 a 5');

// console.log(pariDispari);
// console.log(oneToFive);

// casuale();

// function casuale() {

//    num = Math.round(Math.random() * 5);
//    console.log("Numero casuale " + num); 

// }

