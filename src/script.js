const form = document.getElementById('form');
const fields = document.querySelectorAll('.required');
const infoError = document.querySelectorAll('.infoError');
const iconError = document.querySelectorAll('.iconError');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const inputs = document.querySelectorAll('.inputs');

form.addEventListener('submit', (ev) => {
  ev.preventDefault();
  firstNameValidate();
  lastNameValidate();
  emailValidate();
  passwordValidate();
})

function setError(index) {
  fields[index].style.border = '.125rem solid var(--red)';
  infoError[index].style.display = 'flex';
  iconError[index].style.display = 'block';
  inputs[index].setAttribute('placeholder', '')
}

function removeError(index) {
  fields[index].style.border = '';
  infoError[index].style.display = 'none';
  iconError[index].style.display = 'none';
  inputs[2].setAttribute('placeholder', 'example@email.com');
}

function firstNameValidate() {
  if(fields[0].value === '') {
    setError(0);
  } else {
    removeError(0);
  }
}

function lastNameValidate() {
  if(fields[1].value === '') {
    setError(1);
  } else {
    removeError(1);
  }
}

function emailValidate() {
  if(!emailRegex.test(fields[2].value)) {
    setError(2);
  } else {
    removeError(2);
  }
}

function passwordValidate() {
  if(fields[3].value === '') {
    setError(3);
  } else {
    removeError(3);
  }
}
