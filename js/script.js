// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



//prompt della parola richiesta dall'utente
const str = prompt('inserisci una parola per vedere se è palindroma o meno')
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
let pariDispari = prompt('Inserisci "pari" o "dispari"'); 

console.log(pariDispari);

let oneToFive = parseInt(prompt('inserisci un numero da 1 a 5'));

console.log(oneToFive);

let numeroGeneratodalComputer = getNumCasuale();

let numeriSommati = (oneToFive + numeroGeneratodalComputer);
console.log("La somma dei numeri sommati è = " + numeriSommati); 

let risposta = '';

let esito = evenOrOdd();

if (risposta === pariDispari) {
   console.log('Hai vinto');
} else {
   console.log('Hai perso');
}

function getNumCasuale() {

   let num = Math.round(Math.random() * 5);
   console.log("Numero casuale del pc = " + num); 

   return num;
}

function evenOrOdd(numeroSommato) {


   if (numeroSommato % 2 === 0) {


      risposta = 'pari';
      console.log('Il numero uscito è pari');

   } else {

      risposta = 'dispari';
      console.log('Il numero uscito è dispari');
   }
}



