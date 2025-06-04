/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function CreateArrayCommonLetter(nomi, char) {
  const arrayCommonLetter = [];

  for (let i = 0; i < nomi.length; i++) {
    nome = nomi[i];
    if (nome.charAt(0) === char) {
      arrayCommonLetter.push(nomi[i]);
    }
  }

  return arrayCommonLetter;
}

// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
console.log(CreateArrayCommonLetter(names, "A"));
