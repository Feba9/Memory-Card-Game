const cardArray  = [
   {
      name: 'cherries',
      img: 'images/cherries.png',
   },

   {
      name: 'grapes',
      img: 'images/grapes.png',
   },
   {
      name: 'lemon',
      img: 'images/lemon.png',
   },
   {
      name: 'chili',
      img: 'images/chili.png',
   },
   {
      name: 'orange',
      img: 'images/orange.png',
   },
   {
      name: 'pineapple',
      img: 'images/pineapple.png',
   },

   {
      name: 'cherries',
      img: 'images/cherries.png',
   },

   {
      name: 'grapes',
      img: 'images/grapes.png',
   },
   {
      name: 'lemon',
      img: 'images/lemon.png',
   },
   {
      name: 'chili',
      img: 'images/chili.png',
   },
   {
      name: 'orange',
      img: 'images/orange.png',
   },
   {
      name: 'pineapple',
      img: 'images/pineapple.png',
   },


]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWan =[]

function createBoard () {
   for (let i = 0; i < cardArray.length ; i++){
    const card = document.createElement('img');
      card.setAttribute('src', 'images/blank.png');
      card.setAttribute('data-id', i);
      card.addEventListener('click',flipCard)

   card.style.width = '150px'; 
   card.style.height = '150px'; 

   gridDisplay.appendChild(card);
   }
}

createBoard()
   function checkMatch(){

      const cards =document.querySelectorAll('img');
      const optionOneId = cardsChosenIds[0]
      const optionTwoId = cardsChosenIds[1]
      console.log(cards)
      console.log('check for match!!!')

      if (optionOneId == optionTwoId){
         cards[optionOneId].setAttribute('src', 'images/blank.png')
         cards[optionTwoId].setAttribute('src', 'images/blank.png')
         showResultMessage('You have a pair!');
   }
      if (cardsChosen[0] === cardsChosen[1]){
         showResultMessage('Great job, MATCH!');

         cards[optionOneId].setAttribute('src', 'images/white.png')
         cards[optionTwoId].setAttribute('src', 'images/white.png')
         cards[optionOneId].removeEventListener('click', flipCard)
         cards[optionTwoId].removeEventListener('click', flipCard)
         cardsWan.push(cardsChosen)
   } else {
         cards[optionOneId].setAttribute('src', 'images/blank.png')
         cards[optionTwoId].setAttribute('src', 'images/blank.png')
         showResultMessage('Sorry, Try again.');
   }

   
    
   //resultDisplay.textContent = cardsWan.length
      cardsChosen = []
      cardsChosenIds = []

if (cardsWan.length == cardArray.length/2) {
   showResultMessage('Congratulations! You find them all!');
}

   }

   function showResultMessage(message) {
      resultDisplay.textContent = message;
      setTimeout(function() {
          resultDisplay.textContent = cardsWan.length;
          // Kártyák megfordítása csak az üzenet törlése után
          const cards = document.querySelectorAll('img');
          cards.forEach(card => {
              card.setAttribute('src', 'images/blank.png');
              card.addEventListener('click', flipCard);
          });
      }, 1500);
  }

   function showResultMessage(message) {
      resultDisplay.textContent = message;
  }

function flipCard( ){
   console.log(cardArray)
   const cardId = this.getAttribute('data-id')
   console.log(cardArray[cardId].name);
   cardsChosen.push(cardArray[cardId].name)
   cardsChosenIds.push(cardId)
   console.log(cardsChosen)
   console.log(cardsChosenIds)
   this.setAttribute('src', cardArray[cardId].img)
   if (cardsChosen.length === 2){
      setTimeout( checkMatch, 500)
   }

}
