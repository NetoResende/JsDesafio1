
// let options;
// let items = [];

//     while(options != 3) {
//         options = prompt(`
//             Escolha uma das opções abaixo
        
//             1. Adicionar um item a lista
//             2. Ver items na lista
//             3. Sair do programa
            
//             `)

//             if(options == 1){
//                 items.push(prompt("Digite um item"))
//             } else if(options == 2) {

//                 if(items.length == 0) {
//                     alert("Não há nenhum item na lista")
//                 } else {
//                     alert(items)
//                 }

//             }else{
//                 options > 3 ? alert("Opção Inválida") : alert("Thau, Até a próxima!")  
//             }
//     }

const patients = [
    {
        name: "Raimundo",
        age: 37,
        weight: 55,
        height: 186
    },
     {
        name: "Gomes",
        age: 39,
        weight: 60,
        height: 167
    },
    {
        name: "Resende",
        age: 35,
        weight: 74,
        height: 129
    }
]     
        // calculo do IMC feito no alert()
        
        // let patientsDade =[] 
                                   //    °1 exemplo com for(){}  
// for( let index = 0; index < patients.length; index++) {
    
//     patientsDade[index] = patients[index]
//     const {name, age, weight, height } = patientsDade[index]
//     alert(`${name} tem ${age} anos de idade, Há altura de ${height} e pesa ${weight}`)
// }


let patientsDades = []

for (let index = 0; index < patients.length; index++){
    patientsDades[index] = patients[index]
    let { name, height, weight } = patientsDades[index]

    let resultImc =( weight / ( (height / 100) ** 2) ).toFixed(2)

//    alert(`
//             O senhor ${name}, Tem ${age} anos de idades, E está com a taxa de IMC em 
//                 ${(weight / ((height / 100) ** 2)).toFixed(2)}
//             `)

            if(resultImc >= 18.5 && resultImc <= 24.9){
                alert(`${name}, Sua taxa de IMC está em ${resultImc} consiramos normal`)
            } else {
                alert(`${name}, Sua taxa de IMC está em ${resultImc}, consideramos fora do normal`)
            }

}


      //  ${(weight / ((height / 100) ** 2)).toFixed(2)  }

// °2 exemplo com 'for of'
// for( let dades of patients) {
    //     patientsDade.push(dades)
    
//     const {name, age, weight, height} = patientsDade[0]
//     alert(`${name} tenho ${age} anos de idade, Minha altura é de ${height} e  peso ${weight}`)
// } 

// patients.map(patient => console.log(patient))   ///   °3 exemplo feito com map()  



// alert(`
   
//        O Paciente ${patients[0].name} possui o IMC de 
//        ${(patients[0].weight / ((patients[0].height / 100) ** 2)).toFixed(2)}
//    `)