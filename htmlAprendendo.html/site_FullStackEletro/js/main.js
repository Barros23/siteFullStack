function escrever(frase) {
    console.log(frase)
}

function perguntarNome (nome){
    nome=prompt(`Qual é o seu nome?`);
    escrever(`Seja Bem Vindo(a), ${nome}`)
}