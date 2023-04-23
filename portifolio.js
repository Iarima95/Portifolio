let form = document.getElementById("conteudo")
let  emailInput = document.getElementById ("caixa")
let mensagemInput = document.getElementById ("caixaMaior")
 
let botao = document.getElementById("conteudo-Botao");

displaySucess() {
    this.form.innerHTML = this.settings.success;
}

init (){
    if (this.form) this.botao.addEventListener("click", () => this.displaySucess());
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if(emailInput).value === "") {
     alert("Por favor, preencha seu e-mail!");
  }
});

