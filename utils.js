//export functions


export function checkNumber(guess, number){
    if (guess < number){
        return 'number lower than target number';
    } else if (guess > number){
        return 'number higher than target number';
    } else {
        return 'YOU WIN!';
    }
}