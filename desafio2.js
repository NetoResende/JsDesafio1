const estudentList = [
    {
       name: "Raimundo Neto",
       result1: 7,
       reuslt2: 6
    },
    {
        name: "Marcelo Dias ",
        result1: 5,
        reuslt2: 8
     },
     {
        name: "Zenaide Dias",
        result1: 9,
        reuslt2: 3
     },
     {
        name: "Maria da Glória",
        result1: 10,
        reuslt2: 9
     },
     {
        name: "Francisca das Chagas",
        result1: 8,
        reuslt2: 7
     },
     {
        name: "Antônio Filho",
        result1: 7,
        reuslt2: 7
     },
]



function CalcResultAverage(estudentList){
    let isResultAverage = (estudentList.result1 + estudentList.reuslt2) / 2

    if(isResultAverage >= 7) {
        return `
            A média do(a) aluno(a) ${estudentList.name} é: ${isResultAverage}
            Parabéns, ${estudentList.name}! Você foi aprovado(a) no concurso!
         `
    } else {
        return `
            A média do(a) aluno(a) ${estudentList.name} é: ${isResultAverage}
            Não foi dessa vez, ${estudentList.name}! Tente novamente!
         `
    }
    
    
}

for( let DadeAverage of estudentList){
     Average = CalcResultAverage(DadeAverage)
     alert(Average)
    }

