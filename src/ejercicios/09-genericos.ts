/*
===== Código de TypeScript =====
*/

// <T> espcificacion que el tipo sera generico
function queTipoSoy<T>(argumento:T) {
    return argumento;
}

let soyString = queTipoSoy('Hola mundo!');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy( [1,2,3] );

let soyExplicito = queTipoSoy<number>(100);
