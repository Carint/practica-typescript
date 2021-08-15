/*
===== Código de TypeScript =====
*/

interface Pasajero {
  nombre: string;
  hijos?: string[]; // Argumento opcional 
}

const pasajero1: Pasajero = {
  nombre: 'Carlos'
}

const pasajero2: Pasajero = {
  nombre: 'Roxana',
  hijos: ['Rose', 'Natalia']
}

function imprimeHijos(pasajero:Pasajero): void {
  const cuentosHijos = pasajero.hijos?.length || 0; // Evaluacion del argumento opcional

  console.log(cuentosHijos);
}

imprimeHijos(pasajero1);
