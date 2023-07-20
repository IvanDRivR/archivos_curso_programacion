/* Se conoce como operadores logicos a los simbolos que nos permiten realizar 
operaciones logicas binarias (true - false)
*/

// & este simbolo se llama ampersand

let nombre = "Ivan";
let nombre2 = "Diego";
let edadIvan = 19;
let edadDiego = 17; 

console.log( true && true);
console.log( false && true);
console.log( (1 + 1 == 2) && ( 4 - 2 == 2) );
console.log( (1 + 1 == 2) && (4 - 2 == 3));
console.log( ("Ivan" == nombre) && ("Diego" == nombre2));
console.log( ((nombre == "Ivan") && (nombre2 == "Diego")) && ((edadIvan > 17) && (edadDiego >=19)));


let nombre3 = "Andres";
let nombre4 = "Juan";
let contraseña = true;
let claveEspecial = false;



console.log( true || false);
console.log( false || false);
console.log( (nombre3 = "Andres") && ( contraseña == false || claveEspecial == true ));


contraseña
console.log(!contraseña)


console.log ( true && !true)

/* Actividad para realizar en clase */


/* Facil */
let uno = !true || false;
console.log(uno)

let dos = false && !false;
console.log(dos);

let tres = true && !true;
console.log(tres)

/* Medio */
let cuatro = (5 === 5) || (!true);
console.log(cuatro);

let cinco = (!0) || (5 < 0);
console.log(cinco);

let seis = (3 > 4) && (!0)
console.log(seis);

// Avanzado
let siete = ( ((false||true) && (!false && true))) || (true && false);
console.log(siete)

let ocho = ( 6 === 3 + 3) && (9/3 >= 3);
console.log(ocho)

let nueve = (!(!false) || (("1" == 1)) && (!false===true));
console.log(nueve)

// Hardcore

let diez = !(!true) === !(!(5>=5))
console.log(diez)

let once = !( true && (!true=== !(!(8 === 4*2) )) )
console.log(once)

// Ultra hardcore
let doce = !(true && (!true === !( !(16 === (4*2) + 8))) ) !==(false);
console.log(doce)

// Leyenda
let trece =
console.log();