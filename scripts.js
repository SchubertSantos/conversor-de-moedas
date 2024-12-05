// Seleciona os elementos HTML
let botao = document.getElementById("botao");
let input = document.getElementById("input");
let origem = document.getElementById("origem");
let destino = document.getElementById("destino");

// Adiciona um evento de clique ao botão
botao.addEventListener("click", converter);

// Função para converter a moeda
function converter() {
  // Verifica se a moeda de origem é Real e a moeda de destino é Dólar
  if (origem.value == 'real' && destino.value == 'dolar') {
    // Converte Reais para Dólares
    alert(input.value / 5.8);
  } else if (origem.value == 'dolar' && destino.value == 'real') {
    // Converte Dólares para Reais
    alert(input.value * 5.8);
  } else if (origem.value == destino.value) {
    // Se as moedas são iguais, exibe o mesmo valor
    alert(input.value);
  }
}