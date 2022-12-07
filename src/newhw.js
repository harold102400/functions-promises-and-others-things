
// array methods (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

// Tarea
// Investigar loops (https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
// for ( for in, for of, for normal), while, do while, recursion (ojito, si no lo hacen yo se lo ensenio)
// harold eventListener

// para cada tipo de loop crear una funcion que
// imprima por consola (console.log()) los numeros
// del 1 al 10 usando todos los metodos de loops

// map = tomar algo y cambiarlo por otra cosa = mapear
// objetos - mapas - diccionarios - y clave valor


const forCounter = () => {
    for (let i = 1; i < 11 ; i++) {
        console.log("el resultado es" + i);
    };

}
forCounter();

const forOfCounter = () => {
    const result = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (const counting of result){
        console.log(counting)
    }

    for(const index in result){
        console.log(result[index])
    }

}
forOfCounter(); 

const whileCounter = () => {
    let counting = 0;
    while (counting < 10){
        counting++;
        console.log("el resultado es" + counting)
    }
}


const doWhileCounter = () => {
    let counting = 0;
    do{
        counting++;
        console.log("el resultado es" + counting)
    } while (counting < 10); 
}

// recursion pa despues


