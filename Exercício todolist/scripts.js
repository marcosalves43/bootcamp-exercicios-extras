let tarefasPendentes = 3;

function finalizarTarefa(tarefaSpan) {
  const liTarefa = tarefaSpan.parentNode;

  if (liTarefa.classList.contains("finalizada")) {
    tarefasPendentes++;
    liTarefa.classList.remove("finalizada");
  } else {
    tarefasPendentes--;
    liTarefa.classList.add("finalizada");
  }

  atualizarTarefa();
}

function finalizarTodasAsTarefas() {
  const tarefas = document.querySelectorAll("li");

  for (let i = 0; i < tarefas.length; i++) {
    tarefas[i].classList.add("finalizada");
  }

  tarefasPendentes = 0;
  atualizarTarefa();
}

function atualizarTarefa() {
  const contador = document.querySelector(".header span");
  contador.innerHTML = `(${tarefasPendentes})`;
}
