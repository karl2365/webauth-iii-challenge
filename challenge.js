import { cpus } from "os";

// A faro shuffle of a deck of playing cards is a shuffle in which the deck is split exactly in 
// half and then the cards in the two halves are perfectly interwoven, 
// such that the original bottom card is still on the bottom and the original top card is still on top.
// For example, faro shuffling the list
// ['ace', 'two', 'three', 'four', 'five', 'six']
// gives
// ['ace', 'four', 'two', 'five', 'three', 'six' ]
// If 8 perfect faro shuffles are performed on a deck of 52 playing cards, the deck is restored to its original 
// order.
// Write a function that inputs an integer n and returns an integer representing the number of faro shuffles 
// it takes to restore a deck of n cards to its original order.
// Assume n is an even number between 2 and 2000.


const faro = num => {
    let deck = []
    for (let i = 0;i<num; i++){
        deck.push(i.toString());
    }
    let top = deck.slice(0,(num/2));
    let bottom = deck.slice((num/2), num);
    let shuffled = [];
    let count = 0;
    while ((shuffled.join('')) !== deck.join('')){
        shuffled = [];
        for(let i = 0; i < num/2; i++){
            shuffled.push(top[i]);
            shuffled.push(bottom[i]);
        }
        top = shuffled.slice(0,(num/2));
        bottom = shuffled.slice((num/2), num);
        count ++;
    }  
    return count;
};

console.log(faro(52))
console.log(faro(8))


// const maxNumber = num => Number(num.toString().split('').sort().reverse().join(''));


// console.log(maxNumber (17693284));
// console.log(maxNumber (566797));
// console.log(maxNumber (7389));
// console.log(maxNumber (569899753215));

