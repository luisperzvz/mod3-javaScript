'use strict';

/* length */
let saludo = 'Hola Mundo';
let longitud = saludo.length;
console.log(longitud); // 10

/* toUpperCase */
let mayusculas = saludo.toUpperCase();
console.log(mayusculas); // HOLA MUNDO
console.log('Hola Mundo'.toUpperCase()); // HOLA MUNDO. No usar

/* toLowerCase */
let minusculas = mayusculas.toLowerCase();
console.log('Aplicando toLowerCase:', minusculas); // hola mundo

/* indexOf */
let posicion = saludo.indexOf('o');
console.log('La posición de la letra "o" es:', posicion); // 1
console.log('La posición de la letra "o" es:', saludo.indexOf('o', 2)); // 9
console.log('La posición de la string "Hol" es:', saludo.indexOf('Hol')); // 0
console.log('La posición de la string "Mundo" es:', saludo.indexOf('Mundo')); // 5
console.log('La posición de la string "mundo" es:', saludo.indexOf('mundo')); // -1

/* lastIndexOf */
let ultimaPosicion = saludo.lastIndexOf('o');
console.log('La última posición de la letra "o" es:', ultimaPosicion); // 9
console.log(
	'La última posición de la letra "o" es:',
	saludo.lastIndexOf('o', 8)
); // 1
console.log(
	'La última posición de la letra "o" es:',
	saludo.lastIndexOf('o', 0)
);
console.log('La última posición de la letra "z" es:', saludo.lastIndexOf('z'));

/* includes */
let incluye1 = saludo.includes('Mundo');
let incluye2 = saludo.includes('Mondo');
console.log('¿Incluye la string "Mundo"?', incluye1); // true
console.log('¿Incluye la string "Mondo"?', incluye2); // false
console.log(
	'¿Incluye la string "Mundo" a partir de la posición 6?',
	saludo.includes('Mundo', 6)
); // false

/* startsWith */
let empieza1 = saludo.startsWith('Hola');
let empieza2 = saludo.startsWith('Mundo');
let empieza3 = saludo.startsWith('Mundo', 5);
console.log('¿Empieza con "Hola"?', empieza1); // true
console.log('¿Empieza con "Mundo"?', empieza2); // false
console.log('¿Empieza con "Mundo" a partir de la posición 5?', empieza3); // true

/* endsWith */
let termina1 = saludo.endsWith('Mundo');
let termina2 = saludo.endsWith('Mondo');
let termina3 = saludo.endsWith('Mundo', 9);
console.log('¿Termina con "Mundo"?', termina1); // true
console.log('¿Termina con "Mondo"?', termina2); // false
console.log('¿Termina con "Mundo" a partir de la posición 9?', termina3); // false
console.log(
	'¿Termina con "Hola" a partir de la posición 4?',
	saludo.endsWith('Hola', 4)
); //true

/* repeat */
console.log('Hola '.repeat(3)); // Hola Hola Hola
console.log(saludo.repeat(2)); // Hola MundoHola Mundo

/* replace */
let reemplazo1 = saludo.replace('Mun', 'Mar');
let reemplazo2 = saludo.replace('u', 'o');
console.log('Reemplazo 1:', reemplazo1); // Hola Marte
console.log('Reemplazo 2:', reemplazo2); // Hola Mondo

/* replaceAll */
let reemplazo3 = saludo.replaceAll('o', 'a');
console.log('Reemplazo 3:', reemplazo3); // Hala Munda

/* split */
let frase = 'Hola Mundo, soy un string';
let palabras = frase.split(' ');
console.log(palabras); // [ 'Hola', 'Mundo,', 'soy', 'un', 'string' ]
let palabras2 = frase.split(' ', 3);
console.log(palabras2); // [ 'Hola', 'Mundo,', 'soy' ]
let palabras3 = frase.split('a');
console.log(palabras3); // [ 'Hol', ' Mundo, soy un string' ]
let palabras4 = frase.split('o');
console.log(palabras4); // [ 'H', 'la Mund', ', s', 'y un string' ]

/* slice */
let subcadena1 = frase.slice(5);
console.log('Subcadena 1:', subcadena1); // Mundo, soy un string. Incluye el índice 5
let subcadena2 = frase.slice(5, 10);
console.log('Subcadena 2:', subcadena2); // Mundo. Incluye el índice 5 y excluye el 10

/* trim */
let frase2 = ' Hola Mundo ';
let frase3 = frase2.trim();
let frase4 = frase2.trimStart();
let frase5 = frase2.trimEnd();
console.log(`"${frase2}"`); // " Hola Mundo "
console.log(frase2.length);
console.log(`"${frase3}"`); // "Hola Mundo"
console.log(frase3.length);
console.log(`"${frase4}"`); // "Hola Mundo "
console.log(`"${frase5}"`); // " Hola Mundo"

/* concat */
let frase6 = 'Hola';
let frase7 = 'Mundo';
let frase8 = frase6.concat(' ', frase7);
console.log(frase8); // Hola Mundo
