// Gerar o número aleatório para o jogo de apostas
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Elementos do DOM
const apostarBtn = document.getElementById('apostar-btn');
const resultadoAposta = document.getElementById('resultado-aposta');
const valorApostaInput = document.getElementById('valor-aposta');
const numeroApostaInput = document.getElementById('numero-aposta');
const novoApostaBtn = document.getElementById('novo-aposta-btn');

// Função para verificar a aposta
function verificarAposta() {
    const valorAposta = parseFloat(valorApostaInput.value);
    const numeroAposta = parseInt(numeroApostaInput.value);

    if (isNaN(valorAposta) || valorAposta <= 0) {
        resultadoAposta.textContent = "Por favor, insira um valor válido para a aposta!";
        resultadoAposta.style.color = "yellow";
        return;
    }

    if (isNaN(numeroAposta) || numeroAposta < 1 || numeroAposta > 100) {
        resultadoAposta.textContent = "Escolha um número entre 1 e 100!";
        resultadoAposta.style.color = "yellow";
        return;
    }

    if (numeroAposta === numeroAleatorio) {
        resultadoAposta.textContent = `Parabéns! Você apostou corretamente no número ${numeroAposta}!`;
        resultadoAposta.style.color = "green";
    } else {
        resultadoAposta.textContent = `Que pena! O número correto era ${numeroAleatorio}. Tente novamente!`;
        resultadoAposta.style.color = "orange";
    }
}

// Função para reiniciar a aposta
function reiniciarAposta() {
    valorApostaInput.value = "";
    numeroApostaInput.value = "";
    resultadoAposta.textContent = "";
}

// Evento de clique para fazer a aposta
apostarBtn.addEventListener('click', verificarAposta);

// Evento de clique para reiniciar a aposta
novoApostaBtn.addEventListener('click', reiniciarAposta);
