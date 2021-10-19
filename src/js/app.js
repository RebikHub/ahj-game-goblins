console.log('app started');

const gameField = document.getElementById('game');
const points = document.createElement('div');
const goblin = document.createElement('div');
goblin.classList.add('points');
points.classList.add('points');
let point = null;
let goblins = null;
gameField.insertAdjacentElement('afterend', points);
points.insertAdjacentElement('afterend', goblin);
let randomNumber = null;

for (let i = 1; i < 17; i += 1) {
  const cell = document.createElement('div');
  cell.classList.add('game-cell');
  gameField.appendChild(cell);
}

const completeField = Array.from(document.querySelectorAll('.game-cell'));

function winOrLose() {
  if (goblins > 4) {
    alert('You Lose!');
    goblins = 0;
    point = 0;
  }
  if (point > 20) {
    alert('You Win!');
    goblins = 0;
    point = 0;
  }
}

function getRandomPicture(field) {
  field.forEach((elem) => {
    if (elem.classList.contains('picture')) {
      elem.classList.remove('picture');
      goblins += 1;
      winOrLose();
      goblin.textContent = `Missed the goblins: ${goblins}`;
    }
    if (elem.classList.contains('cursor')) {
      elem.classList.remove('cursor');
    }
  });

  let random = Math.floor(Math.random() * field.length);

  if (randomNumber === random) {
    while (randomNumber === random) {
      random = Math.floor(Math.random() * field.length);
    }
    randomNumber = random;
    return field[randomNumber].classList.add('picture');
  }

  randomNumber = random;
  return field[randomNumber].classList.add('picture');
}

function gameClick(field) {
  field.forEach((elem) => {
    elem.addEventListener('click', () => {
      if (elem.classList.contains('picture')) {
        elem.classList.add('cursor');
        elem.classList.remove('picture');
        point += 1;
        winOrLose();
        points.textContent = `Points: ${point}`;
      }
    });
  });
}

getRandomPicture(completeField);

setInterval(() => {
  getRandomPicture(completeField);
}, 1000);

gameClick(completeField);
