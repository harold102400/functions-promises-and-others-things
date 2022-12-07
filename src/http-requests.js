// HTTP - Hyper Text Tranfer Protocol
// HTTPS - HTTP Secure

// HTTP Method, Url, (Headers y un Body opcinales)
// Metodos

// GET - Obtener informacion del servidor (no tiene body)
// POST - Crear un dato nuevo. enviar informacion al servidor (usa saco de body)
// PUT - Reemplazar un dato con otro nuevo (tiene que mandar todo de nuevo)
// PATCH - Modificar un dato (manda lo que se modifico solamente)
// DELETE - Eliminar un dato ()
// Query Params ?name=${name}&lastname=${lastname}

// Crear una funcion para cada peticion, POST, PUT Y PATCH con un body

// 
// Programacion funcional (funciones) F#
// Programacion orientada a objetos (Clase -> Objeto) Java (Apl, Juegos, Aplicaciones Movibles)
// Multiparadigma - Javascript (Web, Navegador), C# (Aplicaciones de Escritorio, Juegos, Web), Kotlin, PHP (Web), Go, Rust, R, Python (Inteligencia artifical, Manejo de datos)
// El papa de todos (C, C++) Juegos
// 

const documentContainer = document.body;

const get = () => {
   fetch("https://pokeapi.co/api/v2/pokemon/pikachu", {
    method: 'GET'
   })
    .then((response) => response.json())
    .then((data) => createImg(data)) 
    .then ((htmlElements) => documentContainer.append(htmlElements)) 
    .catch((error) => console.log("Esto es un error", error))
    
}

get();

const createImg = (src) =>{
    const img = document.createElement("img");
    img.src = src.sprites.back_default;
    return img;
}

const createNewData = () =>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'Harold',
            lastname: 'Montes'
        })
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((error) => console.log("ERROR!"))
}
 
createNewData();

const replaceNewEle = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            body: 'I changed this body',
            id: '2',
            title: 'This is the title',
            userId: '2'
        })

    })
        .then((res) => res.json())
        .then((data) => console.log("Here you can see the changed on the 1st object", data))
        .catch((error) => console.log("ERROR!"))
}

replaceNewEle()

//body: I changed this body 
//id: 2
//title: This is the title
//userId: 2


const replaceEle = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'PUT',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            body: 'I only changed this body',
        })

    })
        .then((res) => res.json())
        .then((data) => console.log("Here you can see the changed on the 2nd object", data))
        .catch((error) => console.log("ERROR!"))
}

replaceEle()


const deleteDataFromApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: 'DELETE',
    })
        .then((res) => res.json())
        .then((data) => console.log("Here you can see the changed on the 3rd object", data))
}

deleteDataFromApi()