const fullName = document.getElementById('fullname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirm');

const fullNameError=document.getElementById('fullname-error');
const emailError=document.getElementById('email-error');
const passwordError=document.getElementById('pass-error');
const cnfpassError=document.getElementById('cnfpass-error');

const form=document.getElementById('signup-form');
form.addEventListener('submit',function(e){
    e.preventDefault();
     fullNameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    cnfpassError.textContent = '';

    if(fullName.value.trim()===" "){
        fullNameError.textContent='Enter Full Name';
    }

     if(email.value.trim()===" "){
        emailError.textContent='Enter Email';
    }

     if(password.value.trim().length<6){
        passwordError.textContent='Enter password greater than 6';
    }

     if(password.value!==confirmpassword.value){
        cnfpassErrorError.textContent='password doesnt match';
    }

    console.log(fullName.value);
});
console.log(fullName.value);