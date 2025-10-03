# Project related to DOM

## Project Link
[Click here] (http://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
console.log("Khushbu")

const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach(function (button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    // if(e.target.id === 'grey'){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'white'){
    //   body.style.backgroundColor = 'red';
    // }
    // if(e.target.id === 'blue'){
    //   body.style.backgroundColor = e.target.id;
    // }
    // if(e.target.id === 'yellow'){
    //   body.style.backgroundColor = e.target.id;
    // }
    const color=e.target.id;
    switch(color){
      case 'grey': body.style.backgroundColor = 'grey';
      break;

      case 'white': body.style.backgroundColor = 'red';
      break;

      case 'blue': body.style.backgroundColor = 'blue';
      break;

      case 'yellow': body.style.backgroundColor = 'yellow';
      break;
    }
  });
});

```


## Project 2

```javascript
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  let BMI;
  if (height === ' ' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if (weight === ' ' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }
  else{
    BMI=(weight / ((height * height)/10000)).toFixed(2);
    //show the result
    results.innerHTML=`<span>${BMI}</span>`;
  }

  if(BMI){
  switch(true){
    case (BMI < 18.6):
    console.log("Underweight");
    results.innerHTML+=`<br>category:UnderWeight`;
    break;

    case (BMI >= 18.6 && BMI <=24.9):
    console.log("Normal Weight");
    results.innerHTML+=`<br>category:NormalWeight`;
    break;

    case (BMI >24.9):
    console.log("Over Weight");
    results.innerHTML+=`<br>category:OverWeight`;
    break;
  }
}
  
});
```



## Project 3

```javascript
const clock=document.getElementById('clock')

let date=new Date()
//console.log(date.toLocaleTimeString())


setInterval(function(){
  let date=new Date()
  //console.log(date.toLocaleTimeString())
  clock.innerHTML=date.toLocaleTimeString();
},1000)
```

## Project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess < 1) {
    alert('Please enter a number greater than 1');
  } else if (guess > 100) {
    alert('Please enter a number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('You guesses it right');
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = ' ';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton=document.querySelector('#newGame')
  newGameButton.addEventListener('click',function(e){
    randomNumber=parseInt(Math.random() * 100 + 1);
    prevGuess=[]
    numGuess=1
    guessSlot.innerHTML=''
    remaining.innerHTML=`${11-numGuess}`;
    userInput.removeAttribute('disabled')
    startOver.removeChild(p)
    playGame=true;
  })
}
```