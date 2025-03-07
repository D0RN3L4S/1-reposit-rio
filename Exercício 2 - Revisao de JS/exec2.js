/* exercício 2 */

// Função para realizar operações com dois números
function realizarOperacoes(num1, num2) {
    // 1. Soma
    const soma = num1 + num2;
    console.log("Soma:", soma);

    // 2. Subtração
    const subtracao = num1 - num2;
    console.log("Subtração:", subtracao);

    // 3. Multiplicação
    const multiplicacao = num1 * num2;
    console.log("Multiplicação:", multiplicacao);

    // 4. Divisão
    if (num2 !== 0) {
        const divisao = num1 / num2;
        console.log("Divisão:", divisao);
    } else {
        console.log("Divisão: Não é possível dividir por zero.");
    }

    // 5. Verificação se o primeiro número é maior que o segundo
    const maior = num1 > num2;
    console.log("O primeiro número é maior que o segundo?", maior);
}

// Números para teste
const numero1 = 15;
const numero2 = 5;

// Chama a função com os números
realizarOperacoes(numero1, numero2);