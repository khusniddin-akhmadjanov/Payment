let visaCard = document.getElementById("visa-id");

let paypalCard = document.getElementById("paypal-id");

let masterCard = document.getElementById("mastercard-id");

let cardType = document.getElementById("pay-card-title");

let backText = document.getElementById("back-text-id");

visaCard.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "pink";
  backText.innerHTML = "Visa";
});

paypalCard.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "lightblue";
  backText.innerHTML = "PayPal";
});

masterCard.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "orange";
  backText.innerHTML = "Mastercard";
});
