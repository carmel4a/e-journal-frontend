//form
const form = document.querySelector('form');

//inputs
const inputLogin = document.getElementById('login');
const inputPassword = document.getElementById('password');
const inputRepeatPassword = document.getElementById('repeat_password');
const inputEmail = document.getElementById('email');

//btn
const btn = document.querySelector('button');

let error = [];

//
const mailValid = /@/;

const sendForm = (e) =>{
    e.preventDefault()
    
    if(inputPassword.value.length < 6){
        error.push('.');

        inputPassword.value = ''
        inputPassword.placeholder = 'Minimalna długośc hasła to 6 znaków.';
        inputPassword.classList.add('error')
    }
    

    if(inputRepeatPassword.value != inputPassword.value){
        error.push('.')

        inputRepeatPassword.value = ''
        inputRepeatPassword.placeholder = 'Hasła muszą być takie same';
        inputRepeatPassword.classList.add('error');
    }

    if(!mailValid.test(inputEmail.value)){
        error.push('.');

        inputEmail.value = ''
        inputEmail.placeholder = 'Podaj poprawny adres e-mail';
        inputEmail.classList.add('error');
    }

    if(error.length === 0){
        form.submit();
    }

    else{

    }

    error = [];
}

btn.addEventListener('click',sendForm);