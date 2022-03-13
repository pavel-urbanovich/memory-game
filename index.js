import cardChange from "./components/rotate.js";
import getOrderCards from "./components/ordercards.js";
import {getStart, startGameEnter} from "./components/start.js";

const musicBtn = document.querySelector('.music-btn');
const inputGame = document.querySelector('.input')

window.onload = () => {
    cardChange()
    getStart()
    inputGame.addEventListener('keydown', startGameEnter);
    musicBtn.addEventListener('click', playAudio);
    getOrderCards()
}


let isPlay = false;

function playAudio() {
    const audio = document.querySelector('.page-music');
    if(!isPlay) {
        audio.play();
        musicBtn.classList.add('music-stop')
        isPlay = true;
    } else {
        audio.pause()
        musicBtn.classList.remove('music-stop')
        isPlay = false;
    }
}

console.log('Самооценка - 60 баллов (выполнены все требования задания)\nВёрстка +10 (реализован интерфейс игры +5,в футере приложения есть ссылка на мой гитхаб, год создания приложения, логотип курса со ссылкой на курс +5)\nЛогика игры. Карточки, по которым кликнул игрок, переворачиваются согласно правилам игры +10\nИгра завершается, когда открыты все карточки +10/nПо окончанию игры выводится её результат - количество ходов, которые понадобились для завершения игры +10\nРезультаты последних 10 игр сохраняются в local storage. Есть таблица рекордов, в которой сохраняются результаты предыдущих 10 игр +10\nПо клику на карточку – она переворачивается плавно, если пара не совпадает – обе карточки так же плавно переварачиваются рубашкой вверх +10\nДостаточно высокое качество оформления приложения и дополнительный не предусмотренный в задании функционал, улучшающий качество приложения\n(сделан адаптив до 320px, добавлена музыка при кликах на карточки, при совпадении карточек, при выводе результата\nдобавлена анимация, добавлена возможность ввода имени  игрока, ввод имени возможен при нажатии на клавишу Enter, добавлена кнопка новой игры) +10')