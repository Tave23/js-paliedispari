// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



//prompt della parola richiesta dall'utente
const parolaUtente = prompt('inserisci una parola per vedere se è palindroma o meno');

checkParolaPalindroma(parolaUtente);

if (checkParolaPalindroma(parolaUtente)) {
   console.log('La parola scelta è palindroma');
} else {
   console.log('La parola scelta NON è palindroma');
}


function checkParolaPalindroma (parolaUtente) {
   // ribalta la parola
   let parolaRibaltata = '';
   for(let i = parolaUtente.length - 1; i >= 0; i--){
      parolaRibaltata += parolaUtente[i];
      console.log(parolaRibaltata);
   }
   // check se uguale alla partenza

   if(parolaRibaltata.toUpperCase() === parolaUtente.toUpperCase())  return true;
   return false;
   

}
   // risultato palindroma/non palindroma




// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// prompt pari o dispari
let pariDispari = prompt('Inserisci "pari" o "dispari"'); 

console.log(pariDispari);

let oneToFive = parseInt(prompt('inserisci un numero da 0 a 5'));

console.log(oneToFive);

let numeroGeneratodalComputer = getNumCasuale();

let numeriSommati = (oneToFive + numeroGeneratodalComputer);
console.log("La somma dei numeri sommati è = " + numeriSommati); 

let esito = evenOrOdd(numeriSommati);

if (esito === pariDispari) {
   console.log('Hai vinto');
} else {
   console.log('Hai perso');
}

function getNumCasuale() {

   let num = Math.round(Math.random() * 5);
   console.log("Numero casuale del pc = " + num); 

   return num;
}

function evenOrOdd(parametriNumeriSommati) {

   let risposta = '';

   if (parametriNumeriSommati % 2 == 0) {

      risposta = 'pari';
      console.log('Il numero uscito è pari');

   } else {

      risposta = 'dispari';
      console.log('Il numero uscito è dispari');
   }

   return risposta;
}



