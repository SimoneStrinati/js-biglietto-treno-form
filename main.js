const distanceEl = document.getElementById("distance");
const ageEl = document.getElementById("age-field");
const submitBtnEl = document.getElementById("submit-btn");
const standardPriceEl = document.getElementById("standardPrice");
const priceKm = 0.21;

submitBtnEl.addEventListener("click", function (event) {

    event.preventDefault();

    let distanceKm = parseInt(distanceEl.value)
    let standardPrice = (distanceKm * priceKm).toFixed(2);
    let discount = 0;


    if (ageEl.value == "young") {
        discount = (standardPrice * 0.20).toFixed(2);
    } else if (ageEl.value == "senior") {
        discount = (standardPrice * 0.40).toFixed(2);
    }

    let discountPrice = (standardPrice - discount).toFixed(2);

    console.log("prezzo base", standardPrice);
    console.log("sconto", discountPrice)

    document.getElementById("standardPrice").innerText = `Prezzo base: ${standardPrice} €`;
    document.getElementById("discountApplied").innerText = `Sconto applicato: ${discount} €`;
    document.getElementById("discount").innerText = `Prezzo finale: ${discountPrice} €`

});