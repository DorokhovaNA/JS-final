const levelsItem = document.querySelectorAll('.level__item');
const wrap = document.getElementById('wrapper');//переменная стартового поля//
const startGame = document.getElementById('button');//переменная для кнопки//
const gridContainer = document.body.children[1];
let openCard = null;
let click = 0;
const levelMenu = document.querySelectorAll('level-menu');
let cards = 0;

//выбор уровня//
let onClick = function (event) {
    event.preventDefault();
    for (let i = 0; i < levelsItem.length; i++) {
        levelsItem[i].classList.remove('level__item_selected');
    }
    event.currentTarget.classList.add('level__item_selected');
    let selectLevel = document.querySelector('.level__item_selected');
    switch (selectLevel.id) {
        case "easy":
            cards = 3;
            break;
        case "middle":
            cards = 6;
            break;
        case "hard":
            cards = 10;
            break;
    }
};

//Скрыть меню:
const invisible = function () {
  wrap.classList.toggle('invisible');
  wrap.classList.remove('wrapper');
}

random = (value) => (Math.floor(Math.random() * value));

let rotateCards = function (event) {
    event.preventDefault();
    click++;
    if(click < 2) {
      event.currentTarget.children[0].classList.toggle("rotate");
    }
    else {
      window.location.reload();
    }
    return;
};

let createWrapCards = function (event) {
  const gameBoard = "<div class='grid__card-selected'><div class='grid__card-back'></div><div class='grid__card-over'></div></div>";
  let randomValue = random(cards);
  for (let i = 0; i < cards; i++) {
    let newCards = document.createElement('div');
    newCards.classList = 'grid__card';
    gridContainer.appendChild(newCards);
    newCards.innerHTML = gameBoard;
    newCards.addEventListener("click", rotateCards);
    let back = document.querySelectorAll('.grid__card-over');
      if (i === randomValue) {
          back[i].classList.toggle('grid__card-back-bug');
          back[i].classList.remove('grid__card-over');
      }
  }

  openCard = document.querySelectorAll(".grid__card");

  switch (cards) {
    case 3:
      gridContainer.classList.toggle('grid-easy');
      break;
    case 6:
      gridContainer.classList.toggle('grid-middle');
      break;
    case 10:
      gridContainer.classList.toggle('grid-hard');
      break;
  }
};

for (let i = 0; i < levelsItem.length; i++) {
  levelsItem[i].addEventListener('click', onClick, false);
}
startGame.addEventListener("click", invisible);
startGame.addEventListener("click", createWrapCards);
