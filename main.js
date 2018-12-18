const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');
const newGame = document.querySelector('.newGame');

let guessCount = 1;
let randomNumber = Math.floor(Math.random()*100)+1;

const checkGuess = () => {
    let userGuess = Number(guessField.value);
    
    if (guessCount === 1) {
        guesses.textContent = 'Eelnevad pakkumised: ';
    }
    
    guesses.textContent += `${userGuess} `;
    
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Palju õnne, võitsid';
        lastResult.style.backgroundColor = 'green';
        lowOrHigh.textContent='';
        guessSubmit.disabled = true;
        guessField.disabled = true;
    }
    else if (guessCount === 10) {
        lastResult.textContent = 'Mäng läbi';
        lowOrHigh.textContent='';
        guessSubmit.disabled = true;
        guessField.disabled = true;
    }
    else {
        lastResult.textContent = 'Vale vastus';
        lastResult.style.backgroundColor = 'red';
        
        const lowOrHighText = 'Viimane pakkumine oli liiga ';
        if (userGuess < randomNumber) {
            lowOrHigh.textContent = lowOrHighText + 'madal';
        }
        else if (userGuess > randomNumber) {
            lowOrHigh.textContent = lowOrHighText + 'kõrge';
            
        }
    }
    
    
    guessCount++;
    guessField.value = '';
    guessField.focus();
};

guessSubmit.addEventListener('click',checkGuess);
newGame.addEventListener('click',);