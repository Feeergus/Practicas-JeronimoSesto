let cont2 = 0;
let cont5 = 0;

for (var i = 1; i < 100; i++) {
if(i % 2 == 0){
    console.log(i + ' : multiplo de 2');
    cont2++;
}
if(i % 5 == 0){
    console.log(i + ' : multiplo de 5');
    cont5++;
}
}

console.log('numeros multiplos de 2: ' + cont2);
console.log('numeros multiplos de 5: ' + cont5);