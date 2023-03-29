'use strict';

/* OPERADORES */
// Operadores aritméticos
// + - * / % ++ --
let a = 5;
let b = 2;
console.log('a + b = ', a + b); // 7
console.log('a - b = ', a - b); // 3
console.log('a * b = ', a * b); // 10
console.log('a / b = ', a / b); // 2.5
console.log('a % b = ', a % b); // 1
console.log('Antes: ++a = ', ++a); // 6, incrementa el valor de a y lo devuelve
console.log('Despues: a++ = ', a++); // 6, devuelve el valor de a y luego lo incrementa
console.log('a = ', a); // 7
console.log('Antes: --a = ', --a); // 6, decrementa el valor de a y lo devuelve
console.log('Despues: a-- = ', a--); // 6, devuelve el valor de a y luego lo decrementa
console.log('a = ', a); // 5

// Operadores de asignación
// = += -= *= /= %=
let c = 5;
console.log('c = ', c); // 5
c += 2;
console.log('c += 2 = ', c); // 7
c -= 2;
console.log('c -= 2 = ', c); // 5
c *= 2;
console.log('c *= 2 = ', c); // 10
c /= 2;
console.log('c /= 2 = ', c); // 5
c %= 2;
console.log('c %= 2 = ', c); // 1

// Operadores de comparación
// == != === !== > < >= <=
let d = 5;
let e = '5';
let f = 6;
console.log('d == e = ', d == e); // true, compara el valor
console.log('d != e = ', d != e); // false, compara el valor
console.log('d === e = ', d === e); // false, compara el valor y el tipo
console.log('d !== e = ', d !== e); // true, compara el valor y el tipo
console.log('d > f = ', d > f); // false
console.log('d < f = ', d < f); // true
console.log('d >= f = ', d >= f); // false
console.log('d <= f = ', d <= f); // true

// Operadores lógicos
// && || ! ??
let g = true;
let h = false;
console.log('g && h = ', g && h); // false, devuelve true si los dos operandos son true y false en caso contrario
console.log('g || h = ', g || h); // true, devuelve true si alguno de los dos operandos es true y false en caso contrario
console.log('!g = ', !g); // false, devuelve true si el operando es false y false en caso contrario
console.log();

// Operadores de cadena
// + +=
let i = 'Hola';
let j = 'Mundo';
console.log('i + j = ', i + j); // HolaMundo
console.log('i += j = ', (i += j)); // HolaMundo

//operrador ?? (nullish coalescing) o de coalescencia nula

// Operador ternario
// condición ? expresión1 : expresión2
let k = 5;
let l = 2;
console.log('k > l ? k : l = ', k > l ? k : l); // 5, devuelve la expresión1 si la condición es true y la expresión2 en caso contrario

// Operador de tipo
// typeof
let m = 5;
let n = 'Hola';
console.log('typeof m = ', typeof m); // number
console.log('typeof n = ', typeof n); // string

// Operador spread
// ... , permite realizar una copia de un array o un objeto sin que se modifique el original
let p = [1, 2, 3];
let q = [4, 5, 6];
let r = [...p, ...q];
console.log('r = ', r); // [1, 2, 3, 4, 5, 6]

// Operador de desestructuración
// permite extraer datos de un array o un objeto
let s = [1, 2, 3];
let [t, u, v] = s; // t = 1, u = 2, v = 3
console.log('t = ', t); // 1
console.log('u = ', u); // 2
console.log('v = ', v); // 3

let w = { x: 1, y: 2, z: 3 };
let { x, y, z } = w; // x = 1, y = 2, z = 3
console.log('x = ', x); // 1
console.log('y = ', y); // 2
console.log('z = ', z); // 3

// Operador de encadenamiento opcional
// ?.
let aa = { bb: { cc: 5 } };
console.log('aa?.bb?.cc = ', aa?.bb?.cc); // 5, devuelve undefined si alguno de los valores es null o undefined
console.log('aa?.dd?.cc = ', aa?.dd?.cc); // undefined
//console.log('aa.dd.cc = ', aa.dd.cc); // TypeError: Cannot read property 'cc' of undefined
