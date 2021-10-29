// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma



//prompt della parola richiesta dall'utente
const word = prompt('Inserisci una parola'); 

let str = word.toLowerCase();

checkPalindrome(str);

function checkPalindrome(str) {
  // trovo la lunghezza della stringa
  const len = str.length;
 
  for (let i = 0; i < len / 2; i++) {

    if (str[i] !== str[len - 1 - i]) {
      console.log("La parola NON inserita è palindroma");
    } else if (str[i] == str[len - 1 - i]) {
      console.log("La parola inserita è palindroma");
    }
  }
}


// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// prompt pari o dispari
const pariDispari = prompt('Inserisci pari o dispari'); 
const oneToFive = prompt('inserisci un numero da 1 a 5');

console.log(pariDispari);
console.log(oneToFive);

function casuale() {
   num = Math.round(Math.random() * 5);
   document.getElementById("casuale").innerHTML ="Numero casuale " + num;
}

console.log(casuale);