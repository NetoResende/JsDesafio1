const DadeImc = [
    {
        name: "Raimundo Neto",
        age: 37,
        weight: 89,
        height: 163
    },
    {
        name: "Marcelo Dias Resende",
        age: 39,
        weight: 80,
        height: 170
    },
    {
        name: "José de Arimatéia Dias resende",
        age: 42,
        weight: 69,
        height: 165
    },
    {
        name: "Edmilson Dias Resende",
        age: 50,
        weight: 91,
        height: 173
    },
]

function calculateIMC( weight, height ){
     return ( weight / ((height / 100) ** 2) ).toFixed(2)
}


function IMCPatientPrint(patientIMC){

    return `
            O paciente ${patientIMC.name} possui o IMC de 
            ${ calculateIMC(patientIMC.weight, patientIMC.height) }
       `
}


 for( let patientt of DadeImc ){
    let ResultIMC = IMCPatientPrint(patientt)
    alert(ResultIMC)
 }

