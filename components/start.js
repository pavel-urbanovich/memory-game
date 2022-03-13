const input = document.querySelector('.input');
const startImage = document.querySelector('.start-image');
const cardWrapper = document.querySelector('.card-wrapper');
const startSection = document.querySelector('.start');
const aside = document.querySelector('.aside-container');
const opacityArray = [document.querySelector('.header-container'), document.querySelector('.footer-wrapper'), cardWrapper, aside];
const buttonMusic = document.querySelector('.music-btn');
const nameGame = document.querySelector('.game-name');
const newGameBtn = document.querySelector('.new-game');
const bestResultsBtn = document.querySelector('.best-results');
const githubLink = document.querySelector('.github-link');
const footerLink = document.querySelector('.footer-link');
const schoolLink = document.querySelector('.school-link');
const pointEventsarr = [githubLink, footerLink, schoolLink, cardWrapper, buttonMusic, aside, newGameBtn, bestResultsBtn]

function getStart() {
    startImage.addEventListener('click', startGame);
}

function startGame() {
    if (input.value) {
        pointEventsarr.forEach(item => item.style.pointerEvents = 'auto')
        startSection.style.display = 'none';
        opacityArray.forEach(item => item.style.opacity = '1');
        nameGame.innerHTML = `Let's play, ${input.value}. I hope you win!`;
    }
}

function startGameEnter(event) {
    if (event.keyCode === 13) {
        startGame()
    }
}

export {getStart, startGameEnter}

