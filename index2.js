function calcularRank(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    let nivel;

    if (saldoVitorias <= 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal maluco";
    }

    console.log("O seu herói tem um saldo de vitórias de " + saldoVitorias + " e está no nível de " + nivel);
}

const vitorias = 10;
const derrotas = 0;


calcularRank(vitorias, derrotas);
