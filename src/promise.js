// Investigar Promise
// crear funcion que devuelva un valor cualquiera despues de 10 segundos

/* let random = Math.floor( Math.random() * (10 - 5 + 1));
console.log(random) */

const twoFace = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const goodHead = "you are saved";
      const badHead = "you died";
      let random = Math.floor(Math.random() * 10);
      if (random < 5) {
        resolve(goodHead);
      } else {
        reject(badHead);
      }
    }, 10000);
  });
};

// twoFace()
//   .then((goodHead) => console.log(goodHead))
//   .catch((badHead) => console.log(badHead))
//   .finally(() => console.log("This task has finished."));

/* const twoFaces = async () => {
  console.log("Comenze");

  const head = await twoFace().catch((badHead) => badHead);
  console.log(head);

  console.log("This task has finished.");
  console.log("termine");
};

twoFaces(); */

// twoFaces()
//   .then((goodHead) => console.log(goodHead))
//   .catch((badHead) => console.log(badHead))
//   .finally(() => console.log("This task has finished."));

/* function timeFrame(){
    return setTimeout(()=>{
        console.log("This took around 2 secons to showed up")
    },2000)
}

timeFrame(); */

/* const goodHead = "you are saved";
const badHead = "you died"; */

// const twoFace = () => {
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {

//             let random = Math.floor( Math.random() * (10 - 5 + 1)) + 5;
//             if (random < 5){
//                 resolve("sucess")
//             } else {
//                 reject("failed")
//             }
//         }, 2000);
//     })
// }

// twoFace()
//     .then((message) => console.log("you" + message))
//     .catch((message) => console.log("you" + message))
//     .finally(()=> console.log("This task has finished."))

/* const requestPage = async (urls) => {
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  return data;
};

requestPage([
  "https://jsonplaceholder.typicode.com/todos/1",
  "https://jsonplaceholder.typicode.com/todos/2",
]).then((response) => console.log(response)); */

// crear una funcion que reciba un array de urls, y hacer una peticion a cada url
// y devolver el resultado de todas las peticiones

/* const newRequest = async (urls) => {
  let newArr = [];
  const data = await response.json();
  for (let i = 0; i < urls.length; i++) {
    newArr.push(response[i]);

    const response = await fetch(urls);
  }
  console.log(newArr);

  return data;
};

newRequest([
  "https://picsum.photos/id/1/200/300",
  "https://jsonplaceholder.typicode.com/todos/2",
  "https://jsonplaceholder.typicode.com/todos/3",
]); */

/* const testArr = (arr) =>{
  for (let i = 0; i < arr.length; i++){
    console.log(i)
  }
}

testArr([1,2,3,4,5]) */

const fs = require("fs/promises"); // ---> guardar archivo con node
// await fs.writeFile('test.jpg', data.stream()) ---> guardar archivo con node
// 90
const newRequest = async (urls) => {
  const results = [];
  for (const url of urls) {
    console.log('Me estoy ejecutando para ' + url);
    const response = await fetch(url);
    const data = await response.blob(); 
    console.log('Termine para ' + url);
    results.push(data);
  }

  return results;
};

newRequest([
  "https://picsum.photos/id/1/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
]).then((results) => saveFiles(results));

const saveFiles = async (files) => {
  for (const index in files) {
    console.log(`comenze a guardar archivo ${index}`)
    const data = files[index]
    const fullpath = __dirname + `/../images/test_${index}.jpg`
    await fs.writeFile(fullpath, data.stream());
    console.log(`termine de guardas el archivo ${index}`)
  }
};

const newRequestParallel = async (urls = []) => {
  const promises = urls.map(async (url) => {
    console.log('Me estoy ejecutando para ' + url);
    const response = await fetch(url);
    const data = await response.blob();
    console.log('Termine para ' + url);
    return data;
  });

  const results = await Promise.all(promises)

  return results;
};

newRequestParallel([
  "https://picsum.photos/id/1/200/300",
  "https://picsum.photos/200/300?grayscale",
  "https://picsum.photos/id/870/200/300?grayscale&blur=2",
]).then((results) => saveFilesParallel(results));

const saveFilesParallel = async (files) => {
  const finalPromises = files.map(async (data, index) => {
    console.log(`comenze a guardar archivo ${index}`)
    const fullpath = __dirname + `/../images/test_${index}.jpg`;
    await fs.writeFile(fullpath, data.stream());
    console.log(`termine de guardas el archivo ${index}`)
  })

  await Promise.all(finalPromises)
};
