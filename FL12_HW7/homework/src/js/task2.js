const ZERO = 0;
const FOUR = 4;
const EIGHT = 8;
let play = true;
let myNumber = Math.floor(Math.random() * (EIGHT - ZERO)) + ZERO;
let attemp = {
    3: 100,
    2: 50,
    1: 25
}

let question = confirm('Do you want to play a game?');

if (!question) {
    alert('You did not become a billionaire, but can!');
} else {
    do {
        let max = EIGHT;
        let prize = ZERO;

        for (let i = 3; i > 0; i--) {
            let userNumber = +prompt(`Choose a roulette pocket number from ${ZERO} to ${max}
Attempts left: ${i}
Total prize: ${prize}$
Possible prize on current attempt: ${attemp[i]}$`, '');

            if (userNumber === myNumber) {
                prize += attemp[i];
                let playAgain = confirm(`Congratulation, you won! Your prize is: ${prize}$. Do you want to continue?`);
                if (playAgain) {
                    max = max + FOUR;
                    myNumber = Math.floor(Math.random() * (max - ZERO)) + ZERO;
                    i = FOUR;
                    for (let key in attemp) {
                        if (typeof attemp[key] === 'number') {
                            attemp[key] *= 2;
                        }
                    }
                } else {
                    break;
                }
            }
        }

        alert(`Thank you for your participation. Your prize is: ${prize}$`);
        play = confirm('Do you want to play again?');
        myNumber = Math.floor(Math.random() * (EIGHT - ZERO)) + ZERO;
        attemp = {
            3: 100,
            2: 50,
            1: 25
        }
    } while (play);
}