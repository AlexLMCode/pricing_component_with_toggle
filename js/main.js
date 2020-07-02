const toggleBtn = document.getElementById('toggle');
const cardOne = document.getElementById('card-one');
const cardTwo = document.getElementById('card-two');
const cardThree = document.getElementById('card-three');

function handleChange() {
    if (toggleBtn.checked) {
        changeToMonthly();
    } else {
        changeToAnnually();
    }
}

function changeToMonthly() {

    let cardPriceOne = cardOne.getElementsByClassName('card__price');
    cardPriceOne[0].style.opacity = 0;

    setTimeout(()=>{
        cardPriceOne[0].innerHTML = "$19.99";
        cardPriceOne[0].style.opacity = 1;
    }, 500)


    let cardPriceTwo = cardTwo.getElementsByClassName('card__price');
    cardPriceTwo[0].style.opacity = 0;

    setTimeout(()=>{
        cardPriceTwo[0].innerHTML = "$24.99";
        cardPriceTwo[0].style.opacity = 1;
    }, 500)

    let cardPriceThree = cardThree.getElementsByClassName('card__price');
    cardPriceThree[0].style.opacity = 0;

    setTimeout(()=>{
        cardPriceThree[0].innerHTML = "$39.99";
        cardPriceThree[0].style.opacity =1;
    }, 500)
}

function changeToAnnually() {

    let cardPriceOne = cardOne.getElementsByClassName('card__price');
    cardPriceOne[0].style.opacity = 0;

    setTimeout(()=>{
        cardPriceOne[0].innerHTML = "$199.99";
        cardPriceOne[0].style.opacity = 1;
    }, 500)


    let cardPriceTwo = cardTwo.getElementsByClassName('card__price');
    cardPriceTwo[0].style.opacity = 0;

    setTimeout(()=>{
        cardPriceTwo[0].innerHTML = "$249.99";
        cardPriceTwo[0].style.opacity = 1;
    }, 500)

    let cardPriceThree = cardThree.getElementsByClassName('card__price');
    cardPriceThree[0].style.opacity = 0;

    setTimeout(()=>{
        cardPriceThree[0].innerHTML = "$399.99";
        cardPriceThree[0].style.opacity =1;
    }, 500)
}