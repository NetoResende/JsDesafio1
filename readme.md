## Conceitos e fundamentos

## 01 Aula de javaScrit

// let cos = 'Resende'
// let content = 'Raimundo, o "Neto" estou estudando programação'
// let age = 37

// console.log('Olá bem vindo, Raimundo Neto')

// console.log(`${content} e minha idade é ${age}. me chame de ${cos}`)

// Declaraçaõ de Objeto

// let persona = {
//     name: "Neto",
//     lastName: "Resende", 
//     age: 38,
//     heitign: 1.63,
// }

// // console.log("Oi meu nome é " + persona.name + " e eu tenho " + persona.age + " anos.")

// console.log(`Oi eu me chamo ${persona.name} e eu tenho ${persona.age} anos de idade. Minha altura é de ${persona.heitign}m `)

// let weight;

// console.log(typeof weight)

// let name = "Neto Resende";
// let age = 38; // interes numeros inteiros
// let stars = 4.2; // float numeros quebrados
// let isSubscrribet = true;

// let studant = {
//     name: "Neto Resende",
//     age: 38,
//     weight: 74.2,
//     isSubscrribet: true
// }

// let studants = [];
//     studants = [
//         studant
//     ]

// const jhon = {
//     name: "Jhon",
//     age: 35,
//     weight: 74.5,
//     isSubscrribet: true
// }

// studants[1] = jhon;

// console.log(studants)

// function CreatePhrases (){
//     console.log("Estudar é muito bom.")
//     console.log("Percistência é a mãe do Aplendizado.")
//     console.log("Focu.")
// }

// CreatePhrases()


// console.log("Fim do programa!")

// const sum = function ( number1, number2){
//    let total = number1 + number2
//     return console.log(`A soma de ${number1} + ${number2} = ${total}`)

// }

// sum(74, 44)

// const IsMyName = function (name){
//     console.log("Primeiro chamada antes de execultar a função 'Name' .")
//     name()
//     console.log("Segunda chamada depois de execultar a função 'Name' .")
    
// }

// console.log(IsMyName( 
//     ()=>{
//          console.log("execulção da função 'Name'. ")
//     }
// ))

// let temperate = 38;
// let altTemperate = temperate >= 37.5;
// let mediaTemperate = temperate < 37.5 && temperate >= 37.2;
// let minTemperate = temperate < 37.2 && temperate >= 37;
// let aleteTemperate = temperate < 37 && temperate >= 36.8;

// if(altTemperate){
    //     console.log("Febre muito alta, vá ao médico!")
    // }else if (mediaTemperate){
        //     console.log("febre moderada, repouse em casa e beba muito líquido!")
        // }else if(minTemperate){
            //     console.log("Febre baixa, fique em casa de observação e beba muito líquido!")
            // } else if(aleteTemperate){
                //     console.log("Alerta de febre, fique em casa de repouso e beba muito líquido!")
                // } else {
                    //     console.log("Saudável, continui sua rotina normal do dia a dia!")
                    // }

        // switch            
//  function Calcular (number1, operador, number2){
//     let result = 0;
//     switch(operador){
//         case "+":
//             result = number1 + number2
//             break

//             case "-":
//                 result = number1 - number2
//                 break

//                 case "*": 
//                 result = number1 * number2
//                 break

//                 case "/": 
//                 result = number1 / number2
//                 break

//                 default: 
//                 console.log("Não foi emplementado")
//                 break
//     }

//     return result;
//  }               
//  console.log(Calcular(10, "+", 40)) 


// throw e try/catch
// function SayMyName ( name = "" ) {
//     if( name === "" ){
//         throw new Error("Nome é Obrigatório");
//     }
//     console.log(name)
// }

// try {
//     SayMyName("Raimundo Neto")
// } catch (e) {
//     console.log(e)
// }

// console.log("Apos o try/catch")

//     Estrutura de repetição
            //  (  *for*  )
    for(let i = 0; i < 10; i++){
        console.log(i)
    }        