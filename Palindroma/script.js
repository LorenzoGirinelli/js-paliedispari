// Chiedere all' utente di inserire una parola
// Creare una funzione

// Verificare che sia palindroma
let wordIsPalindrome;

if(wordIsPalindrome) {
    alert('La parola è palindroma');
} else {
    alert('La parola non è palindroma');
}

// FUNCTIONS

// Valuta se è un palindromo
function evaluteIfWorldIsPalindrome(originalWord) {
    console.log('inside function: ',originalWord);

    // Prendo la parola originale e da essa ottengo il contrario
    let reverseWord = '';
    for( let i = originalWord.length - 1; i >= 0; i-- ) {
        reverseWord += originalWord[i];
    }

    let isPalindrome;
    if(originalWord === reverseWord) {
        isPalindrome = true;
    } else {
        isPalindrome = false;
    }

    return isPalindrome;
}







// const userName = prompt(`Digita un nome`);
// const nome = [userName];
// function nomePalindrome(word){
//     let reverseName;
//     let answer;
//     for (let i = word.lenght - 1; i >= 0; i--) {
//         if(i === word.lenght - 1){
//             reverseName = word[i];
//         } else{
//             reverseName += word[i];
//         }
//     }
// }