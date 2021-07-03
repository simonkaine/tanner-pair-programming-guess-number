export function checkNumber(userGuess, computerValue){
    if (userGuess < computerValue && userGuess > 1){
        return 'number lower than target number';
    } else if (userGuess > computerValue && userGuess < 20){
        return 'number higher than target number';
    } else if (userGuess < 1 || userGuess > 20) {
        alert('Please pick a number between 1 and 20!');
    } else {
        return 'YOU WIN!';
    }
}