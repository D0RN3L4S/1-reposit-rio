/* exercício 3 */

// Função para verificar a faixa etária com base na idade
function verificarIdade(idade) {
    if (idade < 18) {
        console.log("A pessoa é menor de idade.");
    } else if (idade >= 18 && idade < 65) {
        console.log("A pessoa é maior de idade.");
    } else {
        console.log("A pessoa é idosa.");
    }
}

// Idade para teste
const idadeTeste = 70;

// Chama a função com a idade de teste
verificarIdade(idadeTeste);