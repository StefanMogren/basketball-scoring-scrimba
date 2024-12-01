// The buttons
// const btn1Home = document.getElementById('btn-1-home-html');
// const btn2Home = document.getElementById('btn-2-home-html');
// const btn3Home = document.getElementById('btn-3-home-html');

const buttonHome = document.querySelectorAll('.home-button');
buttonHome.forEach((btn)=>{
    btn.addEventListener('click', addHomeScore);
});

const buttonGuest = document.querySelectorAll('.guest-button');
buttonGuest.forEach((btn)=>{
    btn.addEventListener('click', addGuestScore);
});

const scoreHome = document.getElementById('score-home-html')
const scoreGuest = document.getElementById('score-guest-html')

const btnNewGame = document.getElementById('btn-new-game-html');
btnNewGame.addEventListener('click', restartScore);




function addHomeScore() {
    if(this.innerText === '+1' || this.innerText === '+2' || this.innerText === '+3' ) {
        let btnToNum = parseInt(this.innerText.slice(1));
        let scoreToNum = parseInt(scoreHome.innerText);
        scoreHome.innerText = scoreToNum + btnToNum;
    }
    else {
        scoreHome.innerText = 'che at!'
    }
}

function addGuestScore() {
    if(this.innerText === '+1' || this.innerText === '+2' || this.innerText === '+3' ) {
        let btnToNum = parseInt(this.innerText.slice(1));
        let scoreToNum = parseInt(scoreGuest.innerText);
        scoreGuest.innerText = scoreToNum + btnToNum;
    }
    else {
        scoreGuest.innerText = 'che at!'
    }
}

function restartScore() {
    scoreHome.innerText = "0";
    scoreGuest.innerText = "0";
}