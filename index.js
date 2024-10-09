const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    let nivel;

    if (saldoVitorias <= 10) {
        nivel = 'Ferro';
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = 'Bronze';
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = 'Prata';
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = 'Ouro';
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = 'Diamante';
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = 'Lendário';
    } else {
        nivel = 'Imortal';
    }

    console.log(`O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}.`);
}

function executarCalculadora() {
    rl.question("Digite o número de vitórias: ", (inputVitorias) => {
        const vitorias = parseInt(inputVitorias);

        rl.question("Digite o número de derrotas: ", (inputDerrotas) => {
            const derrotas = parseInt(inputDerrotas);

            if (isNaN(vitorias) || isNaN(derrotas)) {
                console.log("Por favor, insira números válidos.");
            } else {
                calcularRank(vitorias, derrotas);
            }

            rl.close();
        });
    });
}

executarCalculadora();
