const userName = document.querySelector('input');
const userResults = document.querySelector('.user-results');
const bestResult = {};

if (JSON.parse(localStorage.getItem('obj'))) {
    const object = JSON.parse(localStorage.getItem('obj'));
    const resultItems = document.querySelectorAll('.result-item');
    const resultNames = document.querySelectorAll('.result-name');
    resultItems.forEach(item => item.remove());
    resultNames.forEach(item => item.remove());
        for (let key in object) {
            bestResult[key] = object[key];
        }
    let arr = [];
        for (let key in bestResult) {
            arr.push([key, bestResult[key]])
        }
    let sorted = arr.sort((a, b) => a[1] - b[1]).slice(0, 10);
    let sortObj = {};
    sorted.forEach(item => sortObj[item[0]] = item[1]);
    creatElem(sortObj);
}

function showResult(item, result) {
    if (item === 10) {
        const wrapper = document.querySelector('.card-wrapper')
        const div = document.createElement('div');
        div.classList.add('result');
        div.innerHTML = `It was a beautiful game.<br>Your score - ${result}`
        wrapper.append(div);
        const resultDiv = document.querySelector('.result');
        const resultBTN = document.createElement('button');
        resultBTN.classList.add('result-btn');
        resultBTN.textContent = 'Ok';
        resultDiv.append(resultBTN);
        const resultDomBTN = document.querySelector('.result-btn');
        resultDomBTN.addEventListener('click', closeNotificationFinishGame);
        playAudiofinishGame();
        addBestResults(bestResult, result)
    }
}

function playAudiofinishGame() {
    const audio = document.querySelector('.finish-music');
    audio.play();
}

function addBestResults(obj, result) {
    obj[userName.value] = result;
    localStorage.setItem('obj', JSON.stringify(obj));
}

function showBestResults() {
    const lines = document.querySelector('.close-lines');
    userResults.classList.add('open');
    lines.classList.add('open');
}

function closeBestResults() {
    userResults.classList.remove('open');

}

function creatElem(obj) {
    for(let key in obj) {
        const name = document.createElement('div');
        name.classList.add('result-name');
        const res = document.createElement('div')
        res.classList.add('result-item');
        name.innerHTML = `${key}`;
        userResults.append(name);
        res.innerHTML = `${obj[key]}`
        userResults.append(res);
    }
}

function closeNotificationFinishGame(event) {
    event.target.closest('.result').style.display = 'none';
}

export {showResult, showBestResults, closeBestResults}