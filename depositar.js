const depositarBtn = document.getElementById('depositar-btn');
const confirmarDepositoBtn = document.getElementById('confirmar-deposito-btn');
const valorDepositoInput = document.getElementById('valor-deposito');
const depositoInfo = document.getElementById('deposito-info');

// Função para confirmar o depósito
function confirmarDeposito() {
    const valorDeposito = parseFloat(valorDepositoInput.value);

    if (isNaN(valorDeposito) || valorDeposito <= 0) {
        depositoInfo.textContent = "Por favor, insira um valor válido para o depósito!";
        depositoInfo.style.color = "yellow";
    } else {
        depositoInfo.textContent = `Depósito de R$${valorDeposito} confirmado!`;
        depositoInfo.style.color = "green";
    }
}

// Evento de clique para confirmar o depósito
confirmarDepositoBtn.addEventListener('click', confirmarDeposito);
