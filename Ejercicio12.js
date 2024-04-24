
let Objeto1 = {
Nombre : "Juan",
SexoBiologico : "Hombre",
Edad : 20
}
let Objeto2 = {
    Nombre : "Marta",
    SexoBiologico : "Mujer",
    Edad : 45
}
let Objeto3 = {
    Nombre : "Pedro",
    SexoBiologico : "Hombre",
    Edad : 18
}
let Objeto4 = {
    Nombre : "Julia",
    SexoBiologico : "Mujer",
    Edad : 25
}


let EdadTotal = Objeto1.Edad + Objeto2.Edad + Objeto3.Edad + Objeto4.Edad
let PromEdad = EdadTotal / 4

if(Objeto1.SexoBiologico = "Mujer"){
    EdadObjeto1 = Objeto1.Edad
}
else{
    let EdadObjetoH1 = Objeto1.Edad
}
if(Objeto2.SexoBiologico = "Mujer"){
    EdadObjeto2 = Objeto2.Edad
}
else{

}
if(Objeto3.SexoBiologico = "Mujer"){
    EdadObjeto3 = Objeto3.Edad
}
else{
    let EdadObjetoH3 = Objeto3.Edad
}
if(Objeto4.SexoBiologico = "Mujer"){
    EdadObjeto4 = Objeto4.Edad
}
else{

}

if(EdadObjeto1 > EdadObjeto2){
    edadMayorM1 = EdadObjeto1
}
else{
    edadMayorM2 = EdadObjeto2
}
if(EdadObjeto3 > EdadObjeto4){
    edadMayorM3 = EdadObjeto3
}
else{
    edadMayorM4 = EdadObjeto4
}

if(edadMayorM2 > edadMayorM4){
    MayorEdadMujer = Objeto2.Nombre
}
else{
    MayorEdadMujer = Objeto4.Nombre
}

let EdadObjMuj = Objeto2.Edad + Objeto4.Edad
let PromMuj = EdadObjMuj / 2



console.log("Promedio total de edades " + PromEdad)
console.log("Nombre de Mujer con la Edad mas alta " + MayorEdadMujer)
console.log("Nombre Hombre menor Edad " )
console.log("Promedio edad mujeres " + PromMuj)