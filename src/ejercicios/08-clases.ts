/*
===== Código de TypeScript =====
*/

// Clases
// class Heroe {
//     private alterEgo: string;       // Visible solo dentro de la clase
//     public edad: number;            // Visible dentro y fuera de la clase
//     static nombreReal: string;      // Visible sin crear una instancia de la clase
// }

class PersonaNormal {
    constructor (
        public nombre: string,
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {
    constructor( 
        public alterEgo: string,
        public edad?: number // Argumento opcional
    ) {
        super('Tony Stark', 'New York, USA')
    }
}

const ironman = new Heroe('Ironman', 40);

console.log(ironman);
