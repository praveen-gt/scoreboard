let homePlusOne = document.getElementById('homePlusOne');
let homePlusTwo = document.getElementById('homePlusTwo');
let homePlusThree = document.getElementById('homePlusThree');
let guestPlusOne = document.getElementById('guestPlusOne');
let guestPlusTwo = document.getElementById('guestPlusTwo');
let guestPlusThree = document.getElementById('guestPlusThree');
let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score')

let homePoints = 0;
let guestPoints = 0;
homeScore.textContent = homePoints
guestScore.textContent = guestPoints

homePlusOne.addEventListener('click', () => {
    homePoints += 1;
    homeScore.textContent = homePoints
    checkWinner()
})
homePlusTwo.addEventListener('click', () => {
    homePoints += 2;
    homeScore.textContent = homePoints
    checkWinner()
})
homePlusThree.addEventListener('click', () => {
    homePoints += 3;
    homeScore.textContent = homePoints
    checkWinner()
})
guestPlusOne.addEventListener('click', () => {
    guestPoints += 1;
    guestScore.textContent = guestPoints
    checkWinner()
})
guestPlusTwo.addEventListener('click', () => {
    guestPoints += 2;
    guestScore.textContent = guestPoints
    checkWinner()
})
guestPlusThree.addEventListener('click', () => {
    guestPoints += 3;
    guestScore.textContent = guestPoints
    checkWinner()
})

function checkWinner() {
    if (guestPoints > homePoints) {
        guestScore.classList.add('green')
        homeScore.classList.remove('green')
        homeScore.classList.add('red')
    }
    if (homePoints > guestPoints) {
        homeScore.classList.add('green')
        guestScore.classList.remove('green')
        guestScore.classList.add('red')
    }
    if ((homePoints>0) && (guestPoints> 0) && homePoints == guestPoints) {
        guestScore.classList.remove('green')
        guestScore.classList.remove('red')
        homeScore.classList.remove('green')
        homeScore.classList.remove('red')
    }
}

let interval;

function startCountDown(duration) {
    const timerElement = document.getElementById('timer');

        interval = setInterval(() => {
        minutes = parseInt(duration / 60, 10)
        seconds = parseInt(duration % 60, 10)

        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        timerElement.textContent = minutes + ':' + seconds

        if(--duration < 0) {
            clearInterval(interval)
            timerElement.textContent = "Time's Up!"
        }
    }, 1000);
}

startCountDown(300)

function newGame() {
    homePoints = 0;
    guestPoints = 0;
    homeScore.textContent = homePoints
    guestScore.textContent = guestPoints
    guestScore.classList.remove('green')
    guestScore.classList.remove('red')
    homeScore.classList.remove('green')
    homeScore.classList.remove('red')
    clearInterval(interval)
    startCountDown(300)
}