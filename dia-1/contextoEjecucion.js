'use strict';

const myVariable = 'Yo estoy declarada en el contexto global.';
console.log('Contexto Global: estamos en el contexto global');

function first() {
	console.log('Contexto Local 1: estamos dentro "first()"');
	second();
	console.log('Contexto Local 1: otra vez dentro de "first()"');
}

function second() {
	console.log('Contexto Local 2: dentro de "second()"');
	third();
	console.log('Contexto Local 2: otra vez dentro de "second()"');
}

function third() {
	console.log('Contexto Local 3: dentro de "third()"');
}

first();
console.log('Contexto Global: regresamos al contexto global');

console.log(3 + 4);

let nombreJugador;
console.log(nombreJugador);
nombreJugador = 'Juan';
console.log(nombreJugador);
nombreJugador = 'Pedro';
console.log(nombreJugador);

let nombreJugador2 = null;
