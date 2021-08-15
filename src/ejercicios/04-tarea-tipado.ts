/*
    ===== Código de TypeScript =====
*/
// TAREA
// Creación de las interfaces

interface Direccion {
    calle: string;
    pais: string;
    ciudad: string;
}

interface HeroeInfo {
    nombre: string;
    edad: number;
    direccion: Direccion;
    mostrarDireccion: () => string
}

const superHeroe: HeroeInfo = {
    nombre: 'Spiderman',
    edad: 30,
    direccion : {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return `${this.nombre}, ${this.direccion.ciudad}, ${this.direccion.pais}`
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log(direccion);