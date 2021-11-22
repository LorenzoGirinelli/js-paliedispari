// SCEGLIERE TRA PARI O DISPARI
const userEvenorOdd = prompt(`Scegli tra pari o dispari`);
console.log(userEvenorOdd);

// SCEGLIERE UN NUMERO
const userNumber = prompt(`Scegli un numero`);
console.log(userNumber);

// NUMERO GENERATO DAL COMPUTER
const computerNumber = Math.floor(Math.random() * 100) + 1;
console.log(computerNumber.toFixed());

// SOMMA TRA I DUE NUMERI
let sum = sommaNumeri(userNumber + computerNumber);
console.log('Risultato funzione', sum);

// function sommaNumeri(userNumber, computerNumber) {
//     const somma = userNumber + computerNumber;
//     // console.log(sommaNumeri);
//     return somma;
// }
// VEDERE SE E' PARI O DISPARI
