let Palabra = "torta"
let contLT = 0;
let contLO = 0;
let contLR = 0;
let contLA = 0;
let nuevaLt = "";

for(let i = ""; i <= Palabra.length;i++){
    console.log(i)
    if(i = "t"){
        contLT = contLT + 1;
    }
    if(i = "o"){
        contLO = contLO + 1;
    }
    if(i = "r"){
        contLR = contLR + 1;
    }
    if(i = "t"){
        contLT = contLT + 1;
    }
    if(i = "a"){
        contLA = contLA + 1;
    }
}

console.log(Palabra)
console.log("cantidad de T " + contLT)
console.log("Cantidad de O " + contLO)
console.log("cantidad de R " + contLR)
console.log("cantidad de A " + contLA)
