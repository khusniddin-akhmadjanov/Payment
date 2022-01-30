let cardNumber = document.getElementById("card-number-id");

let cardUserName = document.getElementById("card-user-name-id");

let cardDate = document.getElementById("card-date-id");

let cardNameInput = document.getElementById("name-id");

let cardNumberInput = document.getElementById("card-input-number-id");

let cardExpiryInput = document.getElementById("expiry-id");

let cardNumberCVV = document.getElementById("cvv-id");

let countrySelect = document.getElementById("country-id");

let payCard = document.getElementById("pay-card-id");

let paycardFront = document.getElementById("pay-card-front");

let paycardBack = document.getElementById("pay-card-back");

cardNameInput.addEventListener("keyup", function (e) {
  cardUserName.innerHTML = cardNameInput.value;
});

cardNumberInput.addEventListener("keyup", function (e) {
  cardNumber.innerHTML = cardNumberInput.value;
});

cardExpiryInput.addEventListener("keyup", function (e) {
  cardDate.innerHTML = cardExpiryInput.value;
});

cardNumberCVV.addEventListener("focusin", () => {
  paycardFront.classList.add("cardHover");
});

cardNumberCVV.addEventListener("focusout", () => {
  paycardFront.classList.remove("cardHover");
});
