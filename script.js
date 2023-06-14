const email = document.querySelector("#email");
const username = document.querySelector("#name");
const birthDate = document.querySelector("#birthDate");
const actionBtn = document.querySelector(".actionBtn");

function validateEmail(email) {
  if (!email.match(/\w{2,}@[a-zA-Z]{2,}\.[a-zA-Z]{2,}/)) {
    const error = new Error();
    error.input = "email";
    throw error;
  }
}

actionBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  email.classList.remove("success", "error");

  if (email.value === "" || username.value === "" || birthDate.value === "") {
    alert("Preencha todos os campos do formulário e tente novamente.");
  } else {
    try {
      validateEmail(email.value);
      email.classList.add("success");
      alert(`Todos os campos foram preenchidos corretamente!

(Dados não coletados, esse é apenas um projeto fictício para estudo)`);
    } catch (error) {
      email.classList.add("error");
      alert("Formato de e-mail inválido.");
    }
  }
});
