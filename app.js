const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const onLoginSubmit = (e) => {
    e.preventDefault();
    const userName = loginInput.value
    console.log(userName);
};

loginForm.addEventListener('submit', onLoginSubmit);