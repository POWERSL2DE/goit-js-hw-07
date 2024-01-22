const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", () => {
    const userName = nameInput.value.trim();
    nameOutput.innerHTML = userName;
    nameOutput.textContent = userName === "" ? "Anonymous" : userName;
})