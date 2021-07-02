import { checkNumber } from './utils.js';

const numberInput = document.getElementById('number-input');
const numberButton = document.getElementById('number-button');
const triesRemaining = document.getElementById('tries-remaining');
const hints = document.getElementById('hints');
const reset = document.getElementById('reset');

let number = Math.ceil(Math.random() * 20);
let attempts = 4;

numberButton.addEventListener('click', () => {
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
