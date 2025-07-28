const email = document.getElementById('email');
const password = document.getElementById('password');

const emailError=document.getElementById('email-error');
const passwordError=document.getElementById('pass-error');

const form = document.getElementById('login-form');

form.addEventListener('submit',function(e){
emailError.textContent=" ";
passwordError.textContent=" ";

if(email.value.trim()===""){
    emailError.textContent="Enter Email";
}
if(password.value.trim()===""){
    passwordError.textContent="Enter Password";
}

}); 
