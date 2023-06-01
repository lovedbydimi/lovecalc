
// Função para obter a data atual formatada como "dd/mm/yyyy"
function getDataAtualFormatada() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, "0");
    const mes = String(dataAtual.getMonth() + 1).padStart(2, "0");
    const ano = dataAtual.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
  
  // Verifica se o nome digitado é "Dimitrys"
  function verificarNome(nome) {
    return nome.toLowerCase() === "dimitrys";
  }
  
  // Obtém o valor armazenado no localStorage ou define um novo valor
  function obterOuDefinirValor() {
    const dataAtualFormatada = getDataAtualFormatada();
    let valorArmazenado = localStorage.getItem("valor");
  
    if (!valorArmazenado || JSON.parse(valorArmazenado).data !== dataAtualFormatada) {
      const numero = Math.floor(Math.random() * 9000000) + 1000000;
      valorArmazenado = JSON.stringify({ data: dataAtualFormatada, numero });
      localStorage.setItem("valor", valorArmazenado);
    }
  
    return JSON.parse(valorArmazenado).numero;
  }
  
  // Função que exibe a mensagem
  function exibirMensagem() {
    const nomeInput = document.getElementById("nomeInput");
    const mensagemDiv = document.getElementById("mensagem");
    const nome = nomeInput.value.toLowerCase();
    const valor = obterOuDefinirValor();
  
    if (verificarNome(nome)) {
      mensagemDiv.textContent = `Dany, o Dimitrys te ama ${valor} milhões hoje!`;
    } else {
      mensagemDiv.textContent = "Digite 'Dimitrys' para calcularmos o amor diario!";
    }
  }
  