const premios = ["controle" , "videogame" , "carrinho"];

function montarItensNaTela() {
  const lista = document.querySelector(".premios ul");

  premios.forEach(function(item) {
    lista.innerHTML += `<li>${item}</li>`;
  });
}

montarItensNaTela();



const itens = document.querySelectorAll(".premios ul li");

itens.forEach((item) => {
  item.addEventListener("click", function () {
    escolherItem(this);
  });
});

function escolherItem(elemento) {
  itens.forEach((item) =>{
    item.classList.remove("selecionado")
  });
  elemento.classList.add("selecionado")
}



function confirmarPremio() {
  const selecionado = document.querySelector(".selecionado");

  if (!selecionado) {
    alert("Você precisa escolher um prêmio");
    return;
  }

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  const p = document.createElement("p");
  p.textContent = selecionado.innerHTML;
  resultado.appendChild(p);
}


