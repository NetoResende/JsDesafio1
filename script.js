
// let nome = prompt("Qual o seu nome?");
// alert(`Oi "${nome}", Seja bem vindo a nossa página!`)

// Somar números de presentar o resultado pra o usuário!

// let numberOne = Number(prompt("Digite o primeiro número"));
// let numberTwo = Number(prompt("Digite o segundo número"));
// let result = (numberOne + numberTwo) / 3;

// alert(`A soma de ${numberOne} + ${numberTwo} é = ${result}:`);




// let sunNumber = function(nome){
   
//     console.log(" Esse é o primeiro console...")
//     nome(6, 6)
//     console.log("Essa é a terceira row")
// }

// console.log( sunNumber((number1, number2)=>{

//     let result = ( number1 + number2 ) / 3
//    return console.log(`O resultado dessa soma '${number1}' + '${number2}' é = ${result}`)
// })

// )



// let nome = prompt("Qual o seu nome ?")
// alert(`"${nome}", Seja bem vindo a nossa página!`)



// let primaryNumber = prompt("Digite o primeiro número");
// let secondNumber = prompt("Digite o segundo número");


// primaryNumber = Number(primaryNumber);
// secondNumber = Number(secondNumber);

// let sum = primaryNumber + secondNumber;
// let sub = primaryNumber - secondNumber;
// let div = primaryNumber / secondNumber;
// let mult = primaryNumber * secondNumber;
// let resDiv = primaryNumber % secondNumber;

// alert(`A soma de ${primaryNumber} + ${secondNumber} é = ${sum}`);
// alert(`A subtração de ${primaryNumber} - ${secondNumber} é = ${sub}`);
// alert(`A divisaõ de ${primaryNumber} / ${secondNumber} é = ${div}`);
// alert(`A multiplicação de ${primaryNumber} * ${secondNumber} é = ${mult}`);
// alert(`O resto da divisão de ${primaryNumber} % ${secondNumber} é = ${resDiv}`);



// let aluno = prompt("Digite o nome do aluno(a)");
// let nota1 = Number(prompt("Digite a primeira nota"));
// let nota2 = Number(prompt("Digite a segunda nota"));
// let nota3 = Number(prompt("Digite a terceira nota"));

// let notaMedia = (nota1 + nota2 + nota3) / 3;

// let Media = notaMedia.toFixed(2)

// if(notaMedia >= 6) {

//    alert(`'${aluno}', Parabéns sua média foi ${Media}`)
// }else if( notaMedia < 6 && notaMedia >= 4){
//    alert(`'${aluno}', sua média foi de ${Media}, E você está de reculperação!`)
// }else {
//    alert(`'${aluno}', sua média foi de ${Media}. Você está reprovado.`)
// }

  //  ## for(){}   estrutura de repetição
// let items = [];
// for( let item = 0; item < 10; item++ ){
//    let itemName = prompt("Digite um item " + (item + 1))
//    items[item] = itemName;
// }
// alert(items)


                    /// jOGO DE ADVINHAÇÃO

let isNumber = prompt("Adivinhe meu número, Entre 0 e 10")
isNumber = Number(isNumber);

const randomNumber = Math.round(Math.random() * 10)

let attemps = 1;

while(isNumber != randomNumber) {
   isNumber = prompt(`${isNumber} errou, Tente novamente!`)
   attemps++
}
if(attemps > 1) {
alert(`"${isNumber}" é igual "${randomNumber}", Você acertou em ${attemps} tentativas`)
} else {
  alert(`"${isNumber}" é igual "${randomNumber}", Você acertou em ${attemps} tentativa`)

}
