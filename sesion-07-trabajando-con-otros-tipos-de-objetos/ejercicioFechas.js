/*Crea un archivo llamado fechas.js que contenga las siguientes líneas*/

//La fecha de hoy
const fechaHoy = new Date();

//La fecha de tu nacimiento
const fechaNacimiento = new Date(1981, 7, 10)
//
//- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
const comparar = fechaHoy > fechaNacimiento;
//
//- Una variable que contenga el día de tu nacimiento
const diaNacimiento = fechaNacimiento.getDate();
//
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
const mesNacimiento = fechaNacimiento.getMonth();
//- Una variable que contenga el año de tu nacimiento (con 4 dígitos)
const anioNacimiento = fechaNacimiento.getFullYear();

