let visaCard = document.getElementById("visa-id");

let paypalCard = document.getElementById("paypal-id");

let masterCard = document.getElementById("mastercard-id");

let cardType = document.getElementById("pay-card-title");

visaCard.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "pink";
  cardType.innerHTML = "Visa";
});

paypalCard.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "lightblue";
  cardType.innerHTML = "Paypal";
});

masterCard.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "orange";
  cardType.innerHTML = "Mastercard";
});
