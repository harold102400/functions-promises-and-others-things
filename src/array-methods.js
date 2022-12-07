// metodos de los arrays
const baseArray = ['Primer', 'Segundo2', 'Tercero']
const numberBaseArray = [1, 2, 3]

const forEach = (array) => {
    for(const index in array) {
        const value = array[index]
        console.log(value);
    }
}


// forEach(baseArray)
// baseArray.forEach((value, index, array) => console.log(value))


const map = (array) => {
    const result = []

    for(const index in array){
       const value = array[index]
       result.push('Hola ' + value ) 
    }

    return result
}

// const customers = [{
//     name: 'John',
//     lastname: "Scott"
// }]
// const result1 = map(baseArray)
// const result2 = baseArray.map((value) => { return 'Hola ' + value})
// console.log({ result1, result2 });


// const customersNames = customers.map(customer => {
//     return ({ fullname: customer.name + ' ' + customer.lastname })
// })

// console.log(customersNames);



const find = (array) => {

    for(const index in array){
        const value = array[index]
        if(value === 'Segundo'){
            return value
        }
    }

    return undefined
}

const secondOrUndefined = find(baseArray)
const secondOrUndefined2 = baseArray.find((value) => {
    const trueOrFalse = value === 'Segundo'
    return trueOrFalse
})


console.log({
    secondOrUndefined,
    secondOrUndefined2
});

// Investigar Promise
// crear funcion que devuelva un valor cualquiera despues de 10 segundos
