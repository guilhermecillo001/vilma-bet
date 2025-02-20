// Gerar o número aleatório para o jogo
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

// Elementos do DOM
const adivinharBtn = document.getElementById('adivinhar-btn');
const resultado = document.getElementById('resultado');
const numeroInput = document.getElementById('numero');
const novoJogoBtn = document.getElementById('novo-jogo-btn');

// Função para verificar o palpite
function verificarAdivinhacao() {
    const palpite = parseInt(numeroInput.value);

    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        resultado.textContent = "Por favor, escolha um número entre 1 e 100!";
        resultado.style.color = "yellow";
        return;
    }

    if (palpite === numeroAleatorio) {
        resultado.textContent = "Parabéns! Você adivinhou o número!";
        resultado.style.color = "green";
    } else if (palpite < numeroAleatorio) {
        resultado.textContent = "Tente um número maior!";
        resultado.style.color = "orange";
    } else {
        resultado.textContent = "Tente um número menor!";
        resultado.style.color = "orange";
    }
}

// Função para reiniciar o jogo
function reiniciarJogo() {
    numeroInput.value = "";
    resultado.textContent = "";
    numeroAleatorio = Math.floor(Math.random() * 100) + 1; // Gerar um novo número
}

// Evento de clique para adivinhar o número
adivinharBtn.addEventListener('click', verificarAdivinhacao);

// Evento de clique para reiniciar o jogo
novoJogoBtn.addEventListener('click', reiniciarJogo);
