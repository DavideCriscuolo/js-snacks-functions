/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function searchNumbVocal(word1) {
  let countVocal = 0;
  let arrayVocals = [];
  for (let i = 0; i < word1.length; i++) {
    let char = word1[i];
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      countVocal++;
      arrayVocals.push(char);
    }
  }
  return `${countVocal} (${arrayVocals.join(", ")})`;
}

console.log(searchNumbVocal(word));
// Invoca la funzione qui e stampa il risultato in console

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
