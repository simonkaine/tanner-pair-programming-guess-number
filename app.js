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
let number = Math.floor(Math.random(1) * 20);
let attempts = 4;


numberButton.addEventListener('click', () => {
    attempts--;
    if (attempts === 0){
        numberButton.disabled = true;
        reset.visible = true;
    }
    triesRemaining.textContent = `${attempts} tries reamining`;
    const check = checkNumber(numberInput.value, number);
    hints.textContent = check;
    
});