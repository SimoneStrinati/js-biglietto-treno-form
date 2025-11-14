const distanceEl = document.getElementById("distance");
const ageEl = document.getElementById("age-field");
const submitBtnEl = document.getElementById("submit-btn");
const finalPriceEl = document.getElementById("finalPrice");
const priceKm = 0.21;

submitBtnEl.addEventListener("click", function (event) {

    event.preventDefault();
    
    let prezzoBase = parseInt(distanceEl) * priceKm;



});