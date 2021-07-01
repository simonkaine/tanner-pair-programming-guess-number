// import functions and grab DOM elements
import { checkNumber } from './utils.js';
// initialize state
const numberInput = document.getElementById('number-input');
const numberButton = document.getElementById('number-button');
const triesRemaining = document.getElementById('tries-remaining');
const hints = document.getElementById('hints');
const reset = document.getElementById('reset');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
let number = Math.floor(Math.random() * 20);
let attempts = 4;


numberButton.addEventListener('click', () => {
    console.log(number);
    attempts--;
    triesRemaining.textContent = `${attempts} tries reamining`;
    reset.hidden = true;
    const check = checkNumber(numberInput.value, number);
    if (Number(numberInput.value) === number){
        numberButton.disabled = true;
        reset.hidden = false;
        hints.textContent = check;
    }
    else if (attempts === 0){
        hints.textContent = 'You Lost';
        numberButton.disabled = true;
        reset.hidden = false;
    } else {
        hints.textContent = check;
      
    }
});
