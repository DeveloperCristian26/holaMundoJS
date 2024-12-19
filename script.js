// Cual es mayor
function cualEsMayor (a,b){
    
    if (a>b){
    
        return a;
    
    }else {
    
        return b;
    
    }
}

let mayor = cualEsMayor(10,5);
alert("el valor mayor es " + mayor);

// resolucion
function nombreResolucion(ancho,alto){
    if (ancho >= 7680 && alto >= 4320){
        return '8K';
    }else if (ancho >= 3840 && alto >= 2160){
        return '4K';
    }else if (ancho >= 2560 && alto >= 1440){
        return 'WQHD';
    }else if (ancho >= 1920 && alto >= 1080){
        return 'FHD';
    }else if (ancho >= 1280 && alto >= 720){
        return 'HD';
    }else{
        return false;
    }

    
}

let nombre = nombreResolucion(1366,768);
alert("la resolucion es de " + nombre);

// Elemento que exista en el array

function getByIdx(arr,idx){

    if(idx<0||arr.legth <= idx){
        return 'Este elemento no existe';
    }
    return arr[idx];

}

let resultado = getByIdx([1,2], 1);
alert("el resultado es " + resultado);

// Numeros impares

let i = 0;

while (i<= 30) {
    if(i%2 !== 0){
        console.log('impar', i);
    }
    i++;
}

// numero menor y mayor de un array

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {
    let menor = arr[0];
    let mayor = arr[0];
    for(numero of arr){
        menor = menor < mumero ? menor: numero;
        mayor = mayor > mumero ? mayor: numero;
    }
    return [menor,mayor];
}

let numeros = getMenorMayor(array)
console.log(numeros);

// numeros positivos en un array

let ray = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let cantidad = 0;
    for (elemento of arr) {
        if (elemento>0) {
            cantidad++;
        }
    }
    return cantidad;
}

let respuesta = cuantosPositivos(ray)
console.log(respuesta);

// producto precio impuesto 

function precioCompleto(precio,impuesto){
    return precio + precio * impuesto;
}

let sale = cuantosPositivos(ray)
console.log(sale);

// devuelve array de pares

let arra = [{
    id:1,
    nombre: "Juan",
}, {
    id:2,
    nombre: "camilo",
}, {
    id:3,
    nombre: "heredero",
}];

let pares =[
    [1, {id:1, nombre:"Juan"}],
    [2, {id:2, nombre:"camilo"}],
    [3, {id:3, nombre:"heredero"}],
]

function toPairs(arr) {
    let pairs = [];
    for(idx in arr){
        let elemento = arr[idx];
        pairs[idx] = [elemento.id,elemento]
    }
    return pairs;
}

let result = toPairs(array);
console.log(result);

// mostrar id y nombre

let pairss =[
    [1, { nombre:"Juan"}],
    [2, { nombre:"camilo"}],
    [3, { nombre:"heredero"}],
]


function toCollection(arr){
    let collection = [];
    for (idx in arr) {
        let elemento = arr[idx];
        collection[idx] = elemento[1]
         collection[idx].id = elemento[0]
    }
    return collection;
}

let resul = toCollection(pairss);
console.log(resul);

// crear array

let longitud = 7;
function crearArray(n) {
    if(n<= 0){
        return [];
    }
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = i + 1;
    }
    return arr;
}

let reul = crearArray(longitud);
console.log(rsul);





