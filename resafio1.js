let number1 = Number(prompt("Digite o primeiro número"))
let number2 = Number(prompt("Digite o segundo número"))

let sum =  number1 + number2;
let sub = number1 - number2;
let mult = number1 * number2;
let div = number1 / number2;
let resDiv = number1 % number2;


alert(`A soma de ${number1} + ${number2} é ${sum}`)
alert(`A subtração de ${number1} - ${number2} é ${sub}`)
alert(`A multiplicação de ${number1} * ${number2} é ${mult}`)
alert(`A divisão de ${number1} / ${number2} é ${(div).toFixed(1)}`)
alert(`O resto da divisão de ${number1} % ${number2} é ${resDiv}`)


if( sum % 2 === 0 ){
     alert(`A soma dos dois números é  ${sum} "PAR" `) 
} else {
    alert(` A soma dos dois números é  ${sum} "IMPA" `) 
}

function comparateSum(){
    
    if(number1 == number2){
        alert(` ${number1} e ${number2} são números "Iguais" `)
    } else {
        alert(` ${number1} e ${number2} são números "Diferentes" `)
    }
}
comparateSum(number1, number2)
