let nombre = "Jose";

if(nombre === "Diego"){
    console.log("El usuario se llama Diego");
}
else{
    console.log("El usuario no se llama Diego");
}


let listaDeNombres = ["Diego","Ivan","Jesus","Jose","Andresito"]

if(listaDeNombres[4] === "Diego"){
    console.log("El usuario se llama Diego");
}
else if(listaDeNombres[4] === "Ivan"){
    console.log("El usuario se llama Ivan");
}
else if(listaDeNombres[4] === "Jesus"){
    console.log("El usuario se llama Jesus");
}
else if(listaDeNombres[4] === "Jose"){
    console.log("El usuario se llama Jose")
}
else if(listaDeNombres[4] === "Josue"){
    console.log("El usuario se llama Josue")
}
else{
    console.log("El nombre del usuario no concuerca con ninguno registrado");
}

//Ejercicio 1

//Variables para sumar
let numero1 = 10;
let numero2 = 40;

//Variables para multiplicar
let numero3 = 26;
let numero4 = 2;

if ((numero1 + numero2) > (numero3 *numero4)) {
    console.log("la suma de los primeros 2 numeros es mayor que la multiplicacion de los segundos 2 numeros")
}else if( (numero1 + numero2) == (numero3 * numero4)){
    console.log("la suma de los primeros 2 numeros es igual que la multiplication de los segundos 2 numeros")
}
else{
    console.log("la suma de los primeros 2 numeros es menor que la multiplicacion de los segundos 2 numeros")
}
