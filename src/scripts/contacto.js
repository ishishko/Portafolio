export default function contacto() {
  $form.addEventListener("submit", enviar);
  const $form = document.querySelector(".contacto--formulario");
  async function enviar(e) {
    e.preventDefault();
    const form = new FormData(this);
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
      btnEnviar.value = "Mensaje Enviado";
      btnEnviar.classList.add("contacto--button__ok");
      setTimeout(() => {
        btnEnviar.classList.remove("contacto--button__ok");
        btnEnviar.value = "Enviar";
      }, 2500);
    }
  }
}
