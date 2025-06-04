/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function createArray(nomi) {
  const InitialArray = [];
  for (let i = 0; i < nomi.length; i++) {
    InitialArray.push(nomi[i].charAt(0));
  }
  return InitialArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(createArray(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
