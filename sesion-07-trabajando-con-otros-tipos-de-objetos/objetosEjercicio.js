/*Crea un archivo llamado objetos.js que contenga las siguientes líneas

- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

- Una variable que obtenga tu edad a partir del objeto anterior

- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s

- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor*/

const datosPersonales = {
    nombre: "Eduardo",
    apellido: "Balbastro",
    edad: 42,
    altura: 1.80,
    eresDesarrollador: true,
}

var miEdad = datosPersonales.edad;

const lista = [
    {
    ...datosPersonales
    },
    {
        nombre: "lisandro",
        apellido: "lorenzon",
        edad: 32,
        altura: 1.80,
        eresDesarrollador: false,
    },
    {
        nombre: "graciela",
        apellido: "cardozo",
        edad: 52,
        altura: 1.60,
        eresDesarrollador: false
    },
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad);

console.log(listaOrdenada);

