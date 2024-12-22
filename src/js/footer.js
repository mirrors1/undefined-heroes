const BASE_URL = "https://portfolio-js.b.goit.study/api";
const form = document.querySelector(".form");
const button = document.querySelector(".footer-form-button");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
    event.preventDefault();
    const { email, comments } = event.target.elements;
    console.log(email.value, comments.value);
  
    fetch(`${BASE_URL}/application/json`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email.value, comments: comments.value })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
}