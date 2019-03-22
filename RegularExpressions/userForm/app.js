//form blur even listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZIP);
document.getElementById('phone').addEventListener('blur', validatePhone);
document.getElementById('email').addEventListener('blur', validateEmail);

function validateName(){

  const name = document.getElementById('name');
  const re = /^[A-Za-z]{2,10}$/;

  if(!re.test(name.value)){
    name.classList.add('is-invalid');
  } else {
    name.classList.remove('is-invalid');
  }
}

function validateZIP(){
  const ZIP = document.getElementById('zip');
  const re = /^\d{6}$/;

  if(!re.test(ZIP.value)){
    ZIP.classList.add('is-invalid');
  } else {
    ZIP.classList.remove('is-invalid');
  }

}

function validateEmail(){

  const email = document.getElementById('email');
  const re = /^([A-Za-z0-9_\-\.]+)\@([A-Za-z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if(!re.test(email.value)){
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }

}

function validatePhone(){
  const phone = document.getElementById('phone');
  const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

  if(!re.test(phone.value)){
    phone.classList.add('is-invalid');
  } else {
    phone.classList.remove('is-invalid');
  }
}