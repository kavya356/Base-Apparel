let userInput = document.getElementById("mail");
let userForm = document.getElementById("submit");
let err_message = document.getElementById("err");

userForm.addEventListener('click', (e) => {
    e.preventDefault();

    if (!validateEmail(userInput.value)) {
        err_message.style.display = "block";
        userInput.classList.add("error");
    } else {
        err_message.style.display = "none";
        userInput.classList.remove("error");
        console.log(userInput.value);
    }
})

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}