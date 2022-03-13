const cards = document.querySelectorAll('.card');

function getOrderCards() {
    cards.forEach((item) => {
    let randomCount = Math.floor(Math.random() * 20);
    item.style.order = randomCount;
    })
}

export default getOrderCards
