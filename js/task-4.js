const loginForm = document.querySelector(".login-form");

const register = (event) => {
    event.preventDefault();
    const email = loginForm.elements.email.value.trim();
    const password = loginForm.elements.password.value.trim();

    if (email === "" || password === "") {
        return alert("All form fields must be filled in");
    }

    const formKeys = {
        email: email,
        password: password,
    };
    
    console.log(formKeys);
    loginForm.reset();
}

loginForm.addEventListener("submit", register);