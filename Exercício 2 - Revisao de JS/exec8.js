// Função que manipula um objeto representando uma pessoa
function manipularPessoa(pessoa) {
    // 1. Adiciona uma nova propriedade ao objeto
    pessoa.profissao = "Desenvolvedor";
    console.log("Objeto após adicionar nova propriedade:", pessoa);

    // 2. Remove uma propriedade do objeto
    delete pessoa.idade;
    console.log("Objeto após remover a propriedade 'idade':", pessoa);

    // 3. Lista todas as propriedades do objeto
    console.log("Propriedades do objeto:");
    for (const propriedade in pessoa) {
        console.log(`${propriedade}: ${pessoa[propriedade]}`);
    }
}

// Objeto para teste
const pessoaTeste = { nome: "Carlos", idade: 28, cidade: "São Paulo" };

// Chama a função com o objeto de teste
manipularPessoa(pessoaTeste);