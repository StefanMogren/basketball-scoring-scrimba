// The buttons
// Every button that adds score to the Home team will trigger the function addHomeScore.
// addHomeScore will check the content of the button itself and only use the value (namely 1, 2, and 3) in order to add the score.
const buttonHome = document.querySelectorAll('.home-button');
buttonHome.forEach((btn)=>{
    btn.addEventListener('click', addHomeScore);
});


// Every button that adds score to the Away team will trigger the function addAwayScore.
// addAwayScore will check the content of the button itself and only use the value (namely 1, 2, and 3) in order to add the score.
const buttonAway = document.querySelectorAll('.away-button');
buttonAway.forEach((btn)=>{
    btn.addEventListener('click', addAwayScore);
});


// The score for both the Home and Away team.
const scoreHome = document.getElementById('score-home-html')
const scoreAway = document.getElementById('score-away-html')


// Button to start a new game.
// Runs the function restartScore which sets the score for both teams to 0.
const btnNewGame = document.getElementById('btn-new-game-html');
btnNewGame.addEventListener('click', restartScore);



// After you press the Home score buttons, the function will first check to see if the content of said buttons are either +1, +2, or +3.
// An anti-cheat function prevents people from modifying the buttons on the web browser itself.
// The function then removes the + and turns the string into a number.
// The function also turns the content of scoreHome into a number.
// The function finally adds the values together and returns them into scoreHome.
// Finally, if this team has a score higher than the opponent, the border around the score turns yellow.
function addHomeScore() {
    if(this.innerText === '+1' || this.innerText === '+2' || this.innerText === '+3' ) {
        let btnToNum = parseInt(this.innerText.slice(1));
        let scoreToNum = parseInt(scoreHome.innerText);
        scoreHome.innerText = scoreToNum + btnToNum;
    }
    else {
        scoreHome.innerText = 'che at!'
    }

    if(parseInt(scoreHome.innerText) > parseInt(scoreAway.innerText))  {
        scoreHome.style.border = '5px yellow solid';
        scoreAway.style.border = 'none';
    }
}


// After you press the Away score buttons, the function will first check to see if the content of said buttons are either +1, +2, or +3.
// An anti-cheat function prevents people from modifying the buttons on the web browser itself.
// The function then removes the + and turns the string into a number.
// The function also turns the content of scoreAway into a number.
// The function finally adds the values together and returns them into scoreAway.
// Finally, if this team has a score higher than the opponent, the border around the score turns yellow.
function addAwayScore() {
    if(this.innerText === '+1' || this.innerText === '+2' || this.innerText === '+3' ) {
        let btnToNum = parseInt(this.innerText.slice(1));
        let scoreToNum = parseInt(scoreAway.innerText);
        scoreAway.innerText = scoreToNum + btnToNum;
    }
    else {
        scoreAway.innerText = 'che at!'
    }
        if(parseInt(scoreAway.innerText) > parseInt(scoreHome.innerText))  {
        scoreAway.style.border = '5px yellow solid';
        scoreHome.style.border = 'none';
    }
}


// Resets the score of both teams to 0.
// Also removes the yellow border if it's present.
function restartScore() {
    scoreHome.innerText = "0";
    scoreAway.innerText = "0";
    scoreHome.style.border = 'none';
    scoreAway.style.border = 'none';
}