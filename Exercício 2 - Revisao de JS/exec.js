/* exercício 1 */

/* exercício 1 */

const String_Maior = "Objeto";
const String_Menor = "Lugar";

// 1. Converte a string para maiúsculas
console.log("Maiúsculas:", String_Maior.toUpperCase());

// 2. Converte a string para minúsculas
console.log("Minúsculas:", String_Menor.toLowerCase());

// 3. Inverte a string
const stringInvertidaMaior = String_Maior.split('').reverse().join('');
const stringInvertidaMenor = String_Menor.split('').reverse().join('');
console.log("String Maior Invertida:", stringInvertidaMaior);
console.log("String Menor Invertida:", stringInvertidaMenor);

// 4. Substitui todas as ocorrências de uma letra específica por outra
const letraAntiga = "o"; // letra a ser substituída
const letraNova = "a";    // nova letra

const stringSubstituidaMaior = String_Maior.replace(new RegExp(letraAntiga, 'g'), letraNova);
const stringSubstituidaMenor = String_Menor.replace(new RegExp(letraAntiga, 'g'), letraNova);

console.log(`Substituição de '${letraAntiga}' por '${letraNova}' na String Maior:`, stringSubstituidaMaior);
console.log(`Substituição de '${letraAntiga}' por '${letraNova}' na String Menor:`, stringSubstituidaMenor);