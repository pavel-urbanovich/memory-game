import {showResult, showBestResults, closeBestResults} from "./result.js";
import {playAudioClick, playAudioCompareCards} from "./audio.js";
import getOrderCards from "./ordercards.js";

const cardWrapper = document.querySelector('.card-wrapper');
const score = document.querySelector('.score-item');
const newGameBtn = document.querySelector('.new-game');
const bestResultBtn = document.querySelector('.best-results')
const closeLines = document.querySelector('.close-lines')

let count = 0;
let firstCard;
let finishCount = 0;

function cardChange() {
    cardWrapper.addEventListener('click', cardRotate);
    cardWrapper.addEventListener('dbclick', notEvent, false);
    newGameBtn.addEventListener('click', startNewGame);
    bestResultBtn.addEventListener('click', showBestResults);
    closeLines.addEventListener('click', closeBestResults)


}

function cardRotate(event) {
    if (event.target.classList.contains('back')) {
        event.target.closest('.card').classList.remove('close');
        event.target.closest('.card').classList.add('rotate');
        setTimeout(() => event.target.classList.toggle('active'), 500);
        setTimeout(() => event.target.previousElementSibling.classList.toggle('active'), 500);
        count = count + 1;
        score.innerHTML = `${count}`
        playAudioClick();
        compareCard(event, count)
        }  
    } 

    function compareCard(event, count) {
        if (count % 2 !== 0) {
            firstCard = event.target.closest('.card');
        }  if (firstCard.dataset.name !== event.target.closest('.card').dataset.name){
            closeCard(event);
            closefirstCard(firstCard);
        } else if(firstCard.dataset.name === event.target.closest('.card').dataset.name && count % 2 === 0) {
            finishCount++
            showResult(finishCount, count);
            playAudioCompareCards();
        }
    }

    function closeCard(event) {
            setTimeout(() => event.target.previousElementSibling.classList.remove('active'), 1000);
            setTimeout(() => event.target.previousElementSibling.classList.add('active'), 500);
            setTimeout(() => event.target.classList.remove('active'), 1000); 
            setTimeout(() => event.target.classList.remove('active'), 1000);
            setTimeout(() => event.target.closest('.card').classList.add('close'), 1000);
    }

    function closefirstCard(elem) {
        setTimeout(() => elem.firstElementChild.classList.remove('active'), 1000);
        setTimeout(() => elem.lastElementChild.classList.remove('active'), 1000);
        setTimeout(() => elem.closest('.card').classList.add('close'), 1000);
    }

    function notEvent(event) {
        event.preventDefault();
    }

    function startNewGame() {
        const front = document.querySelectorAll('.front');
        const back = document.querySelectorAll('.back');
        const cards = document.querySelectorAll ('.card');
        const finish = document.querySelector('.result');
        const sectionSrartReqest = document.querySelector('.start');
        front.forEach(item => item.classList.remove('active'));
        back.forEach(item => item.classList.remove('active'));
        cards.forEach(item => item.classList.remove('rotate'));
        score.innerHTML = '0';
        count = 0;
        finishCount = 0;
        sectionSrartReqest.style.display = 'block';
        getOrderCards();
        if (finish){
            finish.remove()
        }
    } 

export default cardChange