let total=0
let numeros = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < numeros.length; i++){
    if(i / 2 == 0){
        total+=numeros[i];
    }
    
} 
console.log(total);