import cargaTerminada from "./cargaPagina.js";
import navFixed from "./navFixed.js";

window.onload = () => {
  eventos();
};

function eventos() {
  const html = document.querySelector("html");
  cargaTerminada();
  navFixed();
}

const $form = document.querySelector(".contacto--formulario");
$form.addEventListener("submit", enviar);

async function enviar(e) {
  e.preventDefault();
  const form = new FormData(this);
  console.log(form);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    const btnEnviar = document.querySelector(".contacto--button");
    this.reset();
    btnEnviar.innerHTML = "Mensaje Enviado";
    btnEnviar.classList.add("contacto--button__ok");
    setTimeout(() => {
      btnEnviar.classList.remove("contacto--button__ok");
      btnEnviar.innerHTML = "Enviar";
    }, 2500);
  }
}
