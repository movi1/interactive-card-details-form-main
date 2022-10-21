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


var btns = document.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current.lenght >0) {
            current[0].className = current[0].className.replace("active", "");
        }
        this.className += "active";
    });
};
confirmButton.addEventListener("click", (e) => {
    e.preventDefault();
    thankYouSection.classList.remove("hidden");
    form.style.display = "none";
  });

  continueBtn.addEventListener("click", (e) => {
    e.preventDefault();
   form.classList.add("hidden");
   thankYouSection.style.display = "none";
  });

  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
