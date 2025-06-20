/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
function saluta(nome) {
  //         anno, mese, giorno, ora, minuto,secondo,ms
  const data = new Date(); //costruttore è una funzione speciale che crea ogetti
  let ora = data.getHours(); //metodo get
  if (ora <= 13) {
    return `Buongiorno ${nome}`;
  } else if (ora <= 17) {
    return `Buon pomeriggio ${nome}`;
  } else if (ora >= 17) {
    return `Buona sera ${nome}`;
  } else {
    return "Ciao";
  }
}

// Invoca la funzione qui e stampa il risultato in console
console.log(saluta(name));
//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
