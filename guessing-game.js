function guessingGame(guess) {
    this.guess = guess;
    const num = Math.floor(Math.random() * 100);
    let guessed = false;
    if (!guessed) {
        if (this.guess == num) {
            guessed = true;
            return "WOW you guessed it!"
        } else if (this.guess < num) {
            return "Number is too low"
        } else {
            return "Number too high"
        }
    } else {
        return "You have already guessed the number"
    }
}

module.exports = { guessingGame };
