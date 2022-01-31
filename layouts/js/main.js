let visaCard = document.getElementById("visa-id");

let paypalCard = document.getElementById("paypal-id");

let masterCard = document.getElementById("mastercard-id");

let cardType = document.getElementById("pay-card-title");

let cardTypeBottom = document.getElementById("card-type-id");

let backText = document.getElementById("back-text-id");

visaCard.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "pink";
  backText.innerHTML = "Visa";
  cardTypeBottom.setAttribute("src", "./layouts/images/logos_visaelectron.svg");
});

paypalCard.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "lightblue";
  backText.innerHTML = "PayPal";
  cardTypeBottom.setAttribute("src", "./layouts/images/PayPal2007.svg.png");
});

masterCard.addEventListener("click", function (e) {
  document.body.style.backgroundColor = "orange";
  backText.innerHTML = "Mastercard";
  cardTypeBottom.setAttribute(
    "src",
    "./layouts/images/grommet-icons_mastercard.svg"
  );
});
