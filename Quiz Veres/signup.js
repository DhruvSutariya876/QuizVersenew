const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm');

const fullNameError = document.getElementById('fullname-error');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('pass-error');
const cnfpassError = document.getElementById('cnfpass-error');

const form = document.getElementById('signup-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  // Reset previous errors
  fullNameError.textContent = '';
  emailError.textContent = '';
  passwordError.textContent = '';
  cnfpassError.textContent = '';

  let valid = true;

  if (fullName.value.trim() === "") {
    fullNameError.textContent = 'Enter Full Name';
    valid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = 'Enter Email';
    valid = false;
  }

  if (password.value.trim().length < 6) {
    passwordError.textContent = 'Enter password with at least 6 characters';
    valid = false;
  }

  if (password.value !== confirmpassword.value) {
    cnfpassError.textContent = 'Passwords do not match';
    valid = false;
  }

  if (valid) {
    // Simulate successful signup
    console.log("Full Name:", fullName.value);
    alert("Signup Successful!");
    form.reset(); // or redirect to login page
    // window.location.href = "login.html"; // optional
  }
});
