const card = document.querySelector(".card");

function flipCard() {
    card.classList.toggle("flipped");
}

card.addEventListener('click', flipCard);
document.addEventListener('keydown', event => {
    if (event.key === ' ') {
        flipCard();
    }
});