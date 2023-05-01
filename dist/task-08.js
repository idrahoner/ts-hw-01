"use strict";
const formEl = document.querySelector("form.login-form");
formEl.addEventListener("submit", checkValid);
function checkValid(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const { email, password } = form;
    const formatedMail = email.value.trim();
    const formatedPswd = password.value.trim();
    if (!formatedMail || !formatedPswd) {
        return alert("All fields must be filled!");
    }
    const formValues = {
        email: formatedMail,
        password: formatedPswd,
    };
    console.log(formValues);
    form.reset();
}
//# sourceMappingURL=task-08.js.map