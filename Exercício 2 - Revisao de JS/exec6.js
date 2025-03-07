/* exercicio 6 */

// Função que recebe um array de números e realiza as operações
function manipularArray(numeros, numeroParaAdicionar) {
    // 1. Adiciona um número ao final do array
    numeros.push(numeroParaAdicionar);
    console.log("Array após adicionar o número:", numeros);

    // 2. Remove o primeiro número do array
    numeros.shift();
    console.log("Array após remover o primeiro número:", numeros);

    // 3. Encontra o maior número do array
    const maiorNumero = Math.max(...numeros);
    console.log("Maior número do array:", maiorNumero);

    // 4. Encontra o menor número do array
    const menorNumero = Math.min(...numeros);
    console.log("Menor número do array:", menorNumero);
}

// Array para teste
const arrayTeste = [10, 20, 30, 40, 50];
const numeroParaAdicionar = 60; // Número a ser adicionado

// Chama a função com o array de teste e o número a ser adicionado
manipularArray(arrayTeste, numeroParaAdicionar);