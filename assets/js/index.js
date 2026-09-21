"use strict";
const form = document.querySelector(".formContainer");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  console.log([...data.keys()]);

  const result = {
    name: `${data.get("first name")} ${data.get("last name")}`,
    email: `${data.get("email")}`,
    phone: `${data.getAll("phone").join("")}`,
    subject: `${data.get("message subject")}`,
    message: `${data.get("message").trim().replace(/\s+/g, " ")}`,
  };
  console.log(result);
});
