const formEl = document.querySelector("form.login-form") as HTMLFormElement;

formEl.addEventListener("submit", checkValid);

function checkValid(event: Event) {
  event.preventDefault();

  const form = event.currentTarget as HTMLFormElement;
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
