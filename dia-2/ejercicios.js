/* Ejericio 1 */
/* Escribir un script que diga si un número es par o es impar. */
const numero1 = 4;
const numero2 = 5;

if (numero1 % 2 === 0) {
	console.log('El número ' + numero1 + ' es par');
}

if (numero2 % 2 === 0) {
	console.log(`El número ${numero2} es par`);
} else {
	console.log(`El número ${numero2} es impar`);
}

/* Ejericio 2 */
/* Un programa que pida un número y diga si es positivo o negativo. El cero se considera positivo */
let numero3 = parseInt(prompt('Introduce un número'));

if (numero3 >= 0) {
	console.log(`El número ${numero3} es positivo`);
} else {
	console.log(`El número ${numero3} es negativo`);
}

/* Ejericio 3 */
/* Pedir al usuario que elija un numero entre 1 y 4 a ver si acierta el numero que ha elegido la maquina (me tiene que dar un número al azar entre 1 y 4)*/

const numeroMaquina = Math.floor(Math.random() * 4) + 1;
let numeroUsuario = parseInt(prompt('Elige un número entre 1 y 4'));

if (numeroUsuario > 4 || numeroUsuario < 1) {
	console.log('Elige un número entre 1 y 4');
} else if (numeroUsuario === numeroMaquina) {
	console.log(`Has acertado, el número era ${numeroMaquina}`);
} else {
	console.log(`Has fallado, el número era ${numeroMaquina}`);
}

// Anidando los if
if (numeroUsuario >= 1 && numeroUsuario <= 4) {
	if (numeroUsuario === numeroMaquina) {
		console.log(`Has acertado, el número era ${numeroMaquina}`);
	} else {
		console.log(`Has fallado, el número era ${numeroMaquina}`);
	}
} else {
	console.log('Elige un número entre 1 y 4');
}

/* Ejericio 4 */
/* En un restaurante los clientes pueden pedir menú de carne, pescado o verdura. Si pide carne se le ofrecerá como bebida vino tinto, si pide pescado se le ofrecerá vino blanco y si pide verdura se le ofrecerá agua

Si no elije el menú de la lista aparecerá la frase elija carne, pescado o verdura. */

let menu = prompt('Elige un menú: carne, pescado o verdura');

switch (menu) {
	case 'carne':
		console.log('Vino tinto');
		break;
	case 'pescado':
		console.log('Vino blanco');
		break;
	case 'verdura':
		console.log('Agua');
		break;
	default:
		console.log('Elige carne, pescado o verdura');
}

/* Ejericio 5 */
/* En una sala de juegos existen cuatro salas: Consolas, Juegos 2D, Juegos 3D, Realidad Virtual. Si un usuario paga  4 créditos puede acceder a todas, si paga 3 solo podrá acceder a las tres primeras, si paga 2 a las dos primeras y si paga 1 solo a la primera sala. Imprime una frase que indique el nombre de las salas a las que puede acceder el usuario. */
