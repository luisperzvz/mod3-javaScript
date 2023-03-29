'use strict';

let saludo = 'Hola Mundo';
let longitud = saludo.length;

/* Acceder a la longitud de la cadena */
console.log('La longitud de la cadena es: ', saludo.length); // 10
console.log('La longitud de la cadena es: ', longitud); // 10);

/* Acceder a un caracter de la cadena */
console.log('La primera letra es: ', saludo[0]); // H);
console.log('La primera letra es: ', saludo.at(0)); // H, at() devuelve el caracter de la posición indicada, admite índices negativos
console.log('La última letra es: ', saludo[saludo.length - 1]); // o
console.log('La última letra es: ', saludo[longitud - 1]); // o
console.log('La última letra es: ', saludo.at(-1)); // o, at() devuelve el caracter de la posición indicada

/* Obteniendo una subcadena */
console.log('La subcadena es: ', saludo.substring(0, 4)); // Hola, no incluye la posición 4

/* Cambiar a mayúsculas o minúsculas */
console.log('La cadena en mayúsculas es: ', saludo.toUpperCase()); // HOLA MUNDO
console.log('La cadena en minúsculas es: ', saludo.toLowerCase()); // hola mundo

/* Buscar una subcadena */
console.log('La posición de la subcadena es: ', saludo.indexOf('Mundo')); // 5, es la posición de la primera letra de la subcadena
console.log('La posición de la subcadena es: ', saludo.indexOf('Mundo', 6)); // -1, no existe la subcadena a partir de la posición 6
console.log('La posición de la subcadena es: ', saludo.indexOf('o')); // 1
console.log('La posición de la subcadena es: ', saludo.indexOf('o', 2)); // 9, es la posición de la subcadena a partir de la posición 2
console.log('La ultima posición de la subcadena es: ', saludo.lastIndexOf('o')); // 9, es la posición de la última letra de la subcadena');

/* Comprobar si una cadena contiene una subcadena */
console.log('¿Saludo contiene "Mundo"?: ', saludo.includes('Mundo')); // true
console.log('¿Saludo contiene "Mundo"?: ', saludo.includes('Mundo', 6)); // false, no existe la subcadena a partir de la posición 6

/* Comprobar si empieza o termina con una subcadena */
console.log('¿Saludo empieza con "h"?: ', saludo.startsWith('h')); // false
console.log('¿Saludo empieza con "H"?: ', saludo.startsWith('H')); // false
console.log('¿Saludo empieza con "Hola"?: ', saludo.startsWith('Hola')); // true
console.log('¿Saludo termina con "o"?: ', saludo.endsWith('o')); // true
console.log('¿Saludo termina con "Mundo"?: ', saludo.endsWith('Mundo')); // true
console.log('¿Saludo termina con "Hola"?: ', saludo.endsWith('Hola', 4)); // true, comprueba si termina con "Hola" antes de la posición 4

/* Repetir una cadena */
console.log('Repetir la cadena: ', saludo.repeat(3)); // Hola MundoHola MundoHola Mundo

/* Reemplazar una subcadena */
console.log(saludo.replace('Mundo', 'Mundo!')); // Hola Mundo!
console.log(saludo.replace('o', 'u')); // Hula Mundo!

/* Reemplazar todas las subcadenas */
console.log(saludo.replaceAll('o', 'u')); // Hula Mundu!

/* Separar una cadena en un array */
console.log(saludo.split(' ')); // [ 'Hola', 'Mundo' ]
console.log(saludo.split(' ', 1)); // [ 'Hola' ], separa la cadena en un array de 1 elemento

/* Separar una cadena en otra cadena */
console.log(saludo.slice(5)); // Mundo
console.log(saludo.slice(5, 8)); // Mun, no incluye la posición 8

/* Eliminar espacios en blanco */
let saludo2 = ' Hola Mundo ';
let saludo2Trim = saludo2.trim();
let saludo2TrimStart = saludo2.trimStart();
let saludo2TrimEnd = saludo2.trimEnd();
console.log(`¿¿${saludo2Trim}??`); // ¿¿Hola Mundo??
console.log(`¿¿${saludo2TrimStart}??`); // ¿¿Hola Mundo ??
console.log(`¿¿${saludo2TrimEnd}??`); // ¿¿ Hola Mundo??

/* Concatenar cadenas */
let saludo3 = 'Hola';
let saludo4 = 'Mundo';
console.log(saludo3.concat(' ', saludo4)); // Hola Mundo. Puede recibir varios parámetros para concatenar cadenas separadas por comas
