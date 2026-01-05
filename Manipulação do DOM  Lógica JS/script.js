const premios = ["maça"];

function montarItensNaTela() {
  const lista = document.querySelector(".premios ul");

  premios.forEach(function(item) {
    lista.innerHTML = `<li>${item}</li>`;
  });
}

montarItensNaTela();

/* essa função deve ser acionada quando o usuário clica em um prêmio */
function escolherItem(elemento) {
  elemento.classList.toggle("selecionado");
}

/* essa função deve ser chamada quando o botão de confirmar for pressionado */
function confirmarPremio() {
  // seu código aqui
}

montarItensNaTela();