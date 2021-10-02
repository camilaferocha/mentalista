function Chutar(){
// sortear um número aleatório
let numeroSecreto = parseInt(Math.random()*11)
console.log(numeroSecreto)

// pegar o número digitado
let chute = parseInt(document.querySelector("#valor").value)
console.log(numeroSecreto , chute)

/**
 * OPERADORES RELACIONAIS
 * < --> menor
 * > --> maior
 * <= --> menor ou igual
 * >= --> maior ou igual
 * == --> igual
 * != --> diferente
 */

// comparar o número digitado com o número aleatório secreto
if(numeroSecreto == chute) {
    // se tiver correto e os números forem iguais, mostrar a mensagem que a pessoa acertou
    document.querySelector(".resultado").innerHTML = "Você acertou"
}
else
{
    // se tiver errado e os números forem diferentes, mostrar a mensagem que a pessoa errou
    document.querySelector(".resultado").innerHTML = "Você errou"
}
}