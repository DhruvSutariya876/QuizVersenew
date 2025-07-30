const email = document.getElementById('email');
const password = document.getElementById('password');

const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('pass-error');

const form = document.getElementById('login-form');

form.addEventListener('submit', function (e) {
  emailError.textContent = "";
  passwordError.textContent = "";

  let valid = true;

  if (email.value.trim() === "") {
    emailError.textContent = "Enter Email";
    valid = false;
  }

  if (password.value.trim() === "") {
    passwordError.textContent = "Enter Password";
    valid = false;
  }

  if (!valid) {
    e.preventDefault(); 
  }
});
