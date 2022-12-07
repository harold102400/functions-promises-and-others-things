/* const getForm = document.querySelector('#formid')
const getUl = document.querySelector('#todo-list')
const getInput = document.querySelector('#formid, input[name="jarol"]' )
const getButton = document.querySelector('#boton')

const createButton = document.createElement('button')
createButton.type = 'submit'
createButton.textContent = 'hola'
getForm.appendChild(createButton)


createButton.addEventListener("mouseover", ()=> {
    createButton.setAttribute("style", "background-color:blue;")
})

createButton.addEventListener("mouseleave", ()=>{
    createButton.removeAttribute("style", "background-color:blue;")
})




const fancyText = document.createElement("h2");
getForm.before(fancyText);
fancyText.textContent = "Task form2";

const fancyText1 = document.createElement("h2");
getUl.before(fancyText1);
fancyText1.textContent = "Todo list";
fancyText1.style.color = "blue";

const input = document.createElement("input");
getForm.appendChild(input);
input.type = "date";
input.value = ' 2022-11-27'
// input.value = new Date().toLocaleString({day: "2-digit", month: "short", year: "numeric"});
console.log(input.value);
 */



/* const formContainer1 = document.getElementById('#form-container');

function createForm({inputs }){
    const formContainer = document.createElement("button");
    formContainer1.prepend(formContainer);
     //({[inputText, inputButton] } = inputs);
    const inputText = document.createElement("input");
    formContainer.append(inputText);
    const inputButton = document.createElement("input");
    formContainer.append(inputButton);
    const deliverybutton = document.createElement("button");
    formContainer.appendChild(deliverybutton);
    deliverybutton.innerText = "enviar";
    //deliverybutton.addEventListener("submit",(onSubmit) => {console.log("yo hice click aqui")});
    return formContainer;
}

const newVar = createForm({inputs: [inputText, inputButton]}); */
// ... SPREAD y REST operator
// Side Effect => son malo
// array methods (https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array)

// Tarea
// Investigar loops (https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Loops_and_iteration)
// for ( for in, for of, for normal), while, do while, recursion (ojito, si no lo hacen yo se lo ensenio)
// harold eventListener

// para cada tipo de loop crear una funcion que
// imprima por consola (console.log()) los numeros
// del 1 al 10 usando todos los metodos de loops

const formContainer = document.querySelector("#form-container");
const inputButton = document.createElement("input");
const inputText = document.createElement("input");

const createdForm = createForm({
    value: "ENVIAR",  
    onSubmit: () => console.log("tu eres un mamaguebo"), 
    inputs: [inputText, inputButton]
});
const otherForm = createForm({ 
    value: "DESENVIAR", 
    onSubmit: ()=> console.log("tu eres un mamaguebAZO"), 
    inputs: [document.createElement("input"), document.createElement("input")]  
});
const anotherForm = createForm({ 
    value: "CARGAR", 
    onSubmit: ()=> console.log("tu eres un mamaguebAZAZAZO"), 
    inputs: [document.createElement("input"), document.createElement("select")]  
});


const createForm = ({ value, onSubmit, inputs = []}) => {
    const form = document.createElement("form");
    // formContainer.append(form)
    form.append(...inputs);

    const deliverybutton = document.createElement("button");
    form.appendChild(deliverybutton);
    form.style = "gray";
    deliverybutton.type = "submit";
    // los botones tipos buton (type = 'button') no hacen submit
    deliverybutton.innerText = value;
    const eventHandler = (e) => {
        e.preventDefault()
        onSubmit(e)
    }
    form.addEventListener("submit", eventHandler)
    /* deliverybutton.addEventListener("submit", (e) => {
        e.preventDefault();
        onSubmit();
    }) */

    
    // inputs = harold;

    // const inputs = [inputText, inputButton];

    // console.log(inputs)

    return form;
}

/* 
    const arr = [2, 4, 6, 8];
    const [firstButton, secondButton, thirdButton] = arr;
    console.log(thirdButton);

 */

// tarea 3
// crear un funcion con argumentos nombrados, que cree un formulario, 
// que le ponga los inputs que reciba por argumento, 
// le agregue un boton que diga enviar,
// y que le ponga un event listerner al evento submit


