const distanceEl = document.getElementById("distance");
const ageEl = document.getElementById("age-field");
const submitBtnEl = document.getElementById("submit-btn");
const finalPriceEl = document.getElementById("finalPrice");
const priceKm = 0.21;

submitBtnEl.addEventListener("click", function (event) {

    event.preventDefault();

    let distanceKm = parseInt(distanceEl.value)
    let standardPrice = distanceKm * priceKm;
    let discount = 0;


    if (ageEl.value == "young") {
        discount = standardPrice * 0.20;
    } else if (ageEl.value == "senior") {
        discount = standardPrice * 0.40;
    }

    let discountPrice = (standardPrice - discount).toFixed(2);

    console.log("prezzo base", standardPrice);
    console.log("sconto", discountPrice)

});