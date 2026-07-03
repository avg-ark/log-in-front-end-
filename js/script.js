const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email === "" || password === "") {
        alert("Please fill all fields");
    } else {
        alert("Login button clicked successfully");
    }
});