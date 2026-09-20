"use strict";
const form = document.querySelector(".formContainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  console.log([...data.keys()]);

  const message = data.get("Message").replace(/\s+/g, " ");
  console.log(message);

  const number = data.getAll("phone").join("");

  console.log(number);
});
