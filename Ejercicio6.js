let Valor1 = 1
let Valor2 = 5

if(Valor1 < Valor2){
    let difValor = Valor2 - 1
    let difInicio = Valor1 + 1
    for(let i = difInicio; i <= difValor;i++){
        
        console.log(i)
    }
}
else{

    let difValor = Valor2 + 1
    let difInicio = Valor1 - 1
    for(let i = difValor; i <= difInicio;i++){
        
        console.log(i)
    }
   

}