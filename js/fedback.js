const fedbackButton = document.querySelector(".btn-send");
const appointmentpopup = document.querySelector(".appointment");
const appointmentclose = document.querySelector(".btn-close");
const loginName = appointmentpopup.querySelector(".appointment-name");
const feedbackForm = document.querySelector(".appointment-form");
const loginEmail = appointmentpopup.querySelector(".appointment-email")

fedbackButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  appointmentpopup.classList.add("modal-show");
  appointmentpopup.classList.remove("visually-hidden");
  loginName.focus();
});

appointmentclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  appointmentpopup.classList.remove("modal-show");
  appointmentpopup.classList.add("visually-hidden");
})

feedbackForm.addEventListener("submit", function (evt) {
  if (!loginEmail.value) {
    evt.preventDefault();
  } else {
    localStorage.setItem()
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    if (appointmentpopup.classList.contains("modal-show")) {
      evt.preventDefault();
      appointmentpopup.classList.remove("modal-show");
    }
  }
});
