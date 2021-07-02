export function checkNumber(userGuess, computerValue){
    if (userGuess < computerValue){
        return 'number lower than target number';
    } else if (userGuess > computerValue){
        return 'number higher than target number';
    } else {
        return 'YOU WIN!';
    }
}