let botao = document.getElementById("botao")
let input = document.getElementById("input")
let origem = document.getElementById("origem")
let destino = document.getElementById("destino")

botao.addEventListener("click", converter)

function converter() {
    if(origem.value == 'real' && destino.value == 'dolar') {
        alert(input.value / 5.8)
    } else if (origem.value == 'dolar' && destino.value == 'real' ) {
        alert(input.value * 5.8)
    } else if (origem.value == destino.value) {
        alert(input.value)
    }
}