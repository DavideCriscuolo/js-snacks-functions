/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = "Mario";

// Dichiara la funzione qui.
function saluta(nome) {
  let saluto = "Ciao";
  let salutoCompleto = saluto + " " + nome;
  return salutoCompleto;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(saluta(userName));

//Risultato atteso se si passa 'Mario': // ciao Mario

// Arrow Fuction
/*
const saluta = (nome) => {
  let saluto = "Ciao";
  let salutoCompleto = saluto + " " + nome;
  return salutoCompleto;
  
}
console.log(saluta(userName));
*/
