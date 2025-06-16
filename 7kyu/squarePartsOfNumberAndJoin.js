function squareDigits(num){
    return Number(
        num.toString().
        split('').map(nbr => nbr * nbr).join(''));
    }