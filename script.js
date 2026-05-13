const formulario = document.getElementById("formulario-compra");
const listaSolicitacoes = document.getElementById("lista-solicitacoes");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const solicitante = document.getElementById("solicitante").value.trim();
  const produto = document.getElementById("produto").value.trim();
  const valor = parseFloat(document.getElementById("valor").value);

  const erroSolicitante = document.getElementById("erro-solicitante");
  const erroProduto = document.getElementById("erro-produto");
  const erroValor = document.getElementById("erro-valor");

  erroSolicitante.textContent = "";
  erroProduto.textContent = "";
  erroValor.textContent = "";

  let temErro = false;

  if (solicitante === "") {
    erroSolicitante.textContent = "Nome do solicitante é obrigatório.";
    temErro = true;
  }

  if (produto === "") {
    erroProduto.textContent = "Produto é obrigatório.";
    temErro = true;
  }

  if (isNaN(valor) || valor <= 0) {
    erroValor.textContent = "Informe um valor maior que zero.";
    temErro = true;
  }

  if (temErro) return;

  const status = valor <= 1000 ? "aprovado" : "pendente";
  const labelStatus = valor <= 1000 ? "Aprovado automaticamente" : "Aguardando aprovação";

  const cartao = document.createElement("div");
  cartao.classList.add("cartao-solicitacao");

  cartao.innerHTML = `
    <div class="linha-cartao">
      <span>Solicitante</span>
      <span>${solicitante}</span>
    </div>
    <div class="linha-cartao">
      <span>Produto</span>
      <span>${produto}</span>
    </div>
    <div class="linha-cartao">
      <span>Valor</span>
      <span>R$ ${valor.toFixed(2).replace(".", ",")}</span>
    </div>
    <span class="etiqueta-status status-${status}">${labelStatus}</span>
  `;

  listaSolicitacoes.prepend(cartao);

  formulario.reset();
});