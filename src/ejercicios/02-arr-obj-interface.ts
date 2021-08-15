/*
    ===== Código de TypeScript =====
*/

// Arreglos 
// ===============================================
let habilidades: string[] = ['Palabra 1', 'Palabra 2', 'Palabra 3'];
let habilidades2: (boolean | string | number) [] = ['Palabra 1', 'Palabra 2', 3];

habilidades2.push(false);

// Objetos 
// ===============================================
// Para trabajar con los objetos se utilizan las interfaces
interface Personaje {
    nombreCompleto: string;
    edad: number;
    bienes: string[];
    profesion?: string;
}

const personaje: Personaje = {
    nombreCompleto: 'Roberto Alvarado',
    edad: 22,
    bienes: ['Palabra 1', 'Palabra 2', 'Palabra 3']
}

personaje.profesion = 'Contador';

console.table( personaje );

// Apuntes de la clase:
// - El tipo any se debe de evitar a toda costa.
