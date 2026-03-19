document.addEventListener("DOMContentLoaded", function () {

  const checkbox = document.getElementById("robotCheck");
  const status = document.getElementById("captchaStatus");
  const form = document.querySelector(".contact-form");

  checkbox.addEventListener("change", function () {

    if (this.checked) {
      status.style.color = "black";
      status.innerText = "Verifying...";

      setTimeout(() => {
        status.style.color = "green";
        status.innerText = "✔ Verified";
      }, 1500);

    } else {
      status.innerText = "";
    }
  });

  form.addEventListener("submit", function (e) {

    if (!checkbox.checked || status.innerText !== "✔ Verified") {
      e.preventDefault();
      alert("Please complete captcha verification");
    }

  });

});