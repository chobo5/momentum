const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function loginFormSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME)
    localStorage.setItem(USERNAME_KEY, username);
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    
}



loginForm.addEventListener('submit', loginFormSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', loginFormSubmit);
}else {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${savedUsername}`;

}