console.log("Up and running!");

console.log("User flipped" + cards[0]);
console.log("User flipped" + cards[1]);

var cards = [
{
rank: 'queen',
suit: 'hearts',
cardImage: 'images/queen-of-hearts.png'
},

{
rank: 'queen',
suit: 'diamonds',
cardImage: 'images/queen-of-diamonds.png'
},

{
rank: 'king',
suit: 'hearts',
cardImage: 'images/king-of-hearts.png'
},

{
rank: 'king',
suit: 'diamonds',
cardImage: 'images/king-of-diamonds.png'
}

];
var cardsInPlay = [];

var checkForMatch = function {

if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
	console.log("Sorry, try again.");
};

}


var flipCard = function(cardId) {
console.log("User flipped" + cards[cardId].rank)

push.cardsInPlay(cards[cardId].rank)

checkForMatch
if ('cardsInPlay'.length === 2) 
console.log(cardImage)
console.log(suit)
}
	

flipCard(0);
flipCard(2);


var createBoard = function {
for (var i = 0; i < cards.length; i++) {
    
}
}
var createElement = img.cardElement










}
