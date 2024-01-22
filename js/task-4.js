const loginForm = document.querySelector(".login-form");

const register = (event) => {
    event.preventDefault();
    const emailValue = loginForm.elements.email.value.trim();
    const passwordValue = loginForm.elements.password.value.trim();

    if (emailValue === "" || passwordValue === "") {
        return alert("All form fields must be filled in");
    }

    const formKeys = {
        email: emailValue,
        password: passwordValue,
    };
    
    console.log(formKeys);
    loginForm.reset();
}

loginForm.addEventListener("submit", register);