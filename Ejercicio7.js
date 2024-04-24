let Valor1 = 1;
let Valor2 = 10;
let cont3 =0;
for (var i = Valor1; i <= Valor2; i++) {
if(i % 3 == 0){
    console.log(i);
    cont3++;
}
}
console.log('numeros multiplos de 3: ' + cont3);