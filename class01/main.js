/* let names = "Crisss";
let age = "32";

var mensaje = `Hola, mi nombre es ${names} y tengo ${age} años.`;

console.log(mensaje);

if (age <= 17){
        console.log(`soy menor perri`);
    }else{
        console.log('soy mayor papu');
}

if(age <= 25){
    console.log('soy menor a 25 años');
    }else if (age > 40 && age < 50){            //parte de más.
        console.log('soy mayor pero no tanto');  //esta parte esta de más.
    }else{
        console.log('soy mayor a 25 años');
} */

// FUNCTION CLASS 3
/* var saludar=

function saludar() {
    console.log('Hola clases 3');
    return
}

saludar();

function suma (a,b) {
    return a + b
}

console.log(suma(5,5));

var resultado1 = suma(2,8);
console.log(resultado1); */


//CICLOS

/* for (let i = 0; i <= 2; i++) {
    console.log(i)
}

var palabra = 'holas';

for (let i=0;i<5;i++){
    console.log(palabra[i])
} */


// for (let i=1; i <=100; i++){
//     if (i%2 ===0){
//         continue;
//     }
//     console.log(i);
// }

// for (let i=1; i <=100; i++){
//     if (i%2 !==0){
//         continue;
//     }
//     console.log(i);
// }

/* var myNum = [1,2,3,4,5,6,7,8,9,10]

for(let i=0; i < myNum.length ;i++){
    console.log(myNum[i]);
}

for(let i=0; i < myNum.length-5 ;i++){
    console.log(myNum[i]);
} */
/* 
-Crear una función que imprima en consola el resultado de la suma de num1 y num2. 
-Crear una función que reciba dos números como parámetros e imprima en consola la suma de ambos números. 
-Realizar ambos ejercicios con funciones regulares y arrow functions. 
-El resultado debe ser de lectura friendly para el usuario ("El resultado de la suma es..."). 

let num1 = 6 
let num2 = 12 
 */


            //EJERICIO CLASE 04

/* let num1 = 6;
let num2 = 12;
function suma01 (num1,num2){
    return num1+num2;
}
console.log(`La suma da ${suma01(num1,num2)}`); 

function suma02 (a,b){
    return a+b;
}
console.log(`La suma de parametros da ${suma02(6,14)}`); 

const suma03 = (num1,num2) => { 
    return num1+num2;
}
console.log(`La suma function arrow da ${suma03(num1,num2)}`); 

const suma04 = (a,b) =>{
    return a+b;
}
console.log(`La suma function arrow de parametros da ${suma02(6,10)}`); 
 */
// CLASE 05

class Zapatillas {  
    constructor (marca, color, talle){
        this.marca = marca;
        this.color = color;
        this.talle = talle;
    }
    pintar=(nuevoColor) => {
        this.color = nuevoColor;
    }
}

const Zapatillas02 = new Zapatillas ("Adidas","Black",41.5);
const Zapatillas01 = new Zapatillas ("Adidas","Red", 42);
const Zapatillas03 = new Zapatillas ("Nike", "White",42);
const Zapatillas04 = new Zapatillas ("Nike", "Gray",40);
const Zapatillas05 = new Zapatillas ("Puma", "Black",40.5);


Zapa = (Zapas) => {return console.log(`Hay ${Zapas.marca}, de color ${Zapas.color} y de talle ${Zapas.talle}.`); }

Zapatillas02.pintar("Yellow");

Zapa(Zapatillas01);
Zapa(Zapatillas02);
Zapa(Zapatillas03);
Zapa(Zapatillas04);
Zapa(Zapatillas05);


// CLASE 06

/* let dias= "lunes, martes, miércoles, jueves, viernes" 

-Partiendo de la variable días, utilizando los métodos vistos en clase imprimir en consola:
a): Longitud del string. 
b): String en mayúsculas.
c): Reemplazar TODAS las comas por guion medio.
d): Mediante un método de los strings, devolver un array. Cada elemento del array, debe ser un día de la semana.let mes1= ["enero", "febrero", "marzo", "abril", "mayo", "junio"] 
let mes2= ["agosto", "septiembre", "octubre", "noviembre", "diciembre"] 

a) Siempre utilizando métodos, devolver un array que contenga los 12 meses del año. 
b) Utilizando mes1, devolver un array que contenga solo desde "febrero" hasta "abril", inclusive. 
c) Utilizando mes1, devolver un array que contenga solo los meses que tienen mas de 4 letras en su nombre.
-Aprovechando la función constructora "Zapatillas" desarrollada en el ejercicio anterior, crear un array de objetos que contenga las zapatillas que construimos anteriormente. (Si es necesario, puede copiar y pegar la función constructora y los objetos). 
No crear el array de manera manual, hacerlo con las herramientas que nos provee JS (bucles, push, etc) */

/* let dias= "lunes, martes, miércoles, jueves, viernes";

console.log(dias.length);
console.log(dias.toUpperCase());
console.log(dias.replaceAll(",","-"));

let mes1= ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"];
let mes2= ["agosto", "septiembre", "octubre", "noviembre", "diciembre"];

const meses =()=>{
    return mes1.concat(mes2);
}

console.log(meses());

const febAbril= ()=>{
    return mes1.slice(1,4);
}
console.log(febAbril());


//////

const mas4 =()=> {
    const cuatroletras = [];
    for (let i = 0; i < mes1.length;i++){
        if (mes1[i].length > 4){
            cuatroletras.push(mes1[i]);
        }
    }
    return cuatroletras;
}

console.log(mas4());


class zapatilla{
    static almacen =[];
    static getAlmacen =()=>{
        return this.almacen;
    }
    constructor (marca, color, talle){
        this.marca = marca;
        this.color = color;
        this.talle = talle;
    }
}

const nike = new zapatilla("nike","rojo",40);
const Adidas = new zapatilla("adidas","azul",40);

zapatilla.almacen.push(nike);
zapatilla.almacen.push(Adidas);
console.log(zapatilla.almacen); */


///////////////////////////////

//CLASE 07

/*
-Crear una función que acepte como parámetro 2 números y retorne el resultado de la multiplicación de dichos números. 
-Crear una función que acepte 3 parámetros. Los primeros dos, tienen que ser números, el tercero, la función creada anteriormente. 
Esta nueva función, debe retornar (también) el resultado de la multiplicación.
*/

multi = (a,b) =>{
    return (a*b);
}
console.log(multi(2,5));

multiDos =(a,b,multiD)=>{
    return multiD(a,b);
}

console.log(multiDos(5,5,multi));