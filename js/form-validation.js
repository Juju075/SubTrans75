const form = document.getElementById("form");

const firstname = document.getElementById("firstname");
const surname = document.getElementById("surname");
const company = document.getElementById("company");
const Job = document.getElementById("Job");
const email = document.getElementById("email");
const telephone = document.getElementById("phone");
const message = document.getElementById("message");
const submit = document.getElementById("submit");

submit.addEventListener("submit", (ev) => {
  ev.preventDefault();
  checkInputs();
});

function checkInputs() {}
const surnameValue = username.value.trim(),
  companyValue = company.value.trim(),
  JobValue = Job.value.trim(),
  emailValue = email.value.trim(),
  telephoneValue = telephoneValue.trim(),
  messageValue = message.value.trim();
