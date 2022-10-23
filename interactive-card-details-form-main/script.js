const cname = document.getElementById("cname");
const cnumber = document.getElementById("cnumber");
const expiry = Array.from(document.querySelectorAll(".expiry"));
const cvc = document.getElementById("cvc");
const confirmButton = document.getElementById("confirm");
const nameOnCard = document.querySelector(".cardname");
const numOnCard = document.querySelector(".cardnumber");
const expMM = document.querySelector(".expiry-month");
const expYY = document.querySelector(".expiry-year");
const cvcDisplay = document.querySelector(".cvc-display");
const thankYou = document.getElementById("thank-you-header");
const thankYouSection = document.getElementById("thank-you");
const continueBtn = document.getElementById("continue");
const form = document.getElementById("my-form");



confirmButton.addEventListener("click", (e) => {
    e.preventDefault();
    thankYouSection.classList.remove("hidden");
    form.style.display = "none";
  });

  continueBtn.addEventListener("click", (e) => {
    e.preventDefault();
    thankYouSection.classList.add("hidden");
   form.style.display = "block";
  });

