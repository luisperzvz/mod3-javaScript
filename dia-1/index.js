'use strict';

/* Lo primero que se suele hacer es un console.log de 'Hola mundo' */
console.log('Hola mundo');

/* VARIABLES */
/* Se usan variables para que el código sea más legible y sea más fácil de mantener */

/* DECLARAR UNA VARIABLE */
let edad; //Dato que cambia a lo largo del programa

/* INICIALIZAR UNA VARIABLE  */
/* edad ya esta declarada */
edad = 34;

/* DECLARAR e INICIALIZAR UNA VARIABLE */
const nombre = 'Luis'; // al ser una constante es obligatorio inicializarla en la declaración y no se puede cambiar su valor
let apellido = 'Saavedra';

/* REASIGNAR */
edad = 39;

/* MOSTRAR TODO */

const saludar = 'Hola, soy';
console.log('Hola,soy', nombre, apellido, 'y tengo', edad, 'años');
console.log(
	'Hola,soy ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años'
);
console.log(`hola, soy ${nombre} ${apellido} y tengo ${edad} años`);
