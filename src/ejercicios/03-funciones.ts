/*
    ===== Código de TypeScript =====
*/

// Javascript tradicional
// function sumar(a, b) {
//     return a + b;
// }

// const resultado = sumar('Carlos', ' Interiano');

// Typescript
function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

// Parametros opciones o inicializados con un valor
function multiplicar(numero: number, base: number = 2, otroNumero?: number): number {
    return numero * base;
}

// const otroResultado = multiplicar(1, 2);
// const resultado = sumar(12, 12);

// console.log(otroResultado);
// console.log(resultado);

/*
    EJERCICIO DE CLASE
*/

// Interface de la variable que se trabajara: (Agregado la declaracion de una funcion)
interface CuentaBanco {
    nombre: string;
    banco: string;
    saldo: number;
    mostrarDatos: () => void;
}

// Declaración de los valores en la variable del tipo CuentaBanco
const miCuenta: CuentaBanco = {
    nombre: 'Carlos Interiano',
    banco: 'Occidente',
    saldo: 10,
    mostrarDatos() {
        console.log(`El saldo de la cuenta es ${this.saldo}`);
    }
}

// Función sin un valor de retorno
function cargarSaldo(cuentaBanco: CuentaBanco, saldo: number): void {
    cuentaBanco.saldo += saldo;

    console.log(`El nuevo saldo es: ${cuentaBanco.saldo}`)
}

// Llamado a la funcion cargarSaldo
cargarSaldo(miCuenta, 30);
miCuenta.mostrarDatos();
