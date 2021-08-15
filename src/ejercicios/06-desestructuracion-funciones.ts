/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Samsung A',
    precio: 200
}

const tableta: Producto = {
    desc: 'Samsung T',
    precio: 400
}

export function calcularISV(productos: Producto[]): [ number, number ] {
    let total = 0;

    // Desestructuracion de argumentos
    productos.forEach( ({ precio }) => {
        total += precio;
    })

    return [ total, total * 0.15 ];
}

// const articulos = [ telefono, tableta ];
// Desestructuracion del arreglo
// const [ total, isv ] = calcularISV(articulos);

// console.log('Total: ', total);
// console.log('ISV: ', isv);
