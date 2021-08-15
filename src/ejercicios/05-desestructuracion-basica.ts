/*
    ===== Código de TypeScript =====
*/

// Desestructuracion  de Objetos
// ==================================================================
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalle: Detalle;
}

interface Detalle {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalle: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

// console.log(`El volumen actual de: `, reproductor.volumen);
// console.log(`El segundo actual de: `, reproductor.segundo);
// console.log(`La canción actual es: `, reproductor.cancion);
// console.log(`El autor es: `, reproductor.detalle.autor);

// Desestructuracion del Objeto
const { volumen, segundo, cancion, detalle } = reproductor;
const { autor } = detalle;

// En caso de necesitar cambiar el nombre a la propiedad
// const { autor: autorReproductor } = detalle;

console.log(`El volumen actual de: `, volumen);
console.log(`El segundo actual de: `, segundo);
console.log(`La canción actual es: `, cancion);
console.log(`El autor es: `, autor);

// Desestructuracion de un arreglo
// ==================================================================
const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);

// Desestructuracion de un arreglo
// const [p1, p2, p3] = dbz;
const [ , , p3] = dbz;

// console.log('Personaje 1: ', p1);
// console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);
