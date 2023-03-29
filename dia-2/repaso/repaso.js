/* DECLARAR VARIABLES */
let edad;

/* INICIALIZAR VARIABLES */
edad = 38;

/* DECLARAR E INICIALIZAR VARIABLES */
const nombre = 'Luis'; // Las constantes se inicializan en el momento de su declaración
let apellido = 'Saavedra';

/* REASIGNAR VALORES A VARIABLES */
edad = 39;

/* TIPOS DE DATOS */
/* PRIMITIVOS */
// number
let numero1 = 38; // Es un número entero(integer)
console.log('numero1 es un:', typeof numero1); // number
let numero2 = 38.5; // Es un número decimal(float)
console.log('numero2 es un:', typeof numero2); // number
let numero3 = Infinity; // Es un número infinito
console.log('numero3 es un:', typeof numero3); // number
let numero4 = -Infinity; // Es un número negativo infinito
console.log('numero4 es un:', typeof numero4); // number
let numero5 = NaN; // Es un número no válido
console.log('numero5 es un:', typeof numero5); // number

// bigint
let numero6 = 1234567890123456789012345678901234567890n; // Es un número entero muy grande(bigint)
console.log('numero6 es un:', typeof numero6); // bigint

// string
let cadena = 'Hola mundo'; // Es una cadena de caracteres entre comillas dobles
let cadena2 = 'Hola mundo'; // Es una cadena de caracteres entre comillas simples
let cadena3 = `Hola mundo`; // Es una cadena de caracteres entre template strings

// boolean
let verdadero = true; // Es un valor booleano verdadero
let falso = false; // Es un valor booleano falso

// null
let nulo = null; // Es un valor nulo cuando no se conoce el valor de una variable

// undefined
let indefinido; // Una variable que no ha sido inicializada tiene el valor undefined

/* CONSOLE.LOG */
console.log('Hola, soy', nombre, apellido, 'y tengo', edad, 'años'); // Pasando los valores como parámetros
console.log(
	'Hola, soy ' + nombre + ' ' + apellido + ' y tengo ' + edad + ' años'
); // Concatenando los valores
console.log(`Hola, soy ${nombre} ${apellido} y tengo ${edad} años`); // Usando template strings

/* PROMPT */
let numero = prompt('¿Cuál es tu número favorito?'); // Pide un valor al usuario y lo guarda en la variable numero
console.log(numero); // Muestra el valor de la variable numero
console.log(typeof numero); //El valor que devuelve prompt es un string
// typeof devuelve el tipo de dato de la variable

/* NÚMEROS */
// objeto Math
console.log(Math.PI); // Devuelve el valor de PI
console.log(Math.abs(-3)); // Devuelve el valor absoluto de un número
console.log(Math.ceil(3.2)); //4 Redondea hacia arriba
console.log(Math.floor(3.9)); //3 Redondea hacia abajo
console.log(Math.round(3.5)); //4 Redondea al entero más cercano
console.log(Math.round(3.49)); //3 Redondea al entero más cercano
console.log(Math.max(3, 2, 5, 4, 1)); //5 Devuelve el número más alto
console.log(Math.min(5, 2, 1, 4, 3)); //1 Devuelve el número más bajo
console.log(Math.pow(2, 3)); //8 Potencia de 2 elevado a 3
console.log(Math.sqrt(9)); //3 Raíz cuadrada de 9
console.log(Math.random()); // Devuelve un número aleatorio entre 0 y 1

// objeto Number
// comprobar si es un número entero
console.log(Number.isInteger(a)); // false
console.log(Number.isInteger(b)); // true

// comprobar si es decimal
console.log(typeof d === 'number'); // true
console.log(Number.isNaN(d)); // false
console.log(Number.isFinite(d)); // true
console.log(Number.isInteger(d)); // false
console.log('El numero "d" es decimal');

// comprobar si es finito
console.log(Number.isFinite(a)); // true
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(10 / 0)); // false
console.log(10 / 0); // Infinity
console.log(10 / -0); // -Infinity
console.log(-10 / -0); // NaN

// comprobar si es NaN
console.log(Number.isNaN(a)); // false
console.log(Number.isNaN('Hola' / b)); // true
console.log(Number.isNaN(NaN)); // true
