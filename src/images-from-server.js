// https://picsum.photos/v2/list
// hacer una peticion a la url de arriba, y recorrer la respuesta, y agregar una imagen a index.html por cada objeto de la respuesta de al tiene que ponerle el author y de src el url, hacer todoas las peticiones al mismo tiempo

// petiticion => crear una image => ponerle las propiedades => agregar al html

const imgOnHtml = document.body;
const serverRequest = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

//   createImg(dataInfo[0][0].download_url, dataInfo[0][0].author);
serverRequest("https://picsum.photos/v2/list")
  .then((data) => mapDataToImages(data))
  .then((htmlImages) => {
    imgOnHtml.append(...htmlImages)
    console.log("esto es un array", htmlImages)
  });
  

const createImg = (pic, author) => {
  const newImg = document.createElement("img");
  newImg.style.height = "200px";
  newImg.style.aspectRatio = "auto";
  newImg.alt = author;
  newImg.src = pic;
  newImg.loading = "lazy";
  return newImg;
};

const mapDataToImages = (images) => {
  return images.map((image) => createImg(image.download_url, image.author));
};

//   imgOnHtml.append(newImg);

/* const imgOnHtml = document.body;
console.log(imgOnHtml) */

/* const serverRequest = async (urls) =>{
    const dataInfo = [];
    for(const index in urls){
        const response = await fetch(index);
        const data = await response.json();
        dataInfo.push(data)
        console.log(index)
        console.log(data)
    }
    
    /* const newImg = document.createElement("img")
    newImg.src = `${dataInfo[0][0].download_url}`;
    imgOnHtml.append(newImg)

}


/* serverRequest(["https://picsum.photos/v2/list"]);  */
