let valor1 = 8
let valor2 = 1
let valor3 = 4

let ValorMay = 0
let ValorMen = 0

if(valor1 > valor2){
    if(valor1 > valor3){
        ValorMay = valor1
        if(valor2 > valor3){
            ValorMen = valor3
        }
        else{
            ValorMen = valor2
        }
    }
    else{
        if(valor2 > valor3){
            ValorMay = valor2
        }
        else{
            ValorMay = valor3
        }
    }
}
if(valor2 > valor3){
    ValorMay = valor2
    if(valor1 < valor3){
        ValorMen = valor1
    }
    else{
        ValorMen = valor3
    }
}
else{
    ValorMay = valor3
    if(valor2 < valor1){
        ValorMen = valor2
    }
    else{
        ValorMen = valor1
    }
}

console.log(`numeros, el menor es ${ValorMen}, el mayor es ${ValorMay}`)