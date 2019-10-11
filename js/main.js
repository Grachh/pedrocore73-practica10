// Tipos de datos
// Primitivos
// String

var nombre = 'Juan'; // dobles, simples ó backsticks ``

// Number

var puntuacion = 9.45

// Boolean

var aprobado = false // true o false

// Null

var domicilio = null; 

// Undefined

var localidad;

console.log(typeof nombre);
console.log(typeof puntuacion);
console.log(typeof aprobado);
console.log(typeof domicilio);
console.log(typeof localidad);

// Tipado dinámico

var resultado = 9; // Inferencia de tipos
resultado = 'ocho';
console.log(typeof resultado);

// Type coercion 

var texto = 'El resultado es ';
var nota = 9;

var mensaje = texto + nota;
console.log(mensaje);

var porcentaje = '90';
var cociente = porcentaje / 100;
console.log(cociente);

var porcNumero = Number(porcentaje);
console.log(typeof porcNumero);

var notaString = String(nota);
console.log(typeof notaString);

// Arrays o arreglos

var frutas = ['manzana','pera','platano']; // Elementos de cualquier tipo

var verduras = new Array('berenjena','apio','¿lechuga?');

console.log(typeof verduras);
console.log(frutas[1]); //Indexado a cero

// Objetos

// Literal de objeto

var jugador1 = {
    nombre: 'Cristiano Ronaldo', 
    apellidos: 'dos Santos Aveiro',
    dorsal: 7,
    goles: 0
}

console.log(jugador1.nombre); // Notación del punto

jugador1.dorsal = 9;

console.log(jugador1.dorsal);

// new Object()

var jugador2 = new Object();

jugador2.nombre = 'Lionel';
jugador2.apellidos = 'Messi';
jugador2.dorsal = 10;
jugador2.goles = 0;

console.log(jugador2.apellidos);

// Función constructora

function Jugador(nombre, apellidos, dorsal, goles) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.dorsal = dorsal;
    this.goles = goles;
    this.sumaGol = function () {
        this.goles++;
        alert('Gooool!');
    }
}

jugador3 = new Jugador('Sergio','Ramos',4,0);

console.log(jugador3.nombre);

jugador3.sumaGol();
console.log(jugador3.goles);


