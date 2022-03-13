function playAudioClick() {
    const audio = document.querySelector('.click-music');
    audio.play();
}

function playAudioCompareCards() {
    const audio = document.querySelector('.cards-music');
    audio.play();
}

export  {playAudioClick, playAudioCompareCards}